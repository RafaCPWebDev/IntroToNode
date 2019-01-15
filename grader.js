function average(array){
    var sum = 0;
    for (var item in array) {
        sum += array[item];
    }
    
    return Math.round(sum / array.length);
}

var scores = [90,98,89,100,100,86,94];
console.log(average(scores));

var scores2 = [40,65,77,82,80,54,73,63,95,49];
console.log(average(scores2));