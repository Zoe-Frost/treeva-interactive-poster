
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause"); 
const restartButton = document.querySelector("#reset");
const animation = gsap.timeline({ paused: true });

let isPaused = true; 


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



animation
    .to(
        ".c",
        {
            y: 82,
            x: -160,
            duration: 1,
            ease: "bounce.out"

        }
    )
    .to(
        ".l",
        {
            y: 170,
            x: -285,
            duration: 1,
            ease: "bounce.out"
        }
    )
    .to(
        ".i",
        {
            y:260,
            x:70,
            duration:1,
            ease:"bounce.out"
        }
    )
    .to(
        ".m",
        {
           y:370,
           x:-75,
           duration:1,
           ease:"bounce.out"
        }
    )
    .to(
        ".b",
        {
           y:528,
           x:-10,
           duration:1,
           ease:"bounce.out"
        }
    )
    .to(
        ".e",
        {
           y:424,
           x:356,
           duration:1,
           ease:"bounce.out"
        }
    )
    .to(
        ".r",
        {
           y:620,
           x:426,
           duration:1,
           ease:"bounce.out"
        }
    )

