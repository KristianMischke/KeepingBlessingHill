window.onload = function() {
    const links = document.querySelectorAll('.post-content a');
    for(let i = 0; i < links.length; i++) {
        elem = links[i];
        elem.setAttribute("target", "_blank");
    }
};