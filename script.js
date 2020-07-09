let bar1=document.getElementById('bar1');
let bar2=document.getElementById('bar2');



let countl=0;
let speedbar=2;
bar1.style.left=countl+"vw";
bar2.style.left=countl+"vw";



// document.addEventListener("keypress",function(event){

//     // console.log(event.keyCode);
//     if(countl<2){
//         countl=0;
        
//     }
//     if(countl>78){
       
//        countl=78;
        
//     }
//     if(event.keyCode==68){
//     bar1.style.left=countl+"vw";
//     bar2.style.left=countl+"vw";
//    //  bar2.style.colo
//     countl-=speedbar;
    
//     }
//     else if(event.keyCode==65){
//        // bar1.style.left=00;
//        // bar2.style.left=00;
//        bar1.style.left=countl+"vw";
//        bar2.style.left=countl+"vw";
       
//        countl+=speedbar;
//        }

//     //    console.log(countl);
       

    
//   })
 

   

   document.addEventListener("keydown",function(event){

    //  console.log(event.keyCode);
    if(countl<2){
        countl=0;
        
    }
    if(countl>78){
       
       countl=78;
        
    }
     
    if(countl<2){
        countl=0;
        
    }
    if(countl>78){
       
       countl=78;
        
    }
     if(event.keyCode==68){
     bar1.style.left=countl+"vw";
     bar2.style.left=countl+"vw";
    //  bar2.style.colo
     countl+=speedbar;
     
     }
     else if(event.keyCode==65){
        // bar1.style.left=00;
        // bar2.style.left=00;
        bar1.style.left=countl+"vw";
        bar2.style.left=countl+"vw";
        
        countl-=speedbar;
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
    let counter=0;
    let speed=0.15;
    let container=document.getElementById("container");
    let start=document.getElementById('start');
    let scores=document.getElementById("scores");
   start.addEventListener("click",function(){
       start.style.display='none';
      
         
    let stop= setInterval(
          
        function(){
         if(countl<=count&count<=countl+20&(countt>=90))
              backt=true;
         else if(countl<=count&count<=countl+20&(countt<=0))  
              backt=true;
              
         else{
             backt=false;
         }
         
         counter+=1;
        //  scores.innerText=Math.trunc(counter/100);
        scores.innerText=Math.trunc(counter/100);
         
         if(counter/100%20==0){
            speed=speed+0.02;
            speedbar+=0.02;
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
         countt-=speed;
           else
           countt+=speed;
          
         



        


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
           count-=speed;
           else
           count+=speed;

          
        
          
           
        

          
            


        
            


           if(countt>100|countt<-1){
               speed=0.15;
               speedbar=2;
               count=Math.random()*100.0;
               console.log(Math.random());
               countt=0;
               
               ball.style.left=count+"vw";
               ball.style.top=countt+"vh";
               start.style.display='inherit';
              backing=false;
              back=false;

               


              if(localStorage.getItem('score')==null){
                localStorage.setItem('score',counter);
              }
             else if(localStorage.getItem('score')<counter)
              localStorage.setItem('score',counter);

              alert("|Gameover| Your Score is : "+Math.trunc(counter/100) +" *High Score* : "+ Math.trunc(localStorage.getItem('score')/100));
             
              counter=0;
              clearInterval(stop);
           
           }

            
        },0.1)


   })

// bar1.style.transitionDuration='0.1s';