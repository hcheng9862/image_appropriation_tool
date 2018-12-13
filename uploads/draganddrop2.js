function(setup){
 var canvas = createCanvas(800, 600);
 background(0);

 canvas.drop(gotFile);
}

function gotFile(file){
 createP(file.name + " " + file.size);
 var img = createImg(file.data;)
 img.hide();

 image(img, 0, 0 ,800, 600);
}
