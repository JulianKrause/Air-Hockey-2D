const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "#ff0000"
ctx.fillRect(100, 100, 50, 50);

ctx.beginPath();
c