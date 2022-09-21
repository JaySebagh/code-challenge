// https://leetcode.com/problems/lemonade-change/

// brainstorm/sudo code
// create a map counter
// if the bill is 5 add it
// if the bill is 10, subtract 5 bill count by 1 and add 10 bill
// if the bill is 20, subtract 5 bill count by 1, subtract 10 bill count by 1
// there is no need to count 20 bill since the highest payment is 20 which means the max refund is 15
// if 5 or 10 bill count is less than 0 return false
// return true

const lemonadeChange = function(bills) {
    let change = new Map([
        [5, 0],
        [10, 0]
    ]);
    
    const money = (bill, sign, count) => {
        sign === "add" ? change.set(bill, change.get(bill) + count) : change.set(bill, change.get(bill) - count)
    }
    
    for(let bill of bills){
        if(bill === 5) money(5, "add", 1)
        if(bill === 10){
            if(change.get(5) === 0){
                return false;
            } else {
                money(10, "add", 1)
                money(5, "sub", 1)
            }
        }
        if(bill === 20){
            if(change.get(5) === 0) return false
            if((change.get(10) === 0) && change.get(5) < 3) return false
            if(change.get(10) > 0){
                money(10, "sub", 1)
                money(5, "sub", 1)
            } else {
                money(5, "sub", 3)
            }
        }
    }
    return true
};

console.log(lemonadeChange([5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5])) // true
console.log(lemonadeChange([5,5,5,10,20])) // true
console.log(lemonadeChange([5,5,5,5,10,5,10,10,10,20])) // true
console.log(lemonadeChange([5,5,10,10,20])) // false
console.log(lemonadeChange([10,10])) // false


// other solutions

const lemonadeChange = (bills) => {
    let fiveNum = 0, tenNum = 0
    for(let i = 0; i < bills.length; i++) {
        if(bills[i] === 5){ fiveNum++; continue }
        if(bills[i] === 10){ fiveNum--; tenNum++ }
        if(bills[i] === 20){ tenNum ? (tenNum--, fiveNum--) : fiveNum -= 3 }
        if(fiveNum < 0) return false
    }
    return true
};

// map

const lemonadeChange = function(bills) {
    let change = { '5': 0, '10': 0 };
    
    for(let bill of bills){
        if(bill === 5) change[5]++;
        else if(bill === 10){
            if(!change[5]) return false;
            change[10]++;
            change[5]--;
        } else { //  bill === 20
            if(change[5] && change[10]){  
			// first way for giving change: bill of 10 + bill of 5
                change[10]--;
                change[5]--;
            } else if(change[5] >= 3){
			// second way for giving change: 3 bills of 5
                change[5] -= 3;
            } else return false;
        };
    };
    return true
};

//

const lemonadeChange = function(bills) {
    let five = 0, ten = 0;
    for(let bill of bills){
        if(bill === 5) five++;
        else if(bill === 10){
            ten++;
            if(five === 0) return false;
            else five--;
        } else { // 20 bill;
            let change = 15;
            if(ten>0){
                ten--;
                change -= 10;
            };
            while(change > 0){
                five--;
                if(five < 0) return false;
                change -= 5;
            };
        };
    };
    return true;
};
