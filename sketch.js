let width = window.innerWidth, height = window.innerHeight;

const one_dig = -Math.PI / 30;

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

  let ellipseSize = scale * 0.1;

  translate(width / 2, height / 2, 80);//これ別の方法あった気がする

  //文字盤
  for (let i = 12; i >= 1; i--) {
    let num_x = cos((Math.PI / 6) * i - (Math.PI / 2));
    let num_y = sin((Math.PI / 6) * i - (Math.PI / 2));

    push();
    text(`${i}`, scale * (num_x - 0.025), scale * (num_y + 0.025));//苦し紛れな微調整
    pop();
  }

  //秒針
  let s_x = sin(date.getSeconds() * one_dig + Math.PI);
  let s_y = cos(date.getSeconds() * one_dig + Math.PI);
  push();
  fill(255, 0, 0);
  ellipse(s_x * scale, s_y * scale, ellipseSize);
  pop();

  //分針
  let m_x = sin(date.getMinutes() * one_dig + Math.PI);
  let m_y = cos(date.getMinutes() * one_dig + Math.PI);
  push();
  fill(0, 255, 0);
  ellipse(m_x * scale, m_y * scale, ellipseSize);
  pop();

  //時針
  let h_x = sin(date.getHours() * -Math.PI / 6 + Math.PI);
  let h_y = cos(date.getHours() * -Math.PI / 6 + Math.PI);
  push();
  fill(0, 0, 255);
  ellipse(h_x * scale, h_y * scale, ellipseSize);
  pop();
}

function windowResized() {
  width = window.innerWidth;
  height = window.innerHeight;

  resizeCanvas(width, height);

  if (width > height) {
    scale = height / 3;
  }
  else {
    scale = width / 3;
  }
  textSize(0.1 * scale);
}