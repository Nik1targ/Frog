const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect(10,10,55,50);

ctx.fillStyle = "rgba(0,0,200,0.5)";
ctx.fillRect(30,30,55,50);



ctx.shadowColor = "rgba(0,0,0, 0.35)";
ctx.shadowBlue = 12;
ctx.shadowOffsetX = 8;
ctx.shadowOffsetX  = 8;


ctx.fillStyle = "#ffd166";
ctx.fillRect(60, 60, 160, 100);


ctx.shadowColor = "rgba(0,0,0, 0.4)";
ctx.shadowBlur = 8;
ctx.shadowOffsetX = 4;
ctx.shadowOffsetX = 4;

ctx.lineWidth = 8;
ctx.strokeStyle = "#118ab2";

ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(250, 200);
ctx.stroke();




ctx.shadowColor = "rgba(0,0,0, 0.5)";
ctx.shadowBlur = 6;
ctx.shadowOffsetX = 3;
ctx.shadowOffsetX = 3;



ctx.font = "32px Arial";
ctx.fillStyle = "#ffffff";
ctx.fillText("Canvas!", 60, 80);



const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
const data = imageData.data;


for(let i = 0; i < data.lenght; i += 4 ) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const gray = (r + g + b) / 3;

    data[i] = gray;
    data[i + 1] = gray;
    data[i + 2] = gray;
}
                                                                     

ctx.putImageData(imageData, 0, 0);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              