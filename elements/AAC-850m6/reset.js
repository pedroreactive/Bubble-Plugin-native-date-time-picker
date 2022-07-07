function(instance, context) {

    var input = document.getElementById(instance.data.inputid);

    input.value = "";
    instance.publishState("date");
    instance.publishState("date_string", "");
    
    
}