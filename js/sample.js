console.log("inside my file")
function my_first_fun(arg_one, arg_two){
    console.log(arg_one, arg_two);
}
my_first_fun(10, "blaa");

let sec_fun = function(arg1, arg2 = "holaa"){
    console.log(arg1, arg2);
}

let arr_fun = () => {
    console.log("inside my arr fun")
}

((x) => {console.log(x)})(100)

function my_curr(x){
    return function(y){
        console.log(`${x} ${y}`)
    }
}
let x = my_curr("hello");
x("juve");
x("pablo");
