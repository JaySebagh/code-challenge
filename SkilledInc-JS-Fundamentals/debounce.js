// Implement a function called debounce that accepts a function and returns a new function that only allows invocation of the given function after interval milliseconds have passed since the last time the returned function ran.
// If you try to call the function before the interval has passed it should print ’Too fast’
// See function definition and testing setups for more clarifications

function debounce(action, interval) {
  let didRun = false
  const runDate = Date.now()

  function speedCheck(){
    if(!didRun){
      didRun = true
      action()
    } else {
      const elapsedTime = Date.now() - runDate
      if(elapsedTime < interval){
        console.log('too fast')
      } else {
        const toSeconds = ((elapsedTime % 60000) / 1000).toFixed(0)
        console.log(`${action} after ${toSeconds} seconds`)
      }
    }
  }
  return speedCheck
}

//testing setup
const myDebounce = debounce(() => console.log('test'), 1000);

// test 1
// myDebounce(); // test
// myDebounce(); // too fast

// test 2
myDebounce(); // test
setTimeout(myDebounce, 2000); // test after 2 seconds

// // test 3
// myDebounce(); // test
// setTimeout(myDebounce, 900); // too fast
