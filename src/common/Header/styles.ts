export const headerStyles = {
  base: "flex-1 flex items-center justify-between",
  logo: {
    base: "flex items-center gap-2",
    img: "w-14 h-14",
    name: {
      base: "text-2xl font-bold select-none",
      code: "leading-none text-success",
      name: "leading-none text-default-700",
    },
  },
  actions: {
    base: "flex items-center gap-3",
    item: {
      base: "relative w-10 h-10 p-1 border hover:scale-110 rounded-full transition-all",
      color: {
        success: "bg-success-50 border-success-200 hover:border-success-300",
        primary: "bg-primary-50 border-primary-200 hover:border-primary-300",
        secondary: "bg-secondary-50 border-secondary-200 hover:border-secondary-300 ",
      },
    },
  },
};
