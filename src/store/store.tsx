import { create } from "zustand"

export const useDay = create((set) => ({
    day: {},
    addDay: (newDay) => set({ day: newDay })
}))
