export const headerStyles = {
  header: {
    base: "flex-1 px-4 flex items-center justify-between border-b border-default-100/50 dark:border-default-900/50",
    logo: {
      base: "flex items-center gap-1",
      img: {
        base: "w-12 h-12",
      },
      name: {
        base: "text-2xl font-semibold select-none",
        span: {
          code: "leading-none text-success",
          marns: "leading-none text-default-700",
        },
      },
    },
    actions: {
      base: "flex items-center gap-1",
      element: {
        base: "group cursor-pointer outline-none relative w-10 h-10 p-1 flex items-center justify-center rounded-full",
        icon: {
          base: "w-5 h-5 group-hover:stroke-success-700 transition-all",
          active: "stroke-success",
        },
      },
    },
  },
};
