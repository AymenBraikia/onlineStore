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
if (localStorage.getItem("mode") == "dark") {
    document.body.classList.toggle("darkMode");
    document.querySelector(".logo").classList.toggle("dark");
}
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
            if (checkbox.checked) {
                document.querySelector(".value").innerHTML =
                    (+document.querySelector(".value").innerHTML.slice(0, -1) + +checkbox.parentElement.parentElement.childNodes[3].innerText.slice(7, -2)).toFixed(2).toString() + "$"
                document.querySelector(".submit").classList.add("active")
            }
            else {
                document.querySelector(".value").innerHTML = (+document.querySelector(".value").innerHTML.slice(0, -1) - +checkbox.parentElement.parentElement.childNodes[3].innerText.slice(7, -2)).toFixed(2).toString() + "$";
                if(document.querySelector(".value").innerHTML.slice(0,-1) <= 0) document.querySelector(".submit").classList.remove("active")
            }
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
            document.querySelector(".warningTxt").innerHTML = "Are you sure you want to remove this product ?";
            document.querySelector(".warning").classList.add("active");
            document.querySelector(".darkBg").classList.add("active");

            document.querySelector(".warningYes").onclick = () => {
                removeItem(remove.parentElement.childNodes[1].style.backgroundImage.slice(5, -2));
                console.log(remove.parentElement);
                remove.parentElement.style.display = "none";
                document.querySelector(".warning").classList.remove("active");
                document.querySelector(".darkBg").classList.remove("active");
                document.querySelector(".itemsContainer").removeChild(remove.parentElement);
                if (screen.availWidth < 480) document.querySelector(".itemsContainer").style.cssText = `grid-template-rows: repeat(${document.querySelectorAll(".itemContainer").length},600px)`;
                else document.querySelector(".itemsContainer").style.cssText = `grid-template-rows: repeat(${document.querySelectorAll(".itemContainer").length},200px)`;
            };
        };
        container.appendChild(remove);
    });
});


let checkbox = document.querySelector(".checkbox");
checkbox.onclick = () => document.querySelectorAll(".cBox").forEach(e => {
    if (!checkbox.checked) {
        if (e.checked) e.click()
        return
    }
    if (!e.checked) e.click()
});
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
    document.querySelector(".warning").classList.remove("active");
    document.querySelector(".darkBg").classList.remove("active");
};

document.querySelector(".removeAll").onclick = e => {
    document.querySelector(".warning").classList.add("active");
    document.querySelector(".darkBg").classList.add("active");
    document.querySelector(".warningTxt").innerHTML = "Are you sure you want to remove all product ?";
    document.querySelector(".warningYes").onclick = () => {
        document.querySelectorAll(".itemContainer").forEach(e => {
            removeItem(e.childNodes[1].style.backgroundImage.slice(5, -2));
            document.querySelector(".itemsContainer").removeChild(e);
            document.querySelector(".itemsContainer").style.cssText = `grid-template-rows: repeat(${document.querySelectorAll(".itemContainer").length},200px)`;
            document.querySelector(".cartItems").innerHTML = `Products Count: ${document.querySelectorAll(".itemContainer").length}`;
        });
        document.querySelector(".warning").classList.remove("active");
        document.querySelector(".darkBg").classList.remove("active");
    };
};
document.querySelector(".removeSelcted").onclick = e => {
    document.querySelector(".warningTxt").innerHTML = "Are you sure you want to remove all selected product ?";
    document.querySelector(".warning").classList.add("active");
    document.querySelector(".darkBg").classList.add("active");
    document.querySelector(".warningYes").onclick = () => {
        document.querySelectorAll(".itemContainer").forEach(e => {
            if (e.childNodes[0].childNodes[0].checked) {
                removeItem(e.childNodes[1].style.backgroundImage.slice(5, -2));
                document.querySelector(".itemsContainer").removeChild(e);
                document.querySelector(".itemsContainer").style.cssText = `grid-template-rows: repeat(${document.querySelectorAll(".itemContainer").length},200px)`;
            }
        });
        document.querySelector(".warning").classList.remove("active");
        document.querySelector(".darkBg").classList.remove("active");
    };
};

