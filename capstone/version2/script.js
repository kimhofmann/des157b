(function() {
  'use strict';
  console.log ('reading js')


  let pathRight = anime.path('#demo-svg-right')
  let pathLeft = anime.path('#demo-svg-left')

  const myOverlays = document.querySelectorAll('.overlay');



  

  const answerYes = document.querySelector('#yes');
  const answerNo = document.querySelector('#no')

  const aboutButton = document.querySelector('#about')
  const quesButton = document.querySelector('#questions')
  const submitButton = document.querySelector('#submit')
  const aboutusButton = document.querySelector('#aboutUs')
  const startButton = document.querySelector('#startbutton')

  const closeButton = document.querySelectorAll('.close')

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

    document.getElementById('displayanswerbox').className = "fadeIn"
  })

  answerNo.addEventListener('click', function(){

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


   
    setTimeout(function () { document.getElementById('displayanswerbox').className = "fadeIn"}, 4000);
  })

  startButton.addEventListener('click', function() {
    document.getElementById ('landingpagebox').className = "fadeOut"
    setTimeout(function () {document.getElementById('landingpagebox').style.zIndex = "-1"}, 1000);
    
  })



  // pop out overlays //
  
  aboutButton.addEventListener('click', function() {
    myOverlays.forEach(function( eachOverlay ){
      eachOverlay.className = "overlay hidden"
    });
    document.getElementById ('questioncontainer').className = "hidden"
    document.getElementById ('landingpagebox').className = "hidden"
    document.getElementById ('aboutbox').className = "fadeIn"
    
  
  })

  quesButton.addEventListener('click', function() {
    myOverlays.forEach(function( eachOverlay ){
      eachOverlay.className = "overlay hidden"
    });
    document.getElementById ('questioncontainer').className = "hidden"
    document.getElementById ('landingpagebox').className = "hidden"
    document.getElementById ('questionbox').className = "fadeIn"


  })

  submitButton.addEventListener('click', function() {
    myOverlays.forEach(function( eachOverlay ){
      eachOverlay.className = "overlay hidden"
    });
    document.getElementById ('questioncontainer').className = "hidden"
    document.getElementById ('landingpagebox').className = "hidden"
    document.getElementById ('submitbox').className = "fadeIn"


    
  })

  aboutusButton.addEventListener('click', function() {
    myOverlays.forEach(function( eachOverlay ){
      eachOverlay.className = "overlay hidden"
    });
    document.getElementById ('questioncontainer').className = "hidden"
    document.getElementById ('landingpagebox').className = "hidden"
    document.getElementById ('aboutusbox').className = "fadeIn"

    
  })

})()