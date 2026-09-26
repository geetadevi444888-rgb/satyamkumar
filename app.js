 function flipcard() {
            const card = document.getElementById("authcard");
            card.classList.toggle("flipped");
        }

        function togglePassword(inputId, buttonEl) {
            const passwordInput = document.getElementById(inputId);
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                buttonEl.style.opacity = "0.5";
            } else {
                passwordInput.type = "password";
                buttonEl.style.opacity = "1";
            }
        }