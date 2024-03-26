noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;




function setup(){
    video=createCapture(VIDEO);
    video.size(500,500)
canvas=createCanvas(500,500);
canvas.position(560.150);
//inicialisando posenet
poseNet=ml5.poseNet(video,modelo_cargado)
//executando modelo
poseNet.on("pose",poses_obtenidas)
}
function modelo_cargado(){
    console.log("soy muy bueno y se inicialiso poseNet")
}
function poses_obtenidas(result){
    if(result.length > 0){
        console.log(result);
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;

        leftWristX=result[0].pose.leftWrist.x;
        rightWristX=result[0].pose.rightWrist.y;
        difference=floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);

    }
}

function draw() {
    background('#969A97');
    
      document.getElementById("square_side").innerHTML = "El alto y ancho del cuadrado será: " + difference +"px";
      fill('#F90093');
      stroke('#F90093');
      square(noseX, noseY, difference);
    }