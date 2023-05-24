(function() {
  'use strict';
  console.log ('reading js')


  let path = anime.path('#demo-svg path')

  var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 3000
  });
  
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