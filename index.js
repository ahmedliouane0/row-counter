//init to 0
let saveEl=document.getElementById("save-el")

const countEl = document.getElementById("count-el")
var count=0

 function increment(){

    count=count+1
    countEl.innerText= count

 }



 function save(){

   let countstr= count +" - " 
   saveEl.textContent += countstr

countEl.textContent=0
count=0


 }
 save()

 