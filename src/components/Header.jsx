import React from "react";

export default function Header() {
  return (
    <div className="container mx-auto flex justify-between items-center my-[2rem]">
      <div className="flex flex-row gap-[10rem]">
        <span className="text-xl tracking-tigh">Trinary</span>
        <span className="text-xl tracking-tigh">About</span>
        <span className="text-xl tracking-tigh">Work</span>
      </div>
      <div className="flex flex-row gap-[7.5rem]">
        <span className="text-xl tracking-tigh">Connect</span>
        <span className="text-xl tracking-tigh">trinary@gmail.com</span>
      </div>
    </div>
  );
}
