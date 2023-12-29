var result = document.getElementById("result");
function display(number){
    result.value += number;
}
function calculate(){
    var finalResult=result.value;
    var dspResult=eval(finalResult);
    result.value=dspResult;
}
function ac(){
    result.value="";
}
function del(){
    result.value=result.value.slice(0,-1);
}
function per(){
    result.value/=100;
}