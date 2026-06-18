"use client";

import ContentBox from "@/components/ContentBox";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import { styles } from "./styles";
const components = {
  nav: NavBar,
  contentBox: ContentBox,
};
const jsonLayout1 = {
  screenName: "home",
  version: 1,
  components: [
    {
      compName: "NAV",
      version: 1,
      type: "nav",
      props: {
        title: "This is Nav bar",
      },
      cssProps: "row-span-1 col-span-9 text-center",
    },
    // {
    //   compName: "Middle",
    //   version: 1,
    //   type: "contentBox",
    //   props: {},
    //   cssProps: "col-span-9 row-span-4",
    //   components: [

    {
      compName: "Left_Section",
      version: 1,
      type: "contentBox",
      props: {},
      cssProps: "row-span-4 col-span-3 text-center overflow-y-scroll",
      components: [
        {
          compName: "div1",
          type: "contentBox",
          props: {
            content: "div1",
          },
          cssProps: "h-1/2",
        },
        {
          compName: "div2",
          type: "contentBox",
          props: {
            content: "div2",
          },
          cssProps: "h-1/2",
        },
        {
          compName: "div3",
          type: "contentBox",
          props: {
            content: "div3",
          },
          cssProps: "h-1/2",
        },
        {
          compName: "div4",
          type: "contentBox",
          props: {
            content: "div4",
          },
          cssProps: "h-1/2",
        },
        {
          compName: "div5",
          type: "contentBox",
          props: {
            content: "div5",
          },
          cssProps: "h-1/2",
        },
        {
          compName: "div6",
          type: "contentBox",
          props: {
            content: "div6",
          },
          cssProps: "h-1/2",
        },
        {
          compName: "div7",
          type: "contentBox",
          props: {
            content: "div7",
          },
          cssProps: "h-1/2",
        },
        {
          compName: "div8",
          type: "contentBox",
          props: {
            content: "div8",
          },
          cssProps: "h-1/2",
        },
        {
          compName: "div9",
          type: "contentBox",
          props: {
            content: "div9",
          },
          cssProps: "h-1/2",
        },
      ],
    },
    {
      compName: "Hero",
      version: 1,
      type: "contentBox",
      props: {
        title: "Title",
        content: "Content",
      },
      cssProps:
        "flex items-center flex-col justify-center col-span-3 row-span-4 text-center",
    },
    {
      compName: "Right_Section",
      version: 1,
      type: "contentBox",
      props: {},
      cssProps: " row-span-4 col-span-3 text-center overflow-y-hidden",
      components: [
        {
          compName: "div1",
          type: "contentBox",
          props: {
            content: "div1",
          },
          cssProps: "h-1/2",
        },
        {
          compName: "div2",
          type: "contentBox",
          props: {
            content: "div2",
          },
          cssProps: "h-1/2",
        },
        {
          compName: "div3",
          type: "contentBox",
          props: {
            content: "div3",
          },
          cssProps: "h-1/2",
        },
        {
          compName: "div4",
          type: "contentBox",
          props: {
            content: "div4",
          },
          cssProps: "h-1/2",
        },
        {
          compName: "div5",
          type: "contentBox",
          props: {
            content: "div5",
          },
          cssProps: "h-1/2",
        },
        {
          compName: "div6",
          type: "contentBox",
          props: {
            content: "div6",
          },
          cssProps: "h-1/2",
        },
        {
          compName: "div7",
          type: "contentBox",
          props: {
            content: "div7",
          },
          cssProps: "h-1/2",
        },
        {
          compName: "div8",
          type: "contentBox",
          props: {
            content: "div8",
          },
          cssProps: "h-1/2",
        },
        {
          compName: "div9",
          type: "contentBox",
          props: {
            content: "div9",
          },
          cssProps: "h-1/2",
        },
      ],
    },
    //   ],
    // },
    {
      compName: "Footer",
      version: 1,
      type: "contentBox",
      props: {
        title: "Footer",
      },
      cssProps: "col-span-9 text-center row-span-1",
    },
  ],
  props: {},
  cssProps:
    "grid text-white h-screen bg-[linear-gradient(to_bottom,hsl(220,_65%,_5%)_0%,hsl(220,_65%,_3.52%)_50%,hsl(220,_65%,_10%)_100%)]",
};
const jsonLayout2 = {
  screenName: "home",
  version: 2,
  components: [
    {
      compName: "NAV",
      version: 2,
      type: "nav",
      props: {
        title: "LAB OPERATIONS CENTER",
      },
      cssProps: `col-span-3 md:col-span-9 mt-2 ${styles.background.banner} row-span-1 ${styles.flexbox.primary}`,
    },
    {
      compName: "NAV",
      version: 2,
      type: "nav",
      props: {
        title: "NAVIGATION",
      },
      cssProps: `col-span-3 row-span-1 md:col-span-1 md:row-span-8 ${styles.background.primary} ${styles.flexbox.primary}`,
    },
    {
      compName: "Hero1",
      version: 1,
      type: "contentBox",
      props: {},
      components: [
        {
          compName: "Feed A",
          type: "contentBox",
          props: {
            content: "Feed A",
          },
          cssProps: `h-full ${styles.background.secondary} ${styles.flexbox.primary}`,
        },
        {
          compName: "Feed B",
          type: "contentBox",
          props: {
            content: "Feed B",
          },
          cssProps: `h-full ${styles.background.secondary} ${styles.flexbox.primary}`,
        },
        {
          compName: "Feed C",
          type: "contentBox",
          props: {
            content: "Feed C",
          },
          cssProps: `h-full ${styles.background.secondary} ${styles.flexbox.primary}`,
        },
        {
          compName: "Feed D",
          type: "contentBox",
          props: {
            content: "Feed D",
          },
          cssProps: `h-full ${styles.background.secondary} ${styles.flexbox.primary}`,
        },
      ],
      cssProps: `col-span-3 md:col-span-4 grid grid-cols-2 gap-2 p-2 row-span-5 ${styles.background.primary} ${styles.flexbox.primary}`,
    },
    {
      compName: "Hero2",
      version: 1,
      type: "contentBox",
      props: {
        title: "ALERT MATRIX",
      },
      cssProps: `md:col-span-4 col-span-3 row-span-3 ${styles.background.primary} ${styles.flexbox.primary}`,
    },
    {
      compName: "Hero3",
      version: 1,
      type: "contentBox",
      props: {
        title: "EVENT LOGS",
      },
      cssProps: `col-span-3 md:col-span-4 row-span-5 ${styles.background.primary} ${styles.flexbox.primary}`,
    },
    {
      compName: "Hero4",
      version: 1,
      type: "contentBox",
      props: {
        title: "ANALYTICS",
      },
      cssProps: `col-span-3 md:col-span-4 row-span-3 ${styles.background.primary} ${styles.flexbox.primary}`,
    },
    {
      compName: "Left_Section",
      version: 1,
      type: "contentBox",
      props: {
        title: "STATUS",
      },
      cssProps: `col-span-3 md:col-span-2 row-span-2 ${styles.flexbox.primary} ${styles.background.primary}`,
    },
    {
      compName: "middle_Section",
      version: 1,
      type: "contentBox",
      props: {
        title: "PIPELINE",
      },
      cssProps: `col-span-3 md:col-span-5 row-span-2 ${styles.background.primary} ${styles.flexbox.primary} overflow-hidden`,
    },
    {
      compName: "Right_Section",
      version: 1,
      type: "contentBox",
      props: {
        title: "QUEUE",
      },
      cssProps: `col-span-3 md:col-span-2 row-span-2 ${styles.flexbox.primary} ${styles.background.primary} overflow-hidden`,
    },
  ],
  props: {},
  cssProps:
    "grid text-white grid-cols-9 h-screen bg-[linear-gradient(to_bottom,hsl(220,_65%,_5%)_0%,hsl(220,_65%,_3.52%)_50%,hsl(220,_65%,_10%)_100%)]",
};

