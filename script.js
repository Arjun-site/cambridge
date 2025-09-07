const list = document.getElementById('notificationList');

function scrollNotification() {
    const first = list.firstElementChild;
    const height = first.offsetHeight;

    // Animate
    list.style.transition = 'transform 0.5s ease';
    list.style.transform = `translateY(-${height}px)`;

    // After animation
    setTimeout(() => {
        list.style.transition = 'none';
        list.appendChild(first);
        list.style.transform = 'translateY(0)';
    }, 500);
}

// Scroll every 2 seconds
setInterval(scrollNotification, 2000);