const data = JSON.stringify({email: localStorage.getItem("email")});
let i = 0;
let bigImg = document.querySelector(".bigImg");

async function addToCart(body) {
    fetch("https://web-store-server.aymenbraikia.repl.co/cartAdd",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(resp => {
        return resp.json();
    }).then(pureResp => {
        console.log(pureResp);
    });
}

fetch("https://web-store-server.aymenbraikia.repl.co/savedList",{
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
    if (finalyResp.items.length <= 0) {
        document.querySelector(".containerRight").innerHTML = "<div class='noItems'>There Is No Items In Saved List</div>";
        document.querySelector(".containerRight").classList.add("active");
        document.querySelector(".containerLeft").innerHTML = "<h3 style='text-alight:center;'>There Is Nothing To Display Here</h3>";
    };

    finalyResp.items.forEach(e => {
        let itemContainer = document.createElement("div");
        itemContainer.classList.add("itemContainer");

        let image = document.createElement("div");
        image.classList.add("image");
        image.style.backgroundImage = `url(${finalyResp.items[i].imageUrl})`;

        let name = document.createElement("div");
        name.classList.add("name");
        name.innerHTML = finalyResp.items[i].name;

        let price = document.createElement("div");
        price.classList.add("price");
        price.innerHTML = finalyResp.items[i].price;

        let buttons = document.createElement("div");
        buttons.classList.add("buttons");

        let moveToCart = document.createElement("div");
        moveToCart.classList.add("moveToCart");
        moveToCart.innerHTML = "Move To Cart";

        let remove = document.createElement("div");
        remove.classList.add("remove");
        remove.innerHTML = "Remove";

        let details = document.createElement("div");
        details.classList.add("details");

        itemContainer.onmouseenter = e => {
            bigImg.style.backgroundImage = itemContainer.childNodes[0].style.backgroundImage;
        };

        moveToCart.onclick = e => {
            addToCart({
                email: localStorage.getItem("email"),
                item: {
                    name: e.currentTarget.parentElement.parentElement.childNodes[0].innerHTML,
                    price: e.currentTarget.parentElement.parentElement.childNodes[1].innerHTML.slice(5),
                    color: null,
                    imageUrl: document.querySelector(".bigImg").style.backgroundImage.slice(5,-2).replace("","")
                }
            });
            removeItem(remove.parentElement.parentElement.parentElement.childNodes[0].style.backgroundImage.slice(5,-2));
            remove.parentElement.parentElement.parentElement.style.display = "none";
            document.querySelector(".containerRight").removeChild(remove.parentElement.parentElement.parentElement);
            document.querySelector(".containerRight").style.cssText = `grid-template-rows: repeat(${document.querySelectorAll(".itemContainer").length},200px)`;
            if (document.querySelectorAll(".itemContainer").length == 0) {
                document.querySelector(".containerRight").innerHTML = "<div class='noItems'>There Is No Items In Saved List</div>";
                document.querySelector(".containerRight").classList.add("active");
                document.querySelector(".containerLeft").innerHTML = "<div class='nothingToDisplay'>There Is Nothing To Display Here</div>";
            }
        };

        remove.onclick = () => {
            document.querySelector(".warning").style.display = "flex";
            document.querySelector(".darkBg").style.display = "flex";

            document.querySelector(".warningYes").onclick = () => {
                removeItem(remove.parentElement.parentElement.parentElement.childNodes[0].style.backgroundImage.slice(5,-2));
                remove.parentElement.parentElement.parentElement.style.display = "none";
                document.querySelector(".warning").style.display = "none";
                document.querySelector(".darkBg").style.display = "none";
                document.querySelector(".containerRight").removeChild(remove.parentElement.parentElement.parentElement);
                document.querySelector(".containerRight").style.cssText = `grid-template-rows: repeat(${document.querySelectorAll(".itemContainer").length},200px)`;
                if (document.querySelectorAll(".itemContainer").length == 0) {
                    document.querySelector(".containerRight").innerHTML = "<div class='noItems'>There Is No Items In Saved List</div>";
                    document.querySelector(".containerRight").classList.add("active");
                    document.querySelector(".containerLeft").innerHTML = "<div class='nothingToDisplay'>There Is Nothing To Display Here</div>";
                }
            };
        };

        itemContainer.appendChild(image);
        itemContainer.appendChild(details);
        buttons.appendChild(moveToCart);
        buttons.appendChild(remove);
        details.appendChild(name);
        details.appendChild(price);
        details.appendChild(buttons);
        document.querySelector(".containerRight").appendChild(itemContainer);
        i++;
    });
});


function removeItem(imageUrl) {
    fetch("https://web-store-server.aymenbraikia.repl.co/savesRemove",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: localStorage.getItem("email"),
            imageUrl: imageUrl
        })
    });
};

document.querySelector(".warningNo").onclick = () => {
    document.querySelector(".warning").style.display = "none";
    document.querySelector(".darkBg").style.display = "none";
};
window.onscroll = e => {
    scrollY >= 100 ? document.querySelector(".containerLeft").style.cssText = 'top: 50%; transform: translateY(-50%); height:90vh;' : document.querySelector(".containerLeft").style.cssText = '120px';
};