type CompProps = {
  compName: string;
  version?: number;
  type: string;
  props: {
    title?: string;
    content?: string;
  };
  cssProps: string;
  components?: CompProps[];
};

function RenderComponent(comp: CompProps) {
  const Component = components[comp.type as keyof typeof components];
  if (!Component) {
    return null;
  }
  return (
    <Component {...comp}>
      {comp.components &&
        comp.components.map((child) => {
          return <RenderComponent {...child} key={child.compName} />;
        })}
    </Component>
  );
}
// json.components.map(RenderComponent);

export default function Home() {
  const [json, setJson] = useState(jsonLayout2);
  console.log(json);

  return (
    <div>
      {/* <button
        className="fixed top-0 right-0 p-2 cursor-pointer m-2 rounded-2xl bg-blue-500"
        onClick={() => {
          if (json == jsonLayout1) {
            setJson(jsonLayout2);
          } else {
            setJson(jsonLayout1);
          }
        }}
      >
        {" "}
        Toggle Layout
      </button>
      {(json == jsonLayout1 || json == jsonLayout2) && (
        <button
          className="fixed top-0 left-0 p-2 cursor-pointer m-2 rounded-2xl bg-blue-500"
          onClick={() => {
            setJson((prev) => {
              const newJson = prev.components.filter(
                (comp) => comp.compName != "Footer",
              );
              return { ...prev, components: newJson };
            });
          }}
        >
          {" "}
          Toggle Footer
        </button>
      )} */}
      <main
        className="grid gap-2 text-white min-h-screen grid-cols-3 md:grid-cols-9 bg-[linear-gradient(to_bottom,hsl(220,_65%,_5%)_0%,hsl(220,_65%,_3.52%)_50%,hsl(220,_65%,_10%)_100%)]"
        style={{
          gridAutoRows: "1fr",
        }}
      >
        {json.components.map((comp, ind) => {
          return <RenderComponent {...comp} key={ind} />;
        })}
        {/* {json.screenName == "home" &&
        json.components.map((comp) => {
          if (comp.type == "contentBox") {
            return <ContentBox {...comp} key={comp.compName} />;
            }
            if (comp.type == "nav") {
              return <NavBar {...comp} key={comp.compName} />;
              }
              })} */}
        {/* <div className="col-span-3 text-center">NAV</div> */}
        {/* <div className="row-span-2 text-center overflow-y-scroll"> */}
        {/* <div className="h-1/2">0</div>
        <div className="h-1/2">1</div>
        <div className="h-1/2">2</div>
        <div className="h-1/2">3</div>
        <div className="h-1/2">4</div>
        <div className="h-1/2">5</div>
        <div className="h-1/2">9</div>
        <div className="h-1/2">6</div>
        <div className="h-1/2">7</div>
        <div className="h-1/2">8</div> */}
        {/* </div> */}
        {/* // <div className="row-span-2 text-center">Center</div> */}
        {/* // <div className="row-span-2 text-center overflow-hidden"> */}
        {/* <div className="h-1/2">0</div>
        <div className="h-1/2">1</div>
        <div className="h-1/2">2</div>
        <div className="h-1/2">3</div>
        <div className="h-1/2">4</div>
        <div className="h-1/2">5</div>
        <div className="h-1/2">9</div>
        <div className="h-1/2">6</div>
        <div className="h-1/2">7</div>
        <div className="h-1/2">8</div> */}
        {/* // </div> */}
      </main>
    </div>
  );
}
