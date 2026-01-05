function login(e) {
    e.preventDefault();
    var user_name = document.getElementById("username").value;
    var user_pw = document.getElementById("password").value;
    // var dats = localStorage.setItem("Username", Suvetha)
    if (user_name == "Girija" && user_pw == 230503) {
        alert("Login Successful✅")
        window.location.href = "./home.html"
        localStorage.setItem("username", user_name);
    } else { alert("❌ Incorrect Password or Username.Please try again") }
}

function forgetPw() { alert("Your PassWord is: 230503") }