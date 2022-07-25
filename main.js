nose_x = 0;
nose_y = 0;

function preload(){
image101 = loadImage("https://i.postimg.cc/QMNZbjBT/A-Mustache-Looks-Like-a-Big-Hairy-Smile.png")
}

function setup(){
canvas = createCanvas(275, 275);
canvas.center();
video = createCapture(VIDEO);
video.size(275, 275);
video.hide();

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses)
}

function draw(){
image(video, 0, 0, 275, 275);
image(image101, nose_x - 53, nose_y - 25, 100, 80);

}

function takeimg1(){
    save('myImage.png');
}

function modelLoaded(){
    console.log("Posenet has been intialised");
}   

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}