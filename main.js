window.onload = (e) => {
  if (localStorage.getItem("account") == "true")
    document.querySelector(".accountOptions").style.width =
      document.querySelector(".account").clientWidth + "px";
};
let cartItemsAmount, savesItemsAmount;
function checkCartItems() {
  if (document.querySelectorAll(".itemImage").length > 0) {
    document.querySelectorAll(".itemImage").forEach((el) => {
      if (inCart.includes(el.getAttribute("imageurl"))) {
        el.parentElement.childNodes[2].childNodes[0].setAttribute(
          "activated",
          true
        );
        el.parentElement.childNodes[2].childNodes[0].classList.add("active");
      }
    });
  } else {
    requestAnimationFrame(checkCartItems);
    return;
  }
}

function hexToRgba(hex, alpha) {
  let r, g, b;

  r = parseInt(hex.slice(1, 3), 16);
  g = parseInt(hex.slice(3, 5), 16);
  b = parseInt(hex.slice(5, 7), 16);

  return `(${r},${g},${b},${alpha})`;
}

if (localStorage.getItem("themeColor")) {
  document.body.style.cssText = `--primary-color: ${localStorage.getItem(
    "themeColor"
  )};--scroll-primary-colors: rgba${hexToRgba(
    localStorage.getItem("themeColor"),
    0.5
  )}`;
}
if (localStorage.getItem("mode") == "dark") {
  document.querySelector(".moon").classList.add("active");
  document.body.classList.toggle("darkMode");
} else document.querySelector(".sun").classList.add("active");

