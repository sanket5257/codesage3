import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Planet } from "./Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

const GlobalPlanet = () => {
  const [planetState, setPlanetState] = useState({
    opacity: 1,
    scale: 1,
    position: { x: 0, y: 0 }
  });
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const planetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Get section positions
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const servicesSection = document.getElementById('services');
      const workSection = document.getElementById('work');
      const contactSection = document.getElementById('contact');
      
      let newState = { ...planetState };
      
      if (homeSection && aboutSection && servicesSection && workSection && contactSection) {
        const aboutTop = aboutSection.offsetTop;
        const servicesTop = servicesSection.offsetTop;
        const workTop = workSection.offsetTop;
        const contactTop = contactSection.offsetTop;
        
        // Hero section - full visibility, center position
        if (scrollY < aboutTop - windowHeight * 0.2) {
          newState = {
            opacity: 1,
            scale: isMobile ? 0.7 : 1,
            position: { x: 0, y: 0 }
          };
        }
        // About section - reduced opacity for contrast with black background
        else if (scrollY >= aboutTop - windowHeight * 0.2 && scrollY < servicesTop + windowHeight * 0.5) {
          newState = {
            opacity: 0.3,
            scale: isMobile ? 0.5 : 0.8,
            position: { x: isMobile ? 20 : 30, y: -10 }
          };
        }
        // Services section - reduced opacity for contrast
        else if (scrollY >= servicesTop - windowHeight * 0.2 && scrollY < workTop - windowHeight * 0.2) {
          newState = {
            opacity: 0.4,
            scale: isMobile ? 0.6 : 0.9,
            position: { x: isMobile ? -20 : -30, y: 15 }
          };
        }
        // Works section - visible, move to side
        else if (scrollY >= workTop - windowHeight * 0.2 && scrollY < contactTop - windowHeight * 0.2) {
          newState = {
            opacity: 0,
            scale: isMobile ? 0.5 : 0.7,
            position: { x: isMobile ? 25 : 35, y: -15 }
          };
        }
        // Contact section - visible, different position
        else if (scrollY >= contactTop - windowHeight * 0.2) {
          newState = {
            opacity: 0.9,
            scale: isMobile ? 0.6 : 0.8,
            position: { x: isMobile ? -25 : -35, y: 5 }
          };
        }
      }
      
      setPlanetState(newState);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <div 
      ref={planetRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        opacity: planetState.opacity,
        transform: `translate(${planetState.position.x}vw, ${planetState.position.y}vh) scale(${planetState.scale})`,
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        transformOrigin: 'center center',
        overflow: 'visible'
      }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        style={{ 
          width: '100vw', 
          height: '100vh',
          pointerEvents: 'none'
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.2} />
        <Float speed={0.3} rotationIntensity={0.1} floatIntensity={0.5}>
          <Planet scale={1} />
        </Float>
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 3, 4, 1]}>
            <Lightformer
              form={"circle"}
              intensity={1.5}
              position={[0, 5, -9]}
              scale={8}
            />
            <Lightformer
              form={"circle"}
              intensity={1.5}
              position={[0, 3, 1]}
              scale={8}
            />
            <Lightformer
              form={"circle"}
              intensity={1.5}
              position={[-5, -1, -1]}
              scale={8}
            />
            <Lightformer
              form={"circle"}
              intensity={1.5}
              position={[10, 1, 0]}
              scale={12}
            />
          </group>
        </Environment>
      </Canvas>
    </div>
  );
};

export default GlobalPlanet;