console.log
import { gsap } from "gsap";

const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause"); 
const restartButton = document.querySelector(".reset");

let isPaused = false(); 



playButton.addEventListener("click", () => {
    animation.play();
});

pauseButton.addEventListener("click", () =>{
    if (!isPaused) {
        animation.pause();
    } else {
        animation.play();
    }

    isPaused = !isPaused
});

restartButton.addEventListener("click", () => {
    animation.restart();
    animation.pause();
});




gsap.to(
    ".c",
    {
        y:82,
        x:-160,
        duration: 1,
        ease:"bounce.out"

    }
);

gsap.to(
    ".l",
    {
        y:170,
        x:-285,
        duration:1,
        ease:"bounce.out"
    }
);

gsap.to(
    ".i",
    {
        y:260,
        x:70,
        duration:1,
        ease:"bounce.out"
    }
);

gsap.to(
    ".m",
    {
        y:370,
        x:-75,
        duration:1,
        ease:"bounce.out"
    }
);

gsap.to(
    ".b",
    {
        y:528,
        x:-10,
        duration:1,
        ease:"bounce.out"
    }
);

gsap.to(
    ".e",
    {
        y:424,
        x:356,
        duration:1,
        ease:"bounce.out"
    }
);

gsap.to(
    ".r",
    {
        y:620,
        x:426,
        duration:1,
        ease:"bounce.out"
    }
);