function checkSavesItems() {
  if (document.querySelectorAll(".itemImage").length > 0) {
    document.querySelectorAll(".itemImage").forEach((el) => {
      if (inSaves.includes(el.getAttribute("imageurl"))) {
        el.parentElement.childNodes[2].childNodes[2].setAttribute(
          "activated",
          true
        );
        el.parentElement.childNodes[2].childNodes[2].classList.add("active");
      }
    });
  } else {
    requestAnimationFrame(checkSavesItems);
    return;
  }
}
checkCartItems();
checkSavesItems();
let inCart = [];
let inSaves = [];
let test;
let cartItemsNames = [];
let b;
let a;
let c = [];
let itemsDetails = {};
async function addToCart(body) {
  fetch("https://web-store-server.aymenbraikia.repl.co/cartAdd", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((resp) => {
      return resp.json();
    })
    .then((pureResp) => {
      console.log(pureResp);
    });
}
async function addToSaved(body) {
  fetch("https://web-store-server.aymenbraikia.repl.co/saveAdd", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((resp) => {
      return resp.json();
    })
    .then((pureResp) => {
      console.log(pureResp);
    });
}

const viewSvg = [
  `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 902.86 902.86" xml:space="preserve"><g><g><path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829zM685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path><path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897zM619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742S619.162,694.432,619.162,716.897z"></path></g></g></svg>`,
  `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z"/></svg>`,
  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.463 6.02421 11.4664 6.02765 11.4698 6.03106L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM13.4698 8.03034C13.7627 8.32318 14.2376 8.32309 14.5304 8.03014C14.8233 7.7372 14.8232 7.26232 14.5302 6.96948L13.4698 8.03034ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219ZM11.4698 6.03106L13.4698 8.03034L14.5302 6.96948L12.5302 4.97021L11.4698 6.03106Z"></path></svg>`,
];
let products;
fetch("https://web-store-server.aymenbraikia.repl.co/fetchDeals")
  .then((res) => {
    return res.json();
  })
  .then(async (pureData) => {
    let i = 1;
    pureData.forEach((e) => {
      let ele = document.querySelector(`.ex${i}`);
      ele.firstElementChild.style.cssText = `background-image: url(${e.imageUrl});`;
      ele.lastElementChild.firstElementChild.innerHTML = e.name;
      ele.lastElementChild.lastElementChild.innerHTML = e.price + " $";
      i++;
    });
  });
fetch("https://web-store-server.aymenbraikia.repl.co/fetchData")
  .then((res) => {
    return res.json();
  })
  .then(async (pureData) => {
    products = pureData;
    window.products = pureData;

    products.forEach((e) => {
      for (el in e.details) c.push(e.details[el]);
    });

    if (localStorage.getItem("email")) {
      await fetch("https://web-store-server.aymenbraikia.repl.co/cart", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: localStorage.getItem("email") }),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          return JSON.parse(res);
        })
        .then((res) => {
          for (const i in res.items) inCart.push(res.items[i].imageUrl);
          if (localStorage.getItem("account") == "true")
            cartItemsAmount = res.items.length;
          document.querySelector(".extraTxt.cartTxt").innerHTML =
            res.items.length;
        });

      await fetch("https://web-store-server.aymenbraikia.repl.co/saves", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: localStorage.getItem("email") }),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          return JSON.parse(res);
        })
        .then((res) => {
          for (const i in res.items) inSaves.push(res.items[i].imageUrl);
          if (localStorage.getItem("account") == "true")
            savesItemsAmount = res.items.length;
          document.querySelector(".extraTxt.saveTxt").innerHTML =
            res.items.length;
        });
    }

    let i = -1;
    products.forEach((e) => {
      i++;
      for (let productID in e.details) {
        let item = e.details[productID];
        let parent = document.createElement("div");
        parent.classList.add("itemsCard");

        let cardInfo = document.createElement("div");
        cardInfo.classList.add("itemsInfo");

        let image = document.createElement("div");
        image.classList.add("itemImage");
        image.style.backgroundImage = `url(${item.imageUrl})`;
        image.setAttribute("imageUrl", item.imageUrl);
        parent.appendChild(image);

        let name = document.createElement("div");
        name.classList.add("itemsName");
        name.innerHTML = products[i].name;

        let price = document.createElement("div");
        price.classList.add("itemsPrice");

        cardInfo.appendChild(price);
        cardInfo.appendChild(name);
        price.innerHTML = "price: " + products[i].price + " $";

        parent.appendChild(cardInfo);

        let cardOptions = document.createElement("div");
        cardOptions.classList.add("cardOptions");

        for (let j = 0; j < 3; j++) {
          let cardOption = document.createElement("div");
          cardOption.classList.add(`cardOption${j + 1}`, "cardOption", "ctr");
          cardOption.setAttribute("activated", "false");
          cardOption.innerHTML = viewSvg[j];
          cardOptions.appendChild(cardOption);
        }

        document.querySelectorAll(".cardOption2").forEach((e) => {
          e.onclick = (c) => {
            let colorsSelect = document.querySelector(".colorsSelect");
            colorsSelect.innerHTML = `<option value="">Pick a color</option>`;

            itemsDetails[
              e.parentElement.parentElement.childNodes[1].childNodes[1].innerHTML.replaceAll(
                " ",
                ""
              )
            ].colors.forEach((el) => {
              let opt = document.createElement("option");
              opt.value = el;
              opt.innerHTML = el;
              colorsSelect.appendChild(opt);
            });

            colorsSelect.onchange = (e) => {
              document.querySelector(
                ".img"
              ).style.backgroundImage = `url(/images/${
                document
                  .querySelector(".name")
                  .innerHTML.split(" ")[0]
                  .toLocaleLowerCase() + e.target.value
              }.jpg)`;
            };

            document.querySelector(".darkBg").classList.add("active");
            document.querySelector(".itemView").classList.add("active");
            document.querySelector(".itemView").style.zIndex = 3;

            document.querySelector(
              ".img"
            ).style.backgroundImage = `url(${e.parentElement.parentElement.childNodes[0].getAttribute(
              "ImageUrl"
            )})`;
            document.querySelector(".name").innerHTML =
              e.parentElement.parentElement.childNodes[1].childNodes[1].innerHTML;
            document.querySelector(".price").innerHTML =
              e.parentElement.parentElement.childNodes[1].childNodes[0].innerHTML;
            document.querySelector(".stock").innerHTML = "Stock: ";
          };
        });

        document.querySelectorAll(".cardOption1").forEach((e) => {
          e.onclick = () => {
            if (localStorage.getItem("email")) {
              if (e.getAttribute("activated") == "false") {
                e.setAttribute("activated", true);
                e.classList.add("active");
                const data = {
                  email: localStorage.getItem("email"),
                  item: {
                    name: e.parentElement.parentElement.childNodes[1]
                      .childNodes[1].innerText,
                    price:
                      e.parentElement.parentElement.childNodes[1].childNodes[0]
                        .innerText,
                    color: null,
                    imageUrl:
                      e.parentElement.parentElement.childNodes[0].getAttribute(
                        "imageUrl"
                      ),
                  },
                };
                addToCart(data);
                cartItemsAmount++;
                document.querySelector(".cartTxt").innerHTML = cartItemsAmount;
              } else notification("this item is already in cart");
            } else
              notification(
                "you must sign in or sign up before adding items to Cart"
              );
          };
        });
        parent.appendChild(cardOptions);

        parent.onclick = (e) => {
          if (
            e.target.classList.contains("cardOption") ||
            e.target.nodeName == "svg" ||
            e.target.nodeName == "path"
          )
            return;
          let colorsSelect = document.querySelector(".colorsSelect");
          colorsSelect.innerHTML = `<option value="">Pick a color</option>`;

          itemsDetails[
            parent.childNodes[1].childNodes[1].innerHTML.replaceAll(" ", "")
          ].colors.forEach((el) => {
            let opt = document.createElement("option");
            opt.value = el;
            opt.innerHTML = el;
            colorsSelect.appendChild(opt);
          });

          colorsSelect.onchange = (e) => {
            document.querySelector(
              ".img"
            ).style.backgroundImage = `url(/images/${
              document
                .querySelector(".name")
                .innerHTML.split(" ")[0]
                .toLocaleLowerCase() + e.target.value
            }.jpg)`;
          };

          document.querySelector(".darkBg").classList.add("active");
          document.querySelector(".itemView").classList.add("active");
          document.querySelector(".itemView").style.zIndex = 3;

          document.querySelector(
            ".img"
          ).style.backgroundImage = `url(${parent.childNodes[0].getAttribute(
            "ImageUrl"
          )})`;
          document.querySelector(".name").innerHTML =
            parent.childNodes[1].childNodes[1].innerHTML;
          document.querySelector(".price").innerHTML =
            parent.childNodes[1].childNodes[0].innerHTML;
          document.querySelector(".stock").innerHTML = "Status: Valid";

          if (
            parent.childNodes[2].childNodes[0].getAttribute("activated") ==
            "true"
          )
            document.querySelector(".addToCart").classList.add("active");
          else document.querySelector(".addToCart").classList.remove("active");
        };
        document.querySelector(".newContainer").appendChild(parent);

        if (!itemsDetails[e.name.replaceAll(" ", "")]) {
          itemsDetails[e.name.replaceAll(" ", "")] = { colors: [] };
          itemsDetails[e.name.replaceAll(" ", "")]["colors"].push(productID);
        } else
          itemsDetails[e.name.replaceAll(" ", "")]["colors"].push(productID);

        document.querySelectorAll(".cardOption3").forEach((e) => {
          e.onclick = () => {
            if (localStorage.getItem("email")) {
              if (e.getAttribute("activated") == "false") {
                e.setAttribute("activated", true);
                e.classList.add("active");
                const data = {
                  email: localStorage.getItem("email"),
                  item: {
                    name: e.parentElement.parentElement.childNodes[1]
                      .childNodes[1].innerText,
                    price:
                      e.parentElement.parentElement.childNodes[1].childNodes[0]
                        .innerText,
                    color: null,
                    imageUrl:
                      e.parentElement.parentElement.childNodes[0].getAttribute(
                        "imageUrl"
                      ),
                  },
                };
                addToSaved(data);
                savesItemsAmount++;
                document.querySelector(".saveTxt").innerHTML = savesItemsAmount;
              } else notification("this item is already in wish list");
            } else
              notification(
                "you must sign in or sign up before adding items to wish list"
              );
          };
        });
      }
    });
    // document.querySelector(".newContainer").style.cssText = `grid-template-rows: repeat(${Math.ceil(products.length / 3)},600px);`;
  });

