import React from "react";
import img from './../img/img.jpeg'

export default function Header() {
  return (
    <>
      <h1>Halp! Q</h1>
      <img src={img} alt="colors" style={styledImage} />
    </>
  );
}

const styledImage = {
  height: 'auto',
  maxWidth: '50%'
}