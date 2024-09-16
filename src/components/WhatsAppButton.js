import React from "react";

const WhatsAppButton = () => {
    const whatsappNumber = "593978967634"; // Número de teléfono sin espacios ni símbolos, incluyendo el código del país

    const message = "¡Hola! Me gustaría recibir más información."; // Mensaje predeterminado

    return (
        <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
            aria-label="Chat en WhatsApp"
        >
            <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12 0C5.371 0 0 5.371 0 12c0 2.124.552 4.119 1.601 5.903L0 24l6.231-1.585A11.964 11.964 0 0012 24c6.629 0 12-5.371 12-12S18.629 0 12 0zm0 21.844a9.833 9.833 0 01-4.895-1.314l-.351-.207-3.691.939.984-3.601-.23-.371A9.798 9.798 0 012.166 12c0-5.426 4.409-9.833 9.834-9.833 5.426 0 9.834 4.407 9.834 9.833 0 5.426-4.407 9.834-9.834 9.834zm5.372-7.099c-.295-.148-1.749-.864-2.022-.964-.274-.099-.474-.148-.673.148-.198.297-.768.964-.943 1.162-.174.198-.348.223-.643.074-.295-.148-1.249-.459-2.377-1.462-.878-.784-1.471-1.751-1.646-2.046-.174-.297-.019-.457.13-.606.133-.133.297-.348.446-.522.148-.174.198-.248.297-.423.099-.174.05-.322-.025-.472-.074-.148-.673-1.623-.923-2.226-.244-.585-.491-.501-.673-.51-.173-.008-.372-.01-.572-.01-.199 0-.522.074-.796.372s-1.045 1.02-1.045 2.484c0 1.465 1.073 2.879 1.223 3.074.148.198 2.115 3.242 5.121 4.552.716.309 1.276.494 1.712.633.72.229 1.374.197 1.892.12.577-.086 1.749-.715 1.997-1.407.247-.692.247-1.285.173-1.407-.074-.123-.271-.198-.566-.347z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;
