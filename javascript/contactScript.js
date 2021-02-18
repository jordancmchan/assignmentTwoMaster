const contactForm = {}

contactForm.name = document.querySelector('#name').value;
contactForm.email = document.querySelector('#email').value;
contactForm.message = document.querySelector('#message').value;
contactForm.submitButton = document.querySelector('button');

contactForm.init = function(){
     console.log(contactForm)
     contactForm.name.addEventListener('click', function(){

          console.log('fafs')

     })



}

contactForm.init(); 



