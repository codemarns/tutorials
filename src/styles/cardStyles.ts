export const cardStyles = {
  card: {
    base: "rounded-lg",
    header: {
      base: "flex-1 h-12 px-4 flex items-center justify-between border-b border-default-100/50 dark:border-default-900/50",
      title: {
        base: "text-lg font-semibold",
      },
      actions: {
        base: "flex items-center gap-2",
        item: {
          base: "w-9 h-9 bg-default-50 border-default-100 rounded-full",
        },
      },
    },
    content: {
      base: "flex-1  py-4 pl-4 overflow-x-hidden overflow-y-auto",
    },
  },
};
