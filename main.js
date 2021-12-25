img = "";
status = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Cocossd Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#05f5b1");
    text("dog", 45, 75);
    noFill();
    stroke("#29f505");
    rect(30, 60, 450, 350);

    fill("#05f5b1");
    text("cat", 320, 120);
    noFill();
    stroke("#29f505");
    rect(300, 90, 270, 325);
}