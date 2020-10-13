// Constants
const SEGMENTED_CONTROL_BASE_SELECTOR = ".segment";
const SEGMENTED_CONTROL_INDIVIDUAL_SEGMENT_SELECTOR = ".segment .option input";
const SEGMENTED_CONTROL_BACKGROUND_PILL_SELECTOR = ".segment .selection";


// Main
document.addEventListener("DOMContentLoaded", setup);

// Body functions
function setup() {
    forEachElement(SEGMENTED_CONTROL_BASE_SELECTOR, elem => {
        elem.addEventListener("change", updatePillPosition);
    })
    window.addEventListener("resize", updatePillPosition); // Prevent pill from detaching from element when window resized. Becuase this is rare I haven't bothered with throttling the event
}

function updatePillPosition() {
    forEachElement(SEGMENTED_CONTROL_INDIVIDUAL_SEGMENT_SELECTOR, (elem, index) => {
        if (elem.checked) moveBackgroundPillToElement(elem, index);
    })
}

function moveBackgroundPillToElement(elem, index) {
    document.querySelector(SEGMENTED_CONTROL_BACKGROUND_PILL_SELECTOR).style.transform = "translateX(" + (elem.offsetWidth * index) + "px)";
}

// Helper functions
function forEachElement(className, fn) {
    Array.from(document.querySelectorAll(className)).forEach(fn);
}

// Show tab
function tab1(){
    document.getElementById('tabs').classList.remove('tab1--active');
    document.getElementById('tabs').classList.remove('tab2--active');
    document.getElementById('tabs').classList.remove('tab3--active');
    document.getElementById('tabs').classList.remove('tab4--active');
    document.getElementById('tabs').classList.add('tab1--active');
    document.getElementById('tab1__content').classList.add('segment__content--active');
    document.getElementById('tab2__content').classList.remove('segment__content--active');
    document.getElementById('tab3__content').classList.remove('segment__content--active');
    document.getElementById('tab4__content').classList.remove('segment__content--active');
}

function tab2(){
    document.getElementById('tabs').classList.remove('tab1--active');
    document.getElementById('tabs').classList.remove('tab2--active');
    document.getElementById('tabs').classList.remove('tab3--active');
    document.getElementById('tabs').classList.remove('tab4--active');
    document.getElementById('tabs').classList.add('tab2--active');
    document.getElementById('tab1__content').classList.remove('segment__content--active');
    document.getElementById('tab2__content').classList.add('segment__content--active');
    document.getElementById('tab3__content').classList.remove('segment__content--active');
    document.getElementById('tab4__content').classList.remove('segment__content--active');
}

function tab3(){
    document.getElementById('tabs').classList.remove('tab1--active');
    document.getElementById('tabs').classList.remove('tab2--active');
    document.getElementById('tabs').classList.remove('tab3--active');
    document.getElementById('tabs').classList.remove('tab4--active');
    document.getElementById('tabs').classList.add('tab3--active');
    document.getElementById('tab1__content').classList.remove('segment__content--active');
    document.getElementById('tab2__content').classList.remove('segment__content--active');
    document.getElementById('tab3__content').classList.add('segment__content--active');
    document.getElementById('tab4__content').classList.remove('segment__content--active');
}

function tab4(){
    document.getElementById('tabs').classList.remove('tab1--active');
    document.getElementById('tabs').classList.remove('tab2--active');
    document.getElementById('tabs').classList.remove('tab3--active');
    document.getElementById('tabs').classList.remove('tab4--active');
    document.getElementById('tabs').classList.add('tab4--active');
    document.getElementById('tab1__content').classList.remove('segment__content--active');
    document.getElementById('tab2__content').classList.remove('segment__content--active');
    document.getElementById('tab3__content').classList.remove('segment__content--active');
    document.getElementById('tab4__content').classList.add('segment__content--active');
}
