const buttons = document.querySelectorAll('.box');
const body = document.querySelector("body");


buttons.forEach(function(box)
{
    console.log(box);
    box.addEventListener('click',function(e)
    {
        const color = e.target.id;
        if(color === 'purple')
        {
            body.style.backgroundColor = getRandomRGBColors();
        }
        else{
            body.style.backgroundColor = color;
        }
    });
});
function getRandomRGBColors(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}