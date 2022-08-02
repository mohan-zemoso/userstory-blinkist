import React from "react";

export interface ImageProps {
  source?: string;
}

const Image = (props: ImageProps) => {
  let { source } = props;
  return <img src={source} alt={source} />;
};

export default Image;
