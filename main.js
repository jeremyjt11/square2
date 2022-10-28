
diff = 0;
rightW = 0;
leftW = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);


     canvas = createCanvas(550, 500);
     canvas.position(560,150);

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('posen]Net Is initialized  !');
}
function draw(){
    background('#969A97');
    textSize(diff);
    fill('#FFE787');
    text('jeremy',50,400)
    document.getElementById("font_size").innerHTML = "font size of the text will be =" + diff+"px";
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftW = results[0].pose.leftWrist.x;
        rightW = results[0].pose.rightWrist.x;
        diff = floor(leftW - rightW);
        console.log(leftW + rightW);
    }
}