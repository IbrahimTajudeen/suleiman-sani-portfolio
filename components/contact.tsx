/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { sub } from "framer-motion/client";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageCircle,
  Clock,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showState, setShowState] = useState(false);

  interface FormData {
    name: string;
    subject: string;
    email: string;
    message: string;
  }

  interface FormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    subject: HTMLInputElement;
    email: HTMLInputElement;
    message: HTMLTextAreaElement;
  }

  interface ContactFormElement extends HTMLFormElement {
    readonly elements: FormElements;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as ContactFormElement;
    const formData: FormData = {
      name: form.elements.name.value,
      subject: form.elements.subject.value,
      email: form.elements.email.value,
      message: form.elements.message.value,
    };

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.currentTarget.reset();
    } else {
      setSuccess(false);
      alert("Failed to send message.");
      console.log((await res.json()).error);
    }
    setShowState(true);
  }



  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: CONTACT FORM */}
        <div className="lg:col-span-2 h-fit border border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Send Me a Message
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name *
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-md text-sm border border-gray-300 p-2 focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full rounded-md border text-sm border-gray-300 px-4 py-2 focus:ring-2 focus:ring-black outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Subject *
              </label>
              <input
                name="subject"
                type="text"
                placeholder="What's this about?"
                className="w-full rounded-md border text-sm border-gray-300 px-4 py-2 focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message *
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project, design challenges, and any specific requirements..."
                className="w-full rounded-md border text-sm border-gray-300 px-4 py-3 focus:ring-2 focus:ring-black outline-none resize-none"
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full flex items-center text-sm justify-center gap-2 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              <Send size={18} />
              {loading ? "Sending..." : "Send Message"}
            </button>
            <p className={
              (success ? "bg-green-300 text-green-700 " : "bg-red-300 text-red-700 ") +
              (showState ? "block " : "hidden ") +
              "text-sm mt-2 p-2 rounded-md text-center"
            }>
              {success ? "Message sent successfully!" : "Failed to send message."}
            </p>
          </form>
        </div>

        {/* RIGHT: INFO CARDS */}
        <div className="space-y-6">
          {/* GET IN TOUCH */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>

            <div className="space-y-4 text-sm">
              <InfoItem icon={<Mail />} title="Email" value="suleimansani62@gmail.com" />
              <InfoItem icon={<Phone />} title="Phone" value="07061386294" />
              <InfoItem icon={<MapPin />} title="Location" value="Kaduna, Nigeria" />
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>

            <ActionItem
              icon={<Calendar />}
              title="Schedule a Call"
              desc="Book a 30-minute design consultation"
              button="Schedule Now"
            />

            <ActionItem
              icon={<MessageCircle />}
              title="Quick Chat"
              desc="Send me a direct message"
              button="Start Chat"
            />

            <ActionItem
              icon={<Clock />}
              title="Project Inquiry"
              desc="Discuss your design project needs"
              button="Get Quote"
            />
          </div>

          {/* SOCIAL */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>

            <div className="flex gap-3">
              <SocialIcon icon={<Twitter />} />
              <SocialIcon icon={<Instagram />} />
              <SocialIcon icon={<Linkedin />} />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-20 border-t pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Suleiman Sani. All rights reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900">Terms of Service</a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPONENTS ---------------- */

function InfoItem({ icon, title, value }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 bg-gray-100 rounded-md text-gray-700">
        {icon}
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}

function ActionItem({ icon, title, desc, button }: any) {
  return (
    <div className="flex gap-3 mb-5">
      <div className="p-2 bg-blue-100 text-blue-600 rounded-md h-fit">
        {icon}
      </div>
      <div>
        <p className="font-medium text-[18px]">{title}</p>
        <p className="text-sm text-gray-600 mb-2">{desc}</p>
        <button className="text-sm border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-50">
          {button}
        </button>
      </div>
    </div>
  );
}

function SocialIcon({ icon }: any) {
  return (
    <button className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition">
      {icon}
    </button>
  );
}
