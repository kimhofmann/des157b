(function() {
  'use strict';
  console.log ('reading js')


  let pathRight = anime.path('#demo-svg-right')
  let pathLeft = anime.path('#demo-svg-left')

  

  const answerYes = document.querySelector('#yes');

  answerYes.addEventListener('click', function(){

    document.getElementById('movingright1').className = "show"
    document.getElementById('staticright1').className = "hidden"
    document.getElementById('movingleft1').className = "show"
    document.getElementById('staticleft1').className = "hidden"
    document.getElementById ('questioncontainer').className = "fade"

    var tl = anime.timeline({
      easing: 'easeOutInSine',
      duration: 3000,
    
    });
    tl
    .add({
      targets: '#movingright1',
      translateX: pathRight('x'),
      translateY: pathRight('y'),
    })
    .add({
      targets: '#movingleft1',
      translateX: pathLeft('x'),
      translateY: pathLeft('y'),
    }, '-=3000') // relative offset
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