import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

const HoverComponent = () => {
  const data = [
    {
      imgSrc:
        "https://c4.wallpaperflare.com/wallpaper/328/704/971/samurai-cyber-warrior-symbols-japan-hd-wallpaper-preview.jpg",
      property: "shadow-white	",
      Text1: "Samurai",
      Text2: "Ghost Of Tsunima ",
    },
    {
      imgSrc:
        "https://i.pinimg.com/736x/a9/5e/3d/a95e3de68cdf85d7bde79c50a8ae975a.jpg",
      property: "shadow-black	",
      Text1: "Ghosts are real",
      Text2: "Call Of Duty",
    },
    {
      imgSrc:
        "https://i.pinimg.com/736x/91/2a/8b/912a8b9a15e587161705510696a390ce.jpg",
      property: "shadow-white	",
      Text1: "Aiden Pearce",
      Text2: "Watch Dogs 1",
    },
    {
      imgSrc:
        "https://i.pinimg.com/736x/02/bb/8d/02bb8d7a9e061047428d03d687344133.jpg",
      property: "shadow-black	",
      Text1: "Lara Croft",
      Text2: "Tomb Raider",
    },
  ];

  const boxRefs = useRef(data.map(() => React.createRef()));
  const finalTextRef = useRef(data.map(() => React.createRef()));
  const initialTextRef = useRef(data.map(() => React.createRef()));

  useGSAP(
    () => {
      let tl = gsap.timeline();
      boxRefs.current.forEach((boxRef, index) => {
        if (index === 0) {
          gsap.set(boxRef.current, { width: 250 });
          gsap.set(finalTextRef.current[index].current, { opacity: 1 });
          gsap.set(initialTextRef.current[index].current, { opacity: 0 });
        } else {
          gsap.set(boxRef.current, { width: 150 });
          gsap.set(finalTextRef.current[index].current, { opacity: 0 });
          gsap.set(initialTextRef.current[index].current, { opacity: 1 });
        }


        const onHover = () => {
          boxRefs.current.forEach((boxRef, idx) => {
            if (index === idx) {
              gsap.to(boxRef.current, { width: 250, duration: 1 });
              gsap.to(finalTextRef.current[idx].current, {
                opacity: 1,
                duration: 1,
              });
              gsap.to(initialTextRef.current[idx].current, {
                opacity: 0,
                duration: 1,
              });
            } else {
              gsap.to(boxRef.current, { width: 150, duration: 1 });
              gsap.to(finalTextRef.current[idx].current, {
                opacity: 0,
                duration: 1,
              });
              gsap.to(initialTextRef.current[idx].current, {
                opacity: 1,
                duration: 1,
              });
            }
          });
        };
        boxRef.current.addEventListener("mouseover", onHover);
      });
      {
        // return () => {
        //   boxRefs.current.forEach((boxRef, index) => {
        //     const onHover = () => {
        //       boxRefs.current.forEach((ref, i) => {
        //         if (i === index) {
        //           gsap.to(ref.current, { width: 250, duration: 1 });
        //         } else {
        //           gsap.to(ref.current, { width: 150, duration: 1 });
        //         }
        //       });
        //     };
        //     boxRef.current.removeEventListener("mouseover", onHover);
        //   });
        // };
      }
    },
    { scope: boxRefs.current }
  );

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="flex items-center justify-center gap-2">
        {data.map((item, index) => (
          <div
            key={index}
            ref={boxRefs.current[index]}
            className="w-[150px]  h-[500px]"
          >
            <div
              className="relative bg-center bg-cover w-full h-full rounded-lg"
              style={{ backgroundImage: `url(${item.imgSrc})` }}
            >
              <span
                className={`absolute right-1/2 bottom-2 font-mono translate-x-[50%]  text-nowrap text-white/80 font-semibold text-xl`}
                ref={finalTextRef.current[index]}
              >
                {item.Text1}
              </span>
              <span
                className="absolute left-0 top-[3%] text-center text-white/80 font-bold font-zenDots text-lg  w-full text-wrap bg-[#353E43] "
                ref={initialTextRef.current[index]}
              >
                {item.Text2}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HoverComponent;
