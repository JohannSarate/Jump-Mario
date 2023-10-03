const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const score = document.querySelector('.score')
let finalScore = 0

const text = document.querySelector('h1')
const hide = document.querySelector('.btn')

const jump = () =>{
    mario.classList.add('jump')

    setTimeout(() =>{
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(()=> {

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
    

       if (pipePosition <= 120 && pipePosition > 0 && marioPosition< 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = '/images/game-over.png'
        mario.style.width ='75px'
        mario.style.marginLeft = '50px'
        
        text.innerHTML = 'GAME OVER'
        score.innerHTML = `${finalScore}`

        hide.classList.remove('hide')

        clearInterval(loop)

    } else if (marioPosition >= 80 && pipePosition <= 120 && pipePosition <= 0 ){
        finalScore += 10
        score.innerHTML = `${finalScore}`

    } else if (finalScore > 300 && finalScore < 1000) {

        document.querySelector('.pipe').style.animationDuration = "2s"
        document.querySelector('.game-board').style.background = 'linear-gradient(#c5cb19 , #e0f6ff)'
        
    } else if (finalScore > 1000) {
        document.querySelector('.pipe').style.animationDuration = "1s"
        document.querySelector('.game-board').style.background = 'linear-gradient(#08171c , #e0f6ff)'
    }
       
}, 10)

document.addEventListener('keydown', jump)

