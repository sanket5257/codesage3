import { useRef } from "react";
import Marquee from "../Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSummary = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  
  const items = [
    "Innovation",
    "Excellence", 
    "Partnership",
    "Growth",
    "Success",
  ];
  
  const items2 = [
    "let's build together",
    "let's build together",
    "let's build together", 
    "let's build together",
    "let's build together",
  ];

  useGSAP(() => {
    // Animate main text
    gsap.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
    });

    // Pin section
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=400 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);
  
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-16 py-20"
    >
      <Marquee items={items} className="text-black bg-transparent" />
      
      <div ref={textRef} className="text-center px-10">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-light leading-tight mb-8">
          Ready to build something
          <br />
          <span className="italic font-semibold text-gold">amazing</span> together?
        </h2>
        <p className="text-xl md:text-2xl text-black/70 max-w-2xl mx-auto">
          Let's transform your ideas into powerful digital solutions
        </p>
      </div>
      
      <Marquee
        items={items2}
        reverse={true}
        className="text-white bg-black"
        iconClassName="text-gold"
        icon="lucide:sparkles"
      />
    </section>
  );
};

export default ContactSummary;