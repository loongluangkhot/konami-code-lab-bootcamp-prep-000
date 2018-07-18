const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

// function init() {
//   // `keySequence` will keep track of the last n keystrokes, where n === `codes.length`. `keySequence` will be compared to `codes` for each keydown event.
//   var keySequence = []
  
//   var body = document.querySelector('body')
  
//   body.addEventListener('keydown', function(e) {
//     if (keySequence.length >= codes.length) {
//       keySequence.shift(e.key)
//     }
//     keySequence.push(e.key)
    
//     // console.log(keySequence)
    
//     if (JSON.stringify(keySequence) === JSON.stringify(codes)) {
//       alert("Konami code activated!")
//     }
//   })
// }

let index = 0

function init() {
  let body = document.querySelector('body')
  body.addEventListener('keydown', function(e) {
    const key = e.key
    
    if(e.key === codes[index]) {
      index++
    } else {
      index = 0
    }
    console.log(index)
    if(index === codes.length) {
      alert('Konami code activated!')
    }
  })
}

init()
