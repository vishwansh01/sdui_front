import React from "react";

type Props = {
  compName: string;
  props: {
    title?: string;
  };
  cssProps: string;
};

const NavBar = (figures: Props) => {
  return <div className={`${figures.cssProps}`}>{figures.props.title}</div>;
};

export default NavBar;
