function showInput(num) {
    var res=document.getElementById("result");
    res.value +=num
    
}

function getRes() {
    var res=document.getElementById("result");
    res.value=eval(res.value)
    
}