import React from "react";
import ImageItem from "./ImageItem";
import Styles from './style.css';


export default function ImageList({ imagePlaceHolder }) {
  return (
    <div className="imageList">
      {imagePlaceHolder.map((image,index) => {
        return <ImageItem key={index} image={image}></ImageItem>;
      })}
    </div>
  );
}
