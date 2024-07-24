const emailbox = document.querySelector(".email");
const emailbox2 = document.querySelector(".email-bottom");
document.querySelector(".get_started").addEventListener("click",function(){
  if(emailbox.value!=""){
    alert("WELCOME TO MY NETFLIX CLONE WEBSITE");
  }
  else{
    alert("YOU HAVE TO GIVE AN EMAIL ID");
  }


});

document.querySelector(".get_started_bottom").addEventListener("click",function(){
  if(emailbox2.value!=""){
    alert("WELCOME TO MY NETFLIX CLONE WEBSITE");
  }
  else{
    alert("YOU HAVE TO GIVE AN EMAIL ID");
  }


});


