const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "red";
dodger.style.bottom = "50px";
dodger.style.left = "180px"; // Set an initial left value

function moveDodgerLeft() {
    const leftNumber = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumber, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const leftNumber = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumber, 10);
    const rightEdge = 180

    if (left <= rightEdge ) { // Prevent going off the right edge
       //console.log( dodger.style.left = `${left + 1}px`);
       dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
