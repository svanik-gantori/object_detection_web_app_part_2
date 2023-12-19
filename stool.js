img="";
status="";

function preload()
{
    img=loadImage('stool.jpeg');
}

function setup()
{
    canvas=createCanvas(400,380);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw()
{
    image(img,0,0,400,380);
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }

    console.log(results);
}