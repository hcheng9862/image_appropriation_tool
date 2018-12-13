var dropzone;
function setup(){

  createCanvas(800, 600);
  background(0);

dropzone = select('#dropzone');
dropzone.dragOver(highlight);
dropzone.dragLeave(unhighlight);
dropzone.drop(gotFile, unhighlight);
}



function draw() {


}

function gotFile(file){

  let img = createImg(file.data);
  img.hide();

  image(img, 0, 0, 800, 600);

}

function highlight(){

  console.log( "HIGHTLIGHT!" );
  dropzone.style('background-color', '#ccc');
}

function unhighlight(){
  dropzone.style('background-color','#fff');
}
