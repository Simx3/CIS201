let user_points = sessionStorage.getItem("points");
        document.querySelector("span.points").innerHTML= user_points;
        
         if(user_points == 50){
            document.querySelector("span.result").innerHTML=("Congradulations you got 30% off! Here is your code " + Math.random());
         }
         else{
            document.querySelector("span.result").innerHTML=("Oops you didn't answer all questions right. Better luck next time!");
         }