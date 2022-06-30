function(instance, properties) {

    instance.data.divid = "datetimediv" + Math.floor(Math.random()*1000000).toString();
    instance.data.inputid = "datetimedinput" + Math.floor(Math.random()*1000000).toString();

var myDiv = '"<div width="max-content" height="max-content"><input id=time1 type=datetime-local style="font-size: 14pt"></div>"';
    instance.canvas.append(myDiv);

}