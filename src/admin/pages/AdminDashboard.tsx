import React, { useMemo } from 'react';
import { getLastNDays, getLastNMonths, getTotals } from '../../lib/analytics';

const MONTHS_ID = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

export const AdminDashboard: React.FC = () => {
  const daily = useMemo(() => getLastNDays(14), []);
  const monthly = useMemo(() => getLastNMonths(6), []);
  const totals = useMemo(() => getTotals(), []);

  const maxDaily = Math.max(1, ...daily.map(d => d.visits));
  const maxMonthly = Math.max(1, ...monthly.map(m => m.visits));

  const handlePrint = () => window.print();

  return (
    <div>
      <div className="flex items-center justify-between mb-8 print:hidden">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-xs text-gray-500 mt-1">Statistik kunjungan situs (dihitung dari browser pengunjung).</p>
        </div>
        <button
          onClick={handlePrint}
          className="text-[10px] uppercase tracking-widest font-bold border border-[#111] px-5 py-3 hover:bg-[#111] hover:text-white transition-colors"
        >
          Cetak / Simpan PDF
        </button>
      </div>

      <div id="print-report">
        <div className="hidden print:block mb-8">
          <h1 className="text-2xl font-bold">Laporan Kunjungan — Sweater Weather Coffee</h1>
          <p className="text-xs text-gray-500">Dicetak pada {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatCard label="Total Kunjungan" value={totals.totalVisits} />
          <StatCard label="Total Page View" value={totals.totalPageViews} />
          <StatCard label="Kunjungan Hari Ini" value={daily[daily.length - 1]?.visits ?? 0} />
          <StatCard label="Bulan Ini" value={monthly[monthly.length - 1]?.visits ?? 0} />
        </div>

        <div className="mb-12">
          <h2 className="text-[11px] uppercase tracking-widest font-bold text-gray-400 mb-4">Kunjungan 14 Hari Terakhir</h2>
          <div className="flex items-end gap-2 h-40 border-b border-gray-200 pb-1">
            {daily.map(d => (
              <div key={d.date} className="flex-1 flex flex-col items-center justify-end h-full">
                <div
                  className="w-full bg-[#111] min-h-[2px]"
                  style={{ height: `${(d.visits / maxDaily) * 100}%` }}
                  title={`${d.date}: ${d.visits} kunjungan`}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-2">
            {daily.map(d => (
              <div key={d.date} className="flex-1 text-center text-[9px] text-gray-400">
                {d.date.slice(8, 10)}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-[11px] uppercase tracking-widest font-bold text-gray-400 mb-4">Kunjungan 6 Bulan Terakhir</h2>
          <div className="flex items-end gap-4 h-40 border-b border-gray-200 pb-1">
            {monthly.map(m => (
              <div key={m.month} className="flex-1 flex flex-col items-center justify-end h-full">
                <div
                  className="w-full bg-[#111] min-h-[2px]"
                  style={{ height: `${(m.visits / maxMonthly) * 100}%` }}
                  title={`${m.month}: ${m.visits} kunjungan`}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-2">
            {monthly.map(m => (
              <div key={m.month} className="flex-1 text-center text-[9px] text-gray-400">
                {MONTHS_ID[parseInt(m.month.slice(5, 7), 10) - 1]}
              </div>
            ))}
          </div>
        </div>

        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="border-b border-[#111]">
              <th className="text-left py-2 font-bold uppercase tracking-widest text-[10px] text-gray-400">Bulan</th>
              <th className="text-right py-2 font-bold uppercase tracking-widest text-[10px] text-gray-400">Kunjungan</th>
              <th className="text-right py-2 font-bold uppercase tracking-widest text-[10px] text-gray-400">Page View</th>
            </tr>
          </thead>
          <tbody>
            {monthly.map(m => (
              <tr key={m.month} className="border-b border-gray-100">
                <td className="py-2">{MONTHS_ID[parseInt(m.month.slice(5, 7), 10) - 1]} {m.month.slice(0, 4)}</td>
                <td className="py-2 text-right font-medium">{m.visits}</td>
                <td className="py-2 text-right font-medium">{m.pageViews}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[10px] text-gray-400 mt-8 print:hidden leading-relaxed">
        Catatan: karena prototipe ini pakai localStorage, data kunjungan hanya tercatat dari browser/perangkat yang dipakai mengunjungi situs, bukan data global semua pengunjung.
      </p>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="border border-gray-200 p-5">
    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">{label}</p>
    <p className="text-2xl font-bold tracking-tight">{value}</p>
  </div>
);
