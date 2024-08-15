function(instance, properties, context) {

	instance.data.fontsize = properties.bubble.font_size() + "px";
    instance.data.fontface = properties.bubble.font_face().split(':')[0];
    instance.data.fontweight = properties.bubble.font_face().split(':')[3];
    instance.data.borderwidth = properties.bubble.border_width() + "px";
    instance.data.borderstyle = properties.bubble.border_style();
    instance.data.disabled = properties.disabled;

//    instance.data.bgcolor = properties.bubble.bgcolor();

	    if (properties.fitwidth) {
 	   instance.data.fitwidthtocontent = properties.fitwidth
	    }
		else {
       instance.data.fitwidthtocontent = false
    	}

        if (properties.fitheight) {
 	   instance.data.fitheighttocontent = properties.fitheight
	    }
		else {
       	instance.data.fitheighttocontent = false
    	}

    if (properties.vcenter) {
        instance.data.vcenter = properties.vcenter
    }

    
    if (properties.colorscheme) {
    instance.data.colorscheme = properties.colorscheme
    }
    
    if (properties.step) {
    instance.data.step = properties.step
    }

    if (properties.min) {
    	instance.data.min = properties.min;
        instance.publishState("min", properties.min);
    }

    if (properties.max) {
    	instance.data.max = properties.max;
       	instance.publishState("max", properties.max);
    }

    
    if (properties.format == 'date') {
        instance.data.format = 'date'
    }
    else if (properties.format == 'time') {
        instance.data.format = 'time'
    }
    else if (properties.format == 'month') {
        instance.data.format = 'month'
    }

    else {
        instance.data.format = 'datetime-local'
    }

    if (properties.initial) {
//        const value = new Date(properties.initial);
//        instance.data.initialdate = value.toString();
        
        instance.data.initialdate = properties.initial;
        
    }
    


}