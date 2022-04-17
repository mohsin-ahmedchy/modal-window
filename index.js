const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

function openModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
} 

showModal.forEach(i=>{
    i.addEventListener('click',openModal);
})

function removeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
} 

closeModal.addEventListener('click',removeModal);

overlay.addEventListener('click',removeModal);
//for Escape key:

document.addEventListener('keydown',function(e){
   // console.log(e.key);

    if(e.key==='Escape'&& !modal.classList.contains('hidden')){
         removeModal();
    }
})