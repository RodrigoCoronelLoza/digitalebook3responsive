let candidate = Number(localStorage["book3Unefco"]);
let currentPage = 0;
if (candidate > -1 && candidate < Object.keys(textData).length - 1) {
  currentPage = candidate;
}
let currentSlideNumberCarousel = 0;
let currentParagNumber = 1;
let statusMenu1 = 0;
let previousWidth = window.innerWidth;

window.addEventListener("resize", function () {
  const currentWidth = window.innerWidth;

  if (currentWidth !== previousWidth) {
    masterRender();
    previousWidth = currentWidth;
  }
});

// Esta funcion hace la renderizacion de cada una de las paginas
function renderPage() {
  const pageContent = document.getElementById("page-content");
  const titleContainer = document.getElementById("book-title-container");
  const menuHeader = document.getElementById("menu-header");
  const advButton = document.getElementById("adv-buttons");
  const overlay = document.getElementById("overlay");
  const indexPermanent = document.getElementById("index-permanent");
  const deviceWidth = window.innerWidth;
  let imagesToTake = {};
  let popUpToTake = {};

  pageContent.addEventListener("click", handleDomCLick);
  overlay.addEventListener("click", handleOverlayClick);

  if (currentPage === 0) {
    menuHeader.style.visibility = "hidden";
    titleContainer.style.display = "none";
    advButton.style.display = "none";
  } else {
    menuHeader.style.visibility = "visible";
    titleContainer.style.display = "block";
    advButton.style.display = "block";
  }

  if (currentPage === 0 || currentPage === 2) {
    indexPermanent.style.display = "none";
  } else {
    indexPermanent.style.display = "block";
  }

  if (deviceWidth <= 767) {
    imagesToTake = images_xs_Data;
    popUpToTake = popUp_xs_Data;
  } else if (deviceWidth >= 768 && deviceWidth <= 991) {
    imagesToTake = images_sm_Data;
    popUpToTake = popUp_sm_Data;
  } else if (deviceWidth >= 992 && deviceWidth <= 1199) {
    imagesToTake = images_md_Data;
    popUpToTake = popUp_md_Data;
  } else {
    imagesToTake = imagesData;
    popUpToTake = popUpData;
  }
  pageContent.className = layoutData[currentPage];
  pageContent.innerHTML = createStructure(
    titlesData,
    textData,
    layoutData,
    currentPage,
    popUpToTake,
    imagesToTake,
    buttonsNameData,
    buttonsPageNumberData,
    linksData
  );
  colorButton();
}
//Poner color al indice de la barra lateral
function colorButton() {
  const allButtons = document.getElementById("index-permanent");
  const indexButton1 = document.getElementById("index-button1");
  const indexButton2 = document.getElementById("index-button2");
  const indexButton3 = document.getElementById("index-button3");
  const indexButton4 = document.getElementById("index-button4");
  const indexButton5 = document.getElementById("index-button5");
  const indexButton6 = document.getElementById("index-button6");
  const indexButton7 = document.getElementById("index-button7");
  const indexButton8 = document.getElementById("index-button8");
  const indexButton9 = document.getElementById("index-button9");
  const indexButton10 = document.getElementById("index-button10");
  const indexButton11 = document.getElementById("index-button11");
  const indexButton12 = document.getElementById("index-button12");
  const indexButton13 = document.getElementById("index-button13");
  const indexButton14 = document.getElementById("index-button14");
  const indexButton15 = document.getElementById("index-button15");
  const indexButton16 = document.getElementById("index-button16");
  const indexButton17 = document.getElementById("index-button17");
  const indexButton18 = document.getElementById("index-button18");
  const indexButton19 = document.getElementById("index-button19");
  const indexButton20 = document.getElementById("index-button20");
  const indexButton21 = document.getElementById("index-button21");
  const indexButton22 = document.getElementById("index-button22");

  if (currentPage >= 0 && currentPage <= 4) {
    indexButton1.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage >= 5 && currentPage <= 22) {
    indexButton2.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage === 6) {
    indexButton3.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage >= 7 && currentPage <= 12) {
    indexButton4.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "bold";
    indexButton3.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage >= 13 && currentPage <= 17) {
    indexButton5.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "bold";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage >= 18 && currentPage <= 21) {
    indexButton6.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "bold";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage === 22) {
    indexButton7.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "bold";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage >= 23 && currentPage <= 44) {
    indexButton8.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage === 24) {
    indexButton9.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage >= 25 && currentPage <= 32) {
    indexButton10.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "bold";
    indexButton9.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage >= 33 && currentPage <= 35) {
    indexButton11.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "bold";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage >= 36 && currentPage <= 42) {
    indexButton12.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "bold";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage === 43) {
    indexButton13.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "bold";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage >= 44 && currentPage <= 61) {
    indexButton14.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage === 45) {
    indexButton15.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage >= 46 && currentPage <= 52) {
    indexButton16.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "bold";
    indexButton15.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage >= 53 && currentPage <= 57) {
    indexButton17.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "bold";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage >= 58 && currentPage <= 60) {
    indexButton18.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "bold";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage === 61) {
    indexButton19.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "bold";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage === 62) {
    indexButton20.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage >= 63 && currentPage <= 66) {
    indexButton21.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
    indexButton22.style.fontWeight = "normal";
  }
  if (currentPage === 67) {
    indexButton22.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
    indexButton20.style.fontWeight = "normal";
    indexButton21.style.fontWeight = "normal";
    indexButton1.style.fontWeight = "normal";
  }
}
//Rastrear el click en en DOM dinamico
const handleDomCLick = (event) => {
  const clickedBtn = event.target;
  const classIdentifier = clickedBtn.className.slice(0, 4);
  let modal = {};
  console.log(classIdentifier);
  if (classIdentifier === "open") {
    modal = document.querySelector(clickedBtn.dataset.modalTarget);
    console.log(modal);
    openModal(modal);
  } else if (classIdentifier === "clos") {
    modal = clickedBtn.closest(`[id^="modal"]`);
    console.log(modal);
    closeModal(modal);
  } else if (classIdentifier === "para") {
    let targetIdButton = "buttonParag" + currentParagNumber;
    const pointedButton = document.getElementById(targetIdButton);
    pointedButton.style.backgroundColor = "#2a9144";
  }
};

