window.addEventListener('keydown',keyboard);

let list = document.querySelectorAll('div');

function keyboard(e){
  for(let i=0 ; i< list.length ; i++){ //clear highlight
      list[i].classList.remove('light');
  }
  
  for(let i=0 ; i< list.length ; i++){ 
     if(e.keyCode == list[i].dataset.code) 
      list[i].classList.add('light'); //Add highlight
  }
}