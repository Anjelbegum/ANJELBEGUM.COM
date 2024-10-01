document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', (event) => {
        createBubbles(event.clientX, event.clientY);
    });
});

function createBubbles(x, y) {
    for (let i = 0; i < 10; i++) {
        let bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${x + Math.random() * 50 - 25}px`;
        bubble.style.width = `${Math.random() * 20 + 10}px`;
        bubble.style.height = `${Math.random() * 20 + 10}px`;
        document.body.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 3000);
    }
}