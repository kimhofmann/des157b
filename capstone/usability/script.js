(function() {
  'use strict';
  console.log ('reading js')

  alert('this is a heavy work in progress, the only current functionality is attached to one button')


  let pathRight = anime.path('#demo-svg-right')
  let pathLeft = anime.path('#demo-svg-left')

  

  const answerYes = document.querySelector('#yes');
  const aboutButton = document.querySelector('#about')

  answerYes.addEventListener('click', function(){

    document.getElementById('movingright1').className = "show"
    document.getElementById('staticright1').className = "hidden"
    document.getElementById('movingleft1').className = "show"
    document.getElementById('staticleft1').className = "hidden"
    document.getElementById ('questioncontainer').className = "fadeOut"

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





})()