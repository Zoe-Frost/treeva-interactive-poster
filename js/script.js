gsap.registerPlugin(MotionPathPlugin);

const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".vine"); 
const restartButton = document.querySelector(".background");
const c = document.querySelector(".c");

let isPaused = false(); 


playButton.addEventListener("click", () => {
    if (!isCLicked) {
        animation.play();
    }
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

restartButton.addEventListener("hover", () => {
    animation.restart();
    animation.pause();
});


let animation = gsap.to(
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

