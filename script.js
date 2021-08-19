function otpEntry(){
    const pin =Math.floor( Math.random()*10000);
    const pin1 = (pin + '');
    if (pin1.length === 4){
       return pin1;
    }
     else  {
         return otpEntry();
       
       }
}  
document.getElementById('generate-pin').addEventListener('click',function(){
    const result = document.getElementById('otp-code');
    result.value=otpEntry();

})
document.getElementById('digits').addEventListener('click',function(event){
    
    const digit = event.target.innerText;

    if(isNaN(digit)){
        if(digit === 'C'){
            document.getElementById('control-input').value ='';
        }
        
        if(digit === '<'){
            const controlInput=document.getElementById('control-input');
            controlInput.value=controlInput.value.slice(0,-1);
        }    
          
    } 
    
else{
    const controlInput=document.getElementById('control-input');
    controlInput.value=controlInput.value + digit;
}

})


//verification
function codeVerify(){
    const otpGenerate = document.getElementById('otp-code').value;
    const typeCode = document.getElementById('control-input').value;
    if(otpGenerate === typeCode){
        document.getElementById('right').style.display='block';
        document.getElementById('wrong').style.display='none';
    }
    else{
        document.getElementById('wrong').style.display='block';
        document.getElementById('right').style.display='none';
    }
    document.getElementById('control-input').value='';
}


