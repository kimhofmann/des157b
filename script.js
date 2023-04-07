(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section')
    const image = document.getElementById("myImg")

    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            button.innerHTML = 'go to sleep'
            for (const section of sections) {
                section.className = 'switch';
            }
            image.src = "images/lightmode.png"
        
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            image.src = "images/darkmode.png"
            button.innerHTML = 'wake up'
            mode = 'dark'
        }
    })
})()