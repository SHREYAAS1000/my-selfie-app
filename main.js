var SpeechRecognition = window.webkitSpeechRecognition; //this is a api which is to convert Speech into text
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
recognition.start();
}

recognition.onresult = function(event) 
{
     console.log(event); 
     var Content = event.results[0][0].transcript;  //it is used to convert sheech into the text 
      document.getElementById("textbox").innerHTML = Content; 
      console.log(Content);
       
      if(Content=="take my selfie")
      {
        console.log("taking your selfie");
        speak(); // calling function
      }
      
}

function speak() // it is used to covert text to speech
{
    var synth = window.speechSynthesis; // this is an api used to convert text into speech into text
    speak_data  = "Taking your selfie in 5 seconds";

var utterthis  = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterthis);

 Webcam.attach(camera);//Webcam.attach(),this funcation is used to trigger or open  the Webcam

 setTimeout(function(){
take_snapshot();
save();
 }, 5000);
 
}

Webcam.set(
    {
        width : 360,
        height : 250,
        image_format : "png",
        png_quality : 90  
    }
);

 var camera = document.getElementById("camera");


 function take_snapshot()
 {
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
     }) ;
 }

 function save()
 {
     link = document.getElementById("link");
     img = document.getElementById("selfie_image").src ;
     link.href = img;
     link.click();
     
     
 }