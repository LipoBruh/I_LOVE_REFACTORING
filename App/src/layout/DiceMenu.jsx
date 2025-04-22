import React, { useRef, useState, useEffect} from "react";
//

//GSAP animations
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";
import RainbowComponent from "../components/RainbowComponent";
import Die from "../components/Die";
//
export default function DiceMenu() {

  gsap.registerPlugin(Draggable)

    const [toggle, setToggle] = useState(false);
    const [hover, setHover] = useState(false);

    const scrollRef = useRef(null);
    
    function render(){
        //
        let array = [4,6,8,10,12,20,100]
        //
        return array.map((value,key)=>{
            return <div key={key} className=" h-[10vh] tab tab-bordered"> <Die key={key} die={value} className="shadow rounded-full" /> </div>
        })
    }


    useEffect(() => {
        if (!scrollRef.current) return;
      
        Draggable.create(scrollRef.current, {
          type: "x",
          edgeResistance: 0.70,
          inertia: true,
          bounds: {
            minX: -(scrollRef.current.scrollWidth - scrollRef.current.clientWidth)-200,
            maxX: 0+200,
          },
          cursor: "grab",
          onDragStart() {
            scrollRef.current.classList.add("cursor-grabbing");
          },
          onDragEnd() {
            scrollRef.current.classList.remove("cursor-grabbing");
          },
        });
      }, []);
    
      let components = render()

  return (
    <>


    <div
    id="DiceMenuIcon"
    className={" transition-opacity duration-700 ease-in-out fixed bottom-0 right-0  w-full h-[15vh]  cursor-grab "
    + (toggle?" opacity-100 ":" opacity-0 ")
    }
    //style={{ position: "absolute", top: 50, left: 50 }}
    >
        <div className="bg-base-100  h-[95%] w-[95%] mx-auto  rounded-full overflow-hidden ">
            <div  
                ref={scrollRef}
                className={
                ("  ")+
                ("  flex gap-4 items-center ")+
                (" h-[100%] ")+
                (" ")+
                (""/*"bg-gradient-to-r from-pink-500 to-yellow-500"*/)
                }
                style={{ willChange: 'transform' }}
                >
                    {components}

            </div>
        </div>
    </div>


    <div className="fixed bottom-0 right-0  m-3 w-[10vh] h-[10vh]  cursor-grab  rounded-full select-none"
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onClick={() => setToggle(!toggle)}
    >

    <RainbowComponent 
        className={"select-none "+(toggle?"opacity-30":"opacity-100")}
        gradient={hover&&!toggle?'animate-spin bg-conic from-blue-500 via-base-500 to-base-500 blur-sm ':""}
        rounded="rounded-full"
        content={
                <div tabIndex={0} role="button" className="btn btn-ghost btn-xl btn-square lg:hidden rounded-full  w-full h-full">
                    <img src="d20_icon.png" alt="logo" className={("w-[60%] h-[60%] rounded-full m-auto ")} />
                </div>
            }/>
    </div>

    </>
  )
}
