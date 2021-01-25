let permissionGranted = false;
let angle = 0

var allImages = [];
var totalImages = 20;
var index=0 ;

function preload(){
  for (var i =0; i < totalImages; i++){
    allImages[i] = loadImage(i+".jpg");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  setShakeThreshold(50);
  
  if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {
    DeviceOrientationEvent.requestPermission()
    .catch(()=> {
      let button;
      button = createButton("Clcik to allow");
      button.style("font-size", "24px");
      button.center();
      button.mousePressed( requestAccess );
      throw error;
    })
    .then(() => {
          permissionGranted = true;
    })
    
  } else{
    permissionGranted = true;
  }
}

function requestAccess() {
  DeviceOrientationEvent.requestPermission()
    .then(response => {
      if(response == 'granted') {
        permissionGranted=true;
      } else{
        permissionGranted = false;
      }
  })
  .catch(console.error);
  
   this.remove();  
}


function draw() {
  if(!permissionGranted) return;
  
   background(239,235,230);
  
  push();
  imageMode(CENTER);
  image(allImages[index],0,0,windowWidth,windowHeight);
  pop();
  
  ambientLight(239,235,230);
  directionalLight(80,80,80,0,0,-10);

  
  push();
  rectMode(CENTER);
  fill(239,235,230);
  rotateY(millis()/2500);
  rotateZ(millis()/2000);
  translate(width/2,height/2,10);
  ellipsoid(120,280,120,5,3);

  rectMode(CENTER);
  fill(239,235,230);
  rotateY(millis()/2500);
  rotateZ(millis()/2000);
  translate(width/2,height/2,10);
  ellipsoid(120,280,120,5,3);
  
  rectMode(CENTER);
  fill(239,235,230);
rotateY(millis()/ 2500);
  rotateZ(millis()/1500);
 translate(width/2,height/2,10);
  
  ellipsoid(120,280,120,5,3);
  
  
  pop();
  
  }


function deviceShaken(){
  loop();
  index=round(random(20));
}
  

