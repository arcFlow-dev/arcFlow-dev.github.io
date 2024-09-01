const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const head = document.getElementsByTagName("header")

if (prefersDarkScheme){
    head[0].classList.add("dark")
}