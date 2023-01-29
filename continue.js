var numbers = [10, 20, 22, 26, 28, 32, 40, 30, 60, 50, 80, 56, 24, 27];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}