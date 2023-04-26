
(function() {
    'use strict'
    console.log('reading js')

    const end1 = document.querySelector('#end1');
    const end2 = document.querySelector('#end2');
    const end3 = document.querySelector('#end3');
    const end4 = document.querySelector('#end4');
    const end5 = document.querySelector('#end5');
    const end6 = document.querySelector('#end6');
    const totalScore = document.querySelector('#total');
    const targetFace = document.querySelector('#target')
    const scoreDiv = document.querySelector('#scores')
    const dataP = document.querySelector('#data')

    let globalData;
    async function getData(){
        const jsonScores = await fetch('data/scores.json');
        const data = await jsonScores.json();
        console.log(data);
        globalData = data;
    }

    getData();

    /* im trying to get that json data to appear in the div for each button click but im not sure how to do that */

    end1.addEventListener('click', function(){
        targetFace.src = "images/end1.svg"
        scores.innerhtml = 'please'     
    });

    end2.addEventListener('click', function(){
        targetFace.src = "images/end2.svg"
    });

    end3.addEventListener('click', function(){
        targetFace.src = "images/end3.svg"
    });

    end4.addEventListener('click', function(){
        targetFace.src = "images/end4.svg"
    });

    end5.addEventListener('click', function(){
        targetFace.src = "images/end5.svg"
    });

    end6.addEventListener('click', function(){
        targetFace.src = "images/end6.svg"
    });

    totalScore.addEventListener('click', function(){
        targetFace.src = "images/total.svg"
    });


})();