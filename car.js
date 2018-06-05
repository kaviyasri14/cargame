var  objImage= null;
var score=0;
var counter=0;
var id;
var status="stop";
var i=100;
var lost=false;
var right,bottom;
var highscore=0;
// $(document).ready(function(){
//     $("#start").click(function(){
//         x = $(".container").position();
//         right=$('.container').css('right');
//         console.log(right);
//         bottom=x.bottom;
//     });
// });
var dir="r";
			function init(){
				objImage=document.getElementById("image1");				
				objImage.style.position='relative';
				objImage.style.left=0;
                objImage.style.top=0;
                var key_code;
                document.getElementById("bestscore").innerHTML=localStorage.getItem("highscore");
                
            }
            function best_Score()
            {   
                 highscore=localStorage.getItem("highscore");
                if(highscore!==null)
                {
                    if(score>highscore)
                    {
                        localStorage.setItem("highscore",score);
                        highscore=score;

                    }
                }else{
                    localStorage.setItem("highscore",score);
                }
                document.getElementById("bestscore").innerHTML=highscore;
                
               
            }
            function start_Car(){
                if(lost==true)
                {document.location.reload(true);               
                }
                status="start";
                if(dir=="l")
                    id=setInterval(moveLeft,i);
                if(dir=="r")
                    id=setInterval(moveRight,i);
                if(dir=="t")
                    id=setInterval(moveUp,i);
                if(dir=="d")
                    id=setInterval(moveDown,i);
                document.getElementById("mus").value="<embed src='f1sound.mp3' autostart='trueMath.ceil(' loop='true' width()*1)-30='2' height='0'></embed>";             
            }            
            function stop_Car(){
                status="stop";
                clearInterval(id);
            }
			function getKeyAndMove(e){	                          
				 key_code=e.which||e.keyCode;
				switch(key_code){
                    case 32:
                       
                        if(status=="start"){
                            stop_Car();
                            
                        }
                        else{
                            start_Car();
                        }
                        break;
                    case 37:
                    clearInterval(id);
                  
                    objImage.style.transform=" rotate(180deg)";
                    objImage.style.transform=" scaleX(-1)";
                    id=setInterval( moveLeft,i);

						break;
                    case 38: 
                    clearInterval(id);
                    objImage.style.transform=" rotate(270deg)";
                    id=setInterval( moveUp,i);
                        break;
                        
                    case 39:
                    clearInterval(id);
                     objImage.style.transform=" rotate(360deg)";
                     id=setInterval( moveRight,i);
                     break;

                    case 40: 
                    clearInterval(id);
                   
                    objImage.style.transform=" rotate(90deg)";
                    id=setInterval( moveDown,i);
                     
						break;						
				}
            } 
           function moveLeft(){ 
            var containerRight=Math.ceil($(".container").width()*1)-30;
            var containerDown=Math.ceil($(".container").height()*.8);
            // console.log(containerRight);
            if((parseInt(objImage.style.left)<0)||(parseInt(objImage.style.left)>containerRight)||(parseInt(objImage.style.top)<-25)||(parseInt(objImage.style.top)>containerDown))		
            {
                alert("game over");
                clearInterval(id);
             
                lost=true;
                document.getElementById("result").innerHTML=score;
                best_Score(); 
              
                
                
                return;                  
            }
            dir="l";
            counter++;
            score++;

            if(counter%15==0)
            {
                i=i-1;
            }	     
                objImage.style.left=parseInt(objImage.style.left)-10 +'px';
           }

            
			
            function moveUp()	{
            var containerRight=Math.ceil($(".container").width()*1)-30;
            var containerDown=Math.ceil($(".container").height()*.8);                            
                if((parseInt(objImage.style.left)<0)||(parseInt(objImage.style.left)>containerRight)||(parseInt(objImage.style.top)<-25)||(parseInt(objImage.style.top)>containerDown))		
                {
                    alert("game over");
                    clearInterval(id);  
                    lost=true;
                    document.getElementById("result").innerHTML=score;
                    best_Score(); 
                     return;                  
                }	
                dir="t";
                counter++;
                score++;
                if(counter%15==0)
            {
                i=i-1;
            }
                objImage.style.top=parseInt(objImage.style.top)-10 +'px';
            }
			
			function moveRight(){
            var containerRight=Math.ceil($(".container").width()*1)-30; 
            var containerDown=Math.ceil($(".container").height()*.8);                          	
                if((parseInt(objImage.style.left)<0)||(parseInt(objImage.style.left)>containerRight)||(parseInt(objImage.style.top)<-25)||(parseInt(objImage.style.top)>containerDown))		
            {
                alert("game over");
                clearInterval(id);
                lost=true;
                document.getElementById("result").innerHTML=score;
                best_Score();
               
                

                return;                      
            }	
            dir="r";
            counter++;
            score++;
            if(counter%15==0)
            {
                i=i-1;
            }
				objImage.style.left=parseInt(objImage.style.left)+10 +'px';
			}
			function moveDown(){
            var containerRight=Math.ceil($(".container").width()*1)-30;
            var containerDown=Math.ceil($(".container").height()*.8);                           	
                if((parseInt(objImage.style.left)<0)||(parseInt(objImage.style.left)>containerRight)||(parseInt(objImage.style.top)<-25)||(parseInt(objImage.style.top)>containerDown))		
                {
                    alert("game over");
                    
                    clearInterval(id); 
                    lost=true; 
                    document.getElementById("result").innerHTML=score;
                    best_Score();
                   
                    
                    return;               
                }	
                dir="d";
                counter++;
                score++;
                if(counter%15==0)
            {
                i=i-1;
            }
				objImage.style.top=parseInt(objImage.style.top)+10 +'px';
            }
            
             window.onload=init;
           