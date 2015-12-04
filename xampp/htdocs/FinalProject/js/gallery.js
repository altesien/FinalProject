$.support.cors = true;

// set the string to an initial value
var action = "cats";
function init() {

    $(document).ready(function() {
        // using yql take 40 images from imgur based on a user inputted string
        var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fimgur.com%2Ft%2F"+action+"'%20and%20xpath%3D'%2F%2Fdiv%5B%40class%3D%22post%22%5D%2Fa%2Fimg'&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";


        $.getJSON(url, function (jsonData) {
            var cur = jsonData.query.results.img;
            for(i=0;i<30;i++) {
                var first = document.createElement("img");
                first.setAttribute("src",cur[i].src);
            
                $('#imagecanvas').append(first);
            } 
        });
    });


}

// resets the canvas to the new searched image
function results(form) {
    action =form.input.value;
    document.getElementById("imagecanvas").innerHTML="";
    init();
}