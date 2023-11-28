'use strict'
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');


for(let i = 0;i<btnOpenModal.length;i++){
    btnOpenModal[i].addEventListener('click',function(){
        console.log("Button clicked");
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

for(let i =0;i<btnCloseModal.length;i++){
    btnCloseModal[i].addEventListener('click',function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    })
   
}
overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});


const keydown =  function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
document.addEventListener('keydown',function(e){
       if (e.key ==='Escape'){
        if(!modal.classList.contains('hidden')){
           keydown();
        }
    }
});
