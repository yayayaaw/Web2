import React, { useState } from 'react';

const ADMIN_PASSWORD = 'admin123'; // TODO: ganti password ini
const AUTH_KEY = 'sw_admin_auth';

export function isAdminAuthed() {
  return sessionStorage.getItem(AUTH_KEY) === '1';
}

export const AdminLogin: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, '1');
      onSuccess();
    } else {
      setError('Password salah.');
    }
  };

  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center px-6">
      <form onSubmit={submit} className="w-full max-w-xs">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-4 h-4 border border-white"></div>
          <span className="text-white font-bold text-sm tracking-tight uppercase">Admin Cafe</span>
        </div>
        <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2 block">Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full bg-transparent border-b border-gray-600 text-white py-2 text-sm focus:outline-none focus:border-white mb-2"
          autoFocus
        />
        {error && <p className="text-red-400 text-xs mb-4">{error}</p>}
        <button type="submit" className="w-full bg-white text-[#111] py-3 text-[10px] uppercase tracking-widest font-bold mt-6 hover:bg-gray-200 transition-colors">
          Masuk
        </button>
        <p className="text-gray-500 text-[10px] mt-6 leading-relaxed">
          Prototipe: password default "admin123", ganti di src/admin/AdminLogin.tsx sebelum dipakai beneran.
        </p>
      </form>
    </div>
  );
};
