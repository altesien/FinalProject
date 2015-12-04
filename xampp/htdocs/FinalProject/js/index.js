$.support.cors = true;



// Initialize all functions
function init() {
    // initalize widget 2 to a variable wid2 for use
    var wid2 = document.getElementById("widget2");
    // initialize variable for a completed survey
    var h = "no";
    
    //check to see if the user has submmited a form from the survey
    if(document.getElementById('hassubmitted').value !=null){
        h = document.getElementById('hassubmitted').value;
    }
    
    //
    $(document).ready(function(){
        // checks for the widgets if they are clicked
        var wid1click =0;
        var wid2click =0;
        var wid3click =0;
        var wid4click =0;

        /* widget mouse over color over functions  and alterations*/
        $('#widget1').mouseenter(function(){
            var wid1 = document.getElementById('widget1');
            var widh2 = wid1.getElementsByTagName('h2');
            var widp = wid1.getElementsByTagName('p');


            if(wid1click == 0) {
                wid1.style.backgroundColor='yellow';
                wid1.style.width="30%";
                widh2[0].style.color="black";
                widh2[0].style.marginTop="20%";
                widp[0].style.display="block";
                widp[0].style.padding="0";
                widp[0].style.fontSize="17px";
            }


        });

        $('#widget2').mouseenter(function(){
            var wid1 = document.getElementById('widget2');
            var widh2 = wid1.getElementsByTagName('h2');
            var widp = wid1.getElementsByTagName('p');


            if(wid2click == 0) {
                wid1.style.backgroundColor='magenta';
                wid1.style.width="30%";
                widh2[0].style.color="black";
                widh2[0].style.marginTop="20%";
                widp[0].style.display="block";
                widp[0].style.padding="0";
                widp[0].style.fontSize="17px";
            }


        });

        $('#widget3').mouseenter(function(){
            var wid1 = document.getElementById('widget3');
            var widh2 = wid1.getElementsByTagName('h2');
            var widp = wid1.getElementsByTagName('p');


            if(wid3click == 0) {
                wid1.style.backgroundColor='lawngreen';
                wid1.style.width="30%";
                widh2[0].style.color="black";
                widh2[0].style.marginTop="20%";
                widp[0].style.display="block";
                widp[0].style.padding="0";
                widp[0].style.fontSize="17px";
            }


        });
        
        $('#widget4').mouseenter(function(){
            var wid1 = document.getElementById('widget4');
            var widh2 = wid1.getElementsByTagName('h2');
            var widp = wid1.getElementsByTagName('p');


            if(wid4click == 0) {
                wid1.style.backgroundColor='darkorange';
                wid1.style.width="30%";
                widh2[0].style.color="black";
                widh2[0].style.marginTop="20%";
                widp[0].style.display="block";
                widp[0].style.padding="0";
                widp[0].style.fontSize="17px";
            }


        });

        
        /* widget mouse leave functions for returning to a normal state */
        $('#widget1').mouseleave(function(){

            var wid1 = document.getElementById('widget1');
            var widh2 = wid1.getElementsByTagName('h2');
            var widp = wid1.getElementsByTagName('p');

            if(wid1click == 0) {
                wid1.style.width="28%";
                widh2[0].style.color="white";
                widh2[0].style.marginTop="33%";
                widp[0].style.display="none";
                wid1.style.backgroundColor='#101010';
            }
        });

        $('#widget2').mouseleave(function(){

            var wid1 = document.getElementById('widget2');
            var widh2 = wid1.getElementsByTagName('h2');
            var widp = wid1.getElementsByTagName('p');

            if(wid2click == 0) {
                wid1.style.width="28%";
                widh2[0].style.color="white";
                widh2[0].style.marginTop="33%";
                widp[0].style.display="none";
                wid1.style.backgroundColor='#101010';
            }
        });

        $('#widget3').mouseleave(function(){

            var wid1 = document.getElementById('widget3');
            var widh2 = wid1.getElementsByTagName('h2');
            var widp = wid1.getElementsByTagName('p');

            if(wid3click == 0) {
                wid1.style.width="28%";
                widh2[0].style.color="white";
                widh2[0].style.marginTop="33%";
                widp[0].style.display="none";
                wid1.style.backgroundColor='#101010';
            }
        });
        
         $('#widget4').mouseleave(function(){

            var wid1 = document.getElementById('widget4');
            var widh2 = wid1.getElementsByTagName('h2');
            var widp = wid1.getElementsByTagName('p');

            if(wid4click == 0) {
                wid1.style.width="28%";
                widh2[0].style.color="white";
                widh2[0].style.marginTop="33%";
                widp[0].style.display="none";
                wid1.style.backgroundColor='#101010';
            }
        });


        /* widget 1 unique functions once clicked*/
        $('#widget1').click(function () {
            var wid1 = document.getElementById('widget1');
            var widh2 = wid1.getElementsByTagName('h2');
            var widp = wid1.getElementsByTagName('p');
            if(wid1click == 0) {
                wid1click = 1;
                wid1.style.width='90%';
                wid1.style.height='300px';
                wid1.style.backgroundColor='#1A1A1A';
                wid1.style.borderTop='solid 10px';
                wid1.style.borderBottom='solid 10px';
                wid1.style.borderColor='yellow';
                wid1.style.color='white';
                widh2[0].style.marginTop="2%";
                widh2[0].style.color="powderblue"
                widp[0].style.display="none";
                widp[1].style.display="block";
                widp[1].style.color="powderblue";
            }else {
                wid1click = 0;
                wid1.style.width='28%';
                wid1.style.height='200px';
                wid1.style.backgroundColor='#101010';
                wid1.style.borderTop='none';
                wid1.style.borderBottom='none';
                wid1.style.color='white';
                widp[1].style.display="none";
            }

        });

        /* widget 2 unique functions when clicked 
           Based on the variable h which is loaded from the session variable to check if they have completed the survey or not.
           if they haven't use ajax + php to create a survey.
        */
        wid2.onclick = function () {
            var wid1 = document.getElementById('widget2');
            var widh2 = wid1.getElementsByTagName('h2');
            var widp = wid1.getElementsByTagName('p');
            var widfor = wid1.getElementsByTagName('form');
            var xmlHttpRequest = getXMLHttpRequest();
            
            
            if(wid2click == 0) {
                wid2click = 1;
                wid1.style.width='90%';
                wid1.style.height='350px';
                wid1.style.backgroundColor='#1A1A1A';
                wid1.style.borderTop='solid 10px';
                wid1.style.borderBottom='solid 10px';
                wid1.style.borderColor='magenta';
                wid1.style.textAlign='left';
                wid1.style.color='white';
                widh2[0].style.marginTop="2%";
                widh2[0].style.color="powderblue"
                widp[0].style.display="none";
                
                
                if(h !='yes') {
                    widfor[0].style.display="block";
                    widfor[0].style.color="powderblue";

                    xmlHttpRequest.onreadystatechange = function(){
                        if((xmlHttpRequest.readyState==4)&&(xmlHttpRequest.status== 200)){
                            parser = new DOMParser()
                            xmlDoc = xmlHttpRequest.responseText;
                            xmlDoc = parser.parseFromString(xmlDoc,"text/xml");
                            formatDrop(xmlDoc);
                        }
                    }
                
                xmlHttpRequest.open('GET','http://localhost/Examples/dropdown.php',true);
                xmlHttpRequest.send();
                    
                };
                
                if(h == 'yes') {
                    widp[1].style.color="powderblue";
                    widp[1].style.display="block";
                };
                
                
                

            }else {
                
                widp[1].style.display="none";
                if ( h == "yes") {
                    wid2click = 0;
                    wid1.style.width='28%';
                    wid1.style.height='200px';
                    wid1.style.backgroundColor='#101010';
                    wid1.style.borderTop='none';
                    wid1.style.borderBottom='none';
                    wid1.style.color='white';
                    wid1.style.textAlign='center';
                    widfor[0].style.display="none"; 
                }

            }

        };

        
        /* widget 3 unique functions 
           shows the hidden table based on the database
        */
        $('#widget3').click(function () {
            var wid1 = document.getElementById('widget3');
            var widh2 = wid1.getElementsByTagName('h2');
            var widp = wid1.getElementsByTagName('p');
            var widt = wid1.getElementsByTagName('table');
            
            if(wid3click == 0) {
                wid3click = 1;
                wid1.style.width='90%';
                wid1.style.height='auto';
                wid1.style.minHeight="100%";
                wid1.style.backgroundColor='#1A1A1A';
                wid1.style.borderTop='solid 10px';
                wid1.style.borderBottom='solid 10px';
                wid1.style.borderColor='lawngreen';
                wid1.style.color='white';
                widh2[0].style.marginTop="2%";
                widh2[0].style.color="powderblue"
                widp[0].style.display="none";
                widt[0].style.display="block";
            }else {
                wid3click = 0;
                wid1.style.width='28%';
                wid1.style.height='200px';
                wid1.style.backgroundColor='#101010';
                wid1.style.borderTop='none';
                wid1.style.borderBottom='none';
                wid1.style.color='white';
                widt[0].style.display="none";

            }

        });
        
        
        /* widget 4 unique functions 
           shows the embdedded youtube video.
        */
        $('#widget4').click(function () {
            var wid1 = document.getElementById('widget4');
            var widh2 = wid1.getElementsByTagName('h2');
            var widp = wid1.getElementsByTagName('p');
            var widv = wid1.getElementsByTagName('iframe');
            
            if(wid4click == 0) {
                wid4click = 1;
                wid1.style.width='90%';
                wid1.style.height='auto';
                wid1.style.minHeight="100%";
                wid1.style.backgroundColor='#1A1A1A';
                wid1.style.borderTop='solid 10px';
                wid1.style.borderBottom='solid 10px';
                wid1.style.borderColor='darkorange';
                wid1.style.color='white';
                widh2[0].style.marginTop="2%";
                widh2[0].style.color="powderblue"
                widp[0].style.display="none";
                widv[0].style.display="block";
            }else {
                wid4click = 0;
                wid1.style.width='28%';
                wid1.style.height='200px';
                wid1.style.backgroundColor='#101010';
                wid1.style.borderTop='none';
                wid1.style.borderBottom='none';
                wid1.style.color='white';
                widv[0].style.display="none";

            }

        });
    });

}

