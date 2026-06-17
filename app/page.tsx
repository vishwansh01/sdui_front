"use client";

import ContentBox from "@/components/ContentBox";
import NavBar from "@/components/NavBar";
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
const jsonLayout2 = {};

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
  return (
    <main className="grid text-white h-screen bg-[linear-gradient(to_bottom,hsl(220,_65%,_5%)_0%,hsl(220,_65%,_3.52%)_50%,hsl(220,_65%,_10%)_100%)]">
      {jsonLayout1.components.map((comp) => {
        return <RenderComponent {...comp} key={comp.compName} />;
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
  );
}
