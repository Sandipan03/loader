// document.addEventListener("DOMContentLoaded", function() {
//     const loaderText = document.querySelector('.loader-text');
//     const messages = ["getting ready...", "Please wait", "Almost there", "Just a moment"];
//     let index = 0;

//     function changeLoaderText() {
//         loaderText.innerHTML = messages[index];
//         index = (index + 1) % messages.length;
//     }

//     setInterval(changeLoaderText, 1500);
    
// });
// gsap.from(".loader",{
//     duration: 1,
    
//     opacity:0
// })
gsap.to(".wrap-loader",{
    delay: 8,
    duration: 1,
    opacity: 0,
    // scale: 0,
    rotate: 270
    // ease: "power1.inOut"
})
gsap.to(".home",{
    delay: 9,
    duration: 2,
    // opactiy:0,
    scale: 1.4,
    display: "block",
    
})