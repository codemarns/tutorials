import { gradientStyles } from "../shared/gradientStyles";

export const homeStyles = {
  home: {
    base: "tracking-wide px-2 space-y-12",
    section: {
      hero: {
        base: "w-full h-[300px] flex items-center justify-center bg-gradient-to-br rounded-xl",
        ...gradientStyles.background,
        img: {
          base: "w-96",
        },
      },
      welcome: {
        base: "w-full flex flex-col gap-8",
        title: {
          base: "inline-block self-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r",
          ...gradientStyles.text,
        },
        items: {
          base: "",
        },
      },
      whatSetsUsApart: {
        base: "w-full flex flex-col gap-8",
        title: {
          base: "inline-block self-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r",
          ...gradientStyles.text,
        },
        items: {
          base: "grid grid-cols-[repeat(auto-fit,_minmax(325px,_1fr))] gap-6",
          item: {
            base: "block p-8 space-y-5 rounded-xl bg-gradient-to-br",
            ...gradientStyles.background,
            title: {
              base: "block text-xl font-bold",
            },
            description: {
              base: "!mt-4",
            },
          },
        },
      },
      endMessage: {
        base: "relative w-full h-[300px] p-8 flex items-center justify-center rounded-xl",
        dark: "dark:bg-default-900/30",
        light: "bg-info-50",
        icon: {
          base: "absolute top-8 left-8 !w-20 !h-20",
        },
        description: {
          base: "max-w-3xl text-center",
        },
      },
    },
  },
};
