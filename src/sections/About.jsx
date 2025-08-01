import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/magicui/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = ({id}) => {
  const grid2Container = useRef();
  return (
    <section id={id} className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt=""
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi I'm Shivendra Nirupam</p>
            <p className="subtext cursor-none">
              I’m a dedicated student developer with a strong foundation in C++ and JavaScript.
            </p>
            <p className="subtext cursor-none">Over the last 2 years, I delivered my frontend and backend dev skills to deliver dynamic software and web applications</p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"/>
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>
            <Card style={{rotate: "75deg", top:"30%", left:"20%"}} text="Grasp" containerRef={grid2Container}/>
            <Card style={{rotate: "-30deg", top:"60%", left:"45%"}} text="Solid" containerRef={grid2Container}/>
            <Card style={{rotate: "90deg", bottom:"30%", left:"70%"}} text="Design Pattern" containerRef={grid2Container}/>
            <Card style={{rotate: "-45deg", top:"55%", left:"0%"}} text="Design Principle" containerRef={grid2Container}/>
            <Card style={{rotate: "20deg", top:"10%", left:"50%"}} text="SRP" containerRef={grid2Container}/>
            <Card style={{rotate: "20deg", top:"70%", left:"20%"}} image="assets/logos/javascript.svg" containerRef={grid2Container}/>
            <Card style={{rotate: "20deg", top:"30%", left:"50%"}} image="assets/logos/react.svg" containerRef={grid2Container}/>
            <Card style={{rotate: "-20deg", top:"10%", left:"10%"}} image="assets/logos/cplusplus.svg" containerRef={grid2Container}/>
            <Card style={{rotate: "0deg", top:"10%", left:"90%"}} image="assets/logos/git.svg" containerRef={grid2Container}/>
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">I'm based in India(Hyderabad), and open to remote work worldwide</p>
          </div>

          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className=" flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">Do You want to start a Project together?</p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">I have specialisation over variety of languages, frameworks and tools, allow me to build robust and scalable applications</p>
          </div>
          <div className=" inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
