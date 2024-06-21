document.addEventListener('DOMContentLoaded', () => {
    const openNavBtn = document.getElementById('symbol-nav-open').addEventListener('click', openNav);
    const closeNavBtn = document.getElementById('symbol-nav-close').addEventListener('click', closeNav);

    const products = [
        {
            imgSrc: "Assests/vanilla-ms-pic.webp",
            productName: "Java Chip Frapuccino",
            productDescription: "Mocha sauce and Frappuccino® chips blended with with Frappuccino® roast coffee and milk and ice, then topped with whipped vanilla topping and mocha drizzle to bring you endless java joy.",
            price: "₹ 383.25"
        }
    ]
});

function openNav() {
    const secNav = document.querySelector('.second-nav')
    const closeNavBtn = document.getElementById('symbol-nav-close')
    if (closeNavBtn.style.display = 'none') {
        const openNavBtn = document.getElementById('symbol-nav-open')
        secNav.style.display = 'block';
        openNavBtn.style.display = 'none';
        closeNavBtn.style.display = 'block';
    }
}

function closeNav() {
    const secNav = document.querySelector('.second-nav')
    const closeNavBtn = document.getElementById('symbol-nav-close')
    if (closeNavBtn.style.display = 'none') {
        const openNavBtn = document.getElementById('symbol-nav-open')
        secNav.style.display = 'none';
        openNavBtn.style.display = 'block';
        closeNavBtn.style.display = 'none';
    }
}