'use client';
import { useState, FormEvent } from "react";
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import backgroundImage from '../assets/images/background-image-contact.webp';

const Contact = () => {
    const [formData, setFormData] = useState({
        domain: "Hanuskowy Torcik", // used for my common template in emailJS
        name: "",
        email: "",
        message: "",
    });

    // ToDo add notifications
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;
        emailjs.sendForm(serviceID, templateID, form, userID)
            .then(() => {
                console.log("sended")
            }, (error) => {
                console.log("error")
                console.log(error)
            });
        form.reset();
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

            <div className="relative max-w-2xl mx-auto px-4 py-16">
                <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-primary text-center mb-8">
                        Skontaktuj się ze mną
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white"
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
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white"
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
                                required
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white"
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-accent transition-colors shadow-md hover:shadow-lg"
                        >
                            Wyślij wiadomość
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;