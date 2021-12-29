// function asyncCss() {
//     let css = document.createElement('link');
//     ccs.rel = 'stylesheet';
//     css.href = href;
//     document.head.appendChild(css);
// }

// asyncCss('')

(function () {
    let canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d')
    w = canvas.width = 1340,
        h = canvas.height = innerHeight,
        particles = [],
        properties = {
            bgColor: 'rgba(17, 17, 19, 1)',
            particleColor: 'rgba(255, 40, 40, 1)',
            particleRadius: 3,
            particleCount: 60,
            particleMaxVelocity: 0.5,
            lineLenght: 150,
            particleLife: 6

        }
    document.querySelector('.head').appendChild(canvas);

    window.onresize = function () {
        w = canvas.width = innerWidth,
            h = canvas.height = innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
            this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
            this.life = Math.random() * properties.particleLife * 60;
        }
        position() {
            this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0 ? this.velocityX *= -1 : this.velocityX;
            this.y + this.velocityY > h && this.velocityY > 0 || this.x + this.velocityY < 0 && this.velocityY < 0 ? this.velocityY *= -1 : this.velocityY;
            this.x += this.velocityX;
            this.y += this.velocityY;

        }
        reDraw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
            ctx.fillStyle = properties.particleColor;
            ctx.fill();
        }
        reCalculateLife() {
            if (this.life < 1) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                this.life = Math.random() * properties.particleLife * 60;
            }
            this.life--;
        }
    }

    function reDrawBackground() {
        ctx.fillStyle = properties.bgColor;
        ctx.fillRect(0, 0, w, h,);
    }

    function drawLines() {
        let x1, y1, x2, y2, lenght, opacity;
        for (let i in particles) {
            for (let j in particles) {
                x1 = particles[i].x;
                y1 = particles[i].y;
                x2 = particles[j].x;
                y2 = particles[j].y;
                lenght = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                if (lenght < properties.lineLenght) {
                    opacity = 1 - lenght / properties.lineLenght;
                    ctx.lineWidth = '0,5';
                    ctx.strokeStyle = 'rgba(255, 40, 40, ' + opacity + ')';
                    ctx.beginPath()
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.closePath();
                    ctx.stroke()
                }
            }
        }
    }

    function reDrawParticles() {
        for (let i in particles) {
            particles[i].reCalculateLife();
            particles[i].position();
            particles[i].reDraw();
        }
    }

    function loop() {
        reDrawBackground();
        reDrawParticles();
        drawLines();
        requestAnimationFrame(loop);
    }

    function init() {
        for (let i = 0; i < properties.particleCount; i++) {
            particles.push(new Particle);
        }
        loop();
    }

    init();

}())

//Кнопка
const slideSource = document.getElementById('slideSource');
let pocik = document.getElementById('cybr')

   

pocik.onclick = function() {
      let myaudio = document.getElementById("pocikAudo");
      if(myaudio.paused == true)
      {
        document.getElementById("pocikAudo").play();
 }
      else if (myaudio.paused == false)
      {
        document.getElementById("pocikAudo").pause();
}
slideSource.classList.add('fade');
    }


    //Бегущая строка
//     let wrapper = document.querySelector('.marquee-wrapper'),
//     marquee = document.querySelector('.marquee'),   
//     wrapperWidth = wrapper.offsetWidth,
//     marqueeWidth = marquee.scrollWidth;
    
// function move() {
//     let currentTX = getComputedStyle(marquee).transform.split(',');
//   if( currentTX[4] === undefined ) {
//     currentTX = -1;
//   } else {
//     currentTX = parseFloat(currentTX[4]) - 1;
//   }
  
//   if(-currentTX >= marqueeWidth) {
//     marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';
  
//   } else {
//     marquee.style.transform = 'translateX(' + currentTX + 'px)';
//   }
// }

// let interval = setInterval(move, 3.5);
