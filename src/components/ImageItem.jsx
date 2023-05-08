import React from "react";
import Style from "./style.css";

export default function Image({ image }) {
  console.log(image);
  return (
    <div>
      <img className="imageItem" src={image.urls.full} alt={image.alt_description}/>
    </div>
  );
}
