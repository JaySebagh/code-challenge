// https://leetcode.com/problems/teemo-attacking/

// // brainstorm/sudo code
// // create a Set to hold all seconds where Ashe is blinded
// // having a Set allows us to mark every blinded second without overlap

// time limit exceeded due to double loop
const findPoisonedDuration = function(timeSeries, duration) {
    let poisonedSeconds = new Set();
    for(time of timeSeries){
        let currentPoison = Array(duration).fill().map((element, index) => index + time)
        for(second of currentPoison){
            poisonedSeconds.add(second)
        }
    }
    return poisonedSeconds.size
};

console.log(findPoisonedDuration([1,4], 2))
console.log(findPoisonedDuration([1,2], 2))

// time limit exceeded
const findPoisonedDuration = function(timeSeries, duration) {
    let poisonedSeconds = new Set();
    for(time of timeSeries){
        Array(duration).fill().map((element, index) => poisonedSeconds.add(index + time))
    }
    return poisonedSeconds.size
};

console.log(findPoisonedDuration([1,4], 2)) //4
console.log(findPoisonedDuration([1,2], 2)) //3

// trying to find pattern
// console.log(findPoisonedDuration([1,4], 2)) //4
// 1+2-1=2
// 4+2-1=5
// 1 2 4 5 = 4
// console.log(findPoisonedDuration([1,2], 2)) //3
// 1+2-1=2
// 2+2-1=3
// 1 2 2 3
// 1 2 3 = 3

// testing pattern but fails
const findPoisonedDuration = function(timeSeries, duration) {
    if(duration === 0) return 0
    let poisonedSeconds = new Set();
    for(time of timeSeries) poisonedSeconds.add(time + duration - 1).add(time)
    return poisonedSeconds.size
};

console.log(findPoisonedDuration([1,4], 2)) //4
console.log(findPoisonedDuration([1,2], 2)) //3
console.log(findPoisonedDuration([1,2,3,4,5,6,7,8,9], 100000)) // fails

// testing for pattern
// [1,2,3,4,5,6,7,8,9] 100000 // 100008
// 1+100000-1 = 100000
// 2+100000-1 = 100001
// 3+100000-1 = 100002
// 4+100000-1 = 100003
// 5+100000-1 = 100004
// 6+100000-1 = 100005
// 7+100000-1 = 100006
// 8+100000-1 = 100007
// 9+100000-1 = 100008
// 100000-1-9+18 = 100008

// [1,4], 2) //4
// 1+2-1=2
// 4+2-1=5
// 2-1-4+4 = 3

// other solutions

const findPoisonedDuration = function(timeSeries, duration) {
    if(timeSeries.length === 0) return 0; 
    let res = duration;
    for(let i = 1; i < timeSeries.length; i++) {
        res += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
    }
    return res; 
};

//

const findPoisonedDuration(timeSeries, duration) {
    let total = 0
    for(let i = 0; i < timeSeries.length; i++) {
        let diff = timeSeries[i+1] - timeSeries[i]
        if (diff < duration) total += diff
        else total += duration
    }
    return total
}

//

const findPoisonedDuration = function(timeSeries, duration) {
    let count = 0;
    for(let i = 0; i < timeSeries.length; i++){
	// if the time interval between 2 consecutive attacks is within the duration, then only within that period of time the person would be poisoined
        if(timeSeries[i + 1] && timeSeries[i + 1] - timeSeries[i] < duration){
            count += timeSeries[i + 1] - timeSeries[i]
        } else {
		// if not person would be poisoined for the entire duration
            count += duration;
        }
    }
    return count;
};