document.querySelector(".sign-in").onclick = () =>
  (location.pathname = "./signIn");
document.querySelector(".sign-up").onclick = () =>
  (location.pathname = "./signUp");

if (localStorage.getItem("account") == "true") {
  const account = document.querySelector(".account");
  const accountName = document.querySelector(".accountName");
  accountName.innerHTML = localStorage.getItem("username");

  document
    .querySelector(".appSvgCont")
    .appendChild(document.querySelector(".moon"));
  document
    .querySelector(".appSvgCont")
    .appendChild(document.querySelector(".sun"));
  document.querySelector(".settings").onclick = () => {
    document.querySelector(".settingsContainer").classList.add("active");
    document.onclick = (e) => {
      if (e.target == document.querySelector(".settings")) return;
      for (const el in document.querySelector(".settingsContainer").childNodes)
        if (
          document.querySelector(".settingsContainer").childNodes[el] ==
          e.target
        )
          return;
      console.log(e.target);
      document.querySelector(".settingsContainer").classList.remove("active");
    };
  };
  let appearence = document.querySelector(".settingAppearence");
  appearence.onclick = (e) => {
    document.querySelector(".moon").classList.toggle("active");
    document.querySelector(".sun").classList.toggle("active");
    document.body.classList.toggle("darkMode");
    localStorage.getItem("mode") == "dark"
      ? localStorage.setItem("mode", "light")
      : localStorage.setItem("mode", "dark");
  };
  let themes = document.querySelector(".settingTheme");

  let themesContainer = document.createElement("div");
  themesContainer.classList.add("themesContainer");

  let themesTxt = document.createElement("div");
  themesTxt.classList.add("themesTxt");
  themesTxt.innerHTML = "Choose a color:";

  let themesColors = document.createElement("div");
  themesColors.classList.add("themesColors");

  themesContainer.appendChild(themesTxt);
  themesContainer.appendChild(themesColors);
  document.body.appendChild(themesContainer);

  let colors = [
    "#9300ff",
    "#0cff77",
    "#006fff",
    "#e27",
    "#FFD700",
    "#228B22",
    "#FF6F61",
    "#4169E1",
    "#FF4500",
  ];

  colors.forEach((e) => {
    let color = document.createElement("div");
    color.classList.add(".themeColor");
    color.style.backgroundColor = e;
    color.style.boxShadow = `0 0 5px 0px ${e}`;
    color.style.cursor = "pointer";

    color.onclick = (el) => {
      document.body.style.cssText = `--primary-color: ${e};--scroll-primary-colors: rgba${hexToRgba(
        e,
        0.5
      )}`;
      localStorage.setItem("themeColor", e);
      themesContainer.classList.remove("active");
      document.querySelector(".darkBg").classList.remove("active");
    };

    themesColors.appendChild(color);
  });

  themes.onclick = (e) => {
    document.querySelector(".settingsContainer").classList.remove("active");
    themesContainer.classList.add("active");
    document.querySelector(".darkBg").classList.add("active");
  };
  /*
    chatbot (support)
    theme
    appearence
    language
    */
  document.querySelector(".logout").onclick = () => {
    localStorage.clear();
    location.reload();
  };
  account.classList.add("active");
  document.querySelector(".signUp").classList.add("active");
} else
  document
    .querySelector(".extra.ctr")
    .removeChild(document.querySelector(".account"));

