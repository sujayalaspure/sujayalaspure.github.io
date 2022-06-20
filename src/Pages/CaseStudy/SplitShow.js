import React from "react";
import GridItem from "Components/atoms/GridItem";
import { assetsUrl } from "constant";

export default function SplitShow({ title, right, left, slug }) {
  return (
    <div className="splitshow">
      <div className="col">
        <div className="left">
          {left.map(({ imgsrc, caption }, index) => (
            <GridItem key={index} img={`${assetsUrl}ProjectImg/${slug}/${imgsrc}`} caption={caption} />
          ))}
        </div>
        <div className="right">
          {right.map(({ imgsrc, caption }, index) => (
            <GridItem key={index} img={`${assetsUrl}ProjectImg/${slug}/${imgsrc}`} caption={caption} right />
          ))}
        </div>
      </div>
    </div>
  );
}
