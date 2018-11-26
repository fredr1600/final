
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
                document.getElementById("skriftS2").style.fontSize="17px";
                document.getElementById("skriftS3").style.fontSize="17px";
                document.getElementById("skriftS4").style.fontSize="17px";
                document.getElementById("skriftS5").style.fontSize="17px";
                document.getElementById("skriftS6").style.fontSize="17px";
                document.getElementById("skriftS7").style.fontSize="17px";



                
            }
			else{
                
                document.getElementById("skriftS").style.fontSize="23px";
                document.getElementById("skriftS2").style.fontSize="23px";
                document.getElementById("skriftS3").style.fontSize="23px";
                document.getElementById("skriftS4").style.fontSize="23px";
                document.getElementById("skriftS5").style.fontSize="23px";
                document.getElementById("skriftS6").style.fontSize="23px";
                document.getElementById("skriftS7").style.fontSize="23px";



                
                }
		}
        
        var i = 0;
        var bilder = [];
        var timer = 5000;
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


        var n = 0;
        var bilder2 = [];
        var timer2 = 5000;
        bilder2[0] = 'images/App_eng_1.png';
        bilder2[1] = 'images/App_eng_2.png';
        bilder2[2] = 'images/App_eng_3.png';
        
        function byttBilde2(){

            document.appBilde2.src = bilder2[n];
            
            document.getElementById("jsAppBilde2").style.display="block";
            
            if(n < bilder2.length -1){
                n++;                
            }
            else{
                n=0;
            }
            setTimeout("byttBilde2()", timer2);
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
        var side = window.location.pathname;
        var side2 = side.substring(side.lastIndexOf('/') + 1);
            if(side2 == "index.html" || side2 == "norsk_ss.html"){
                byttBilde();
                noJs();
                
}
            
            else {
                byttBilde2();
                noJs();  
                    }

    }
        
            
            
window.onload = startUp;
    
        

    


        