function(instance, context) {
    
    instance.data.divid = "datetimediv" + Math.floor(Math.random()*1000000).toString();
    instance.data.inputid = "datetimedinput" + Math.floor(Math.random()*1000000).toString();

        $(document).ready(function() {
//	var myDiv = "'<div id='" + instance.data.divid + "' width='max-content' height='max-content'><input id='" + instance.data.inputid + " type=datetime-local style='font-size: " + instance.data.fontsize + " font-family: " + instance.data.fontface + "'></div>'";

var myDiv = '<div width="max-content" height="max-content"><input id="time1" type=datetime-local style="font-size: 14pt"></div>';
            
    instance.canvas.append(myDiv);
    var input = document.getElementById("time1");
	input.addEventListener('input', time);

            function time() {
                instance.publishState(date, input.value)
            };


        });
}