document.querySelector(".cart").onclick = () => (location.pathname = "/cart");
document.querySelector(".saves").onclick = () => (location.pathname = "/saves");

document.querySelector(".close").onclick = (e) => {
  document.querySelector(".darkBg").classList.remove("active");
  document.querySelector(".itemView").classList.remove("active");
  document.querySelector(".itemView").style.zIndex = -1;
};
document.querySelector(".darkBg").onclick = (e) => {
  document.querySelector(".darkBg").classList.remove("active");
  document.querySelector(".darkBg").style.cssText = "";
  document.querySelector(".themesContainer").classList.remove("active");
  document.querySelector(".itemView").classList.remove("active");
  document.querySelector(".itemView").style.zIndex = -1;
  if (
    screen.availWidth < 480 &&
    document.querySelector(".navBar").classList.contains("active")
  )
    document.querySelector(".swipe").classList.remove("active");
  if (screen.availWidth < 480)
    document.querySelector(".navBar").classList.remove("active");
};

document.querySelector(".addToCart").onclick = (e) => {
  addToCart({
    email: localStorage.getItem("email"),
    item: {
      name: document.querySelector(".name").innerHTML,
      price: document.querySelector(".price").innerHTML,
      color: document.querySelector(".colorsSelect").value,
      imageUrl: document
        .querySelector(".img")
        .style.backgroundImage.slice(5, -2)
        .replace("", ""),
    },
  });
};
document.onscroll = (e) => {
  if (scrollY >= (20 * innerHeight) / 100)
    document.querySelector(".sections").style.cssText =
      "position: fixed; top:0;";
  else document.querySelector(".sections").style.cssText = "";
  if (scrollY >= 500)
    document.querySelector(".scrollUp").style.cssText = "opacity: 1;";
  if (scrollY <= 300)
    document.querySelector(".scrollUp").style.cssText = "opacity: 0;";
};
document.querySelector(".scrollUp").onclick = (e) => {
  scroll(0, 0);
};
document.querySelector(".store.ctr").onclick = (e) => {
  scroll(0, 875);
};
document.querySelector(".general.ctr").onclick = (e) => {
  scroll(0, 0);
};
document.querySelector(".contact.ctr").onclick = (e) => {
  document.querySelector(".contactContainer").classList.add("active");
  document.querySelector(".darkBg").classList.add("active");
  document.querySelector(".darkBg").onclick = (e) => {
    document.querySelector(".darkBg").classList.remove("active");
    document.querySelector(".contactContainer").classList.remove("active");
  };
};