const handleOverlayClick = (event) => {
  const clickedBtn = event.target;
  const modals = document.querySelectorAll(".mymodal.active");
  if (modals.length > 0) {
    modals.forEach((modal) => {
      closeModal(modal);
    });
  } else {
    const buttonAction = document.getElementById("navbarToggle");
    const menu = document.getElementById("collapsable-nav");
    console.log(menu);
    overlay.classList.remove("active");
    buttonAction.classList.add("collapsed");
    menu.classList.remove("in");
    buttonAction.setAttribute("aria-expanded", "false");
  }
};

//Siguiente pagina
function nextPage() {
  if (currentPage < Object.keys(textData).length - 1) {
    currentPage++;
    setSlidetoInitial();
    setParagh(1);
    cachePage();
    masterRender();
  }
}

//Pagina anterior
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    cachePage();
    masterRender();
  }
}

//Pagina arbitraria
function setPage(value) {
  currentPage = value;
  setSlidetoInitial();
  setParagh(1);
  cachePage();
  masterRender();
}

//ToggleButton
function handleToggleAction() {
  const buttonAction = document.getElementById("navbarToggle");
  if (buttonAction.getAttribute("aria-expanded") === "true") {
    overlay.classList.remove("active");
  } else {
    overlay.classList.add("active");
  }
}

function setVisible(value) {
  const show1 = document.getElementById("show1");
  const show2 = document.getElementById("show2");
  const show3 = document.getElementById("show3");

  if (value === 1) {
    let alt1 = 0;
    if (show1.clientHeight === 0) {
      alt1 = "7.5em";
    }
    show1.style.height = alt1;
    show2.style.height = 0;
    show3.style.height = 0;
  } else if (value === 2) {
    let alt2 = 0;
    if (show2.clientHeight === 0) {
      alt2 = "7.5em";
    }
    show2.style.height = alt2;
    show1.style.height = 0;
    show3.style.height = 0;
  } else if (value === 3) {
    let alt3 = 0;
    if (show3.clientHeight === 0) {
      alt3 = "7.5em";
    }

    show3.style.height = alt3;
    show1.style.height = 0;
    show2.style.height = 0;
  }
}
//Guardar en la memoria cache
function cachePage() {
  let currentPageString = String(currentPage);
  localStorage["book3Unefco"] = currentPageString;
}

