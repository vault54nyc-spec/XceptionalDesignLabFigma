import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

interface SelectedService {
  id: string;
  name: string;
  category: string;
}

interface ServicesCartContextType {
  selectedServices: SelectedService[];
  addService: (service: SelectedService) => void;
  removeService: (id: string) => void;
  clearCart: () => void;
  isServiceSelected: (id: string) => boolean;
  totalServices: number;
}

const STORAGE_KEY = "xdl-services-cart";

const ServicesCartContext = createContext<ServicesCartContextType | undefined>(
  undefined
);

function loadCartFromStorage(): SelectedService[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // Silently fail — localStorage might be unavailable
  }
  return [];
}

function saveCartToStorage(services: SelectedService[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
  } catch {
    // Silently fail
  }
}

export function ServicesCartProvider({ children }: { children: ReactNode }) {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>(
    loadCartFromStorage
  );

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    saveCartToStorage(selectedServices);
  }, [selectedServices]);

  const addService = useCallback((service: SelectedService) => {
    setSelectedServices((prev) => {
      if (prev.some((s) => s.id === service.id)) return prev;
      return [...prev, service];
    });
  }, []);

  const removeService = useCallback((id: string) => {
    setSelectedServices((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setSelectedServices([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Silently fail
    }
  }, []);

  const isServiceSelected = useCallback(
    (id: string) => {
      return selectedServices.some((s) => s.id === id);
    },
    [selectedServices]
  );

  return (
    <ServicesCartContext.Provider
      value={{
        selectedServices,
        addService,
        removeService,
        clearCart,
        isServiceSelected,
        totalServices: selectedServices.length,
      }}
    >
      {children}
    </ServicesCartContext.Provider>
  );
}

export function useServicesCart() {
  const context = useContext(ServicesCartContext);
  if (!context) {
    throw new Error("useServicesCart must be used within ServicesCartProvider");
  }
  return context;
}
