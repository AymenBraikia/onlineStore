function hexToRgba(hex, alpha) {
    let r, g, b;

    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);

    return `(${r},${g},${b},${alpha})`;
}

if (localStorage.getItem("themeColor")) {
    document.body.style.cssText = `--primary-color: ${localStorage.getItem("themeColor")};--scroll-primary-colors: rgba${hexToRgba(localStorage.getItem("themeColor"), 0.5)}`;
}
if (localStorage.getItem("mode") == "dark") document.body.classList.toggle("darkMode");

const data = JSON.stringify({ email: localStorage.getItem("email") });
fetch("https://web-store-server.aymenbraikia.repl.co/cart", {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: data
}).then(resp => {
    return (resp.json());
}).then(Pureresp => {
    return JSON.parse(Pureresp);
}).then(finalyResp => {
    document.querySelector(".cartItems").innerHTML = `Products Count: ${finalyResp.items.length}`;
    screen.availWidth < 480 ? document.querySelector(".itemsContainer").style.cssText = `grid-template-rows: repeat(${finalyResp.items.length},600px)` : document.querySelector(".itemsContainer").style.cssText = `grid-template-rows: repeat(${finalyResp.items.length},200px)`;
    finalyResp.items.forEach(e => {
        const container = document.createElement("div");
        container.classList.add("itemContainer");
        document.querySelector(".itemsContainer").appendChild(container);

        const checkboxContaier = document.createElement("div");
        checkboxContaier.classList.add("cBoxContainer");
        container.append(checkboxContaier);

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("cBox");
        checkboxContaier.appendChild(checkbox);
        checkbox.onclick = () => {
            if (checkbox.checked) document.querySelector(".value").innerHTML = +document.querySelector(".value").innerHTML + +checkbox.parentElement.parentElement.childNodes[3].innerText.slice(7, -2);
            else document.querySelector(".value").innerHTML = +document.querySelector(".value").innerHTML - +checkbox.parentElement.parentElement.childNodes[3].innerText.slice(7, -2);
        };

        const image = document.createElement("div");
        image.style.backgroundImage = `url(${e.imageUrl})`;
        image.classList.add("itemImage");
        container.append(image);

        const name = document.createElement("div");
        name.innerText = e.name;
        name.classList.add("itemName");
        container.appendChild(name);

        const price = document.createElement("div");
        price.innerText = e.price;
        price.classList.add("itemPrice");
        container.appendChild(price);

        const remove = document.createElement("div");
        remove.innerHTML = "Remove";
        remove.classList.add("removeItem");
        remove.onclick = () => {
            document.querySelector(".warning").style.display = "flex";
            document.querySelector(".darkBg").style.display = "flex";

            document.querySelector(".warningYes").onclick = () => {
                removeItem(remove.parentElement.childNodes[1].style.backgroundImage.slice(5, -2));
                console.log(remove.parentElement);
                remove.parentElement.style.display = "none";
                document.querySelector(".warning").style.display = "none";
                document.querySelector(".darkBg").style.display = "none";
                document.querySelector(".itemsContainer").removeChild(remove.parentElement);
                if (screen.availWidth < 480) document.querySelector(".itemsContainer").style.cssText = `grid-template-rows: repeat(${document.querySelectorAll(".itemContainer").length},600px)`;
                else document.querySelector(".itemsContainer").style.cssText = `grid-template-rows: repeat(${document.querySelectorAll(".itemContainer").length},200px)`;
            };
        };
        container.appendChild(remove);
    });
});


let checkbox = document.querySelector(".checkbox");
checkbox.onclick = () => document.querySelectorAll(".cBox").forEach(e => e.click());
function removeItem(imageUrl) {
    fetch("https://web-store-server.aymenbraikia.repl.co/cartRemove", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: localStorage.getItem("email"),
            imageUrl: imageUrl
        })
    });
    document.querySelector(".cartItems").innerHTML = `Products Count: ${document.querySelectorAll(".itemContainer").length}`;
};
document.querySelector(".warningNo").onclick = () => {
    document.querySelector(".warning").style.display = "none";
    document.querySelector(".darkBg").style.display = "none";
};

document.querySelector(".removeAll").onclick = e => {
    document.querySelector(".warning").style.display = "flex";
    document.querySelector(".darkBg").style.display = "flex";
    document.querySelector(".warningYes").onclick = () => {
        document.querySelectorAll(".itemContainer").forEach(e => {
            removeItem(e.childNodes[1].style.backgroundImage.slice(5, -2));
            document.querySelector(".itemsContainer").removeChild(e);
            document.querySelector(".itemsContainer").style.cssText = `grid-template-rows: repeat(${document.querySelectorAll(".itemContainer").length},200px)`;
        });
        document.querySelector(".warning").style.display = "none";
        document.querySelector(".darkBg").style.display = "none";
    };
};
document.querySelector(".removeSelcted").onclick = e => {
    document.querySelector(".warning").style.display = "flex";
    document.querySelector(".darkBg").style.display = "flex";
    document.querySelector(".warningYes").onclick = () => {
        document.querySelectorAll(".itemContainer").forEach(e => {
            if (e.childNodes[0].childNodes[0].checked) {
                removeItem(e.childNodes[1].style.backgroundImage.slice(5, -2));
                document.querySelector(".itemsContainer").removeChild(e);
                document.querySelector(".itemsContainer").style.cssText = `grid-template-rows: repeat(${document.querySelectorAll(".itemContainer").length},200px)`;
            }
        });
        document.querySelector(".warning").style.display = "none";
        document.querySelector(".darkBg").style.display = "none";
    };
};

if (screen.availWidth <= 480) {
    document.querySelector(".search").innerHTML = "Cart"
}
document.querySelector(".logo").onclick = e => location.pathname = ""