//Crear el DOM dinamico
function createStructure(
  titles,
  text,
  layout,
  page,
  popUp,
  images,
  buttonName,
  buttonsPageNumber,
  links
) {
  let currentLayout = layout[page];
  let content = "";
  if (currentLayout === "Alayout") {
    content = ALayoutGenerator(titles, text, page, images);
  } else if (currentLayout === "Blayout") {
    content = BLayOutGenerator(titles, text, page);
  } else if (currentLayout === "Clayout") {
    content = CLayOutGenerator(titles, text, page);
  } else if (currentLayout === "Dlayout") {
    content = DLayOutGenerator(titles, text, page, images, popUp);
  } else if (currentLayout === "Elayout") {
    content = ELayOutGenerator(images, page, buttonName, buttonsPageNumber);
  } else if (currentLayout === "Flayout") {
    content = FLayOutGenerator(titles, text, images, page, links);
  } else if (currentLayout === "Glayout") {
    content = GLayOutGenerator(titles, text, page, popUp);
  } else if (currentLayout === "Hlayout") {
    content = HLayOutGenerator(titles, text, page, popUp);
  } else if (currentLayout === "Ilayout") {
    content = ILayOutGenerator(titles, text, images, page, links);
  } else if (currentLayout === "Jlayout") {
    content = JLayOutGenerator(titles, text, images, page);
  } else if (currentLayout === "Klayout") {
    content = KLayOutGenerator(titles, text, images, page);
  } else if (currentLayout === "Llayout") {
    content = LLayOutGenerator(titles, text, page, popUp);
  } else if (currentLayout === "Mlayout") {
    content = MLayOutGenerator(titles, text, images, page, buttonName);
  } else if (currentLayout === "Nlayout") {
    content = NLayOutGenerator(titles, text, page, popUp);
  } else if (currentLayout === "Olayout") {
    content = OLayOutGenerator(titles, images, page);
  } else if (currentLayout === "Playout") {
    content = PLayOutGenerator(titles, text, page, images, popUp);
  }
  return content;
}
// Plantilla A
function ALayoutGenerator(titles, text, page, images) {
  return `
  <div class="Alayout-container">
    <img id="caratula" src="images/${images[page]}">
      <div class="button-caratula-container">
        <button class="nav-buttons" id="comenzar-button" onclick="nextPage()">Comienza</button>
      </div>
  </div>  `;
}

// Plantilla B
function BLayOutGenerator(titles, text, page) {
  return ` 
  <div id="Blayout-container">
    <h1 class="titles" id="Btitle">${titles[page]}</h1>
    <div id="Btext-container">
      <p class="text" id="Btext">${text[page]}</p>
    </div>
  </div>`;
}

// Plantilla C
function CLayOutGenerator(titles, text, page) {
  return ` 
  <div id="Clayout-container">
    <h1 class="titles" id="Ctitle">${titles[page]}</h1>

      <div id="Cindex-buttons" class="row">
        <div id="column1" class="col-xs-12 col-sm-6">
          <hr class="visible-xs"/>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(3)">&#9674 PRESENTACIÓN</button> 
          </div>
          <hr/>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(5)"><b>TEMA 1 PRÁCTICAS RESTAURATIVAS PREVENTIVAS INFORMALES EN EL ENTORNO EDUCATIVO </b></button> 
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(6)">&#9674 Actividad de inicio</button>
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(7)">&#9674 Escucha activa</button>
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(13)">&#9674 Declaraciones afectivas</button> 
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(18)">&#9674 Construcción de las declaraciones afectivas </button> 
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(22)">&#9674 Actividad sugerida</button>
          </div>
        </div>
        <div id="column2" class="col-xs-12 col-sm-6">
          <hr class="visible-xs"/>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(23)"><b>TEMA 2 CÍRCULOS RESTAURATIVOS ESCOLARES PRÁCTICA RESTAURATIVA FORMAL</b></button>
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(24)">&#9674 Actividad de inicio</button>
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(25)">&#9674 Circulos restaurativos escolares</button>
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(33)">&#9674 Tipos de circulos restaurativos escolares</button>
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(36)">&#9674 Proceso para generar circulos restaurativos escolares</button>
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(43)">&#9674 Actividad sugerida</button> 
          </div>
        </div>
        
        <div id="column3" class="col-xs-12 col-sm-6">
          <hr class="visible-xs visible-sm visible-md"/>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(44)"><b>TEMA 3 REUNIONES RESTAURATIVAS PARA LA RESOLUCIÓN DE CONFLICTOS - PRÁCTICA RESTAURATIVA FORMAL</b></button> 
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(45)">&#9674 Actividad de inicio</button>
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(46)">&#9674 Concepto de reunión restaurativa</button>
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(53)">&#9674 Desarrollo de la reunión</button> 
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(58)">&#9674 Rol del facilitador de las reuniones restaurativas</button> 
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(61)">&#9674 Actividad sugerida</button> 
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(62)">&#9674 Glosario</button>
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(63)">&#9674 Bibliografía</button>
          </div>
          <div class="button-index-container">
            <button class="index-big-buttons" onclick="setPage(67)">&#9674 Anexo: Guión  para la persona que facilita la reunión restaurativa</button>
          </div>  
          
        </div>
      </div>
  </div>`;
}

