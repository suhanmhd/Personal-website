
function validation(){
  const namee = document.getElementById("namee").value;
  const number = document.getElementById("number").value;
  const message = document.getElementById("message").value;
  const Email = document.getElementById("email").value;
  
  
  
  const nameL = document.getElementById("name-l");
  const numberL = document.getElementById("number-l");
  const messageL = document.getElementById("message-l");
  const emailL = document.getElementById("email-l");
  
  

let val=0;








  if(namee == ""){
    nameL.innerHTML="Name cannot be empty";
    return false;
  }
  else if(!isNaN(namee)){
    nameL.innerHTML="Name should be alphabets";
    return false;
  }
  else{
    nameL.innerHTML=" ";
  }


  if(number==""){
    numberL.innerHTML="Number cannot be Empty";
    return false;
  }
  else if(number.length>=10){

    numberL.innerHTML="Invalid Number";
    return false;

  }
  else{
    numberL.innerHTML="";
  }
    
  
  if (message === "") {
    messageL.innerText = "This field cannot be empty";
    return false;
  } else {
    messageL.innerText = "";
  }
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  if (Email === "") {
    emailL.innerText = "This field cannot be empty";
    return false;
  } else if (Email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
    emailL.innerText = "";
  } else {
    emailL.innerText = "Should use a valid email.";
    return false;
  }






  
  



}

  // $("#submit-form").submit((e)=>{
  //   e.preventDefault()
  //   $.ajax({
  //       url:"https://script.google.com/macros/s/AKfycby9-jbcegW68wLl_m_iAhSfu-kqNnrfLC-XzKU9HaQRrpuSUUDCArp_BHtnJl0OlGvEEQ/exec",
  //       data:$("#submit-form").serialize(),
  //       method:"post",
  //       success:function (response){
  //           alert("Form submitted successfully")
  //           window.location.reload()
  //           //window.location.href="https://google.com"
  //       },
  //       error:function (err){
  //           alert("Something Error")
  
  //       }
  //   })
  // })







   


    // https://script.google.com/macros/s/AKfycby9-jbcegW68wLl_m_iAhSfu-kqNnrfLC-XzKU9HaQRrpuSUUDCArp_BHtnJl0OlGvEEQ/exec


  













