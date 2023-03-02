function preload(){


}
function setup(){
canvas=createCanvas(500,350)
canvas.center(); 
video= createCapture(VIDEO);
video.size(350,500)
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
   image(video,0,0,500,350)

}
function take_snapshot(){
  save('myFilterImage.png')


}
function modelLoaded(){
  console.log('posenet is initialised')


}
function gotPoses(results){
if(results.length>0)
{
  console.log(results);
  console.log("nose x ="+ results[0].pose.nose.x);
  console.log("nose y ="+ results[0].pose.nose.y);
}
}
