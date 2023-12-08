/*

read only:
creation date


edited:
username
email
password
language
theme
delete account
address(add it if u want to make purchases easier)
*/
const states = ["أدرار","الشلف","الأغواط","أم البواقي","باتنة","بجاية","بسكرة","بشار","البليدة","البويرة","تمنراست","تبسة","تلمسان","تيارت","تيزي وزو","الجزائر","الجلفة","جيجل","سطيف","سعيدة","سكيكدة","سيدي بلعباس","عنابة","قالمة","قسنطينة","المدية","مستغانم","المسيلة","معسكر","ورقلة","وهران","البيض","اليزي","برج بوعريريج","بومرداس","الطارف","تندوف","تسمسيلت","الوادي","خنشلة","سوق أهراس","تيبازة","ميلة","عين الدفلى","النعامة","عين تموشنت","غرداية","غليزان","المغير","المنيعة","أولاد جلال","برج باجي مختار","بني عباس","تيميمون","تقرت","جانت","عين صالح","عين قزّام"];
for (let i = 0;i < states.length;i++) {
    const state = document.createElement("option");
    state.innerHTML = states[i];
    state.value = states[i];
    state.classList.add("state");
    document.querySelector(".city").appendChild(state);
}
const data = JSON.stringify({
    email: localStorage.getItem("email"),
    username: localStorage.getItem("username")
});
fetch("https://web-store-server.aymenbraikia.repl.co/settings",{
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: data
}).then(resp => {
    return resp.json();
}).then(info => {
    return JSON.parse(info);
}).then(pureData => {
    document.querySelector(".input.username").value = pureData.username;
    document.querySelector(".input.email").value = pureData.email;
    document.querySelector(".input.password").value = pureData.password;
    document.querySelector(".creationDate").innerHTML = `تاريخ انشاء الحساب:    ${pureData.date}`;
});
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

document.querySelector(".save").onclick = () => {
    const newData = JSON.stringify({
        username: document.querySelector(".username").value,
        email: document.querySelector(".email").value,
        oldEmail: localStorage.getItem("email"),
        password: document.querySelector(".password").value,
        address: {
            state: document.querySelector(".city").value,
            street: document.querySelector(".street").value,
            houseNumber: document.querySelector(".houseNumber").value
        }
    });
    if (emailRegex.test(document.querySelector(".email").value) === false) newData.email = localStorage.getItem("email");
    fetch("https://web-store-server.aymenbraikia.repl.co/save",{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: newData
    }).then(resp => {
        return resp.json();
    }).then(info => {
        return JSON.parse(info);
    }).then(pureData => {

    });
};