function notification(msg) {
  document.querySelector(".notificationText").innerHTML = msg;
  document.querySelector(".notification").classList.add("active");
  setTimeout(() => {
    document.querySelector(".notification").classList.remove("active");
  }, 3000);
}
if (screen.availWidth > 480)
  document.body.removeChild(document.querySelector(".hotDeals"));

// media queries stuff

function mobileMode() {
  let appearence = document.querySelector(".appearence");
  let themes = document.querySelector(".themes");
  let setting = document.querySelector(".setting");
  let navBar = document.createElement("div");
  navBar.classList.add("navBar");
  document.body.appendChild(navBar);

  document.querySelector(".mode").appendChild(document.querySelector(".moon"));
  document.querySelector(".mode").appendChild(document.querySelector(".sun"));

  appearence.onclick = (e) => {
    document.querySelector(".moon").classList.toggle("active");
    document.querySelector(".sun").classList.toggle("active");
    document.body.classList.toggle("darkMode");
    localStorage.getItem("mode") == "dark"
      ? localStorage.setItem("mode", "light")
      : localStorage.setItem("mode", "dark");
  };
  if (document.querySelector(".account")) {
    let userAccount = document.querySelector(".account");
    userAccount.onclick = () => (location.pathname = "/account");
  }

  let themesContainer = document.createElement("div");
  themesContainer.classList.add("themesContainer");

  let themesTxt = document.createElement("div");
  themesTxt.classList.add("themesTxt");
  themesTxt.innerHTML = "Choose a color:";

  let themesColors = document.createElement("div");
  themesColors.classList.add("themesColors");

  themesContainer.appendChild(themesTxt);
  themesContainer.appendChild(themesColors);
  document.body.appendChild(themesContainer);

  let colors = [
    "#9300ff",
    "#0cff77",
    "#006fff",
    "#e27",
    "#FFD700",
    "#228B22",
    "#FF6F61",
    "#4169E1",
    "#FF4500",
  ];

  colors.forEach((e) => {
    let color = document.createElement("div");
    color.classList.add(".themeColor");
    color.style.backgroundColor = e;
    color.style.boxShadow = `0 0 5px 0px ${e}`;

    color.onclick = (el) => {
      document.body.style.cssText = `--primary-color: ${e};--scroll-primary-colors: rgba${hexToRgba(
        e,
        0.5
      )}`;
      localStorage.setItem("themeColor", e);
      themesContainer.classList.remove("active");
      closeNav();
    };

    themesColors.appendChild(color);
  });

  themes.onclick = (e) => {
    themesContainer.classList.add("active");
    document.querySelector(".darkBg").classList.add("active");
  };

  navBar.appendChild(document.querySelector(".extra.ctr"));
  navBar.appendChild(setting);
  navBar.appendChild(appearence);
  navBar.appendChild(themes);
  if (document.querySelector(".header"))
    document.body.removeChild(document.querySelector(".header"));
  try {
    document
      .querySelector(".sections")
      .removeChild(document.querySelector(".moreFilters"));
  } catch (e) {}

  let cartTxt = document.createElement("div");
  cartTxt.innerHTML = "Cart ";
  document.querySelector(".cart").appendChild(cartTxt);

  let savesTxt = document.createElement("div");
  savesTxt.innerHTML = "Wish List ";
  document.querySelector(".saves").appendChild(savesTxt);

  let accountTxt = document.createElement("div");
  accountTxt.innerHTML = "Sign Up";
  document.querySelector(".signUp").appendChild(accountTxt);

  document.querySelector(".signUp").onclick = (e) =>
    (location.pathname = "/signUp");

  document.querySelectorAll(".cardOption1").forEach((e) => {
    e.classList.contains("active");
  });
  document.querySelectorAll(".cardOption3").forEach((e) => {
    e.classList.contains("active");
  });

  function gridCounter() {
    if (c.length > 0) {
      document.querySelector(
        ".container"
      ).style.cssText = `grid-template-rows: 2150px 600px ${
        c.length * 650 + 150
      }px; height: fit-content;`;
      document.querySelector(
        ".newContainer"
      ).style.cssText = `grid-template-rows: repeat(${c.length},600px); grid-template-columns: 100%;`;
    } else requestAnimationFrame(gridCounter);
  }
  gridCounter();
  document.querySelector(".store").onclick = (e) => {
    scroll(0, 2895);
  };

  let touchStartX, touchEndX;
  document.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  });

  document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;

    if (touchEndX - touchStartX > 100) openNav();
    if (touchStartX - touchEndX > 100) closeNav();
  });

  document.querySelector(".swipe").onclick = (e) => {
    document.querySelector(".swipe").classList.contains("active")
      ? closeNav()
      : openNav();
  };
  document.querySelector(".darkBg").onclick = closeNav;

  function openNav() {
    document.querySelector(".navBar").classList.add("active");
    document.querySelector(".darkBg").classList.add("active");
    document.querySelector(".swipe").classList.add("active");
    document.querySelector(".darkBg").style.cssText = "width:25vw;left:75vw;";
  }
  function closeNav() {
    document.querySelector(".navBar").classList.remove("active");
    document.querySelector(".darkBg").classList.remove("active");
    document.querySelector(".swipe").classList.remove("active");
    document.querySelector(".darkBg").style.cssText = "";
  }
}
if (screen.availWidth < 480) {
  mobileMode();
}
