import { NextRequest, NextResponse } from "next/server";

// Contact form API route
// In production, this would use Resend to send emails
// For now, we'll log the submission and return success

interface ContactFormData {
  nombre: string;
  email: string;
  servicio: string;
  mensaje: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.nombre || !data.email || !data.mensaje) {
      return NextResponse.json(
        { error: "Campos requeridos faltantes" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Email invalido" },
        { status: 400 }
      );
    }

    // In production, send email using Resend
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Mercuria Web <web@mercuria.com.ar>',
    //   to: ['hola@mercuria.com.ar'],
    //   subject: `Nuevo contacto: ${data.nombre}`,
    //   html: `
    //     <h2>Nuevo mensaje de contacto</h2>
    //     <p><strong>Nombre:</strong> ${data.nombre}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Servicio:</strong> ${data.servicio || 'No especificado'}</p>
    //     <p><strong>Mensaje:</strong></p>
    //     <p>${data.mensaje}</p>
    //   `,
    // });

    // For development, log the submission
    console.log("Contact form submission:", data);

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Error al procesar el mensaje" },
      { status: 500 }
    );
  }
}
