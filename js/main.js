function designCanv() {
  var color1 = document.getElementById("clr1").value;
  var color2 = document.getElementById("clr2").value;
  var canv = document.getElementById("CanvasTag");
  var ctx = canv.getContext("2d");
  var grd = ctx.createRadialGradient(300, 150, 0, 300, 200, 600);
  grd.addColorStop(0, color1);
  grd.addColorStop(1, color2);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 900, 450);
}