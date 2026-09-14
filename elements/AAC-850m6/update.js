function(instance, properties, context) {

	instance.data.fontsize = properties.bubble.font_size() + "px";
    instance.data.fontface = properties.bubble.font_face().split(':')[0];
    instance.data.fontweight = properties.bubble.font_face().split(':')[3];
    instance.data.borderwidth = properties.bubble.border_width() + "px";
    instance.data.borderstyle = properties.bubble.border_style();
    instance.data.disabled = properties.disabled;
    instance.data.required = properties.required === true;

    const currentInput =
        document.getElementById(instance.data.inputid);

    if (currentInput) {
        currentInput.required = instance.data.required;
        instance.publishState(
            "valid",
            currentInput.checkValidity()
        );
    }

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

const initialDate = properties.initial
    ? new Date(properties.initial)
    : null;

const initialIsValid =
    initialDate && !Number.isNaN(initialDate.getTime());

const initialKey = initialIsValid
    ? instance.data.format + ":" + initialDate.getTime()
    : instance.data.format + ":empty";

const initialChanged =
    instance.data.initialKey !== initialKey;

instance.data.initialdate = initialIsValid
    ? properties.initial
    : null;

instance.data.initialKey = initialKey;

if (initialChanged) {
    const input = document.getElementById(instance.data.inputid);

    if (input) {
        input.type = instance.data.format;

        if (!initialIsValid) {
            input.value = "";
            instance.publishState("date");
            instance.publishState("date_string", "");
        } else {
            const pad = value =>
                String(value).padStart(2, "0");

            const dateValue =
                initialDate.getFullYear() + "-" +
                pad(initialDate.getMonth() + 1) + "-" +
                pad(initialDate.getDate());

            const timeValue =
                pad(initialDate.getHours()) + ":" +
                pad(initialDate.getMinutes());

            if (instance.data.format === "date") {
                input.value = dateValue;
            } else if (instance.data.format === "month") {
                input.value = dateValue.slice(0, 7);
            } else if (instance.data.format === "time") {
                input.value = timeValue;
            } else {
                input.value = dateValue + "T" + timeValue;
            }

            instance.publishState(
                "date",
                instance.data.format === "time"
                    ? dateValue + "T" + timeValue
                    : input.value
            );

            instance.publishState("date_string", input.value);
        }

        instance.publishState("valid", input.checkValidity());
    }
}


}