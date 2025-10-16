var faces =[6]

function preload()
{
    faces[0] = new Image(); faces[0].src = "public/Images/dice-1.png"
    faces[1] = new Image(); faces[0].src = "public/Images/dice-2.png"
    faces[2] = new Image(); faces[0].src = "public/Images/dice-3.png"
    faces[3] = new Image(); faces[0].src = "public/Images/dice-4.png"
    faces[4] = new Image(); faces[0].src = "public/Images/dice-5.png"
    faces[5] = new Image(); faces[0].src = "public/Images/dice-6.png"
}

function roll(imgElement)
{
    let face = Math.floor(Math.random() * 6)
    imgElement.src = faces[face].src;
}