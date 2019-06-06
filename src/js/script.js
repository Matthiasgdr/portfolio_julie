//SET UP-------------------------->
const $canvas = document.querySelector('.js-canvas')
const context = $canvas.getContext('2d')

let timer = 0
let windowWidth = $canvas.width
let windowHeight = $canvas.height

//RESIZE-------------------------->


const resize = () =>
{
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight

    $canvas.width = windowWidth
    $canvas.height = windowHeight

}



window.addEventListener('resize', resize)
resize()

//CREATE PETALS-------------------------------->


let PetalsNotesDetailsX = [windowWidth/45,(windowWidth/45)*6 ,(windowWidth/45)*11,(windowWidth/45)*16,(windowWidth/45)*21,(windowWidth/45)*26,(windowWidth/45)*31,(windowWidth/45)*36,(windowWidth/45)*41]

class petalsDetails{
    constructor(x,y){
        this.x = x 
        this.y = 0
    }
}

let tabPetals = []

function createPetals(){
  

    let newPetal = new petalsDetails
    newPetal.x = PetalsNotesDetailsX[Math.floor((Math.random())*9)]
    tabPetals.push(newPetal)
}

createPetals()




//LOOP FUNCTION-------------------------------->


const loop =()=>{
    window.requestAnimationFrame(loop)
    context.clearRect(0,0,windowWidth,windowHeight)
    resize()

    timer++
    if (timer == 20)
    {
        createPetals()
        timer =0
    }

    //DRAW PETALS

    

        for (let i = 0 ; i < tabPetals.length; i++){

            tabPetals[i].y += 5
           
            context.beginPath()
            context.rect(tabPetals[i].x,tabPetals[i].y,10,80)
            context.fillStyle = "#272727"
            context.fill()

          
            
        }


} 

loop()

console.log(tabPetals)