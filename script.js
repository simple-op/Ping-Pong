let bar1=document.getElementById('bar1');
let bar2=document.getElementById('bar2');



let countl=0;
bar1.style.left=countl+"vw";
bar2.style.left=countl+"vw";
if(countl<0){
    countl=0;
    
}
if(countl>78){
   
   countl=78;
    
}


document.addEventListener("keypress",function(event){

    // console.log(event.keyCode);
    if(countl<2){
        countl=2;
        
    }
    if(countl>78){
       
       countl=78;
        
    }
    if(event.keyCode==68){
    bar1.style.left=countl+"vw";
    bar2.style.left=countl+"vw";
   //  bar2.style.colo
    countl-=2;
    
    }
    else if(event.keyCode==65){
       // bar1.style.left=00;
       // bar2.style.left=00;
       bar1.style.left=countl+"vw";
       bar2.style.left=countl+"vw";
       
       countl+=2;
       }

    //    console.log(countl);
       

    
  })
 

   

   document.addEventListener("keydown",function(event){

    //  console.log(event.keyCode);
     
     if(event.keyCode==68){
     bar1.style.left=countl+"vw";
     bar2.style.left=countl+"vw";
    //  bar2.style.colo
     countl+=2;
     
     }
     else if(event.keyCode==65){
        // bar1.style.left=00;
        // bar2.style.left=00;
        bar1.style.left=countl+"vw";
        bar2.style.left=countl+"vw";
        
        countl-=2;
        }

        // console.log(countl);
        

     
   })

   let ball=document.getElementById("ball");
   let count=0;
   let countt=0;
    let backt=false;
   let back=false;
   let backing=false;
   let backingt=false;

   ball.addEventListener("click",function(){


    let stop= setInterval(
        function(){
         if(countl<=count&count<=countl+20&(countt>=90))
              backt=true;
         else if(countl<=count&count<=countl+20&(countt<=2))  
              backt=true;
              
         else{
             backt=false;
         }
         
        
         if(backt){
             console.log('sd');

            if(countt>90){
                console.log('sd');
             
                backing=true;
            }
            if(countt<2){
                backing=false;
            }
         }

         if(backing)
         countt-=0.15;
           else
           countt+=0.15;
          
         



        


           if(count>95){
             
            back=true;
        }
        if(count<1){
            back=false;
        }
           ball.style.left=count+"vw";
           ball.style.top=countt+"vh";
           

        //    ball.style.top=count+'%';
           if(back)
           count-=0.15;
           else
           count+=0.15;

          
          
          
           
        

          
            


        
            


           if(countt>100|countt<-1){
               count=Math.random()*100.0;
               console.log(Math.random());
              countt=0;
              ball.style.left=count+"vw";
              ball.style.top=countt+"vh";
              countl=count;

              alert("gameover");
              clearInterval(stop);

           }

            
        },0.1)


   })

// bar1.style.transitionDuration='0.1s';