function addSanta() {
    $(".santas").append("<div class='santa'> Name: <input type='text' name='name' required> Email: <input type='email' name='email' required>&nbsp;<button type='button' id='delButton' class='btn btn-primary' onclick='$(this).parent().remove();'> X </button><br></div>");
}