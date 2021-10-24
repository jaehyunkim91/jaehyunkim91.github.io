//global variables
const itemsInCart = []
let saveItemObj = ""

//Get rid of the border color(blue) of initial color option when a new color option is clicked
function removeBorder() {
  if (document.querySelector("label")) {
    document.querySelector("label").style.border = "none"
    document.querySelector("#color1").style.border = "none"
    document.querySelector("#color2").style.border = "none"
    document.querySelector("#color3").style.border = "none"
    document.querySelector("#color4").style.border = "none"
    document.querySelector("#color5").style.border = "none"
  }
}

//functions to add border color and changes the image when new coloe option is selected
function toStrawberry() {
  if (document.querySelector("#color1")) {
    removeBorder()
    document.querySelector("#color1").style.border = "2px solid blue"
    document.querySelector("#firstImg").src = "image/colorChangeSmall.png"
    document.querySelector("#secondImg").src = "image/colorChangeSmall2.png"
    document.querySelector("#thirdImg").src = "image/colorChangeSmall3.png"
    document.querySelector("#fourthImg").src = "image/colorChangeBig.png"
  }
}

function toBlackberry() {
  if (document.querySelector("#color2")) {
    removeBorder()
    document.querySelector("#color2").style.border = "2px solid blue"
    document.querySelector("#firstImg").src = "image/colorChangeSmall.png"
    document.querySelector("#secondImg").src = "image/colorChangeSmall2.png"
    document.querySelector("#thirdImg").src = "image/colorChangeSmall3.png"
    document.querySelector("#fourthImg").src = "image/colorChangeBig.png"
  }
}
function toCrazyberry() {
  if (document.querySelector("#color3")) {
    removeBorder()
    document.querySelector("#color3").style.border = "2px solid blue"
    document.querySelector("#firstImg").src = "image/detailPageSmall1.png"
    document.querySelector("#secondImg").src = "image/detailPageSmall2.png"
    document.querySelector("#thirdImg").src = "image/colorChangeSmall3.png"
    document.querySelector("#fourthImg").src = "image/detailPageLarge.png"
  }
}
function toFireOrange() {
  if (document.querySelector("#color4")) {
    removeBorder()
    document.querySelector("#color4").style.border = "2px solid blue"
    document.querySelector("#firstImg").src = "image/colorChangeSmall.png"
    document.querySelector("#secondImg").src = "image/colorChangeSmall2.png"
    document.querySelector("#thirdImg").src = "image/colorChangeSmall3.png"
    document.querySelector("#fourthImg").src = "image/detailPageLarge.png"
  }
}
function toSpaceGrey() {
  if (document.querySelector("#color5")) {
    removeBorder()
    document.querySelector("#color5").style.border = "2px solid blue"
    document.querySelector("#firstImg").src = "image/detailPageSmall1.png"
    document.querySelector("#secondImg").src = "image/detailPageSmall2.png"
    document.querySelector("#thirdImg").src = "image/colorChangeSmall3.png"
    document.querySelector("#fourthImg").src = "image/colorChangeBig.png"
  }
}

//add to shopping cart
const size = document.querySelector(".sizeSelect")

function incrementValue() {
  if (size.value == "all") {
    alert("Please select the size!")
  } else {
    let value = parseInt(document.getElementById("number").value, 10)
    value = isNaN(value) ? 0 : value
    value++
    document.getElementById("number").value = value
  }
}
