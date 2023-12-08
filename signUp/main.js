document.querySelector(".forgotPassword").onclick = () => location.pathname = "/signIn/index.html";
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
document.querySelector(".submit").onclick = () => {
    if (emailRegex.test(document.querySelector(".emailInput").value) === false) {
        document.querySelector(".error").innerHTML = "Use a valid email";
        document.querySelector(".error").classList.add("active");
        setTimeout(() => document.querySelector(".error").classList.remove("active"), 5000);
        return;
    }
    if (document.querySelector(".usernameInput").value == "") {
        document.querySelector(".error").innerHTML = "Username is required";
        document.querySelector(".error").classList.add("active");
        setTimeout(() => document.querySelector(".error").classList.remove("active"), 5000);
        return;
    }
    const data = {
        username: document.querySelector(".usernameInput").value,
        email: document.querySelector(".emailInput").value,
        password: document.querySelector(".passwordInput").value,
        address: {
            state: "",
            street: "",
            houseNumber: ""
        }
    };
    fetch("https://web-store-server.aymenbraikia.repl.co/signUp", {
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
    }).then(res => {
        return res.json();
    }).then(pureRes => {
        pureRes = JSON.parse(pureRes);
        if (pureRes.succession) {
            localStorage.setItem("username", pureRes.username);
            localStorage.setItem("email", pureRes.email);
            localStorage.setItem("account", true);
            location.pathname = "";
        } else {
            document.querySelector(".error").innerHTML = pureRes.description;
            document.querySelector(".error").classList.add("active");
            setTimeout(() => document.querySelector(".error").classList.remove("active"), 5000);
        }
    });
};