import { useRef } from "react";
import AnimatedHeaderSection from "../AnimatedHeaderSection";
import { AnimatedTextLines } from "../AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { companyInfo } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const text = `Passionate about clean architecture and innovation
    We build scalable, high-performance solutions
    from prototype to production`;
  const aboutText = `CodeSage is obsessed with building fast, intuitive applications—from pixel-perfect UIs to bulletproof serverless backends. Every line of code is a promise: quality that users feel and businesses trust.

When we're not shipping cutting-edge solutions:
Open-sourcing our latest experiments (or contributing to yours)
Teaching developers through workshops—because rising tides lift all ships
 Exploring emerging technologies and pushing boundaries
Optimizing performance while CI pipelines pass (multitasking at its finest)

Founded in ${companyInfo.founded}, we've successfully delivered ${companyInfo.projectsCompleted} transformative projects for clients ranging from innovative startups to Fortune 500 enterprises. Our commitment to excellence, scalability, and client success has established us as a trusted technology partner across diverse industries.`;
  
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.80,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });
  });
  
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code with Purpose, Built to Scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-center px-10 pb-16 text-xl font-light tracking-wide md:text-2xl lg:text-3xl text-white/60">
        <AnimatedTextLines text={aboutText} className={"w-full max-w-4xl text-center"} />
      </div>
    </section>
  );
};

export default About;