// Global variable to store original background colors of circles
let originalCircleColors = [];

// Function to move the arrow towards the circle
function hit(circleIndex) {
    const arrow = document.querySelectorAll('.arrow')[circleIndex - 1];
    const circle = document.querySelectorAll('.circle')[circleIndex - 1];

    // Get the center position of the circle
    const circleCenterX = circle.getBoundingClientRect().left + circle.offsetWidth / 2;

    // Get the current position of the arrow
    const arrowStartX = arrow.getBoundingClientRect().left;

    // Calculate the distance to move the arrow
    const distance = circleCenterX - arrowStartX;

    // Move the arrow to the circle's center
    arrow.style.left = `${arrowStartX + distance}px`;

    // Change the circle's color to grey
    circle.style.backgroundColor = 'grey';
}

// Function to reset the app to its initial state
function reset() {
    const arrows = document.querySelectorAll('.arrow');
    const circles = document.querySelectorAll('.circle');

    // Reset arrow position to its initial position
    arrows.forEach(arrow => {
        arrow.style.left = '925px';
    });

    // Reset circle colors to original colors
    circles.forEach((circle, index) => {
        circle.style.backgroundColor = originalCircleColors[index];
    });
}

// Function to store original background colors of circles
window.onload = function () {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        originalCircleColors.push(circle.style.backgroundColor);
    });
}

// Function to move the arrow towards the circle with animation
function hit(circleIndex) {
    const arrow = document.querySelectorAll('.arrow')[circleIndex - 1];
    const circle = document.querySelectorAll('.circle')[circleIndex - 1];

    // Get the center position of the circle
    const circleCenterX = circle.getBoundingClientRect().left + circle.offsetWidth / 2;

    // Get the current position of the arrow
    const arrowStartX = arrow.getBoundingClientRect().left;

    // Calculate the distance to move the arrow
    const distance = circleCenterX - arrowStartX;

    // Move the arrow to the circle's center with animation
    arrow.style.transition = 'left 0.5s ease'; // Adjust timing and effect as needed
    arrow.style.left = `${arrowStartX + distance}px`;

    // Change the circle's color to grey after the animation completes
    setTimeout(() => {
        circle.style.backgroundColor = 'grey';
    }, 500); // Adjust timing to match the transition duration
}
