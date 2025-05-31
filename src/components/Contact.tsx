'use client';
import { useState, FormEvent } from "react";
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import backgroundImage from '../assets/images/wood_background.webp';
import About from "@/components/About";

const Contact = () => {
    const [formData, setFormData] = useState({
        domain: "Hanuskowy Torcik", // used for my common template in emailJS
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const form = e.target as HTMLFormElement;
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

        emailjs.sendForm(serviceID, templateID, form, userID)
            .then(() => {
                console.log("Wiadomość wysłana pomyślnie");
                setSubmitStatus('success');
                setFormData({
                    domain: "Hanuskowy Torcik",
                    name: "",
                    email: "",
                    message: "",
                });
            }, (error) => {
                console.log("Błąd podczas wysyłania wiadomości");
                console.log(error);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="min-h-screen pt-24 md:pt-16 relative">
            <Image
                src={backgroundImage}
                alt="Background"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/30" />

            <About />
            <section
                id="contact"
            >
                <div className="relative max-w-2xl mx-auto px-4 py-16">
                    <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                        <h1 className="text-3xl font-bold text-primary text-center mb-8">
                            Skontaktuj się ze mną
                        </h1>

                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-light text-accent rounded-md">
                                Wiadomość została wysłana pomyślnie!
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-light text-accent rounded-md">
                                Niestety wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie za chwilę lub skontaktuj sie ze mną mailowo:
                                <div><b>magda.wizen@gmail.com</b></div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="hidden"
                                name="domain"
                                value={formData.domain}
                            />

                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Imię i nazwisko
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="mt-1 block w-full min-h-[30px] pl-3 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full min-h-[30px] pl-3 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Wiadomość
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="mt-1 block w-full min-h-[30px] pl-3 pt-2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 px-4 rounded-md shadow-md hover:shadow-lg transition-colors ${
                                    isSubmitting
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-primary text-white hover:bg-accent"
                                }`}
                            >
                                {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;