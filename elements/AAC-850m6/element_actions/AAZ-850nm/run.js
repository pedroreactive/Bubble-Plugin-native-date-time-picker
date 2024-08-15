function(instance, properties, context) {


  //Load any data 

    var input = document.getElementById(instance.data.inputid);

    input.value = "";
    instance.publishState("date");
    instance.publishState("date_string", "");


  //Do the operation



}