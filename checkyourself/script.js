
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
        scoreDiv.innerHTML = ''
        scoreDiv.innerHTML = `<p class="data">End: ${globalData["end1"]["end"]}</p>`
        scoreDiv.innerHTML += `<p class="data">Round Score: ${globalData["end1"]["score"]}</p>`
        scoreDiv.innerHTML += `<p class="data"> Total: ${globalData["end1"]["sum"]}</p>`
    });

    end2.addEventListener('click', function(){
        targetFace.src = "images/end2.svg"
        scoreDiv.innerHTML = ''
        scoreDiv.innerHTML = `<p class="data">End: ${globalData["end2"]["end"]}</p>`
        scoreDiv.innerHTML += `<p class="data">Round Score: ${globalData["end2"]["score"]}</p>`
        scoreDiv.innerHTML += `<p class="data"> Total: ${globalData["end2"]["sum"]}</p>`
    });

    end3.addEventListener('click', function(){
        targetFace.src = "images/end3.svg"
        scoreDiv.innerHTML = ''
        scoreDiv.innerHTML = `<p class="data">End: ${globalData["end3"]["end"]}</p>`
        scoreDiv.innerHTML += `<p class="data">Round Score: ${globalData["end3"]["score"]}</p>`
        scoreDiv.innerHTML += `<p class="data"> Total: ${globalData["end3"]["sum"]}</p>`
    });

    end4.addEventListener('click', function(){
        targetFace.src = "images/end4.svg"
        scoreDiv.innerHTML = ''
        scoreDiv.innerHTML = `<p class="data">End: ${globalData["end4"]["end"]}</p>`
        scoreDiv.innerHTML += `<p class="data">Round Score: ${globalData["end4"]["score"]}</p>`
        scoreDiv.innerHTML += `<p class="data"> Total: ${globalData["end4"]["sum"]}</p>`
    });

    end5.addEventListener('click', function(){
        targetFace.src = "images/end5.svg"
        scoreDiv.innerHTML = ''
        scoreDiv.innerHTML = `<p class="data">End: ${globalData["end5"]["end"]}</p>`
        scoreDiv.innerHTML += `<p class="data">Round Score: ${globalData["end5"]["score"]}</p>`
        scoreDiv.innerHTML += `<p class="data"> Total: ${globalData["end5"]["sum"]}</p>`
    });

    end6.addEventListener('click', function(){
        targetFace.src = "images/end6.svg"
        scoreDiv.innerHTML = ''
        scoreDiv.innerHTML = `<p class="data">End: ${globalData["end6"]["end"]}</p>`
        scoreDiv.innerHTML += `<p class="data">Round Score: ${globalData["end6"]["score"]}</p>`
        scoreDiv.innerHTML += `<p class="data"> Total: ${globalData["end6"]["sum"]}</p>`
    });

    totalScore.addEventListener('click', function(){
        targetFace.src = "images/total.svg"
        scoreDiv.innerHTML = ''
        scoreDiv.innerHTML = `<p class="data">Final Score: 255</p>`
    });


})();