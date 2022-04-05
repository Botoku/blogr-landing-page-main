'use strict'
const hamburger = document.querySelector('.hamburger')
const mobileLinkContainer = document.querySelector('.mobile-link-container')
const closeIcon = document.getElementById('mobile-close-icon')


const selector = document.querySelectorAll('.selector')

selector.forEach(function(item,i, items){
   
    item.addEventListener('click', function(){
        item.parentElement.classList.toggle('mobile-active')
    })
} )


hamburger.addEventListener('click', function(){
    mobileLinkContainer.classList.add('mobile-link-container-activated')
    hamburger.style.display='none'
})

closeIcon.addEventListener('click', function(){
    mobileLinkContainer.classList.remove('mobile-link-container-activated')
    hamburger.style.display='block'
})