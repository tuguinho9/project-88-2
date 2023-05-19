
// Crie uma variável canvas
canvas = new fabric.Canvas("myCanvas");
//Defina as posições iniciais da bola e do buraco.
ball_X = 0;
ball_Y = 0;
holeX = 800;
holeY = 400;
block_image_width = 5;
block_image_height = 5;

function loadImg(){
	// Escreva o código para enviar a imagem da bola de golfe ao canvas
	fabric.Image.fromURL("golf-h.png", function (img){
		hole = img;
		hole.scaleToWidth(50);
		hole.scaleToHeight(50);
		hole.set({
			top: holeY, left: holeX
		});
		canvas.add(hole);
	});
	newImage();
}

function newImage()
{
	// Escreva o código para enviar a imagem da bola ao canvas
	fabric.Image.fromURL("ball.png", function(img){
		ball = img;
		ball.scaleToWidth(50);
		ball.scaleToHeight(50);
		ball.set({
			top: ball_Y, left: ball_X
		});
		canvas.add(ball);
	});
}
loadImg()
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	if((ball_X==holeX) && (ball_Y==holeY)){
		canvas.remove(ball);
		document.getElementById("hd3").innerHTML = "Você atingiu o objetivo!!";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Escreva o código para mover a bola para cima.
		if(ball_Y>=0){
			ball_Y = ball_Y - block_image_height;
			canvas.remove(ball);
			newImage();
		}
	}

	function down()
	{
		 // Escreva o código para mover a bola para baixo.
		 if(ball_Y<=400){
			ball_Y = ball_Y + block_image_height;
			canvas.remove(ball);
			newImage();
		}
	}

	function left()
	{
		if(ball_X>=0)
		{
			// Escreva o código para mover a bola para a esquerda.
			ball_X = ball_X - block_image_height;
			canvas.remove(ball);
			newImage();
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			// Escreva o código para mover a bola para a direita.
			ball_X = ball_X + block_image_height;
			canvas.remove(ball);
			newImage();
		}
	}
	
}