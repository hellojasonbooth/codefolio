
// html setup
const pupilsTag = document.getElementsByClassName('pupil')
const pupilsArray = Array.from(pupilsTag)


// object for mouse inputs
const input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: 0,
  },
  mouseY: {
    start: 0,
    end: window.innerHeight,
    current: 0,
  },
};

// the range is end minus the start = window width 
input.mouseX.range = input.mouseX.end - input.mouseX.start
input.mouseY.range = input.mouseY.end - input.mouseY.start

// object for mouse output
const output = {
  x: {
    start: -85,
    end: 85,
    current: 0,
  },
  y: {
   start: -85,
   end: 85,
   current: 0, 
  },
};

output.x.range = output.x.end - output.x.start
output.y.range = output.y.end - output.y.start


const handleMouseMove = function (event) {
  // mouse x
  input.mouseX.current = event.pageX
  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range
  
  // mouse y
  input.mouseY.current = event.pageY
  input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range
  
  // output x
  output.x.current = output.x.start + (input.mouseX.fraction * output.x.range)
  output.x.opposite = output.x.end - (input.mouseX.fraction * output.x.range)
  
  // output y
  output.y.current = output.y.start + (input.mouseY.fraction * output.y.range)
  output.y.opposite = output.y.end - (input.mouseY.fraction * output.y.range)
  
  
  // apply x to html
  pupilsArray.forEach(function (pupil, k) {
    pupil.style.transform = 'translate(' + output.x.current + 'px, '+ output.y.current + 'px)'
  })
  
}

const handleResize = function () {
  input.mouseX.end = window.innerWidth
  input.mouseX.range = input.mouseX.end - input.mouseX.start
  
  input.mouseY.end = window.innerHeight
  input.mouseY.range = input.mouseY.end - input.mouseY.start
}


const blink = function () {
  
  const eyelids = document.querySelectorAll('section div.eyelid')
  
  eyelids.forEach(lid => {
    lid.classList.add('animated')
    
    lid.addEventListener('animationend',  function() {
		lid.classList.remove('animated')
    
		})
	})
}



// function for mousemove
window.addEventListener('mousemove', handleMouseMove)
// function to handle browser resize
window.addEventListener('resize', handleResize)
// function for click
document.addEventListener('click', function () {
  blink()
})


