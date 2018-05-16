let space = document.getElementById('spacing');
let blur = document.getElementById('blur');
let color = document.getElementById('color');
let pic = document.getElementById('pic');

space.addEventListener('change',spaceChange);
blur.addEventListener('change',blurChange);
color.addEventListener('change',colorChange);

//初始狀態
function initial(){
  pic.style.setProperty('--spacing', `${space.value}px`);
  pic.style.setProperty('--blur', `${blur.value}px`);
  pic.style.setProperty('--color', `${color.value}`);
}
initial();

//邊框改變
function spaceChange(){
  pic.style.setProperty('--spacing', `${space.value}px`);
}

//模糊改變
function blurChange(){
  pic.style.setProperty('--blur', `${blur.value}px`);
}

//背景色改變
function colorChange(){
  pic.style.setProperty('--color', `${color.value}`);
}