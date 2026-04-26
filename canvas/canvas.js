
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


const radius = 40;           
let x = radius;            
const y = canvas.height / 2; 


let speed = 3; 


const speedSlider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');


speedSlider.addEventListener('input', function() {
    speed = parseFloat(this.value);
    speedValue.textContent = speed;
});


function animate() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#4fc3f7';   
    ctx.fill();
    ctx.strokeStyle = '#0288d1'; 
    ctx.lineWidth = 3;
    ctx.stroke();

    
    x += speed;

    
    if (x - radius > canvas.width) {
        x = -radius; 
    }

    
    requestAnimationFrame(animate);
}


animate();

console.log('Задания выполнены:');
console.log('1. Canvas 600×400 — создан');
console.log('2. Круг нарисован — через arc() + fill() + stroke()');
console.log('3. Круг движется слева направо — через изменение X');
console.log('4. При достижении края возвращается в начало — через проверку if');
console.log('5. Скорость меняется — через ползунок (speed)');