// Plantilla D
function DLayOutGenerator(titles, text, page, images, popUp) {
  return `<h1 class="titles">${titles[page]}</h1>
  <div id="Dlayout-container">
  <div id="Dbutton" class="col-xs-12 col-sm-12">
    <div id="Dmodals-container">
    ${modalGenerator(popUp, page, 0)}
    </div>
  </div> 
  <div id="Dtext" class="col-xs-12 col-sm-6">
    <p class="text">${text[page]}</p>
  </div>
  <div id="Dimage-container" class="col-xs-12 col-sm-6">
  <img id="Dimage" src="images/${images[page]}">
  </div>
  </div>`;
}

// Plantilla E
function ELayOutGenerator(images, page, buttonName, buttonsPageNumber) {
  return `
  <div id="Elayout-container">
    <div id="Eimage-container" class="col-md-6 col-sm-6 col-xs-12">
      <img id="Eimage" src="images/${images[page]}">
    </div>
    <div id="index-button-container" class="col-md-6 col-sm-6 col-xs-12">
      <div id="index-buttons" >
        <div class="button-index-container"><button class="jump-buttons" onclick="setPage(${buttonsPageNumber[page][0]})">${buttonName[page][0]}</button></div>
        <div class="button-index-container"><button class="jump-buttons" onclick="setPage(${buttonsPageNumber[page][1]})">${buttonName[page][1]}</button></div>
        <div class="button-index-container"><button class="jump-buttons" onclick="setPage(${buttonsPageNumber[page][2]})">${buttonName[page][2]}</button></div>
        <div class="button-index-container"><button class="jump-buttons"onclick="setPage(${buttonsPageNumber[page][3]})">${buttonName[page][3]}</</button></div>
        <div class="button-index-container"><button class="jump-buttons"onclick="setPage(${buttonsPageNumber[page][4]})">${buttonName[page][4]}</</button></div>
      </div>
    </div>
  </div>`;
}

// Plantilla F
function FLayOutGenerator(title, text, images, page, links) {
  return `
  <div id="Flayout-container">
    <div id="Fcolumn1" class="col-xs-12 col-sm-6 col-md-8">
      <img id="act-inicio-img" src="images/${images[page][0]}">
      <h1 class="titles">${title[page]}</h1>
      <p class="text"> ${text[page]}</p>
    </div>
    <div id="Fcolumn2" class="col-xs-12 col-sm-6 col-md-4">
      <img id="Flayout-img" src="images/${images[page][1]}">
      <div id="Flink-container">
        <a id="Flink" href="${links[page]}" target="_blank">ABRIR EN UNA NUEVA PESTAÑA</a>
      </div>
    </div>
  </div>`;
}

