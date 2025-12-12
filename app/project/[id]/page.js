'use client';

import { useParams, useRouter } from 'next/navigation';
import { projects } from '../../../constants';
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "../../../components/sections/Navbar";
import GlobalPlanet from "../../../components/GlobalPlanet";

const ProjectPage = () => {
  const params = useParams();
  const router = useRouter();
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  
  const project = projects.find(p => p.id === parseInt(params.id));

  useGSAP(() => {
    if (!project) return;

    // Animate page entrance
    gsap.fromTo(
      heroRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power2.out" }
    );
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleBackClick = () => {
    router.push('/#work');
  };

  return (
    <div className="min-h-screen  relative">
      {/* Global Planet */}
      <GlobalPlanet />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-40">
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 px-4 py-2 bg-black/80 text-white rounded-full hover:bg-black transition-colors backdrop-blur-sm"
        >
          <Icon icon="lucide:arrow-left" className="size-4" />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden z-20"
      >
        <div className="relative z-10 text-center text-black max-w-4xl mx-auto px-4">
          <div className="mb-4">
            <span className="text-sm uppercase tracking-widest text-gray-500">
              Project {project.id} of {projects.length}
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            {project.name}
          </h1>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {project.frameworks.map((framework) => (
              <span
                key={framework.id}
                className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-800"
              >
                {framework.name}
              </span>
            ))}
          </div>
          <div className="w-24 h-1 bg-black mx-auto rounded-full" />
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="relative z-20 py-20 px-4 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Project Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-500 rounded-full opacity-20" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-600 rounded-full opacity-10" />
            </div>

            {/* Project Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Project Overview
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Key Features
                </h3>
                <div className="space-y-3">
                  {project.features?.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Technologies Used
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.frameworks.map((framework) => (
                    <div
                      key={framework.id}
                      className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center"
                    >
                      <span className="font-medium text-gray-800">
                        {framework.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="px-8 py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  <span>View Live Project</span>
                  <Icon icon="lucide:external-link" className="size-5" />
                </button>
                <button className="px-8 py-4 border-2 border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
                  <span>View Source Code</span>
                  <Icon icon="lucide:github" className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="relative z-20 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <div
                  key={relatedProject.id}
                  onClick={() => router.push(`/project/${relatedProject.id}`)}
                  className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                      {relatedProject.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {relatedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {relatedProject.frameworks.slice(0, 3).map((framework) => (
                        <span
                          key={framework.id}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {framework.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;