if (screen.availWidth <= 480) {
    document.querySelector(".search").innerHTML = "Cart"
}
document.querySelector(".logo").onclick = e => location.pathname = ""

document.querySelector(".darkBg").onclick = e => {
    document.querySelector(".warning").classList.remove("active")
    document.querySelector(".darkBg").classList.remove("active")
    document.querySelector(".payments").classList.remove("active")
}

document.querySelector(".submit").onclick = e => {
    if (document.querySelector(".value").innerHTML.slice(0, -1) >= 0 && document.querySelector(".submit").classList.contains("active")) {
        document.querySelector(".darkBg").classList.add("active")
        document.querySelector(".payments").classList.add("active")
        document.querySelector("#result-message").classList.add("active")
        document.querySelector("#result-message").innerHTML = `You will pay: ${document.querySelector(".value").innerHTML}`
    } else return
}









// payments
window.paypal
    .Buttons({
        async createOrder() {
            try {
                document.querySelector("#result-message").classList.remove("active")
                const response = await fetch("https://web-store-server.aymenbraikia.repl.co/api/orders", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    // use the "body" param to optionally pass additional order information
                    // like product ids and quantities
                    body: JSON.stringify({
                        cart: [
                            {
                                id: "YOUR_PRODUCT_ID",
                                quantity: "1",
                                amount: {
                                    "currency_code": "USD",
                                    "value": document.querySelector(".value").innerText.slice(0, -1)
                                }
                            },
                        ],
                        "amount": {
                            "currency_code": "USD",
                            "value": document.querySelector(".value").innerText.slice(0, -1)
                        }
                    }),
                });

                const orderData = await response.json();

                if (orderData.id) {
                    return orderData.id;
                } else {
                    const errorDetail = orderData?.details?.[0];
                    const errorMessage = errorDetail
                        ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                        : JSON.stringify(orderData);

                    throw new Error(errorMessage);
                }
            } catch (error) {
                console.error(error);
                resultMessage(`Could not initiate PayPal Checkout...<br><br>${error}`);
            }
        },
        async onApprove(data, actions) {
            console.clear();
            console.log(data, actions);
            try {
                const response = await fetch(`https://web-store-server.aymenbraikia.repl.co/api/orders/${data.orderID}/capture`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const orderData = await response.json();
                // Three cases to handle:
                //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                //   (2) Other non-recoverable errors -> Show a failure message
                //   (3) Successful transaction -> Show confirmation or thank you message
                console.clear()
                console.log(orderData)

                const errorDetail = orderData?.details?.[0];

                console.log(errorDetail);

                if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                    // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                    // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                    return actions.restart();
                } else if (errorDetail) {
                    // (2) Other non-recoverable errors -> Show a failure message
                    throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
                } else if (!orderData.purchase_units) {
                    throw new Error(JSON.stringify(orderData));
                } else {
                    // (3) Successful transaction -> Show confirmation or thank you message
                    // Or go to another URL:  actions.redirect('thank_you.html');
                    const transaction =
                        orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
                        orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
                    resultMessage(
                        `Transaction ${transaction.status}: ${transaction.id}<br><br>See console for all available details`,
                    );
                    console.log(
                        "Capture result",
                        orderData,
                        JSON.stringify(orderData, null, 2),
                    );
                }
            } catch (error) {
                console.error(error);
                resultMessage(
                    `Sorry, your transaction could not be processed...<br><br>${error}`,
                );
            }
        },
        async onCancel() {
            document.querySelector("#result-message").classList.add("active")
        }
    })
    .render("#paypal-button-container");

// Example function to show a result to the user. Your site's UI library can be used instead.
function resultMessage(message) {
    const container = document.querySelector("#result-message");
    container.innerHTML = message;
}