// Plantilla G
function GLayOutGenerator(title, text, page, popUp) {
  return `
  <div id="Glayout-container">
    <div id="Grow1" class="col-xs-12 col-sm-6">
      <h1 class="titles" id ="Gtitle1">${title[page][0]}</h1>
      <p class="text">${text[page][0]}</p>
    </div>
    <div id="Grow2" class="col-xs-12 col-sm-6">
      <h1 class="titles" id ="Gtitle2">${title[page][1]}</h1>
      <div id="Grow3" > 
        <div id="Gmodal-container">${modalGenerator(popUp, page, 0)}</div> 
        <div id="Gnext-modal"><p class="text">${text[page][1]}</p></div>
      </div>
    </div>
  </div>`;
}

// Plantilla H
function HLayOutGenerator(title, text, page, popUp) {
  return `
  <div id="Hlayout-container">
    <div id="Hrow1">
      <h1 class="titles" id="Htitle1">${title[page][0]}</h1>
      <div id="Htext1">
        <p class="text">${text[page][0]}</p>
      </div>
      <div id="Hmodals-container1">
        <div id="Hmodals-container-ind0" class="col-xs-12 col-sm-4">
          ${modalGeneratorSpecific(popUp, page, 0)}
        </div>
        <div id="Hmodals-container-ind1" class="col-xs-12 col-sm-4">
          ${modalGeneratorSpecific(popUp, page, 1)}
        </div>
        <div id="Hmodals-container-ind2" class="col-xs-12 col-sm-4">
          ${modalGeneratorSpecific(popUp, page, 2)}
        </div>
        <div id="Hmodals-container-ind3" class="col-xs-12 col-sm-6">
          ${modalGeneratorSpecific(popUp, page, 3)}
        </div>
        <div id="Hmodals-container-ind4" class="col-xs-12 col-sm-6">
          ${modalGeneratorSpecific(popUp, page, 4)}
        </div>
      </div>
    </div>
    <div id="Hrow2">
      <h1 class="titles" id="Htitle2">${title[page][1]}</h1>
      <div id="Htext2">
        <p class="text">${text[page][1]}</p>
      </div>
      <div id="Hmodals-container2">
        <div id="Hmodals-container-ind5" class="col-xs-12 col-sm-4">
          ${modalGeneratorSpecific(popUp, page, 5)}
        </div>
        <div id="Hmodals-container-ind6" class="col-xs-12 col-sm-4">
          ${modalGeneratorSpecific(popUp, page, 6)}
        </div>
        <div id="Hmodals-container-ind7" class="col-xs-12 col-sm-4">
          ${modalGeneratorSpecific(popUp, page, 7)}
        </div>
        <div id="Hmodals-container-ind8" class="col-xs-12 col-sm-6">
          ${modalGeneratorSpecific(popUp, page, 8)}
        </div>
        <div id="Hmodals-container-ind9" class="col-xs-12 col-sm-6">
          ${modalGeneratorSpecific(popUp, page, 9)}
        </div>
      </div>
    </div>
  </div>`;
}

// Plantilla I
function ILayOutGenerator(title, text, images, page, links) {
  return `
  <div id="Ilayout-container">
    <div id="Icolumn1" class="col-xs-12 col-sm-6 col-md-6">
      <div id="Icolumn1-image-container">
        <img id="Iimage-column1" src="images/para_profundizar.png" />
      </div>
      <h1 class="titles" id="Ititle">${title[page]}</h1>
      <div id="Itext-container">
        <p class="text" id="Itext">${text[page]}</p>
      </div>
    </div>
    <div id="Icolumn2" class="col-xs-12 col-sm-6 col-md-3">
      <div id="Icolumn2-image-container">
        <img id ="Iimage-column2" src="images/${images[page][0]}" />
      </div>
      <div id="Ilink-container">
        <a id="Ilink" href="${links[page]}" target="_blank">ABRIR EN UNA NUEVA PESTAÑA</a>
      </div>
    </div>
    <div id="Icolumn3" class="visible-md visible-lg col-md-3">
      <div id="Icolumn3-image-container">
        <img id ="Iimage-column3" src="images/${images[page][1]}" />
      </div>
    </div>
  </div>`;
}

