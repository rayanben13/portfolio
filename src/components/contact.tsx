"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// 1. تحديد الـ Schema للتحقق باستخدام Zod
const contactSchema = z.object({
    email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
    message: z.string().min(10, "Your message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
    const [status, setStatus] = useState<{ type: "success" | "error" | null; msg: string }>({ type: null, msg: "" });

    // 2. إعداد الـ hook form مع الـ zodResolver
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    // 3. دالة معالجة الإرسال الفعلي إلى الـ API
    const onSubmit = async (data: ContactFormData) => {
        setStatus({ type: null, msg: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus({ type: "success", msg: "Your message has been sent successfully! 🎉" });
                reset(); // تفريغ الحقول بعد النجاح
            } else {
                const errData = await response.json();
                setStatus({ type: "error", msg: errData.message || "Failed to send message." });
            }
        } catch (error) {
            setStatus({ type: "error", msg: "An unexpected error occurred. Please try again later." });
        }
    };

    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center pt-2 sm:pt-20 relative max-w-6xl mx-auto px-4"
        >
            {/* background glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-5 sm:left-10 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-purple-600/20 blur-[100px] sm:blur-[140px]" />
                <div className="absolute bottom-10 right-5 sm:right-10 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-blue-600/20 blur-[100px] sm:blur-[140px]" />
            </div>

            <div className="w-full grid md:grid-cols-2 gap-8 sm:gap-10 items-start">

                {/* LEFT: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl sm:text-3xl text-white md:text-4xl font-bold">
                        Get In Touch
                    </h2>

                    <p className="text-white/60 mt-4 leading-relaxed text-sm sm:text-base">
                        I'm open to internships, freelance work, and collaboration on interesting projects.
                    </p>

                    <div className="mt-5 sm:mt-6 space-y-2 sm:space-y-3 text-white/60 text-sm sm:text-base">
                        <p>📧 rayanbensalem444@gmail.com</p>
                        <p>📍 Algeria</p>
                        <p>💼 Available for freelance</p>
                    </div>

                    {/* social buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-5 sm:mt-6">
                        <Link
                            href="https://github.com/rayanben13"
                            className="text-center px-5 py-2.5 rounded-xl bg-white text-black hover:scale-105 transition font-medium"
                        >
                            GitHub
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/rayan-bensalem-42242a336?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                            className="text-center px-5 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-white transition"
                        >
                            LinkedIn
                        </Link>
                    </div>
                </motion.div>

                {/* RIGHT: FORM */}
                <div className="space-y-4 w-full">
                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 space-y-3 sm:space-y-4"
                    >
                        {/* حقل البريد الإلكتروني مع التحقق */}
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                {...register("email")}
                                className={`w-full p-3 rounded-xl bg-black/40 border outline-none text-white text-sm sm:text-base transition ${errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-white/30"
                                    }`}
                            />
                            {errors.email && (
                                <p className="text-red-400 text-xs mt-1 pl-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* حقل الرسالة مع التحقق */}
                        <div>
                            <textarea
                                placeholder="Your Message"
                                rows={5}
                                {...register("message")}
                                className={`w-full p-3 rounded-xl bg-black/40 border outline-none text-white text-sm sm:text-base transition ${errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-white/30"
                                    }`}
                            />
                            {errors.message && (
                                <p className="text-red-400 text-xs mt-1 pl-1">{errors.message.message}</p>
                            )}
                        </div>

                        {/* زر الإرسال وحالة التحميل */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 bg-white text-black rounded-xl font-medium
                                    hover:scale-[1.02] active:scale-95 transition disabled:opacity-50 disabled:hover:scale-100"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </motion.form>

                    {/* إشعار حالة النجاح أو الفشل */}
                    {status.type && (
                        <div
                            className={`p-3 rounded-xl text-sm text-center border ${status.type === "success"
                                ? "bg-green-500/10 border-green-500/20 text-green-400"
                                : "bg-red-500/10 border-red-500/20 text-red-400"
                                }`}
                        >
                            {status.msg}
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}