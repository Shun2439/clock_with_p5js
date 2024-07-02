let width = window.innerWidth, height = window.innerHeight;

const oneDig = -Math.PI / 30;

let scale;

function setup() {
  createCanvas(width, height);

  scale = Math.min(width, height) / 3;
  textSize(0.1 * scale);
  noStroke();
}

function draw() {
  background(255);
  let date = new Date();

  let handSize = scale * 0.1;

  translate(width / 2, height / 2, 80);//これ別の方法あった気がする

  //文字盤
  for (let i = 12; i >= 1; i--) {
    let numX = cos((Math.PI / 6) * i - (Math.PI / 2));
    let numY = sin((Math.PI / 6) * i - (Math.PI / 2));

    push();
    text(`${i}`, scale * (numX - 0.025), scale * (numY + 0.025));//苦し紛れな微調整
    pop();
  }

  //秒針
  let sX = sin(date.getSeconds() * oneDig + Math.PI);
  let sY = cos(date.getSeconds() * oneDig + Math.PI);
  push();
  fill(255, 0, 0);
  ellipse(sX * scale, sY * scale, handSize);
  pop();

  //分針
  let mX = sin(date.getMinutes() * oneDig + Math.PI);
  let mY = cos(date.getMinutes() * oneDig + Math.PI);
  push();
  fill(0, 255, 0);
  ellipse(mX * scale, mY * scale, handSize);
  pop();

  //時針
  let hX = sin(date.getHours() * -Math.PI / 6 + Math.PI);
  let hY = cos(date.getHours() * -Math.PI / 6 + Math.PI);
  push();
  fill(0, 0, 255);
  ellipse(hX * scale, hY * scale, handSize);
  pop();
}

function windowResized() {
  width = window.innerWidth;
  height = window.innerHeight;

  resizeCanvas(width, height);

  scale = Math.min(width, height) / 3;
  textSize(0.1 * scale);
}