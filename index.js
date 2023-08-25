const genetate = document.querySelector(".btnGenerate");
const screen = document.querySelector(".screen");
const colorName = document.querySelector(".colorName");
const btnStop = document.querySelector(".btnStop");



const randonColorGenerator = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`

}


//After clicking genetate it change its colour===================>
// genetate.addEventListener("click", () => {
//     screen.style.backgroundColor = randonColorGenerator();
//     colorName.textContent = screen.style.backgroundColor;
// });


// btnStop.addEventListener("click", () => {
//     screen.style.backgroundColor = 'white';
//     colorName.textContent = 'None';
// })




// Randomly Generate the colour ================================>

genetate.addEventListener("click", () => {
    const id = setInterval(() => {
        screen.style.backgroundColor = randonColorGenerator();
        colorName.textContent = screen.style.backgroundColor;
    }, 1000);

    btnStop.addEventListener("click", () => {
        screen.style.backgroundColor = randonColorGenerator();;
        colorName.textContent = `${screen.style.backgroundColor} ✅`;
        clearInterval(id);
    });
});


