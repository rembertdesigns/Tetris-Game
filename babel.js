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