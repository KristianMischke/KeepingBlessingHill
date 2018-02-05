
const header = document.querySelector('header');
const mainContent   = document.querySelector('main #content');
const sidebar = document.querySelector('main #sidebar');
const footer = document.querySelector('footer');

var fitContent;

window.onresize = fitMainContent;
window.onload = fitMainContent;

function fitMainContent() {

    fitContent = window.innerHeight - header.clientHeight - sidebar.clientHeight - footer.clientHeight;

    if(mainContent.clientHeight < fitContent) {
        mainContent.style.height = fitContent + "px";
    }

}