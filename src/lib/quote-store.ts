import { create } from "zustand";
import { persist } from "zustand/middleware";

export type QuoteLine = {
  id: string;
  name: string;
  family: string;
};

type QuoteState = {
  lines: QuoteLine[];
  toggle: (line: QuoteLine) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useQuote = create<QuoteState>()(
  persist(
    (set, get) => ({
      lines: [],
      toggle: (line) => {
        const has = get().lines.some((item) => item.id === line.id);
        set({
          lines: has
            ? get().lines.filter((item) => item.id !== line.id)
            : [...get().lines, line],
        });
      },
      remove: (id) => set({ lines: get().lines.filter((item) => item.id !== id) }),
      clear: () => set({ lines: [] }),
    }),
    { name: "dzinduserv-devis", skipHydration: true },
  ),
);
