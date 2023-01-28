        
        var p1=Math.floor(Math.random()*3);
        var p2=Math.floor(Math.random()*3);
        const arr=["rock","paper","scissor"];
        var pl1=document.querySelector(".player1").textContent=arr[p1];
        var pl2=document.querySelector(".player2").textContent=arr[p2];
        
       
      if((pl1=="rock" && pl2=="scissor")||(pl1=="paper" && pl2=="rock")|| (pl1=="scissor" && pl2=="paper"))
        {
            document.querySelector("h1").innerHTML= "✨🎉player 1 is winner 🎉✨";
        }
        else if((pl2=="rock" && pl1=="scissor")||(pl2=="paper" && pl1=="rock")|| (pl2=="scissor" && pl1=="paper"))
        {
            document.querySelector("h1").innerHTML= "✨🎉player 2 is winner 🎉✨";
        }
        else
        {
            document.querySelector("h1").innerHTML="draw!";
        }
