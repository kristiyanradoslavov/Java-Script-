function calculate(num, operator, num2) {
    result = 0

    switch(operator){
        case "+":
            result = num + num2;
            break;
        
        case "-":
            result = num - num2;
            break;
        
        case "/":
            result = num / num2;
            break;
        
        case "*":
            result = num * num2;
            break;
        
    
    }

    console.log(result.toFixed(2))
}

calculate(25.5,
    '-',
    3
)    