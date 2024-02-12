const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const over = document.querySelector('.game-board');
const button = document.querySelector('#btn-restart');
var onAir = new Boolean();




const jump = (event) => {
    
    if (event.keyCode === 32 && onAir == false) { // keyCode 32 é o num da tecla espaço
        mario.classList.add('jump');
        onAir = true;

        setTimeout(() => {
            mario.classList.remove('jump');
            onAir = false;
            
        }, 500);

    }
}



button.addEventListener("click", () =>{
    location.reload();
})

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;
    

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition }px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        clearInterval(loop);

        button.className = button.className.replace('hide', 'show');

        
    }
 
} , 10)

    

document.addEventListener('keydown', jump);