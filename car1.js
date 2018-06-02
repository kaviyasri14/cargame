var 
 objImage= null;
			function init(){
				objImage=document.getElementById("image1");				
				objImage.style.position='relative';
				objImage.style.left='0px';
                objImage.style.top='0px';
                var id;
                var key_code;
            }
//             function start_Car()
//             {
              
// getKeyAndMove(e);

//             }
            
			function getKeyAndMove(e){	 if((parseInt(objImage.style.left)<0)||(parseInt(objImage.style.left)>744)||(parseInt(objImage.style.top)<-220)||(parseInt(objImage.style.top)>220))		
                {
                    alert("game over");
                    
                }	
                
				 key_code=e.which||e.keyCode;
				switch(key_code){
                    case 37:
                    
                    objImage.style.transform=" rotate(360deg)";
                   moveLeft();
						break;
                    // case 38: 
                    // objImage.style.transform=" rotate(90deg)";
                    //  moveUp();
                    //     break;
                        
                    // case 39:
                    //  objImage.style.transform=" rotate(360deg)";
                    // moveRight()
					
					// 	break;
					// case 40: 
                    // objImage.style.transform=" rotate(90deg)";
                    // moveDown();
                     
					// 	break;						
				}
            } 
            var id= setInterval(function moveLeft(){               
                 
                objImage.style.left=parseInt(objImage.style.left)+5 +'px';

if(key_code==38)
{
    clearInterval(id);
    objImage.style.transform="rotate(90deg)";
    moveUp();

}
           }	,100);
            
			
            function moveUp()	{
                
                objImage.style.top=parseInt(objImage.style.top)-5 +'px';
            }
			
			// function moveRight(){
               	
               
			// 	objImage.style.left=parseInt(objImage.style.left)+5 +'px';
			// }
			// function moveDown(){
               	
                
			// 	objImage.style.top=parseInt(objImage.style.top)+5 +'px';
            // }
            
             window.onload=init;
           