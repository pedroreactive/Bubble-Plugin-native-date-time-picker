function(instance, properties) {

    var divid = "datetimediv" + Math.floor(Math.random()*1000000).toString();
    var inputid = "datetimeinput" + Math.floor(Math.random()*1000000).toString();
    var fontsize = properties.bubble.font_size() + "px";
    var fontface = properties.bubble.font_face().split(':')[0];
    var fontweight = properties.bubble.font_face().split(':')[3];
    var borderwidth = properties.bubble.border_width() + "px";
    var borderstyle = properties.bubble.border_style();
    var textalign = properties.bubble.font_alignment();
    var fontcolor = properties.bubble.font_color();
    var minwidth = properties.bubble.min_width_css();
    var minheight = properties.bubble.min_height_css();
    var colorscheme = properties.colorscheme;
    
    var format;
    var initialdate;
    
    if (properties.format == 'date') {
        format = 'date'
    }
    else if (properties.format == 'time') {
        format = 'time'
    }
    else if (properties.format == 'month') {
        format = 'month'
    }
    else {
        format = 'datetime-local'
    }
    
// 	var myDiv = '<div style="width: max-content; height: max-content;" id="' + divid + '"><input id="' + inputid + '" type=' + format + ' style="color-scheme: ' + colorscheme + '; width: 100%; height: 100%; border-width: 0; font-size: ' + fontsize + '; font-family: &quot;' + fontface + '&quot;; font-weight: ' + fontweight + '; background-color: inherit; color: ' + fontcolor + '; text-align: ' + textalign + '; text-decoration: inherit;"></div>';
    
//    var myDiv = '<input id="' + inputid + '" type=' + format + ' style="color-scheme: ' + colorscheme + '; border-width: 0; font-size: ' + fontsize + '; font-family: &quot;' + fontface + '&quot;; font-weight: ' + fontweight + '; background-color: inherit; color: ' + fontcolor + '; text-align: ' + textalign + ';">';
    
    var myDiv = '<input id="' + inputid + '" type=' + format + ' style="color-scheme: ' + colorscheme + '; border-width: 0; font-family: &quot;' + fontface + '&quot;; background-color: inherit;">';
    
    instance.canvas.append(myDiv);
    
    var element = document.getElementById(inputid);
    
    element.style.fontSize = fontsize;
    element.style.textAlign = textalign;
    element.style.color = fontcolor;
    element.style.fontWeight = fontweight;
    
    const canvas = instance.canvas;

    canvas.css("width", "min-content");
    canvas.css("height", "min-content");
    
 	   if (properties.vcenter) {
            canvas.css("display", "flex");
            canvas.css("justifyContent", "center");
            canvas.css("alignItems", "center");
 	   }
    
	    if (minwidth) {
        	canvas.css("minWidth", minwidth);
    	}

    	if (minheight) {
        	canvas.css("minHeight", minheight);
    	}
    

}