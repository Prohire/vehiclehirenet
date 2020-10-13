let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

let url = new URL(location.href);
let c = url.searchParams.get("form");

if (c && c === "contact") {
    document.documentElement.classList.add('hide--overflow');
    document.getElementById('contact__form').classList.add('site__modal--active');
}

if (c && c === "supplier") {
    document.documentElement.classList.add('hide--overflow');
    document.getElementById('supplier__form').classList.add('site__modal--active');
}

document.getElementById('menuBtn').addEventListener("click", () => {
    document.getElementById('menuBtn').classList.toggle('nav__menu__btn--active');
    document.getElementById('mobileNav').classList.toggle('mobile__nav--active');

    if (document.documentElement.classList.contains('hide--overflow')) {
        document.documentElement.classList.remove('hide--overflow');
    }
});

document.getElementById('supplierBtn').addEventListener("click", () => {
    document.documentElement.classList.add('hide--overflow');
    document.getElementById('supplier__form').classList.add('site__modal--active');
    history.pushState(null, null, "supplier");
});

document.getElementById('contactBtn').addEventListener("click", () => {
    document.documentElement.classList.add('hide--overflow');
    document.getElementById('contact__form').classList.add('site__modal--active');
    history.pushState(null, null, "contact");
});

document.getElementById('contactMobileBtn').addEventListener("click", () => {
    document.documentElement.classList.add('hide--overflow');
    document.getElementById('contact__form').classList.add('site__modal--active');
    history.pushState(null, null, "contact");
});

document.querySelectorAll('.site__modal__close').forEach(item => {
    item.addEventListener('click', event => {
        document.documentElement.classList.remove('hide--overflow');
        document.getElementById('supplier__form').classList.remove('site__modal--active');
        document.getElementById('contact__form').classList.remove('site__modal--active');
    });
});

document.addEventListener('keydown', event => {
    if ( event.keyCode === 27 ) {
        document.documentElement.classList.remove('hide--overflow');
        document.getElementById('supplier__form').classList.remove('site__modal--active');
        document.getElementById('contact__form').classList.remove('site__modal--active');
    }
});

window.addEventListener('popstate', (event) => {
    document.documentElement.classList.remove('hide--overflow');
    document.getElementById('supplier__form').classList.remove('site__modal--active');
    document.getElementById('contact__form').classList.remove('site__modal--active');
});
