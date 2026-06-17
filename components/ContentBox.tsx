import React from "react";

type Props = {
  compName: string;
  components?: Props[];
  props: {
    title?: string;
    content?: string;
  };
  cssProps: string;
  children?: React.ReactNode;
};

const ContentBox = (figures: Props) => {
  return (
    <div className={`${figures.cssProps}`}>
      {figures.props.title && <h1>{figures.props.title}</h1>}
      {figures.props.content && <div>{figures.props.content}</div>}
      {/* {figures.components &&
        figures.components.length != 0 &&
        figures.components.map((comp) => {
          return <ContentBox {...comp} key={comp.compName} />;
        })} */}
      {figures.children && figures.children}
    </div>
  );
};

export default ContentBox;
