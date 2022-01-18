function deleteMe(){
    
    document.getElementById("resultA").value= '';
    
}

function calculator(newValue){
    
    document.getElementById("resultA").value+= newValue;
    
}
function answer(){
    
 let a= document.getElementById("resultA").value;
 let b =eval(a);

 document.getElementById("resultA").value=b;
    
}