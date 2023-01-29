for(var i=1; i<=10; i++){
    console.log(i);
    if(i >= 5){
        break;
    }
}


var x = 1;
while(x <= 10){
    if(x > 5){
        break;
    }
    console.log(x);
    x++;
}


var numbers = [10, 20, 22, 26, 28, 32, 40];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 30){
        break;
    }
    console.log(number);
}

