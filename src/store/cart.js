import { create } from 'zustand';

export const useCartStore = create((set) => ({
  desserts: [],
  addDessert: (name, category, price, quantity) => set((state) => ({
    desserts: [...state.desserts,
    {
      name,
      category,
      price,
      quantity
    }]
  })),
  increaseQuantityDessert: (name) => set((state) => ({
    desserts: state.desserts.map((dessert) =>
      dessert.name === name
        ? { ...dessert, quantity: dessert.quantity + 1 }
        : dessert
    )
  })),
  decrementQuantityDessert: (name) => set((state) => ({
    desserts: state.desserts.map((dessert) =>
      dessert.name === name
        ? { ...dessert, quantity: dessert.quantity - 1 }
        : dessert
    )
  })),
  removeDessert: (dessertToBeRemoved) => set((state) => ({
    desserts: state.desserts.filter((dessert) => dessert !== dessertToBeRemoved)
  })),
}));