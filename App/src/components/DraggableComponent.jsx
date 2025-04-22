// DraggableBox.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable); // Register plugins once!

export default function DraggableComponent({content="",}){
  const boxRef = useRef(null);

  useGSAP(() => {
    //types x,y, rotation, scroll
    Draggable.create(boxRef.current, {
      type: "x,y",
      inertia: true,
      //edgeResistance: 0.85,
      //bounds: window,
      //liveSnap:  (x) => Math.round(x / 100) * 100,
      //type: "rotation",
      snap: [0,50,100,150,200,250,300],
      onClick: () => console.log("Clicked!"),
      //onDragEnd: () => console.log("Drag ended."),
    });
    console.log("Draggable created!");
  }, { dependencies: [] }); // empty array = run once on mount

  return (
    <div
      ref={boxRef}
      className=" w-[200px] h-[50px]  bg-blue-500 cursor-grab rounded-lg shadow-md"
      //style={{ position: "absolute", top: 50, left: 50 }}
    >
      {content}
    </div>
  );
};

