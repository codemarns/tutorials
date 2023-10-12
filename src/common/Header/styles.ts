export const headerStyles = {
  base: "flex-1 px-4 flex items-center justify-between border-b layout-borders",
  logo: {
    base: "flex items-center gap-2",
    img: "w-12 h-12",
    name: {
      base: "text-2xl font-semibold select-none",
      code: "leading-none text-success",
      name: "leading-none text-default-700",
    },
  },
  actions: {
    base: "flex items-center gap-1",
    item: {
      base: "group cursor-pointer relative w-12 h-12 p-1 flex items-center justify-center rounded-full transition-all",
      icon: "w-6 h-6 group-hover:stroke-success-700 group-hover:rotate-6 group-hover:scale-110 transition-all",
    },
  },
};
