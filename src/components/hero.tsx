import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="home"
            className="flex flex-col items-center justify-center relative overflow-hidden px-4 pt-7 sm:pt-18 sm:py-0 min-h-screen"
        >
            {/* Glow background */}
            <div className="absolute w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-purple-600/30 blur-3xl rounded-full top-20" />
            <div className="absolute w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-blue-600/30 blur-3xl rounded-full bottom-10" />

            {/* TOP TEXT */}
            <div className="text-center z-10 animate-fade-down animate-delay-1">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    Hi, I'm Rayan
                </h1>
                <p className="text-white/60 mt-3 text-sm sm:text-base">
                    Full Stack Developer • Building real-time web apps
                </p>
            </div>

            {/* IMAGE CENTER */}
            <div className="relative my-8 sm:my-10 animate-zoom-in animate-delay-2">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl opacity-30 rounded-full" />

                <div className="relative w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px]">
                    <Image
                        priority
                        src="/port-removebg-preview.png"
                        alt="profile"
                        fill
                        sizes="(max-width: 640px) 170px, (max-width: 768px) 220px, 280px"
                        className="rounded-full object-cover border border-white/20 shadow-2xl hover:scale-105 transition duration-500"
                    />
                </div>
            </div>

            {/* BOTTOM TEXT */}
            <div className="text-center z-10 animate-fade-up animate-delay-3">
                <p className="text-white/50 max-w-xs sm:max-w-md text-sm sm:text-base mx-auto">
                    Full-Stack Developer specializing in building scalable web applications with Next.js and Node.js, and crafting high-performance, real-time experiences using WebSockets.
                </p>

                <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                    <Link
                        href="/projects"
                        className="w-full sm:w-auto px-6 py-2.5 bg-white text-black rounded-xl hover:scale-105 transition font-medium"
                    >
                        View Projects
                    </Link>

                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-6 py-2.5 border border-white/20 text-white rounded-xl hover:bg-white/10 transition"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
}