let leftbar = document.querySelector('#left')
let rightbar = document.querySelector('#right')

let leftColumn = () => {
    leftbar.style.width = "95%"
    rightbar.style.width = "5%"
    rightbar.querySelector("img").style.display="none"
    leftbar.querySelector("img").style.display="block"
    leftbar.querySelector("img").style.width="75%"
}
let rightColumn = () => {
    rightbar.style.width = "95%"
    leftbar.style.width = "5%"
    leftbar.querySelector("img").style.display="none"
    rightbar.querySelector("img").style.display="block"
    rightbar.querySelector("img").style.width="75%"
}
let bothColumn = () => {
    rightbar.style.width = "50%"
    leftbar.style.width = "50%"
    rightbar.querySelector("img").style.display="block"
    leftbar.querySelector("img").style.display="block"
    rightbar.querySelector("img").style.width="100%"
    leftbar.querySelector("img").style.width="100%"
}