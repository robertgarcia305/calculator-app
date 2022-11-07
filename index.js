document.addEventListener("DOMContentLoaded", ready);

function ready() {

    //input
    let input = document.getElementById("input");

    //numbers
    let one = document.getElementById("1");
    let two = document.getElementById("2");
    let three = document.getElementById("3");
    let four = document.getElementById("4");
    let five = document.getElementById("5");
    let six = document.getElementById("6");
    let seven = document.getElementById("7");
    let eight = document.getElementById("8");
    let nine = document.getElementById("9");
    let zero = document.getElementById("0");
    let dot = document.getElementById("dot");

    //controls
    let equal = document.getElementById("eq");
    let sum = document.getElementById("sum");
    let sub = document.getElementById("sub");
    let multiply = document.getElementById("mul");
    let divide = document.getElementById("div");
    let clear = document.getElementById("clear");


    display = (val) => {
        document.getElementById("input").value += val.innerText;
        return val
    }

    solve = () => {

        let x = document.getElementById("input").value
    
        let y = eval(x);
    
        document.getElementById("input").value = y
    
        return y
    
    }

    function clearScreen(){
        document.getElementById("input").value = "";
    
    }



    one.addEventListener("click", () => {display(one)});
    two.addEventListener("click", () => {display(two)});
    three.addEventListener("click", () => {display(three)});
    four.addEventListener("click", () => {display(four)});
    five.addEventListener("click", () => {display(five)});
    six.addEventListener("click", () => {display(six)});
    seven.addEventListener("click", () => {display(seven)});
    eight.addEventListener("click", () => {display(eight)});
    nine.addEventListener("click", () => {display(nine)});
    zero.addEventListener("click", () => {display(zero)});
    dot.addEventListener("click", () => {display(dot)});

    sum.addEventListener("click", () => {display(sum)});
    sub.addEventListener("click", () => {display(sub)});
    multiply.addEventListener("click", () => {display(multiply)});
    divide.addEventListener("click", () => {display(divide)});

    equal.addEventListener("click", solve);

    clear.addEventListener("click", clearScreen);

}

console.log("this is connected");