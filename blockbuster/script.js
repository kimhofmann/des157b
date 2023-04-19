(function(){
    const fs = document.querySelector(".fa-expand");
    const myVideo = document.getElementById("myVid");
    let doneResizing;

    //preloader animations
    window.addEventListener('load', function () {

		const preloader = document.getElementById('preloader');


        function loadingScreen () {
            preloader.className='fadeOut'
        }

        setInterval(loadingScreen, 2000);

        function loadingDisplay () {
            preloader.style.display="none"
        }

        setInterval(loadingDisplay, 5000);



        let counter = 0;
        const lineIds = ['one', 'two', 'three', 'four'];
        function fadeInLine(counter){
            document.querySelector(`#${lineIds[counter]}`).className = 'fadeIn';
            setTimeout(function(){
                document.querySelector(`#${lineIds[counter]}`).className = 'fadeOut';
                if(counter < lineIds.length-1){
                    counter++;
                } else {
                    counter = 0;
                }
                fadeInLine(counter);
            }, 2100);
        }

        fadeInLine(counter);

        fs.addEventListener("click", function(){
            if(!document.fullscreenElement){
                document.documentElement.requestFullscreen();
            }
            else{
                document.exitFullscreen();
            }
        });


    });
    
})();