"use client";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import commons_components from "../utils/commons_components.json";

export default function WhatsAppFloatingButton() {
  const { phoneNumber_whatsapp } = commons_components;
  const phoneNumber = phoneNumber_whatsapp;

  return (
    <Link
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
    >
      <MessageCircle className="w-6 h-6" />
    </Link>
  );
}
