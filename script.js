 function convert_f_fun(){
    const temp = document.getElementById("input-temp").value;
   // console.log(temp);
   const output = (9/5) *(temp) + 32;
   document.getElementById('output').innerHTML= `Fahrenheit Conversion: ${output}`;
   console.log(output);
}

 function convert_c_fun(){
    const temp = document.getElementById("input-temp").value;
    //console.log(temp);
   const output = (5/9) * (temp - 32);
   document.getElementById('output').innerHTML= `Celsius Conversion: ${output}`;
   console.log(output);
}
 function fun() {
    var userInput = prompt("Is this useful for you? :");
   // alert("Hello " + userInput);
   console.log(userInput);
}