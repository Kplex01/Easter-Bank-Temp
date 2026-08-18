import { create } from 'zustand';
import { ProductCardData } from '../types';

interface UIStoreState {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  isLoginOpen: boolean;
  isApplyOpen: boolean;
  isLocationOpen: boolean;
  isHelpOpen: boolean;
  isRatesOpen: boolean;
  isRoutingOpen: boolean;
  setLoginOpen: (isOpen: boolean) => void;
  setApplyOpen: (isOpen: boolean) => void;
  setLocationOpen: (isOpen: boolean) => void;
  setHelpOpen: (isOpen: boolean) => void;
  setRatesOpen: (isOpen: boolean) => void;
  setRoutingOpen: (isOpen: boolean) => void;
  selectedProduct: ProductCardData | null;
  setSelectedProduct: (product: ProductCardData | null) => void;
}

export const useUIStore = create<UIStoreState>((set) => ({
  activeCategory: 'Personal',
  setActiveCategory: (category) => set({ activeCategory: category }),
  isLoginOpen: false,
  isApplyOpen: false,
  isLocationOpen: false,
  isHelpOpen: false,
  isRatesOpen: false,
  isRoutingOpen: false,
  setLoginOpen: (isOpen) => set({ isLoginOpen: isOpen }),
  setApplyOpen: (isOpen) => set({ isApplyOpen: isOpen }),
  setLocationOpen: (isOpen) => set({ isLocationOpen: isOpen }),
  setHelpOpen: (isOpen) => set({ isHelpOpen: isOpen }),
  setRatesOpen: (isOpen) => set({ isRatesOpen: isOpen }),
  setRoutingOpen: (isOpen) => set({ isRoutingOpen: isOpen }),
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));
