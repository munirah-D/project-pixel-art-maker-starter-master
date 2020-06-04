
let Color = document.getElementById("colorPicker");
let GridHeight = document.getElementById("inputHeight");
let GridWidth = document.getElementById("inputWidth");
let pixelCanvas = document.getElementById("pixelCanvas");
let FormSize = document.getElementById("sizePicker");

// When size is submitted by the user, call makeGrid()
FormSize.addEventListener("submit", function(event){
      pixelCanvas.innerHTML = " ";
      event.preventDefault();
      makeGrid();
});

pixelCanvas.addEventListener("click", function(event){
    if (event.target.nodeName === "TD"){
        event.target.style.backgroundColor = Color.value;
    }
})

function makeGrid() {
    let i = 0;
    while ( i < GridHeight.value){
        let row = pixelCanvas.insertRow(0);
        for (let a = 0; a < GridWidth.value; a++){
            row.insertCell(0);
    }
    i++;
}}
makeGrid();
