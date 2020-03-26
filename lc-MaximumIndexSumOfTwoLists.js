// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list index sum.
// If there is a choice tie between answers, output all of them with no order requirement.
// You could assume there always exists an answer. 

const findRestaurant = function(list1, list2) {
    if(list1.toString() === list2.toString()) return [list1[0]]
    const inCommon = list1.filter(restaurant => list2.includes(restaurant))
    if(inCommon.length === 0) return null
    const longerList = list1.length > list2.length ? list1 : list2
    if(inCommon.length === longerList.length) return list2
    if(inCommon.length === 1){
        return [inCommon[0]]
    } else {
        let list1Position = list1.indexOf(inCommon[0]);
        let list2Position = list2.indexOf(inCommon[0]);
        let listSum = list1Position + list2Position;
        let lengthTracker = {}
        for(i in inCommon){
            let list1CurrPosition = list1.indexOf(inCommon[i]);
            let list2CurrPosition = list2.indexOf(inCommon[i]);
            let listCurrSum = list1.indexOf(inCommon[i]) + list2.indexOf(inCommon[i]);
            if(listCurrSum < listSum){
                list1Position = list1CurrPosition;
                list2Position = list2CurrPosition;
            }
            lengthTracker[listCurrSum] ? lengthTracker[listCurrSum]++ : lengthTracker[listCurrSum] = 0
        }
        if(Object.keys(lengthTracker).length === 1) return inCommon
        return [list1[list1Position]]
    }
}


Other Solutions:

var findRestaurant = function(list1, list2) {
  let map = new Map();
  
  for (let i = 0; i < list1.length || i < list2.length; i++) {
    let j = list2.indexOf(list1[i]);
    
    if (j !== -1 && map.has(i + j)) map.set(i + j, [...map.get(i + j), list1[i]]);
    if (j !== -1 && !map.has(i + j)) map.set(i + j, [list1[i]]);
  }
  
  return map.get(Math.min(...Array.from(map.keys()))) ? map.get(Math.min(...Array.from(map.keys()))) : []; 
};
