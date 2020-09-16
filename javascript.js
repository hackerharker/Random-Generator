function generate() {

    // put this into a function so that it can be called repeatedly
    let canvasElement = document.getElementById('myCanvas');
    let ctx = canvasElement.getContext('2d');
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    ctx.fillStyle = "#696969";
    ctx.strokeStyle = "#A9A9A9";


    for (var row=0; row<100; row=row+1)
    {
        // Draw one row of rectangles
        for(var col= 0; col<100; col= col+1)
        {
            randomY=Math.random()*10
            randomX= Math.random()*20
            ctx.fillRect((col*15)+ randomX, (row*7), 15, 7);
            ctx.strokeRect((col*15)+ randomX, (row*7), 15, 7);
        
        } 
    }
}

ctx.fillRect((col*15)+randomX, (row*7)+randomY, 15, 7);
ctx.strokeRect((col*15)+randomX, (row*7)+randomY, 15, 7);