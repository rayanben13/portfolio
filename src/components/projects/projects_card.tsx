import { projectsData } from '@/components/projects/projects_data';
import Image from 'next/image';
import Link from 'next/link';

function ProjectsCard() {

    return (
        <section id="projects" className="pt-20 relative max-w-6xl mx-auto">
            <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold text-white sm:mb-10 ">
                Projects
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="
            group
            bg-white/5
            border border-white/10
            backdrop-blur-md
            rounded-2xl
            overflow-hidden
            transition-all duration-500
            hover:scale-[1.02]
            hover:border-white/20
            hover:shadow-[0_20px_80px_rgba(139,92,246,0.15)]
          "
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden">
                            <Image
                                src={project.images[0].url}
                                alt={project.title}
                                width={500}
                                height={300}
                                loading='eager'
                                className="
              w-full h-[180px] sm:h-[220px] object-cover
              transition-transform duration-700
              group-hover:scale-110
            "
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-5">
                            <h2 className="text-xl sm:text-2xl font-bold text-white">
                                {project.title}
                            </h2>

                            <p className="text-white/60 mt-2 sm:mt-3 text-sm sm:text-base line-clamp-3">
                                {project.description}
                            </p>

                            <Link
                                href={project.link}
                                className="
              inline-block mt-4 sm:mt-5
              px-4 py-2 rounded-xl
              bg-white text-black
              text-sm sm:text-base
              font-medium
              transition hover:scale-105
            "
                            >
                                View Project
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsCard
