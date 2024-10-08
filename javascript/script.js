function validate() {
    let text = '';
    if (document.myForm.pname.value == "") { 
        text = 'Project Name Cannot Be Empty';
        document.getElementById("demo").innerHTML = text;
        document.myForm.pname.focus();
        return false;
    }
    var pnameId = document.myForm.pname.value

    if (document.myForm.email.value == "") {
        text = 'Email Cannot Be Empty';
        document.getElementById("demo").innerHTML = text;
        document.myForm.mail.focus();
        return false;
    }

    var emailId = document.myForm.email.value;
    let atposn = emailId.indexOf("@");   
    let dotposn = emailId.lastIndexOf("."); 

    if (atposn < 1 || dotposn - atposn < 2) {
        text = 'Enter Valid Email';
        document.getElementById("demo").innerHTML = text;
        document.myForm.email.focus();
        return false;
    }

    if (document.myForm.words.value == "") { 
        text = 'This fild Cannot Be Empty';
        document.getElementById("demo").innerHTML = text;
        document.myForm.words.focus();
        return false;
    }
    var wordsId = document.myForm.words.value

    if (document.myForm.tname.value == "") { 
        text = 'This fild Cannot Be Empty';
        document.getElementById("demo").innerHTML = text;
        document.myForm.tname.focus();
        return false;
    }
    var tnameId = document.myForm.tname.value

    return (true);
}