const confettiBtn = document.querySelector(".confetti-button");

confettiBtn.addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    const container = document.querySelector(".wrapper");

    canvas.width = 600;
    canvas.height = 600;
    container.appendChild(canvas);

    const confetti_btn = confetti.create(canvas);

    confetti_btn().then(() => canvas.remove());
});

