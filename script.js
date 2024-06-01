/********************slider*********************/ 

let slide = document.querySelectorAll(".patientReview");
let card = document.querySelectorAll(".card");
let closeBtn =document.getElementById("closeBtn");
let connectBtn =document.getElementById("connectBtn");

let count = 0;

slide.forEach(function(slides, index){
   slides.style.left=`${index * 100}%`
})

function myFun(){
   slide.forEach(function(curVal){
       curVal.style.transform=`translateX(-${count * 100}%)`
   })
}
setInterval(function(){
   count++;
   if(count == slide.length){
       count=0;
   }
   myFun()
}, 2000)


card.forEach(function(cards){
   cards.addEventListener("click",function(){
      console.log(cards);

      document.querySelector(".detail").style.display="block";
      document.querySelector(".content").innerHTML=`
      <img src=${cards.firstElementChild.src} alt="">
      <div class="contentText">
      <h1>Alexa Zoan</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, provident velit architecto sed aliquam possimus tenetur autem odit consectetur optio ipsa reiciendis!</p>
      </div>
      `
      closeBtn.addEventListener("click", function(){
         document.querySelector(".detail").style.display="none"
      })
   })
})


connectBtn.addEventListener("click",function(){
   let email = document.getElementById("email");
   let password = document.getElementById("password");

   if(email.value == "" && password.value == ""){
      alert("Enter Details");
   }
   else{
      alert("you Logged In");

   }

})