function formatDrop(xml){
    var selector = document.getElementById('survey');
    var tab = document.createElement("SELECT"); 
    var mon = document.createElement("SELECT");
    var yr = document.createElement("SELECT");
    
    
    for(i = 1; i< 13; i++ ) {
        var option = document.createElement("option");
        option.value = i;
        option.innerHTML = xml.getElementsByTagName("option2")[i-1].getAttribute("month")
        mon.appendChild(option);

    }
    
    for(i = 0; i < 31; i ++) {
        var option = document.createElement("option");
        option.value = xml.getElementsByTagName("option")[i].getAttribute("day");
        option.innerHTML = xml.getElementsByTagName("option")[i].getAttribute("day");
        tab.appendChild(option);
    }
    
    for(i = 2015; i> 1949; i--){
        var option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        yr.appendChild(option);

    }
    
    mon.setAttribute("name","month");
    tab.setAttribute("name","day");
    yr.setAttribute("name","year");
    
    
    selector.appendChild(mon);
    selector.appendChild(tab);
    selector.appendChild(yr);
    selector.getElementsByTagName("select")[0].style.marginRight="10px";
    selector.getElementsByTagName("select")[1].style.marginRight="10px";
    selector.getElementsByTagName("input")[1].style.marginBottom="10px";
    selector.getElementsByTagName("select")[1].style.marginBottom="10px";
    
    selector.appendChild(document.createElement("BR"));
    selector.appendChild(document.createTextNode("Suggestion:"));
    selector.appendChild(document.createElement("BR"));
    selector.appendChild(document.createElement("TextArea"));
    selector.appendChild(document.createElement("BR"));
    
    var close = document.createElement("button");
    
    close.setAttribute("type","submit");
    close.setAttribute("value","submit");
    close.innerHTML="submit"
    close.setAttribute("name","submit");
    selector.appendChild(close);
    
};

/* function for survey submission *doesn't work currently* */
function surveySubmission() {
    document.getElementById("survey").submit();
    document.getElementById("survey").innerHTML= "";
};


function getXMLHttpRequest() {
   var request;
   if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();
   } else {
      // really old browsers (e.g. IE6)
      request = new ActiveXObject('Microsoft.XMLHTTP');
   }
   return request;
};














