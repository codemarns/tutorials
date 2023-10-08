export const containerStyles = {
  base: "min-h-full bg-white border border-default-100/60 rounded-lg",
  header: {
    base: "flex-1 h-14 px-4 flex items-center gap-1 border-b border-default-100/60",
    title: "text-xl font-bold",
  },
  content: {
    base: "flex-1 h-[calc(100%-3.5rem)] py-4 pl-4 overflow-x-hidden overflow-y-auto",
  },
};

export const sidebarStyles = {
  ...containerStyles,
  img: "w-12 h-12",
  title: {
    code: "leading-none text-success",
    marns: "leading-none",
  },
};
