// Countdown Logic
const countdown = () => {
    const countDate = new Date("September 22, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Time calculations
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate totals
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    // Update HTML
    if (document.getElementById("days")) document.getElementById("days").innerText = textDay;
    if (document.getElementById("hrs")) document.getElementById("hrs").innerText = textHour < 10 ? "0" + textHour : textHour;
    if (document.getElementById("mins")) document.getElementById("mins").innerText = textMinute < 10 ? "0" + textMinute : textMinute;
    if (document.getElementById("sec")) document.getElementById("sec").innerText = textSecond < 10 ? "0" + textSecond : textSecond;
};

setInterval(countdown, 1000);



// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal-card, .reveal-left, .reveal-right');
if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger the animation for cards in a grid
                const delay = entry.target.classList.contains('reveal-card')
                    ? index * 80
                    : 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
}
