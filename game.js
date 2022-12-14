
import { createBoard } from "./map.js"
import { update as updatePacBOY, draw as drawPacBOy } from "./pacBoy.js"
import {update as updateFood, draw as drawFood} from "./food.js"

let lastRenderTime = 0
const GAME_SPEED = 2
const gameBoard = document.getElementById('game-board')
//const pac = gameBoard.getElementsByClassName('pacboy')

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1/ GAME_SPEED) return
    
    lastRenderTime = currentTime
    console.log('Render')


    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updatePacBOY()
    updateFood()

}

function draw(){
    
    gameBoard.innerHTML =''
    createBoard(gameBoard)
    drawPacBOy(gameBoard)
    drawFood(gameBoard)
    //pac.remove()
    




}
