(function() {
  'use strict';
  console.log ('reading js')

    // parse function //

  Parse.initialize("xwexble1IZSw0jpOXCPrLSW6u5hFyH7wJeOEQkRx", "y02Us1fj4E8hq4OqcndxH0WD3Qtv9zjvDPYdbOUd");
  Parse.serverURL = "https://parseapi.back4app.com/";

// generates and pulls random question //

async function fetchAllQuestions() {
  // Create a Parse Query for the "Questions" class
  const Questions = Parse.Object.extend("Questions");
  const query = new Parse.Query(Questions);

  try {
    // Fetch all the questions using the find() method
    const questions = await query.find();
    console.log("Questions fetched:", questions); // Debug: Log the fetched questions
    return questions;
  } catch (error) {
    console.error("Failed to fetch questions, with error code:", error.message);
    return [];
  }
}

  async function getRandomQuestion() {
    const Questions = Parse.Object.extend("Questions");
    const query = new Parse.Query(Questions);
    const count = await query.count();
    console.log("Total questions count:", count);

    if (count === 0) {
        console.error("No questions found in the Questions table.");
         null;
    }

    const randomIndex = Math.floor(Math.random() * count);
    query.skip(randomIndex);
    query.limit(1);
    const [randomQuestion] = await query.find();

    if (!randomQuestion) {
        console.error("Failed to fetch a random question.");
        return null;
    }

    console.log("Random question fetched:", randomQuestion);
    return randomQuestion;
}

async function displayRandomQuestion() {
    const question = await getRandomQuestion();
    document.getElementById("questionText").innerText = question.get("questionText");
    window.currentQuestion = question;
  }
  
displayRandomQuestion();



// calculates percentage and submits counts back to Back4App //

function calculatePercentage(question, answer) {
  const yesCount = question.get("yesCount") || 0;
  const noCount = question.get("noCount") || 0;
  const totalCount = yesCount + noCount;

  if (totalCount === 0) {
    return 0;
  }

  const answerCount = answer === "yes" ? yesCount : noCount;
  return (answerCount / totalCount) * 100;
}

async function submitAnswer(answer) {
  const question = window.currentQuestion;
  if (answer === "yes") {
    question.increment("yesCount");
  } else {
    question.increment("noCount");
  }
  await question.save();

  const percentage = calculatePercentage(question, answer);
  document.getElementById("answerText").innerHTML = `<span id="answerTextPercent">${percentage.toFixed(2)}%</span> of people answered the same as you `;

}


// random consts and lets //

  let pathRight = anime.path('#demo-svg-right')
  let pathLeft = anime.path('#demo-svg-left')

  const myOverlays = document.querySelectorAll('.overlay');
  

  const answerYes = document.querySelector('#yesButton');
  const answerNo = document.querySelector('#noButton')

  const aboutButton = document.querySelector('#about')
  const quesButton = document.querySelector('#questions')
  const submitButton = document.querySelector('#submit')
  const aboutusButton = document.querySelector('#aboutUs')
  const startButton = document.querySelector('#startbutton')
  const closeButton = document.querySelectorAll('.close')
  const anotherQuestionButton = document.querySelector('#anotherQuestion')


//submission form functionality//

document.getElementById("submissionForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var submission = document.getElementById("submission").value;
  var submissionData = {
      "submission": submission
  };

  // Save the data to Back4App
  saveToBack4App(submissionData);

  // Hide the form elements
  var formElements = document.querySelectorAll("#submissionForm > *");
  formElements.forEach(function(element) {
    element.style.display = 'none';
});

  // Display the thank you message inside the submissionForm
  var thankYouMessage = document.createElement("p");
  thankYouMessage.innerHTML = "Thank you for submitting your feedback. <br> We appreciate your help with our project :)";
  document.getElementById("submissionForm").appendChild(thankYouMessage);

    // Add a button
    var closeButton = document.createElement("button");
    closeButton.innerHTML = "Close";
    document.getElementById("submissionForm").appendChild(closeButton);
  
    // Trigger a function when the button is clicked
    closeButton.addEventListener("click", function() {
      window.location.reload();
    });
});

async function saveToBack4App(submissionData) {
  const Submission = Parse.Object.extend("Submission");
  const submissionObject = new Submission();
  
  submissionObject.set("submission", submissionData.submission);
  
  try {
      const result = await submissionObject.save();
      console.log("Submission saved:", result);
  } catch (error) {
      console.error("Error while saving submission:", error);
  }
}

async function displayQuestions() {
  const questions = await fetchAllQuestions();
  const questionsList = document.getElementById('questionsList');

  if (questions.length === 0) {
    questionsList.innerHTML = '<p>No questions found.</p>';
  } else {
    questionsList.innerHTML = questions.map(question => {
      const yesCount = question.get("yesCount") || 0;
      const noCount = question.get("noCount") || 0;
      const totalCount = yesCount + noCount;
      const percentageYes = totalCount === 0
        ? 0
        : calculatePercentage(question, "yes");
      const percentageNo = totalCount === 0
        ? 0
        : calculatePercentage(question, "no");

      return (`<p class="questionListText" >${question.get('questionText')}</p>
          <div id="percentagesFlex">
          <p class="questionListYes">Yes:<span class="questionListPercent" >${percentageYes.toFixed(2)}%</span></p>
          <p class="questionListNo">No:<span class="questionListPercent" > ${percentageNo.toFixed(2)}%</span></p>
          </div>`
      );
    }).join('');
  }
}

// Call the displayQuestions function
displayQuestions();



  // button functions //

  answerYes.addEventListener('click', function(){

    submitAnswer("yes");

    document.getElementById('movingright1').className = "show"
    document.getElementById('staticright1').className = "hidden"
    document.getElementById('movingright2').className = "show"
    document.getElementById('staticright2').className = "hidden"
    document.getElementById('movingright3').className = "show"
    document.getElementById('staticright3').className = "hidden"
    document.getElementById('movingright4').className = "show"
    document.getElementById('staticright4').className = "hidden"
    document.getElementById('movingright5').className = "show"
    document.getElementById('staticright5').className = "hidden"
    document.getElementById('movingleft1').className = "show"
    document.getElementById('staticleft1').className = "hidden"
    document.getElementById('movingleft2').className = "show"
    document.getElementById('staticleft2').className = "hidden"
    document.getElementById('movingleft3').className = "show"
    document.getElementById('staticleft3').className = "hidden"
    document.getElementById('movingleft4').className = "show"
    document.getElementById('staticleft4').className = "hidden"
    document.getElementById('movingleft5').className = "show"
    document.getElementById('staticleft5').className = "hidden"

    document.getElementById ('questioncontainer').className = "fadeOut"

    var tl = anime.timeline({
      easing: 'linear',
      duration: 2000,

    
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
    }, '-=1257' ) // relative offset
    .add({
      targets: '#movingright2',
      translateX: pathRight('x'),
      translateY: pathRight('y'),
    }, '-=1700') // relative offset
    .add({
      targets: '#movingright3',
      translateX: pathRight('x'),
      translateY: pathRight('y'),
    }, '-=2200') // relative offset
    .add({
      targets: '#movingright4',
      translateX: pathRight('x'),
      translateY: pathRight('y'),
    }, '-=2400') // relative offset
    .add({
      targets: '#movingright5',
      translateX: pathRight('x'),
      translateY: pathRight('y'),
    }, '-=2500') // relative offset
    .add({
      targets: '#movingleft2',
      translateX: pathLeft('x'),
      translateY: pathLeft('y'),
    }, '-=2500') // relative offset
    .add({
      targets: '#movingleft3',
      translateX: pathLeft('x'),
      translateY: pathLeft('y'),
    }, '-=2200') // relative offset
    .add({
      targets: '#movingleft4',
      translateX: pathLeft('x'),
      translateY: pathLeft('y'),
    }, '-=2000') // relative offset
    .add({
      targets: '#movingleft5',
      translateX: pathLeft('x'),
      translateY: pathLeft('y'),
    }, '-=2600') // relative offset


   setTimeout (function(){
    document.getElementById ('displayanswerbox').className = "fadeIn"
   }, 3100);
  
  })

  answerNo.addEventListener('click', function(){

    submitAnswer("no");

    document.getElementById('movingright1').className = "show"
    document.getElementById('staticright1').className = "hidden"
    document.getElementById('movingright2').className = "show"
    document.getElementById('staticright2').className = "hidden"
    document.getElementById('movingright3').className = "show"
    document.getElementById('staticright3').className = "hidden"
    document.getElementById('movingright4').className = "show"
    document.getElementById('staticright4').className = "hidden"
    document.getElementById('movingright5').className = "show"
    document.getElementById('staticright5').className = "hidden"
    document.getElementById('movingleft1').className = "show"
    document.getElementById('staticleft1').className = "hidden"
    document.getElementById('movingleft2').className = "show"
    document.getElementById('staticleft2').className = "hidden"
    document.getElementById('movingleft3').className = "show"
    document.getElementById('staticleft3').className = "hidden"
    document.getElementById('movingleft4').className = "show"
    document.getElementById('staticleft4').className = "hidden"
    document.getElementById('movingleft5').className = "show"
    document.getElementById('staticleft5').className = "hidden"

    document.getElementById ('questioncontainer').className = "fadeOut"

    var tl = anime.timeline({
      easing: 'linear',
      duration: 2000,

    
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
    }, '-=1257' ) // relative offset
    .add({
      targets: '#movingright2',
      translateX: pathRight('x'),
      translateY: pathRight('y'),
    }, '-=1700') // relative offset
    .add({
      targets: '#movingright3',
      translateX: pathRight('x'),
      translateY: pathRight('y'),
    }, '-=2200') // relative offset
    .add({
      targets: '#movingright4',
      translateX: pathRight('x'),
      translateY: pathRight('y'),
    }, '-=2400') // relative offset
    .add({
      targets: '#movingright5',
      translateX: pathRight('x'),
      translateY: pathRight('y'),
    }, '-=2500') // relative offset
    .add({
      targets: '#movingleft2',
      translateX: pathLeft('x'),
      translateY: pathLeft('y'),
    }, '-=2500') // relative offset
    .add({
      targets: '#movingleft3',
      translateX: pathLeft('x'),
      translateY: pathLeft('y'),
    }, '-=2200') // relative offset
    .add({
      targets: '#movingleft4',
      translateX: pathLeft('x'),
      translateY: pathLeft('y'),
    }, '-=2000') // relative offset
    .add({
      targets: '#movingleft5',
      translateX: pathLeft('x'),
      translateY: pathLeft('y'),
    }, '-=2600') // relative offset

    setTimeout (function(){
      document.getElementById ('displayanswerbox').className = "fadeIn"
     }, 3100);
    

  })

  startButton.addEventListener('click', function() {
    document.getElementById ('landingpagebox').className = "hidden"
    document.getElementById ('questioncontainer').className = "fadeIn"
    
  })


  document.querySelectorAll(".close").forEach((button) => {
    button.addEventListener("click", function() {
      window.location.reload();
    });
  });


  anotherQuestionButton.addEventListener('click', function (){
    displayRandomQuestion();

    document.getElementById ('displayanswerbox').className = "hidden"
    document.getElementById ('questioncontainer').className = "fadeIn"
    
  })


  // pop out overlays //
  
  aboutButton.addEventListener('click', function() {
    myOverlays.forEach(function( eachOverlay ){
      eachOverlay.className = "overlay hidden"
    });
    document.getElementById ('questioncontainer').className = "hidden"
    document.getElementById ('landingpagebox').className = "hidden"
    document.getElementById ('displayanswerbox').className = "hidden"
    document.getElementById ('aboutbox').className = "fadeIn"
    
  
  })

  quesButton.addEventListener('click', function() {
    myOverlays.forEach(function( eachOverlay ){
      eachOverlay.className = "overlay hidden"
    });
    document.getElementById ('questioncontainer').className = "hidden"
    document.getElementById ('landingpagebox').className = "hidden"
    document.getElementById ('displayanswerbox').className = "hidden"
    document.getElementById ('questionbox').className = "fadeIn"


  })

  submitButton.addEventListener('click', function() {
    myOverlays.forEach(function( eachOverlay ){
      eachOverlay.className = "overlay hidden"
    });
    document.getElementById ('questioncontainer').className = "hidden"
    document.getElementById ('landingpagebox').className = "hidden"
    document.getElementById ('displayanswerbox').className = "hidden"
    document.getElementById ('submitbox').className = "fadeIn"


    
  })

  aboutusButton.addEventListener('click', function() {
    myOverlays.forEach(function( eachOverlay ){
      eachOverlay.className = "overlay hidden"
    });
    document.getElementById ('questioncontainer').className = "hidden"
    document.getElementById ('landingpagebox').className = "hidden"
    document.getElementById ('displayanswerbox').className = "hidden"
    document.getElementById ('aboutusbox').className = "fadeIn"

    
  })

})()