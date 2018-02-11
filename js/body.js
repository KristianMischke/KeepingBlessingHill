
const header = document.querySelector('header');
const mainSpacer   = document.querySelector('#spacer');
const mainContent = document.querySelector('main');
const footer = document.querySelector('footer');

var fitContent;

window.onresize = fitMainContent;
window.onload = fitMainContent;

function fitMainContent() {

    fitContent = window.innerHeight - header.clientHeight - mainContent.clientHeight - footer.clientHeight;

    if(fitContent > 0) {
        mainSpacer.style.height = fitContent + "px";
    }

}