import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { CMSData, SiteSettings, FeaturedMenuItem, MenuCategory, GalleryImage, Review, JobOpening } from '../types';
import { DEFAULT_DATA } from '../data/defaultData';

const STORAGE_KEY = 'sw_cms_data_v1';

interface CMSContextValue {
  data: CMSData;
  updateSettings: (patch: Partial<SiteSettings>) => void;
  setFeaturedMenu: (items: FeaturedMenuItem[]) => void;
  setMenuCategories: (cats: MenuCategory[]) => void;
  setGallery: (imgs: GalleryImage[]) => void;
  setReviews: (reviews: Review[]) => void;
  deleteReview: (id: number) => void;
  setJobs: (jobs: JobOpening[]) => void;
  resetToDefaults: () => void;
  exportJSON: () => string;
  importJSON: (json: string) => boolean;
}

const CMSContext = createContext<CMSContextValue | null>(null);

function loadData(): CMSData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_DATA;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_DATA,
      ...parsed,
      settings: { ...DEFAULT_DATA.settings, ...(parsed.settings || {}) },
    };
  } catch {
    return DEFAULT_DATA;
  }
}

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<CMSData>(loadData);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateSettings = useCallback((patch: Partial<SiteSettings>) => {
    setData(prev => ({ ...prev, settings: { ...prev.settings, ...patch } }));
  }, []);

  const setFeaturedMenu = useCallback((items: FeaturedMenuItem[]) => {
    setData(prev => ({ ...prev, featuredMenu: items }));
  }, []);

  const setMenuCategories = useCallback((cats: MenuCategory[]) => {
    setData(prev => ({ ...prev, menuCategories: cats }));
  }, []);

  const setGallery = useCallback((imgs: GalleryImage[]) => {
    setData(prev => ({ ...prev, gallery: imgs }));
  }, []);

  const setReviews = useCallback((reviews: Review[]) => {
    setData(prev => ({ ...prev, reviews }));
  }, []);

  const deleteReview = useCallback((id: number) => {
    setData(prev => ({ ...prev, reviews: prev.reviews.filter(r => r.id !== id) }));
  }, []);

  const setJobs = useCallback((jobs: JobOpening[]) => {
    setData(prev => ({ ...prev, jobs }));
  }, []);

  const resetToDefaults = useCallback(() => {
    setData(DEFAULT_DATA);
  }, []);

  const exportJSON = useCallback(() => JSON.stringify(data, null, 2), [data]);

  const importJSON = useCallback((json: string) => {
    try {
      const parsed = JSON.parse(json);
      setData({ ...DEFAULT_DATA, ...parsed, settings: { ...DEFAULT_DATA.settings, ...(parsed.settings || {}) } });
      return true;
    } catch {
      return false;
    }
  }, []);

  return (
    <CMSContext.Provider
      value={{
        data, updateSettings, setFeaturedMenu, setMenuCategories,
        setGallery, setReviews, deleteReview, setJobs,
        resetToDefaults, exportJSON, importJSON,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export function useCMS() {
  const ctx = useContext(CMSContext);
  if (!ctx) throw new Error('useCMS must be used inside CMSProvider');
  return ctx;
                                                       }
