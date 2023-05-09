var typed = new Typed('#typed', {
    stringsElement: '#typed-strings'
  });


  let w = 1400;
  let h = 740;
  let scl = 20;
  let cols;
  let rows;
  let yoff = 0.0;
  let margin = 0;
  
  function setup() {
    createCanvas(1400, 740);
    cols = (w - margin * 1) / scl;
    rows = (h - margin * 1) / scl;
  }
  
  function draw() {
    let xoff = 0.0;
    background(000);
    
    for (let y = 0; y <= h; y += scl) {
      strokeWeight(1.5);
      stroke(255, 255, 255);
      noFill();
      
      beginShape();
      
      for (let x = 0; x <= w; x += scl) {
          let noiseScale = map(noise(x * xoff, yoff), 0, 1, -100, 20)
        
              curveVertex(x + margin, (y + noiseScale) + margin);
        xoff += 0.000005;
      }
      
      yoff += 0.0001;
  
      endShape();
    }
  }