// Plantilla J
function JLayOutGenerator(title, text, images, page) {
  let numberOfSlidesCarousel = images[page].length;
  return `
  <div id="Jlayout-container">
    <h1 class="titles" id="Jtitle">${title[page]}</h1>
    <div id= "Jtext-container">
      <p class="text" id="Jtext">${text[page]}</p>
    </div>
    <div id="Jcarousel-container">
        <div id="Jcarousel">
          <img id="Jimage" src="images/${images[page][currentSlideNumberCarousel]}">
        </div>
        <div id="JnextSlide-container">
          <button class="SlideCarouselButton" onclick ="nextSlide(${numberOfSlidesCarousel})"><i class="glyphicon glyphicon-triangle-right"></i></button>
        </div>
        <div id="JprevSlide-container">  
            <button class="SlideCarouselButton" onclick ="prevSlide()"><i class="glyphicon glyphicon-triangle-left"></i></button>
        </div>
    </div>
  </div>`;
}

//Carrusel siguiente
function nextSlide(numberOfSlides) {
  if (currentSlideNumberCarousel < numberOfSlides - 1) {
    currentSlideNumberCarousel++;
    masterRender();
  }
}

//Carrusel anterior
function prevSlide() {
  if (currentSlideNumberCarousel > 0) {
    currentSlideNumberCarousel--;
    masterRender();
  }
}

//Carrusel arbitrario
function setSlidetoInitial() {
  currentSlideNumberCarousel = 0;
}

//Plantilla K
function KLayOutGenerator(title, text, images, page) {
  return `
  <div id="Klayout-container">
    <h1 class="titles" id="Ktitle">${title[page]}</h1>
    <div id="Ktext-container1">
      <p class="text" id="Ktext1">${text[page][0]}</p>
    </div>
    <div id="Kimage-container">
      <img id="Kbanner" src="images/${images[page]}">
    </div>
    <div id="Ktext-container2">
      <p class="text" id="Ktext2">${text[page][1]}</p>
    </div>
  </div>`;
}

//Plantilla L
function LLayOutGenerator(title, text, page, popUp) {
  return `
  <div id="Llayout-container">
    <h1 class="titles" id="Ltitle">${title[page]}</h1>
    <div id="Ltext-container">
      <p class="text" id="Ltext">${text[page]}</p>
    </div>
    <div id="Lmodals-container">
      <div id="Lmodals-container-ind0" class="col-xs-12 col-sm-4">
          ${modalGeneratorSpecific(popUp, page, 0)}
      </div>
      <div id="Lmodals-container-ind1" class="col-xs-12 col-sm-4">
          ${modalGeneratorSpecific(popUp, page, 1)}
      </div>
      <div id="Lmodals-container-ind2" class="col-xs-12 col-sm-4">
          ${modalGeneratorSpecific(popUp, page, 2)}
      </div>
      <div id="Lmodals-container-ind3" class="col-xs-12 col-sm-6">
          ${modalGeneratorSpecific(popUp, page, 3)}
      </div>
      <div id="Lmodals-container-ind4" class="col-xs-12 col-sm-6">
          ${modalGeneratorSpecific(popUp, page, 4)}
      </div>
    </div>
  </div>`;
}

//Plantilla M
function MLayOutGenerator(title, text, images, page, buttonName) {
  let numberOfParagraphs = text[page].length;
  return `
  <div id="Mlayout-container">
    <h1 class="titles" id="Mtitle">${title[page]}</h1>
    <div id="Mtext-container">
      <p class="text" id="Mtext">${text[page][0]}</p>
    </div>
    <div id="Mcarousel-container">
      <div id="Mbuttons">
        <div id="Mbuttons-container">
          ${MbuttonGenerator(numberOfParagraphs, page, buttonName)}
        </div>
      </div>
      <div id="Mparag-container">
        <p class="text" id="Mparag">${text[page][currentParagNumber]}</p>
      </div>
    </div>
  </div>`;
}

function MbuttonGenerator(numberOfParagraphs, page, buttonName) {
  let result = "";
  for (let i = 1; i < numberOfParagraphs; i++) {
    result =
      result +
      `<button class="paragButton" id="buttonParag${i}" onclick ="setParagh(${i})" >${
        buttonName[page][i - 1]
      }</button>`;
  }
  return result;
}

function setParagh(numberToSet) {
  currentParagNumber = numberToSet;
  masterRender();
}

