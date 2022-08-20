// fix space bar moveBottom() working weird with line -> next piece appears too low
// change tetrominoes appearing -> only first block, not full shape !!
// add mobile swipe


var screen = document.querySelector("#screen");
var previewScreen = document.querySelector("#preview-screen");
// create play screen
for (let i = 0; i<200; i++) {
  createEl("div", "", screen);
}
// create frozen screen
for (let i = 0; i<20; i++) {
  createEl("div", "", screen, "taken");
}
// create preview screen
for (let i = 0; i<20; i++) {
  createEl("div", "", previewScreen);
}

let squares = Array.from(document.querySelectorAll("#screen div"));

const scoreEl = document.querySelector("#score");
const startEl = document.querySelector("#start");
const width = 10;
let nextRandom = 0;
let timerId;
let speed = 500;
let score = 0;
let started = false;
let over = false;
const colors = ["#fdb827", "#542583", "#000000", "#007a33", "#ba9653", "#963821", "#000000"];
// gold, purple, black, green, celtics gold, brown, black

// the tetrominoes
const lt = [
    [1, width+1, width*2+1, width*2+2],
    [width, width+1, width+2, width*2],
    [0, 1, width+1, width*2+1],
    [2, width, width+1, width+2]
  ];
  
  const jt = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [0, width, width+1, width+2]
  ];
  
  const st = [
    [1, width+1, width+2, width*2+2],
    [width+1, width+2, width*2, width*2+1],
    [1, width+1, width+2, width*2+2],
    [width+1, width+2, width*2, width*2+1]
  ];
  
  const zt = [
    [2, width+1, width+2, width*2+1],
    [width, width+1, width*2+1, width*2+2],
    [2, width+1, width+2, width*2+1],
    [width, width+1, width*2+1, width*2+2]
  ];
  
  const tt = [
    [1, width, width+1, width+2],
    [1, width+1, width+2, width*2+1],
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1]
  ];
  
  const ot = [
    [1, 2, width+1, width+2],
    [1, 2, width+1, width+2],
    [1, 2, width+1, width+2],
    [1, 2, width+1, width+2]
  ];
  
  const it = [
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3],
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3]
  ];
  
  const tetrominoes = [lt, jt, st, zt, tt, ot, it];