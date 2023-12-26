function main() {
  window.deviceMode = null;
  window.container = document.querySelector(".container");
  window.appSvgCont = document.querySelector(".appSvgCont");
  window.moon = document.querySelector(".moon");
  window.sun = document.querySelector(".sun");
  window.logOut = document.querySelector(".nav.logOut");
  window.signIn = document.querySelector(".nav.signIn");
  window.settings = document.querySelector(".settings");
  window.logoImg = document.querySelector(".logoImg");
  window.saveTxt = document.querySelector(".extraTxt.saveTxt");
  window.newContainer = document.querySelector(".newContainer");
  window.userAccount = document.querySelector(".account");
  window.accountName = document.querySelector(".accountName");
  window.searchInp = document.querySelector(".searchInp");
  window.settingsContainer = document.querySelector(".settingsContainer");
  window.appearence = document.querySelector(".settingAppearence");
  window.Appearence = document.querySelector(".appearence");
  window.themes = document.querySelector(".settingTheme");
  window.Themes = document.querySelector(".themes");
  window.darkBg = document.querySelector(".darkBg");
  window.logout = document.querySelector(".logout");
  window.signUp = document.querySelector(".signUp");
  window.extraCtr = document.querySelector(".extra.ctr");
  window.cart = document.querySelector(".cart");
  window.saves = document.querySelector(".saves");
  window.Close = document.querySelector(".close");
  window.itemView = document.querySelector(".itemView");
  window.themesContainer = document.querySelector(".themesContainer");
  window.navBar = document.querySelector(".navBar");
  window.swipe = document.querySelector(".swipe");
  window.addToCartV = document.querySelector(".addToCart");
  window.addToSavesV = document.querySelector(".addToSaves");
  window.name = document.querySelector(".name");
  window.price = document.querySelector(".price");
  window.color = document.querySelector(".colorsSelect");
  window.img = document.querySelector(".img");
  window.scrollUp = document.querySelector(".scrollUp");
  window.sections = document.querySelector(".sections");
  window.store = document.querySelector(".store");
  window.general = document.querySelector(".general.ctr");
  window.contact = document.querySelector(".contact.ctr");
  window.contactContainer = document.querySelector(".contactContainer");
  window.notificationText = document.querySelector(".notificationText");
  window.notificatioN = document.querySelector(".notification");
  window.hotdeals = document.querySelector(".hotDeals");
  window.setting = document.querySelector(".setting");
  window.mode = document.querySelector(".mode");
  window.logoMobile = document.querySelector(".logoMobile");
  window.header = document.querySelector(".header");
  window.moreFilters = document.querySelector(".moreFilters");
  window.itemImage = document.querySelectorAll(".itemImage");
  window.itemsCard = document.querySelectorAll(".itemsCard");
  window.con = document.querySelectorAll(".con");
  window.onload = (e) => {
    if (document.body.clientWidth < 650) deviceMode = "mobile";
    if (document.body.clientWidth > 650 && document.body.clientWidth < 1100) deviceMode = "tablet";
    if (document.body.clientWidth > 1100) deviceMode = "pc";

    if (localStorage.getItem("account") == "true") document.querySelector(".accountOptions").style.width = userAccount.clientWidth + "px";
    window.container = document.querySelector(".container");
    window.appSvgCont = document.querySelector(".appSvgCont");
    window.moon = document.querySelector(".moon");
    window.sun = document.querySelector(".sun");
    window.settings = document.querySelector(".settings");
    window.logoImg = document.querySelector(".logoImg");
    window.saveTxt = document.querySelector(".extraTxt.saveTxt");
    window.newContainer = document.querySelector(".newContainer");
    window.userAccount = document.querySelector(".account");
    window.accountName = document.querySelector(".accountName");
    window.searchInp = document.querySelector(".searchInp");
    window.settingsContainer = document.querySelector(".settingsContainer");
    window.appearence = document.querySelector(".settingAppearence");
    window.Appearence = document.querySelector(".appearence");
    window.themes = document.querySelector(".settingTheme");
    window.Themes = document.querySelector(".themes");
    window.darkBg = document.querySelector(".darkBg");
    window.logout = document.querySelector(".logout");
    window.signUp = document.querySelector(".signUp");
    window.extraCtr = document.querySelector(".extra.ctr");
    window.cart = document.querySelector(".cart");
    window.saves = document.querySelector(".saves");
    window.Close = document.querySelector(".close");
    window.itemView = document.querySelector(".itemView");
    window.themesContainer = document.querySelector(".themesContainer");
    window.navBar = document.querySelector(".navBar");
    window.swipe = document.querySelector(".swipe");
    window.addToCartV = document.querySelector(".addToCart");
    window.addToSavesV = document.querySelector(".addToSaves");
    window.name = document.querySelector(".name");
    window.price = document.querySelector(".price");
    window.color = document.querySelector(".colorsSelect");
    window.img = document.querySelector(".img");
    window.scrollUp = document.querySelector(".scrollUp");
    window.sections = document.querySelector(".sections");
    window.store = document.querySelector(".store");
    window.general = document.querySelector(".general.ctr");
    window.contact = document.querySelector(".contact.ctr");
    window.contactContainer = document.querySelector(".contactContainer");
    window.notificationText = document.querySelector(".notificationText");
    window.notificatioN = document.querySelector(".notification");
    window.hotdeals = document.querySelector(".hotDeals");
    window.setting = document.querySelector(".setting");
    window.mode = document.querySelector(".mode");
    window.logoMobile = document.querySelector(".logoMobile");
    window.header = document.querySelector(".header");
    window.moreFilters = document.querySelector(".moreFilters");
    window.itemImage = document.querySelectorAll(".itemImage");
    window.itemsCard = document.querySelectorAll(".itemsCard");
    window.con = document.querySelectorAll(".con");
  };

  window.splash = document.createElement("div");
  splash.classList.add("splash");

  let splashLogo = document.createElement("div");
  splashLogo.classList.add("splashLogo");

  splash.appendChild(splashLogo);
  document.body.appendChild(splash);
  function hideSplash() {
    setTimeout(() => {
      splashLogo.classList.add("active");
    }, 1500);
    setTimeout(() => {
      splash.style.display = "none";
      if (document.querySelector(".splash")) document.body.removeChild(splash);
    }, 2500);
  }
  hideSplash();

  let cartItemsAmount, savesItemsAmount;
  function checkCartItems() {
    if (itemImage.length > 0) {
      itemImage.forEach((el) => {
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

  if (localStorage.getItem("themeColor")) document.body.style.cssText = `--primary-color: ${localStorage.getItem("themeColor")};--scroll-primary-colors: rgba${hexToRgba(localStorage.getItem("themeColor"), 0.5)}`;

  try {
    if (localStorage.getItem("mode") == "dark") {
      moon.classList.add("active");
      document.body.classList.toggle("darkMode");
      logoImg.classList.toggle("dark");
    } else sun.classList.add("active");
  } catch (error) { }

  function checkSavesItems() {
    if (itemImage.length > 0) {
      itemImage.forEach((el) => {
        if (inSaves.includes(el.getAttribute("imageurl"))) {
          el.parentElement.childNodes[2].childNodes[2].setAttribute("activated", true);
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
  }
  async function addToSaved(body) {
    fetch("https://web-store-server.aymenbraikia.repl.co/saveAdd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
  }

  const viewSvg = [
    `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 902.86 902.86" xml:space="preserve"><g><g><path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829zM685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path><path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897zM619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742S619.162,694.432,619.162,716.897z"></path></g></g></svg>`,
    `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z"/></svg>`,
    `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.463 6.02421 11.4664 6.02765 11.4698 6.03106L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM13.4698 8.03034C13.7627 8.32318 14.2376 8.32309 14.5304 8.03014C14.8233 7.7372 14.8232 7.26232 14.5302 6.96948L13.4698 8.03034ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219ZM11.4698 6.03106L13.4698 8.03034L14.5302 6.96948L12.5302 4.97021L11.4698 6.03106Z"></path></svg>`,
  ];
  let products;
  function getDeals() {
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
        c = [];
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
              saveTxt.innerHTML = res.items.length;
            });
        }

        newContainer.innerHTML = "";
        // container.style.gridTemplateRows = `2150px 600px repeat(${Math.ceil(products.length / 3)},655px);`

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
              cardOption.classList.add(
                `cardOption${j + 1}`,
                "cardOption",
                "ctr"
              );
              window.cardOptions1 = document.querySelectorAll(".cardOption1");
              window.cardOptions2 = document.querySelectorAll(".cardOption2");
              window.cardOptions3 = document.querySelectorAll(".cardOption3");

              cardOption.setAttribute("activated", "false");
              cardOption.innerHTML = viewSvg[j];
              cardOptions.appendChild(cardOption);
            }

            cardOptions2.forEach((e) => {
              e.onclick = (c) => {
                let colorsSelect = color;
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
                  img.style.backgroundImage = `url(/images/${name.innerHTML.split(" ")[0].toLocaleLowerCase() +
                    e.target.value
                    }.jpg)`;
                };

                darkBg.classList.add("active");
                itemView.classList.add("active");

                img.style.backgroundImage = `url(${e.parentElement.parentElement.childNodes[0].getAttribute(
                  "ImageUrl"
                )})`;
                name.innerHTML =
                  e.parentElement.parentElement.childNodes[1].childNodes[1].innerHTML;
                price.innerHTML =
                  e.parentElement.parentElement.childNodes[1].childNodes[0].innerHTML;
                document.querySelector(".stock").innerHTML = "Stock: ";
              };
            });

            cardOptions1.forEach((e) => {
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
                          e.parentElement.parentElement.childNodes[1]
                            .childNodes[0].innerText,
                        color: null,
                        imageUrl:
                          e.parentElement.parentElement.childNodes[0].getAttribute(
                            "imageUrl"
                          ),
                      },
                    };
                    addToCart(data);
                    cartItemsAmount++;
                    document.querySelector(".cartTxt").innerHTML =
                      cartItemsAmount;
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
              let colorsSelect = color;
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
                img.style.backgroundImage = `url(/images/${name.innerHTML.split(" ")[0].toLocaleLowerCase() +
                  e.target.value
                  }.jpg)`;
              };

              darkBg.classList.add("active");
              itemView.classList.add("active");

              img.style.backgroundImage = `url(${parent.childNodes[0].getAttribute(
                "ImageUrl"
              )})`;
              name.innerHTML = parent.childNodes[1].childNodes[1].innerHTML;
              price.innerHTML = parent.childNodes[1].childNodes[0].innerHTML;
              document.querySelector(".stock").innerHTML = "Status: Valid";

              if (
                parent.childNodes[2].childNodes[0].getAttribute("activated") ==
                "true"
              )
                addToCartV.classList.add("active");
              else addToCartV.classList.remove("active");
              if (
                parent.childNodes[2].childNodes[2].getAttribute("activated") ==
                "true"
              )
                addToSavesV.classList.add("active");
              else addToSavesV.classList.remove("active");
            };
            newContainer.appendChild(parent);

            if (!itemsDetails[e.name.replaceAll(" ", "")]) {
              itemsDetails[e.name.replaceAll(" ", "")] = { colors: [] };
              itemsDetails[e.name.replaceAll(" ", "")]["colors"].push(
                productID
              );
            } else
              itemsDetails[e.name.replaceAll(" ", "")]["colors"].push(
                productID
              );

            cardOptions3.forEach((e) => {
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
                          e.parentElement.parentElement.childNodes[1]
                            .childNodes[0].innerText,
                        color: null,
                        imageUrl:
                          e.parentElement.parentElement.childNodes[0].getAttribute(
                            "imageUrl"
                          ),
                      },
                    };
                    addToSaved(data);
                    savesItemsAmount++;
                    document.querySelector(".saveTxt").innerHTML =
                      savesItemsAmount;
                  } else notification("this item is already in wish list");
                } else
                  notification(
                    "you must sign in or sign up before adding items to wish list"
                  );
              };
            });
          }
        });
        window.container = document.querySelector(".container");
        window.appSvgCont = document.querySelector(".appSvgCont");
        window.moon = document.querySelector(".moon");
        window.sun = document.querySelector(".sun");
        window.settings = document.querySelector(".settings");
        window.logoImg = document.querySelector(".logoImg");
        window.saveTxt = document.querySelector(".extraTxt.saveTxt");
        window.newContainer = document.querySelector(".newContainer");
        window.userAccount = document.querySelector(".account");
        window.accountName = document.querySelector(".accountName");
        window.searchInp = document.querySelector(".searchInp");
        window.settingsContainer = document.querySelector(".settingsContainer");
        window.appearence = document.querySelector(".settingAppearence");
        window.Appearence = document.querySelector(".appearence");
        window.themes = document.querySelector(".settingTheme");
        window.Themes = document.querySelector(".themes");
        window.darkBg = document.querySelector(".darkBg");
        window.logout = document.querySelector(".logout");
        window.signUp = document.querySelector(".signUp");
        window.extraCtr = document.querySelector(".extra.ctr");
        window.cart = document.querySelector(".cart");
        window.saves = document.querySelector(".saves");
        window.Close = document.querySelector(".close");
        window.itemView = document.querySelector(".itemView");
        window.themesContainer = document.querySelector(".themesContainer");
        window.navBar = document.querySelector(".navBar");
        window.swipe = document.querySelector(".swipe");
        window.addToCartV = document.querySelector(".addToCart");
        window.name = document.querySelector(".name");
        window.price = document.querySelector(".price");
        window.color = document.querySelector(".colorsSelect");
        window.img = document.querySelector(".img");
        window.scrollUp = document.querySelector(".scrollUp");
        window.sections = document.querySelector(".sections");
        window.store = document.querySelector(".store");
        window.general = document.querySelector(".general.ctr");
        window.contact = document.querySelector(".contact.ctr");
        window.contactContainer = document.querySelector(".contactContainer");
        window.notificationText = document.querySelector(".notificationText");
        window.notificatioN = document.querySelector(".notification");
        window.hotdeals = document.querySelector(".hotDeals");
        window.setting = document.querySelector(".setting");
        window.mode = document.querySelector(".mode");
        window.logoMobile = document.querySelector(".logoMobile");
        window.header = document.querySelector(".header");
        window.moreFilters = document.querySelector(".moreFilters");
        window.itemImage = document.querySelectorAll(".itemImage");
        window.itemsCard = document.querySelectorAll(".itemsCard");
        window.con = document.querySelectorAll(".con");
      });
  }

  getDeals();

  searchInp.addEventListener("input", (e) => {
    itemsCard.forEach((el) => {
      if (
        el.childNodes[1].childNodes[1].innerHTML
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      )
        el.removeAttribute("data-search-inactive");
      else el.setAttribute("data-search-inactive", "");
    });
  });

  if (localStorage.getItem("account") == "true") {
    const account = userAccount;
    accountName.innerHTML = localStorage.getItem("username");

    appSvgCont.appendChild(moon);
    appSvgCont.appendChild(sun);
    settings.onclick = () => {
      settingsContainer.classList.add("active");
      document.onclick = (e) => {
        if (e.target == settings) return;
        for (const el in settingsContainer.childNodes)
          if (settingsContainer.childNodes[el] == e.target) return;
        settingsContainer.classList.remove("active");
      };
    };
    appearence.onclick = (e) => {
      moon.classList.toggle("active");
      sun.classList.toggle("active");
      document.body.classList.toggle("darkMode");
      logoImg.classList.toggle("dark");
      localStorage.getItem("mode") == "dark"
        ? localStorage.setItem("mode", "light")
        : localStorage.setItem("mode", "dark");
    };

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
        document.body.style.cssText = `--primary-color: ${e};--scroll-primary-colors: rgba${hexToRgba(e, 0.5)}`;
        localStorage.setItem("themeColor", e);
        themesContainer.classList.remove("active");
        darkBg.classList.remove("active");
      };

      themesColors.appendChild(color);
    });

    themes.onclick = (e) => {
      settingsContainer.classList.remove("active");
      themesContainer.classList.add("active");
      darkBg.classList.add("active");
    };
    /*
      chatbot (support)
      theme
      appearence
      language
      */
    logout.onclick = () => {
      localStorage.removeItem("account");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      location.reload();
    };
    account.classList.add("active");
    signUp.classList.add("active");
  } else extraCtr.removeChild(userAccount);

  cart.onclick = () => (location.pathname = "/cart");
  saves.onclick = () => (location.pathname = "/saves");

  Close.onclick = (e) => {
    darkBg.classList.remove("active");
    itemView.classList.remove("active");
  };
  darkBg.onclick = (e) => {
    darkBg.classList.remove("active");
    darkBg.style.cssText = "";
    themesContainer.classList.remove("active");
    itemView.classList.remove("active");
    if (document.body.clientWidth < 480 && navBar.classList.contains("active"))
      swipe.classList.remove("active");
    if (document.body.clientWidth < 480) navBar.classList.remove("active");
  };

  addToCartV.onclick = (e) => {
    addToCart({
      email: localStorage.getItem("email"),
      item: {
        name: name.innerHTML,
        price: price.innerHTML,
        color: color.value,
        imageUrl: img.style.backgroundImage.slice(5, -2).replace("", ""),
      },
    });
    addToCartV.classList.add("active");
    itemImage.forEach((el) => {
      if (img.style.backgroundImage == el.style.backgroundImage)
        el.parentElement.childNodes[2].childNodes[0].classList.add("active");
    });
  };
  addToSavesV.onclick = (e) => {
    addToSaved({
      email: localStorage.getItem("email"),
      item: {
        name: name.innerHTML,
        price: price.innerHTML,
        color: color.value,
        imageUrl: img.style.backgroundImage.slice(5, -2).replace("", ""),
      },
    });
    addToSavesV.classList.add("active");
    itemImage.forEach((el) => {
      if (img.style.backgroundImage == el.style.backgroundImage)
        el.parentElement.childNodes[2].childNodes[2].classList.add("active");
    });
  };
  document.onscroll = (e) => {
    if (scrollY >= (20 * innerHeight) / 100)
      sections.style.cssText = "position: fixed; top:0;";
    else sections.style.cssText = "";

    if (scrollY >= 500) scrollUp.style.cssText = "opacity: 1;";

    if (scrollY <= 300) scrollUp.style.cssText = "opacity: 0;";
  };
  scrollUp.onclick = (e) => {
    scroll(0, 0);
  };
  store.onclick = (e) => {
    scroll(0, 875);
  };
  general.onclick = (e) => {
    scroll(0, 0);
  };
  contact.onclick = (e) => {
    con.forEach((e) => {
      e.classList.add("active");
    });
    contactContainer.classList.add("active");
    darkBg.classList.add("active");
    darkBg.onclick = (e) => {
      darkBg.classList.remove("active");
      contactContainer.classList.remove("active");
      con.forEach((e) => {
        e.classList.remove("active");
      });
    };
  };

  function notification(msg) {
    notificationText.innerHTML = msg;
    notificatioN.classList.add("active");
    setTimeout(() => {
      notificatioN.classList.remove("active");
    }, 3000);
  }
  if (document.body.clientWidth > 480) document.body.removeChild(hotdeals);

  document.querySelector(".sign-in").onclick = e => location.pathname = "/signIn"
  document.querySelector(".sign-up").onclick = e => location.pathname = "/signUp"

  // media queries stuff

  signIn.onclick = e => location.pathname = "/signIn"

  logOut.onclick = e => {
    localStorage.removeItem("account");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    location.reload();
  }

  function openNav() {
    console.log(navBar);
    navBar.classList.add("active");
    darkBg.classList.add("active");
    swipe.classList.add("active");
    deviceMode == "mobile" ? darkBg.style.cssText = "width:25vw;left:75vw;" : darkBg.style.cssText = "width:50vw;left:50vw;"
  }
  function closeNav() {
    navBar.classList.remove("active");
    darkBg.classList.remove("active");
    swipe.classList.remove("active");
    img.classList.remove("active");
    darkBg.style.cssText = "";
    itemView.classList.remove("active");
  }

  function tabletMode() {
    if (deviceMode == "tablet") return;
    deviceMode = "tablet";

    let navBar = document.createElement("div");
    navBar.classList.add("navBar");
    document.body.appendChild(navBar);

    mode.appendChild(moon);
    mode.appendChild(sun);

    Appearence.onclick = (e) => {
      moon.classList.toggle("active");
      sun.classList.toggle("active");
      document.body.classList.toggle("darkMode");
      logoMobile.classList.toggle("dark");
      localStorage.getItem("mode") == "dark"
        ? localStorage.setItem("mode", "light")
        : localStorage.setItem("mode", "dark");
    };

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
        document.body.style.cssText = `--primary-color: ${e};--scroll-primary-colors: rgba${hexToRgba(e, 0.5)}`;
        localStorage.setItem("themeColor", e);
        themesContainer.classList.remove("active");
        closeNav();
      };

      themesColors.appendChild(color);
    });


    themes.onclick = (e) => {
      themesContainer.classList.add("active");
      darkBg.classList.add("active");
    };

    navBar.appendChild(extraCtr);
    if (localStorage.getItem("account")) navBar.appendChild(logOut);
    else navBar.appendChild(signIn);
    navBar.appendChild(setting);
    navBar.appendChild(appearence);
    navBar.appendChild(themes);

    if (document.querySelector(".header")) document.body.removeChild(header);
    try {
      sections.removeChild(moreFilters);
    } catch (e) { }

    let cartTxt = document.createElement("div");
    cartTxt.innerHTML = "Cart ";
    cart.appendChild(cartTxt);

    let savesTxt = document.createElement("div");
    savesTxt.innerHTML = "Wish List ";
    saves.appendChild(savesTxt);

    let accountTxt = document.createElement("div");
    accountTxt.innerHTML = "Sign Up";
    signUp.appendChild(accountTxt);

    signUp.onclick = (e) => (location.pathname = "/signUp");

    function gridCounter() {
      if (c.length > 0) {
        container.style.cssText = `grid-template-rows: 1100px 600px ${(c.length / 2) * 650 + 150}px; height: fit-content;`;
        newContainer.style.cssText = `grid-template-rows: repeat(${c.length / 2},600px); grid-template-columns: 45% 45%; column-gap: 10%`;
      } else requestAnimationFrame(gridCounter);
    }
    gridCounter();
    store.onclick = (e) => {
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

    swipe.onclick = (e) => {
      swipe.classList.contains("active") ? closeNav() : openNav();
    };
    darkBg.onclick = closeNav;

    let logoContainer = document.createElement("div");
    logoContainer.classList.add("logoContainer");
    logoContainer.classList.add("ctr");

    let logoMobile = document.createElement("div");
    logoMobile.classList.add("logoMobile");
    if (localStorage.getItem("mode") == "dark")
      logoMobile.classList.toggle("dark");

    logoContainer.appendChild(logoMobile);
    document.body.appendChild(logoContainer);
  }

  function mobileMode() {
    if (deviceMode == "mobile") return;
    deviceMode = "mobile";
    let appearence = Appearence;
    let themes = Themes;
    let navBar = document.createElement("div");
    navBar.classList.add("navBar");
    document.body.appendChild(navBar);

    mode.appendChild(moon);
    mode.appendChild(sun);

    appearence.onclick = (e) => {
      moon.classList.toggle("active");
      sun.classList.toggle("active");
      document.body.classList.toggle("darkMode");
      logoMobile.classList.toggle("dark");
      localStorage.getItem("mode") == "dark"
        ? localStorage.setItem("mode", "light")
        : localStorage.setItem("mode", "dark");
    };

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
        document.body.style.cssText = `--primary-color: ${e};--scroll-primary-colors: rgba${hexToRgba(e, 0.5)}`;
        localStorage.setItem("themeColor", e);
        themesContainer.classList.remove("active");
        closeNav();
      };

      themesColors.appendChild(color);
    });


    themes.onclick = (e) => {
      themesContainer.classList.add("active");
      darkBg.classList.add("active");
    };


    navBar.appendChild(extraCtr);
    if (localStorage.getItem("account")) navBar.appendChild(logOut);
    else navBar.appendChild(signIn);
    navBar.appendChild(setting);
    navBar.appendChild(appearence);
    navBar.appendChild(themes);
    try {
      document.querySelector(".sections").removeChild(moreFilters);
    } catch (e) { }

    let cartTxt = document.createElement("div");
    cartTxt.innerHTML = "Cart ";
    cart.appendChild(cartTxt);

    let savesTxt = document.createElement("div");
    savesTxt.innerHTML = "Wish List ";
    saves.appendChild(savesTxt);

    let accountTxt = document.createElement("div");
    accountTxt.innerHTML = "Sign Up";
    signUp.appendChild(accountTxt);

    signUp.onclick = (e) => (location.pathname = "/signUp");

    function gridCounter() {
      if (c.length > 0) {
        container.style.cssText = `grid-template-rows: 2150px 600px ${c.length * 650 + 150}px; height: fit-content;`;
        newContainer.style.cssText = `grid-template-rows: repeat(${c.length},600px); grid-template-columns: 100%;`;
      } else requestAnimationFrame(gridCounter);
    }
    gridCounter();
    store.onclick = (e) => {
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

    swipe.onclick = (e) => {
      swipe.classList.contains("active") ? closeNav() : openNav();
    };
    darkBg.onclick = closeNav;

    let logoContainer = document.createElement("div");
    logoContainer.classList.add("logoContainer");
    logoContainer.classList.add("ctr");

    let logoMobile = document.createElement("div");
    logoMobile.classList.add("logoMobile");
    if (localStorage.getItem("mode") == "dark")
      logoMobile.classList.toggle("dark");

    logoContainer.appendChild(logoMobile);
    document.body.appendChild(logoContainer);
  }

  function pcMode() {
    if (deviceMode == "pc") return;
    deviceMode = "pc";
    function gridCounter() {
      newContainer.style.cssText = ""
      if (c.length > 0) {
        container.style.cssText = `grid-template-rows: 600px 150px ${(c.length / 2) * 650 + 150}px; height: fit-content;`;
      } else requestAnimationFrame(gridCounter);
    }
    gridCounter()

    if (!header) {
      window.header = document.createElement("div");
      header.classList.add("header");
    }

    let logo = document.createElement("div");
    logo.classList.add("logo");
    logo.classList.add("ctr");

    let logoImg = document.createElement("div");
    logoImg.classList.add("logoImg");

    let search = document.createElement("div");
    search.classList.add("search");
    search.classList.add("ctr");

    let filters = document.createElement("div");
    filters.classList.add("filters");
    let option = document.createElement("option");
    option.value = "Everything";
    filters.appendChild(option);

    let searchInp = document.createElement("input");
    searchInp.type = "text";
    searchInp.placeholder = "I am looking for...";
    searchInp.classList.add("searchInp");

    let submit = document.createElement("div");
    submit.classList.add("submit");
    submit.classList.add("ctr");

    logo.appendChild(logoImg);

    search.appendChild(filters);
    search.appendChild(searchInp);
    search.appendChild(submit);

    header.appendChild(extraCtr);

    document.body.prepend(header);

    if (signUp.children[2])
      if (signUp.children[2].innerText == "Sign Up") {
        for (let i = 0; i < 3; i++) {
          if (signUp.children[2]) signUp.removeChild(signUp.children[2]);
          if (saves.children[1]) saves.removeChild(saves.children[1]);
          if (cart.children[1]) cart.removeChild(cart.children[1]);
        }
      }

    document.body.removeChild(navBar);
    //   document.querySelectorAll(".ex").forEach((e) => {
    //     e.style.cssText = `
    //           width: 23%;
    //   height: 80%;
    //   cursor: pointer;
    //   transition: var(--transition);
    //   border-radius: var(--border-raduis);
    //   position: relative;
    //   overflow: hidden;`;
    //   });
    //   document.querySelector(".examples").style.cssText = `width: 100%;
    //   height: 100%;
    //   display: flex;
    //   justify-content: space-evenly;
    //   align-items: center;
    //   overflow: visible;`;
  }

  if (document.body.clientWidth < 650) mobileMode();
  if (document.body.clientWidth > 650 && document.body.clientWidth < 1100)
    tabletMode();

  window.onresize = (e) => {
    if (document.body.clientWidth < 650) mobileMode();
    if (document.body.clientWidth > 650 && document.body.clientWidth < 1100)
      tabletMode();
    if (document.body.clientWidth > 1100) pcMode();
  };
}
main();
