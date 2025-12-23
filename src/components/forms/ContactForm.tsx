"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Input, Textarea } from "@/components/ui";
import { Text } from "@/components/ui";

interface FormData {
  nombre: string;
  email: string;
  servicio: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  mensaje?: string;
}

const servicios = [
  { value: "", label: "Selecciona un servicio" },
  { value: "comunicacion", label: "Comunicacion Estrategica" },
  { value: "fotografia", label: "Fotografia de Marca" },
  { value: "arte", label: "Creacion Artistica" },
  { value: "clases", label: "Clases Virtuales" },
  { value: "otro", label: "Otro / No estoy seguro" },
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    servicio: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email valido";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ nombre: "", email: "", servicio: "", mensaje: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[var(--mercuria-navy)] mb-2">
          ¡Mensaje enviado!
        </h3>
        <Text muted>
          Gracias por contactarnos. Te responderemos lo antes posible.
        </Text>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          name="nombre"
          label="Nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          error={errors.nombre}
          required
        />
      </div>

      <div>
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--mercuria-navy)] mb-2">
          Servicio de interes
        </label>
        <select
          name="servicio"
          value={formData.servicio}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--mercuria-cyan)] focus:border-transparent transition-all"
        >
          {servicios.map((servicio) => (
            <option key={servicio.value} value={servicio.value}>
              {servicio.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Textarea
          name="mensaje"
          label="Mensaje"
          placeholder="Contanos sobre tu proyecto o consulta..."
          value={formData.mensaje}
          onChange={handleChange}
          error={errors.mensaje}
          rows={5}
          required
        />
      </div>

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
          Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
}
