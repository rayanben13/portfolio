"use client";

import { projectsData } from "@/components/projects/projects_data";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

function ProjectPage() {
    const params = useParams();
    const name = params.name;

    const project = projectsData.find(
        (item) => item.link === `/projects/${name}`
    );

    const [currentIndex, setCurrentIndex] = useState(0);

    if (!project) {
        return <div className="text-white">Project not found</div>;
    }

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    return (
        <main className="mt-28 text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl font-bold">{project.title}</h1>
                <p className="text-lg mt-4 text-white/70">
                    {project.description}
                </p>
            </div>

            {/* Slider */}
            <div className="max-w-7xl mx-auto px-6 mt-10">
                <div className="relative">
                    <Image
                        priority={currentIndex === 0}
                        loading={currentIndex === 0 ? "eager" : "lazy"}
                        src={project.images[currentIndex].url}
                        alt={project.title}
                        width={1200}
                        height={600}
                        className="w-full h-[500px] object-cover rounded-2xl"
                    />

                    {/* Left Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 px-4 py-2 rounded-full"
                    >
                        ←
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 px-4 py-2 rounded-full"
                    >
                        →
                    </button>
                </div>

                {/* Image Description */}
                <p className="mt-6 text-white/60 text-lg">
                    {project.images[currentIndex].description}
                </p>

                {/* Dots */}
                <div className="flex gap-3 mt-6 justify-center">
                    {project.images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition
                                ${currentIndex === index
                                    ? "bg-white"
                                    : "bg-white/30"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default ProjectPage;