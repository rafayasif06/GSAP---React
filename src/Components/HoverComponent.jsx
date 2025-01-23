import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { FaHeart  } from "react-icons/fa";

const TextToWord = ({ text }) => {
  const words = text.split(" ").map((word, index) => (
    <span key={index} style={{ margin: "0 4px" }}>
      {word}
    </span>
  ));
  return <>{words}</>;
};
const TextToChar = ({ text }) => {
  const chars = text.split("").map((char, index) => (
    <span key={index} style={{ margin: "0 1px" }}>
      {char}
    </span>
  ));
  return <>{chars}</>;
};
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
  const mainTextRef = useRef();
  const secondaryTextRef = useRef();
  const bgRef = useRef(null);
  const heartIconRef = useRef();

  useGSAP(() => {
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
    gsap.fromTo(
      boxRefs.current.map((ref) => ref.current),
      {
        x: 100,
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        stagger: 0.3,
      }
    );
    tl.from(bgRef.current, {
      opacity: 0,
      scale: 0.4,
      duration: 1,
    });

    tl.fromTo(
      mainTextRef.current.querySelectorAll("span"),
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
      },
      "1"
    );
    tl.to(
      mainTextRef.current.querySelectorAll("span"),
      {
        textDecoration: "#EE5230  underline 3px",
        stagger: 0.1,
      },
      "2"
    );
    tl.fromTo(
      secondaryTextRef.current.querySelectorAll("span"),
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
      },
      "1"
    );
    tl.to(
      secondaryTextRef.current.querySelectorAll("span"),
      {
        textDecoration: "#EE5230  underline 3px",
        stagger: 0.1,
      },
      "2"
    );
    tl.fromTo(
      heartIconRef.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 1,
        color: "#EE5230",
        ease: "elastic",}
    );
  }, {});

  return (
    <section className="w-full  flex justify-center items-center">
      <div className="max-w-[1600px] w-full  flex justify-around items-center h-screen font-mono bg-[#0C0C11] overflow-x-hidden ">
        {/* Left Side */}
        <div>
          <div
            ref={bgRef}
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/51/b7/ad/51b7addc95869dfc6172ba3dc96bb666.jpg')",
            }}
            className="flex items-center justify-evenly flex-col w-[600px] h-[500px] bg-center bg-cover rounded-lg "
          >
            <h3
              ref={mainTextRef}
              className="text-white font-semibold text-5xl text-center text-wrap  underline-offset-8"
            >
              <TextToChar text="Welcome To My Portfolio " />
            </h3>
            <p
              ref={secondaryTextRef}
              className="text-white font-semibold text-xl text-left   flex items-center justify-center"
            >
              <TextToWord className="" text="Made with GSAP and " />
              <span ref={heartIconRef}>

              <FaHeart   />
              </span>
            </p>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex items-center justify-center gap-2 ">
          {data.map((item, index) => (
            <div
              key={index}
              ref={boxRefs.current[index]}
              className="w-[150px]  h-[500px] "
            >
              <div
                className="relative bg-center bg-cover w-full h-full rounded-lg"
                style={{ backgroundImage: `url(${item.imgSrc})` }}
              >
                <span
                  className={`absolute right-1/2 bottom-2  translate-x-[50%]  text-nowrap text-white/80 font-semibold text-xl`}
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
      </div>
    </section>
  );
};

export default HoverComponent;
