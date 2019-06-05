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
        this.y = 30
    }
}

let tabPetals = []

function createPetals(){
  

    let newPetal = new petalsDetails
    newPetal.x = PetalsNotesDetailsX[Math.floor((Math.random())*9)]
    tabPetals.push(newPetal)
}

createPetals()

//DELETE PETALS IF PETALS  OUT ---------------------------------->

/*function deletePetalsX(i)
{
  if(tabPetals[i].x>windowWidth)
  {
    tabPetals.splice(i,1)
  }
}

function deletePetalsY(i)
{
  if(tabPetals[i].y>windowHeight)
  {
    tabPetals.splice(i,1)
  }
}*/


//LOOP FUNCTION-------------------------------->


const loop =()=>{
    window.requestAnimationFrame(loop)
    context.clearRect(0,0,windowWidth,windowHeight)
    resize()

    timer++
    if (timer == 60)
    {
        createPetals()
        timer =0
    }

    //DRAW PETALS

    

        for (let i = 0 ; i < tabPetals.length; i++){

            tabPetals[i].y += 5
            tabPetals[i].x -= 2


            context.beginPath()
            context.fillStyle='#272727'
            context.moveTo(tabPetals[i].x, tabPetals[i].y)
            context.lineTo((tabPetals[i].x)*0.5, (tabPetals[i].y)*0.8)
            context.lineTo((tabPetals[i].x)*1.2, (tabPetals[i].y))

            context.fill()
            
        }


} 

loop()

console.log(tabPetals)