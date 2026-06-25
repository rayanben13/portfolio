"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="flex items-center justify-center py-10  relative"
        >
            {/* background glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-5 sm:left-10 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-purple-600/20 blur-[80px] sm:blur-[120px]" />
                <div className="absolute bottom-10 right-5 sm:right-10 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-blue-600/20 blur-[80px] sm:blur-[120px]" />
            </div>

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 sm:gap-10">

                {/* LEFT: Story */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        About Me
                    </h2>

                    <p className="text-white/60 mt-4 sm:mt-5 leading-relaxed text-sm sm:text-base">
                        I'm a Full Stack Developer passionate about building scalable,
                        real-time web applications and modern user experiences.
                    </p>

                    <p className="text-white/50 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                        I enjoy working with distributed systems, backend architecture,
                        and creating smooth UI/UX with modern tools.
                    </p>

                    <div className="mt-6">
                        <button className="w-full sm:w-auto px-6 py-2.5 bg-white text-black rounded-xl hover:scale-105 transition font-medium">
                            Download CV
                        </button>
                    </div>
                </motion.div>

                {/* RIGHT: Cards */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid gap-3 sm:gap-4"
                >
                    {/* Card 1 */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-[1.02] transition">
                        <h3 className="text-white font-semibold text-sm sm:text-base">Frontend</h3>
                        <p className="text-white/50 text-xs sm:text-sm mt-2">
                            React, Next.js, Tailwind, Framer Motion
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-[1.02] transition">
                        <h3 className="text-white font-semibold text-sm sm:text-base">Backend</h3>
                        <p className="text-white/50 text-xs sm:text-sm mt-2">
                            Node.js, NestJS, REST APIs, GraphQL, Socket.IO
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-[1.02] transition">
                        <h3 className="text-white font-semibold text-sm sm:text-base">Database</h3>
                        <p className="text-white/50 text-xs sm:text-sm mt-2">
                            PostgreSQL, MySQL, MongoDB, Redis
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
