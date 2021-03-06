// Assume you are an awesome parent and want to give your children some cookies.
// But, you should give each child at most one cookie. Each child i has a greed factor gi,
// which is the minimum size of a cookie that the child will be content with;
// and each cookie j has a size sj. If sj >= gi, we can assign the cookie j to the child i, and the child i will be content.
// Your goal is to maximize the number of your content children and output the maximum number. 

let findContentChildren = function(greed, size) {
    greed.sort((a, b) => a - b);
    size.sort((a, b) => a - b);
    let counter = 0;
    
    size.forEach(cookie => {
        if(cookie >= greed[counter]) counter++
    });
    
    return counter;
};
