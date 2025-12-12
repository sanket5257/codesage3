import AnimatedHeaderSection from "../AnimatedHeaderSection";

const Hero = () => {
  const text = `CodeSage transforms your business vision into 
cutting-edge digital solutions that drive 
growth and innovation`;
  
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen relative z-20">
      <div className="relative z-30">
        <AnimatedHeaderSection
          subTitle={"Enterprise IT Solutions"}
          title={"CodeSage"}
          text={text}
          textColor={"text-black"}
        />
      </div>
      {/* Background gradient for visual depth */}
      {/* <div className="absolute inset-0 -z-20 bg-gradient-to-br from-primary/60 via-primary/40 to-primary/30" /> */}
    </section>
  );
};

export default Hero;