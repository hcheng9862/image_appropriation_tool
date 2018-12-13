
let canvas;

let img, bg, hover;

let cyanslider, magentaslider, yellowslider;
let cyan, magenta, yellow;






function setup() {

    canvas = createCanvas( 800, 600 ) .drop(gotFile) .dragOver(highlight) .dragLeave(redraw);
    bg = color(0o200);
    hover = color('pink');

    textAlign(CENTER).textSize(32).textStyle(BOLD);
    fill('white').noStroke();


    //textbutton = createButton ('Text');
    //textbutton.mousePressed(textinput);


    bwbutton = createButton('BW filter');
    bwbutton.mousePressed(bwfilter);

    invertbutton = createButton('Invert');
    invertbutton.mousePressed(invert);

    blurbutton = createButton('Blur');
    blurbutton.mousePressed(blur);

    posterizebutton = createButton('Deep Fry');
    posterizebutton.mousePressed(posterize);

    cmybutton = createButton('CMY');
    cmybutton.mousePressed(cmyslider);


    watermarkbutton  = createButton('Watermark');
    watermarkbutton.mousePressed(watermark);

    savebutton = createButton('Save');
    savebutton.mousePressed(savejpg);

    //resetbutton = createButton('Reset');
    //resetbutton.mousePressed(resetSketch);
}



function draw() {

    if (img) {

        image( img, 0, 0, width, height );

    }


    background(bg);
    if (img) image(img, 0, 0, width, height);
    else text('Drag an image file onto the canvas.', width>>1, height>>1);

    stroke(255);
    if (mouseIsPressed === true){
      line (mouseX, mouseY, pmouseX, pmouseY);


    }

    //text(watermarktext.value(), 10, 20);


}

function gotFile( file ) {

    console.log( "got file" );

    img = loadImage( file.data, redraw );

    }

function highlight(evt){
  this.background(hover);
  evt.preventDefault();
}


function watermark(){
  watermarktext = createInput ('Type your watermark');
}


function bwfilter(){
  img.filter('GRAY');
}

function invert(){
  img.filter('INVERT');
}

function blur(){
  img.filter('BLUR', 3);
}

function posterize(){
  img.filter(POSTERIZE, 3);
}

function cmyslider(){
  cyanslider = createSlider(0, 255, 0);
  magentaslider = createSlider(0, 255, 0);
  yellowslider = createSlider(0, 255, 0);

  // remaps a set of values in a range
  //map(valuetoBeMapped, original lo, original hi, new lo, new hi)
  cyan = map(cyanslider.value(), 0, 255, 255, 0);
  tint (255, 255, 0, cyanslider.value());
  magenta = map(magentaslider.value(), 0, 255, 255, 0);
  tint (255, 0, 255, magentaslider.value());
  yellow = map(yellowslider.value(), 0, 255, 255, 0);
  tint (255, 255, 0, yellowslider.value());


}

function savejpg(){
  save('myWork.jpg');
}
