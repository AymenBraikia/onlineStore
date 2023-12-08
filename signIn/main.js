document.querySelector(".signup").onclick = () => location.pathname = "/signUp/index.html";

document.querySelector(".submit").onclick = () => {
    const data = {
        username: document.querySelector(".usernameInput").value,
        email: document.querySelector(".emailInput").value,
        password: document.querySelector(".passwordInput").value
    };
    fetch("https://web-store-server.aymenbraikia.repl.co/signIn",{
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        mode: "cors"
    }).then(res => {
        return res.json();
    }).then(pureRes => {
        pureRes = JSON.parse(pureRes);
        if (pureRes.succession) {
            localStorage.setItem("username",pureRes.username);
            localStorage.setItem("email",pureRes.email);
            localStorage.setItem("account",true);
            console.log(pureRes);
            location.pathname = "";
        } else {
            console.log(pureRes);
            document.querySelector(".error").innerHTML = pureRes.description;
            document.querySelector(".error").classList.add("active");
            setTimeout(() => document.querySelector(".error").classList.remove("active"),5000);
        }
    });
};