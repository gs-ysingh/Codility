function solution() {
    var result = false;
    var current = $('input[name=type]:checked').val();
    var emailRegex = /^(?!.*?\.\.)[\w.]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]+$/;
    var phoneRegex = /^([-]*\d[-]*){6,}$/;
    if(current == "person") {
        var first_name = $('input[name=first_name]').val();
        var last_name = $('input[name=last_name]').val();
        var email = $('input[name=email]').val();

        if(first_name != "" && last_name != "" && email != "" && emailRegex.test(email)) {
            result = true;
        }
    }
    if(current == "company") {
        var company_name = $('input[name=company_name]').val();
        var phone = $('input[name=phone]').val();

        if(company_name != "" && phone != "" && phoneRegex.test(phone)) {
            result = true;
        }
    }

    return result;
}

console.log(solution());