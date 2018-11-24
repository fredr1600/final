
function dropdownFunction() {
  			var x = document.getElementById("ddContent");
 	
  		if (x.style.display === "block") {
    			x.style.display = "none";
			} 
			else {
    			x.style.display = "block";
  			}
		}

        
        function fontFunctionStor(){
           
            var y = document.getElementById("skriftS");
            if(y.style.fontSize == "23px"){
                document.getElementById("skriftS").style.fontSize="17px";
            
                
            }
			else{
                
                document.getElementById("skriftS").style.fontSize="23px";
                
                }
		}
        
        var i = 0;
        var bilder = [];
        var timer = 3000;
        bilder[0] = 'images/App_no_1.png';
        bilder[1] = 'images/App_no_2.png';
        bilder[2] = 'images/App_no_3.png';
        
        function byttBilde(){
            document.appBilde.src = bilder[i];
            document.getElementById("jsAppBilde").style.display="block";
            if(i< bilder.length -1){
                i++;                
            }
            else{
                i=0;
            }
            setTimeout("byttBilde()", timer);
        }

        function byttBilde2(){
            document.appBilde.src = bilder[i];
            
            if(i< bilder.length -1){
                i--;                
            }
            else{
                i=3;
            }
            
        }

        function noJs(){
            document.getElementById("noJsBilde1").style.display="none";
            document.getElementById("noJsBilde2").style.display="none";            
            document.getElementById("noJsBilde3").style.display="none";
            
            document.getElementById("storKnapp1").style.display="none";
            document.getElementById("storKnapp2").style.display="none";
            
            document.getElementById("storKnappJs1").style.display="block";
            document.getElementById("storKnappJs2").style.display="block";


        }

        function startUp(){
            noJs();
            byttBilde();
        }

        window.onload = startUp;




        