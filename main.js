img = ""; 
Status = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetecter = ml5.objectDetecter('cocoSsd', modelLoaded) ;
    document.getElementById("status").innerHTML = "status : Detecting object";
}

function modelLoaded()
{
  console.log("modelLoaded!")
  Status = true;
  objectDetecter.detect(img, gotresult);
}

function gotresult(error, results)
{
  if(error)
  {
    console.log(error);
  }
  console.log(results);
}

function Draw()
{
  image(img, 0, 0, 640, 420);
  fill("#FF0000");
  text("Dog", 45, 75);
  noFill();
  stroke("#FF0000");
  rect(30, 60, 450, 350);

  fill("#FF0000");
  text("Cat", 320, 120);
  noFill();
  stroke("FF0000");
  rect(300, 90, 270, 320);

}