//Plantilla N
function NLayOutGenerator(title, text, page, popUp) {
  return `
  <div id="Nlayout-container">
    <h1 class="titles" id="Ntitle">${title[page]}</h1>
    <div id="Ntext-container">
      <div id="Nrow1" class="col-xs-12 col-sm-12 col-md-6">
        <div id="Ntext-containerLeft">
          <p class="text" id="Ltext1">${text[page][0]}</p>
        </div>
        <div id="Nmodals-containerLeft">
          ${modalGeneratorSpecific(popUp, page, 0)}
        </div>
      </div>
      <div id="Nrow2" class="col-xs-12 col-sm-12 col-md-6">
        <div id="Ntext-containerRight">
          <p class="text" id="Ltext2">${text[page][1]}</p>  
        </div>
        <div id="Nmodals-containerRight">
          ${modalGeneratorSpecific(popUp, page, 1)}
        </div>
      </div>
    </div>
  </div>`;
}

// Plantilla O
function OLayOutGenerator(titles, images, page) {
  return ` 
  <div id="Olayout-container">
    <h1 class="titles" id="Otitle">${titles[page]}</h1>
    <div id="Oimage-container">
      <img id="Oimage" src="images/${images[page]}">
    </div>
  </div>`;
}

// Plantilla P
function PLayOutGenerator(titles, text, page, images, popUp) {
  return `<h1 class="titles">${titles[page]}</h1>
  <div id="Playout-container">
  <div id="Pbutton">
    <div id="Pmodals-container">
    ${modalGenerator(popUp, page, 0)}
    </div>
  </div> 
  <div id="Pimage-container">
  <img id="Pimage" src="images/${images[page]}">
  </div>
  </div>`;
}
//Generar los pop-ups
function modalGenerator(popUp, page, selector) {
  let initial = 0;
  let final = 0;
  const numberOfModals = popUp[page].length;
  final = numberOfModals;
  if (numberOfModals > 4) {
    if (selector === 0) {
      initial = 0;
      final = 5;
    } else {
      initial = 5;
      final = 10;
    }
  }

  let result = "";

  for (let i = initial; i < final; i++) {
    result =
      result +
      `<div id="modal-container${i}">
        <button data-modal-target="#modal${i}" 
          class="open-button${i}">${modalExtractor(
        popUp,
        page,
        "buttonName",
        i
      )}
        </button>
        <div class="mymodal" id="modal${i}">
          <div class="mymodal-header">
            <div class="title">${modalExtractor(popUp, page, "title", i)}</div>
            <button data-close-button class="close-button">&times;</button>
          </div>
          <div class="mymodal-body">
            ${modalExtractor(popUp, page, "contentModal", i)}
          </div>
        </div>
      </div>`;
  }
  return result;
}

function modalGeneratorSpecific(popUp, page, index) {
  let result = "";
  result = `<div id="modal-container${index}">
        <button data-modal-target="#modal${index}" 
          class="open-button${index}">${modalExtractor(
    popUp,
    page,
    "buttonName",
    index
  )}
        </button>
        <div class="mymodal" id="modal${index}">
          <div class="mymodal-header">
            <div class="title">${modalExtractor(
              popUp,
              page,
              "title",
              index
            )}</div>
            <button data-close-button class="close-button">&times;</button>
          </div>
          <div class="mymodal-body">
            ${modalExtractor(popUp, page, "contentModal", index)}
          </div>
        </div>
      </div>`;
  return result;
}

//extraer la informacion de los modals
function modalExtractor(popUps, page, partofModal, numberModal) {
  if (partofModal === "title") {
    return popUps[page][numberModal].title;
  } else if (partofModal === "contentModal") {
    if (popUps[page][numberModal].typeofContent === "text") {
      return popUps[page][numberModal].contentModal;
    } else {
      return `<img id="image-modal-body" src="images/${popUps[page][numberModal].contentModal}">`;
    }
  } else if (partofModal === "buttonName") {
    return popUps[page][numberModal].buttonName;
  } else if (partofModal === "typeofContent") {
    return popUps[page][numberModal].typeofContent;
  }
}

//abrir pop-up
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

//cerrar pop-up
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
// Initial render
function masterRender() {
  renderPage();
  const pointedButton = document.getElementById("buttonParag1");
  if (pointedButton && currentParagNumber === 1) {
    pointedButton.style.backgroundColor = "#2a9144";
  }
}
masterRender();
