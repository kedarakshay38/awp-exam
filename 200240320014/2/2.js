function submitandshow() {

    var uname = document.querySelector("#uid").value;
    //alert(uname);

    var upassword = document.querySelector("#pwid").value;
    //   alert(upassword);

    var Uemail = document.querySelector("#Eid").value;

    //alert(Uemail);


    var Submitted = document.querySelector(".showforms");
    //console.log(Submitted);

    Submitted.innerHTML = "User name:-" + uname + "  " + "Password:" + upassword + "  " + "Email:-" + Uemail;
    document.querySelector("#uid").value = "";
    document.querySelector("#pwid").value = "";
    document.querySelector("#Eid").value = "";

}