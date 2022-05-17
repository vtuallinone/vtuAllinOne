const currentLocationofpage = location.href;
const menuitem = document.querySelectorAll("nav ul li ");
const menuLength = menuitem.length
for(let i=0 ; i < menuLength ; i++){

    if (menuitem[i].href == currentLocationofpage) {
        menuitem[i].classList.add("active");
    }
}
document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
    var adobeDCView = new AdobeDC.View({clientId: "20ffd9bcf6a344a1a02c37d418b8be4f", divId: "adobe-dc-view"});
    adobeDCView.previewFile({
        content:{location: {url: "https://vtuallinone.github.io/vtuAllinOne/pdfs/module2.pdf"}},
        metaData:{fileName: "Bodea Brochure.pdf"}
    }, {showAnnotationTools: false, showLeftHandPanel: false, showPageControls: false, 
        showDownloadPDF: false, showPrintPDF: false});
});
