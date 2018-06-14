window.onload = function() {
    // make blog post links open in a blank tab
    const links = document.querySelectorAll('.post-content a, .book-detail a');
    for(let i = 0; i < links.length; i++) {
        elem = links[i];
        elem.setAttribute("target", "_blank");
    }

    // set blog post images' style
    const images = document.querySelectorAll('.post-content img');
    for(let i = 0; i < images.length; i++) {
        elem = images[i];
        elem.setAttribute("width", "80%");
    }
};