function(instance, context) {

    instance.data.divid = "datetimediv" + Math.floor(Math.random() * 1000000).toString();
    instance.data.inputid = "datetimeinput" + Math.floor(Math.random() * 1000000).toString();

    $(document).ready(function () {

        var myDiv = '<input id="' + instance.data.inputid + '" type=' + instance.data.format + ' style="color-scheme:' + instance.data.colorscheme + '; border-width: 0; padding: 0; margin: 0; font-size: inherit; font-family: inherit; font-weight: inherit; background-color: rgba(255,255,255,0.01); color: inherit; font-style: inherit; text-decoration: inherit; text-align: inherit;">';

        instance.canvas.append(myDiv);

        const canvas = instance.canvas;
        
        var d = new Date();
        
        instance.publishState("offset", d.getTimezoneOffset());

        
        if (instance.data.fitwidthtocontent == true) {
            canvas.css("width", "max-content")
            }
        
        else {
            canvas.css("width", "100%")
        }

        if (instance.data.fitheighttocontent == true) {
            canvas.css("height", "max-content")
            }
        
        else {
            canvas.css("height", "100%")
        }
        
        if (instance.data.vcenter) {
            canvas.css("display", "flex")
            canvas.css("justifyContent", "center")
            canvas.css("alignItems", "center")
        }

        var input = document.getElementById(instance.data.inputid);

        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
        }

        function formatDate(date) {
            return (
                [
                    date.getFullYear(),
                    padTo2Digits(date.getMonth() + 1),
                    padTo2Digits(date.getDate()),
                ].join('-') +
                ' ' + [
                    padTo2Digits(date.getHours()),
                    padTo2Digits(date.getMinutes()),
                    //                      padTo2Digits(date.getSeconds()),
                ].join(':')
            );
        }
        
        if (instance.data.disabled) {
            input.disabled = true;
        }

        if (instance.data.initialdate && instance.data.format == "date") {

            input.value = new Date(instance.data.initialdate).toISOString().split('T')[0];
            instance.publishState("date", input.value);
            instance.publishState("date_string", input.value.toString());

        } else if (instance.data.initialdate && instance.data.format == "month") {

            var month = new Date(instance.data.initialdate).toISOString().split('T')[0];
            input.value = month.slice(0, -3);
            instance.publishState("date", input.value);
            instance.publishState("date_string", input.value.toString());

        } else if (instance.data.initialdate && instance.data.format == "datetime-local") {

            const [date, time] = formatDate(new Date(instance.data.initialdate)).split(' ');
            input.value = date + 'T' + time;
            instance.publishState("date", input.value);
            instance.publishState("date_string", input.value.toString());

        } else if (instance.data.initialdate && instance.data.format == "time") {
            const [date, time] = formatDate(new Date(instance.data.initialdate)).split(' ');
            input.value = time;
            instance.publishState("date", date + 'T' + time);
            instance.publishState("date_string", input.value.toString());

        }

        if (instance.data.step) {
            input.step = instance.data.step
        }

        if (instance.data.min) {
            input.min = instance.data.min
        }

        if (instance.data.max) {
            input.max = instance.data.max
        }


        input.addEventListener('input', function (evt) {
            
             if (!this.value) {
                 instance.triggerEvent('reset');
             }
            
            if (this.value) {

                if (instance.data.disabled) {
                    this.disabled = true;
                }
                else {
                    this.disabled = false;
                }

            if (instance.data.format == 'time') {

                var a = this.value
                var b = toDate(a)

                function toDate(dStr) {
                    var now = new Date();
                    now.setHours(dStr.substr(0, dStr.indexOf(":")));
                    now.setMinutes(dStr.substr(3, dStr.indexOf(":")));
                    now.setSeconds(dStr.substr(6, dStr.indexOf(":")));
                    return now;

                }

                instance.publishState("date", b);
                instance.publishState("date_string", b.toString());
                instance.triggerEvent('dateready');

                if (this.checkValidity()) {
                    instance.publishState("valid", true);
                        }
                else {
                    instance.publishState("valid", false)
                    instance.triggerEvent('invalid');
                    }
                
            } else {
                instance.publishState("date", this.value);
                instance.publishState("date_string", this.value.toString());
                instance.triggerEvent('dateready');
            }
                
            }
                else {
                    instance.publishState("date");
                    instance.publishState("date_string", "");
                }
                
        });

    });
}