var  objImage= null;
var score=0;
var counter=0;
var id;
var status="stop";
var i=100;
var right,bottom;
// $(document).ready(function(){
//     $("#start").click(function(){
//         x = $("#contain").position();
//         right=$('#contain').css('right');
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
            }
            function start_Car(){
                status="start";
                if(dir=="l")
                    id=setInterval(moveLeft,i);
                if(dir=="r")
                    id=setInterval(moveRight,i);
                if(dir=="t")
                    id=setInterval(moveUp,i);
                if(dir=="d")
                    id=setInterval(moveDown,i);
                document.getElementById("mus").innerHTML="<embed src='f1sound.mp3' autostart='true' loop='true' width='2' height='0'></embed>";             
            }            
            function stop_Car(){
                status="stop";
                clearInterval(id);
            }
			function getKeyAndMove(e){	                          
				 key_code=e.which||e.keyCode;
				switch(key_code){
                    case 32:
                         //console.log("hi");
                        if(status=="start"){
                            stop_Car();
                            
                        }
                        else{
                            start_Car();
                        }
                        break;
                    case 37:
                    clearInterval(id);
                    //objImage.style.transform=" scaleY(-1)";
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
                   // objImage.style.transform= "scaleX(-1)";
                    objImage.style.transform=" rotate(90deg)";
                    id=setInterval( moveDown,i);
                     
						break;						
				}
            } 
           function moveLeft(){ 

            if((parseInt(objImage.style.left)<0)||(parseInt(objImage.style.left)>960)||(parseInt(objImage.style.top)<-15)||(parseInt(objImage.style.top)>470))		
            {
                alert("game over");
                clearInterval(id); 
                document.getElementById("result").innerHTML=score;
                return;                  
            }
            dir="l";
            counter++;
            score++;

            if(counter%15==0)
            {
                i=i-2;
            }	     
                objImage.style.left=parseInt(objImage.style.left)-5 +'px';
           }

            
			
            function moveUp()	{
                if((parseInt(objImage.style.left)<0)||(parseInt(objImage.style.left)>960)||(parseInt(objImage.style.top)<-15)||(parseInt(objImage.style.top)>470))		
                {
                    alert("game over");
                    clearInterval(id);  
                    document.getElementById("result").innerHTML=score;
                    return;                  
                }	
                dir="t";
                counter++;
                score++;
                if(counter%15==0)
            {
                i=i-2;
            }
                objImage.style.top=parseInt(objImage.style.top)-5 +'px';
            }
			
			function moveRight(){
               	
                if((parseInt(objImage.style.left)<0)||(parseInt(objImage.style.left)>960)||(parseInt(objImage.style.top)<-15)||(parseInt(objImage.style.top)>470))		
            {
                alert("game over");
                clearInterval(id);
                document.getElementById("result").innerHTML=score;
                return;                      
            }	
            dir="r";
            counter++;
            score++;
            if(counter%15==0)
            {
                i=i-2;
            }
				objImage.style.left=parseInt(objImage.style.left)+5 +'px';
			}
			function moveDown(){
               	
                if((parseInt(objImage.style.left)<0)||(parseInt(objImage.style.left)>960)||(parseInt(objImage.style.top)<-15)||(parseInt(objImage.style.top)>470))		
                {
                    alert("game over");
                    
                    clearInterval(id);  
                    document.getElementById("result").innerHTML=score;
                    return;               
                }	
                dir="d";
                counter++;
                score++;
                if(counter%15==0)
            {
                i=i-2;
            }
				objImage.style.top=parseInt(objImage.style.top)+5 +'px';
            }
            
             window.onload=init;
           