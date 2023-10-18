function myFunction() {
   var para = document.createElement("li")
   var Text1 = document.createTextNode(document.getElementById("Text1").value)
   para.appendChild(Text1)
   document.getElementById("Text2").appendChild(para)
   }

