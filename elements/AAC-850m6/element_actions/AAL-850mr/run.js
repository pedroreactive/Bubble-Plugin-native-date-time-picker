function(instance, properties, context) {

    
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
                    ' ' +
                    [
                      padTo2Digits(date.getHours()),
                      padTo2Digits(date.getMinutes()),
//                      padTo2Digits(date.getSeconds()),
                    ].join(':')
                  );
                }

           if (instance.data.format == "date") {
                
                input.value = new Date(properties.date).toISOString().split('T')[0];
           		instance.publishState("date", input.value);
        		instance.publishState("date_string", input.value.toString());

            }
            
            
            else if (instance.data.format == "month") {
                
                var month = new Date(properties.date).toISOString().split('T')[0];
                input.value = month.slice(0, -3);
                instance.publishState("date", input.value);
        		instance.publishState("date_string", input.value.toString());

            }
            
            else if (instance.data.format == "datetime-local") {

                const [date, time] = formatDate(new Date(properties.date)).split(' ');
                input.value = date + 'T' + time;
                instance.publishState("date", input.value);
        		instance.publishState("date_string", input.value.toString());

            }
            
            else if (instance.data.format == "time") {

                const [date, time] = formatDate(new Date(properties.date)).split(' ');

	            input.value = time;

                var a = time
                var b = toDate(a)
                function toDate(dStr) {
                    var now = new Date();
                        now.setHours(dStr.substr(0,dStr.indexOf(":")));
                        now.setMinutes(dStr.substr(dStr.indexOf(":")+1));
                        now.setSeconds(0);
                        return now;
                }

            instance.publishState("date", b);
            instance.publishState("date_string", b.toString());

            }
    
                    if (properties.triggerevent) {
    	        instance.triggerEvent('dateready');
                    }


}