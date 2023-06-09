(function() {
  'use strict';
  console.log ('reading js')


  let path = anime.path('#demo-svg path')

  const answerYes = document.querySelector('#yes');

  answerYes.addEventListener('click', function(){
    var tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 3000
    });
    tl
    .add({
      targets: '.movingright',
      translateX: path('x'),
      translateY: path('y'),
      delay: anime.stagger(400)
    })
    .add({
      targets: '.movingleft',
      translateX: -1200,
      delay: anime.stagger(400)
    }, '-=3500') // relative offset
  })
  
  // Add children
  tl
  .add({
    targets: '.movingright',
    translateX: path('x'),
    translateY: path('y'),
    delay: anime.stagger(400)
  })
  .add({
    targets: '.movingleft',
    translateX: -1200,
    delay: anime.stagger(400)
  }, '-=3500') // relative offset

})()