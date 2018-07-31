
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


function updateRedirect(post) {
    name = document.querySelector("#comment-author").value;
    comment = document.querySelector("#comment-message").value;
    //subscribe = docuemtn.querySelector("#comment-subscribe").value;
    document.querySelector("#redirect-comment").value = `https://tranquil-tor-30132.herokuapp.com/comment/?name=${encodeURIComponent(name)}&comment=${encodeURIComponent(comment)}&post=${encodeURIComponent(post)}`;
}