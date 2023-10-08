export const cardStyles = {
  base: "backdrop-blur-md bg-white/50 rounded-lg",
  header: {
    base: "flex-1 h-12 px-4 flex items-center justify-between border-b border-default-100/60",
    title: "text-lg font-semibold",
    actions: {
      base: "flex items-center gap-2",
      item: "w-9 h-9 bg-default-50 border-default-100 rounded-full",
    },
  },
  content: {
    base: "flex-1 h-[calc(100%-3rem)] py-4 pl-4 overflow-x-hidden overflow-y-auto",
  },
};
