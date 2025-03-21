
        // Simulação do efeito de digitação
        const text = "Full-Stack Developer";
        let index = 0;
        function typeEffect() {
            if (index < text.length) {
                document.getElementById("typingText").textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 100); // Velocidade da digitação
            }
        }
        document.addEventListener("DOMContentLoaded", typeEffect);
