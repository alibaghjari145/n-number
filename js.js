function jam() {
var y = Number(document.getElementById("num").value);
    var x = 0;
        for (i = 1; i < y + 1; i++) {
            x = x + i;
          
        }
       

    document.getElementById("res").innerHTML=x;
   
}