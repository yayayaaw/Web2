const ANALYTICS_KEY = 'sw_analytics_v1';
const SESSION_KEY = 'sw_analytics_session';

interface AnalyticsStore {
  visitsByDay: Record<string, number>;
  pageViewsByDay: Record<string, number>;
}

function loadStore(): AnalyticsStore {
  try {
    const raw = localStorage.getItem(ANALYTICS_KEY);
    if (!raw) return { visitsByDay: {}, pageViewsByDay: {} };
    return JSON.parse(raw);
  } catch {
    return { visitsByDay: {}, pageViewsByDay: {} };
  }
}

function saveStore(store: AnalyticsStore) {
  localStorage.setItem(ANALYTICS_KEY, JSON.stringify(store));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export function trackPageView() {
  const store = loadStore();
  const key = todayKey();
  store.pageViewsByDay[key] = (store.pageViewsByDay[key] || 0) + 1;
  saveStore(store);
}

export function trackVisitOncePerSession() {
  if (sessionStorage.getItem(SESSION_KEY)) return;
  sessionStorage.setItem(SESSION_KEY, '1');
  const store = loadStore();
  const key = todayKey();
  store.visitsByDay[key] = (store.visitsByDay[key] || 0) + 1;
  saveStore(store);
}

export interface DailyPoint { date: string; visits: number; pageViews: number; }

export function getLastNDays(n: number): DailyPoint[] {
  const store = loadStore();
  const points: DailyPoint[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    points.push({ date: key, visits: store.visitsByDay[key] || 0, pageViews: store.pageViewsByDay[key] || 0 });
  }
  return points;
}

export interface MonthlyPoint { month: string; visits: number; pageViews: number; }

export function getLastNMonths(n: number): MonthlyPoint[] {
  const store = loadStore();
  const points: MonthlyPoint[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setMonth(d.getMonth() - i);
    const monthKey = d.toISOString().slice(0, 7);
    let visits = 0;
    let pageViews = 0;
    Object.entries(store.visitsByDay).forEach(([day, count]) => { if (day.startsWith(monthKey)) visits += count; });
    Object.entries(store.pageViewsByDay).forEach(([day, count]) => { if (day.startsWith(monthKey)) pageViews += count; });
    points.push({ month: monthKey, visits, pageViews });
  }
  return points;
}

export function getTotals() {
  const store = loadStore();
  const totalVisits = Object.values(store.visitsByDay).reduce((a, b) => a + b, 0);
  const totalPageViews = Object.values(store.pageViewsByDay).reduce((a, b) => a + b, 0);
  return { totalVisits, totalPageViews };
}

export function resetAnalytics() {
  saveStore({ visitsByDay: {}, pageViewsByDay: {} });
}
