const currentLocationofpage = location.href;
const menuitem = document.querySelectorAll("nav ul li ");
const menuLength = menuitem.length
for (let i = 0; i < menuLength; i++) {

    if (menuitem[i].href == currentLocationofpage) {
        menuitem[i].classList.add("active");
    }
}

let header = document.getElementById('pdf-container')
let pdfbtns = header.getElementsByClassName("pdf-btn");
for (let i = 0; i < pdfbtns.length; i++) {
    pdfbtns[i].addEventListener("click", funcPdf);
    pdfbtns[i].addEventListener("click", funcPdfViewer);
}

function funcPdf() {
    let current = document.getElementsByClassName("pdf-active");

    if (current.length > 0) {
        current[0].className = current[0].className.replace(" pdf-active", "");
    }
    this.className += " pdf-active";

}


function funcPdfViewer() {
    let pdfsourse = document.getElementById('pdf-viewer')
    console.log(pdfsourse)
    console.log(this.id);
    if (this.id == 'm1-pdf') {
        console.log('Successfulm1', pdfsourse.scr)
        pdfsourse.innerHTML = `<iframe src="https://vtuallinone.github.io/vtuAllinOne/pdfs/P%20cycle/module1phy.pdf" id="iframe-pdf" width="100%" height="100%"></iframe>`
    }
    else if (this.id == 'm2-pdf') {
        pdfsourse.innerHTML = ` <iframe src="https://vtuallinone.github.io/vtuAllinOne/pdfs/P%20cycle/Module-02%20phy.pdf" id="iframe-pdf" width="100%" height="100%"></iframe>`
    }
    else if (this.id == 'm3-pdf') {
        pdfsourse.innerHTML = ` <iframe src="https://vtuallinone.github.io/vtuAllinOne/pdfs/P%20cycle/MODULE%203.pdf" id="iframe-pdf" width="100%" height="100%"></iframe>`
    }

    else if (this.id == 'm4-pdf') {
        pdfsourse.innerHTML = `
        <iframe src="https://vtuallinone.github.io/vtuAllinOne/pdfs/P%20cycle/MODULE%204phy.pdf" width="100%" height="100%"></iframe>`
    }

    else if (this.id == 'm5-pdf') {
        pdfsourse.innerHTML = `
        <iframe src="  https://vtuallinone.github.io/vtuAllinOne/pdfs/P%20cycle/MODULE5phy.pdf" id="iframe-pdf" width="100%" height="100%"></iframe>`
    }
}