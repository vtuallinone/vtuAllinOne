let header = document.getElementById("pdf-container");
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

const viewerOptions = {
  embedMode: "SIZED_CONTAINER",
  defaultViewMode: "FIT_PAGE",
  showDownloadPDF: false,
  showPrintPDF: false,
  showLeftHandPanel: true,
  showAnnotationTools: true,
};

const clientID = "ca833f485d6545b6b51e07334c620163";

function previewPDF(embeddedView, pdfURL) {
  fetch(pdfURL)
    .then((res) => res.blob())
    .then((blob) => {
      embeddedView.previewFile(
        {
          // The file content
          content: { promise: Promise.resolve(blob.arrayBuffer()) },
          metaData: { fileName: pdfURL.split("/").slice(-1)[0] },
        },
        viewerOptions
      );
    });
}

document.addEventListener("adobe_dc_view_sdk.ready", function () {
  let pdfEmbeddedView1 = new AdobeDC.View({
    clientId: clientID,
    divId: "pdfViewer1",
  });
  let pdfEmbeddedView2 = new AdobeDC.View({
    clientId: clientID,
    divId: "pdfViewer2",
  });
  let pdfEmbeddedView3 = new AdobeDC.View({
    clientId: clientID,
    divId: "pdfViewer3",
  });
  let pdfEmbeddedView4 = new AdobeDC.View({
    clientId: clientID,
    divId: "pdfViewer4",
  });
  let pdfEmbeddedView5 = new AdobeDC.View({
    clientId: clientID,
    divId: "pdfViewer5",
  });

  previewPDF(pdfEmbeddedView1, UrlToPDF1);
  previewPDF(pdfEmbeddedView2, UrlToPDF2);
  previewPDF(pdfEmbeddedView3, UrlToPDF3);
  previewPDF(pdfEmbeddedView4, UrlToPDF4);
  previewPDF(pdfEmbeddedView5, UrlToPDF5);
});

// Add arrayBuffer if necessary i.e. Safari
(function () {
  if (Blob.arrayBuffer != "function") {
    Blob.prototype.arrayBuffer = myArrayBuffer;
  }

  function myArrayBuffer() {
    return new Promise((resolve) => {
      let fileReader = new FileReader();
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.readAsArrayBuffer(this);
    });
  }
})();

function funcPdfViewer() {
  if (this.id == "m1-pdf") {
    document.getElementById("pdfViewer1").style.display = "block";
    document.getElementById("pdfViewer2").style.display = "none";
    document.getElementById("pdfViewer3").style.display = "none";
    document.getElementById("pdfViewer4").style.display = "none";
    document.getElementById("pdfViewer5").style.display = "none";
  } else if (this.id == "m2-pdf") {
    document.getElementById("pdfViewer2").style.display = "block";
    document.getElementById("pdfViewer1").style.display = "none";
    document.getElementById("pdfViewer3").style.display = "none";
    document.getElementById("pdfViewer4").style.display = "none";
    document.getElementById("pdfViewer5").style.display = "none";
  } else if (this.id == "m3-pdf") {
    document.getElementById("pdfViewer3").style.display = "block";
    document.getElementById("pdfViewer2").style.display = "none";
    document.getElementById("pdfViewer1").style.display = "none";
    document.getElementById("pdfViewer4").style.display = "none";
    document.getElementById("pdfViewer5").style.display = "none";
  } else if (this.id == "m4-pdf") {
    document.getElementById("pdfViewer4").style.display = "block";
    document.getElementById("pdfViewer2").style.display = "none";
    document.getElementById("pdfViewer3").style.display = "none";
    document.getElementById("pdfViewer1").style.display = "none";
    document.getElementById("pdfViewer5").style.display = "none";
  } else if (this.id == "m5-pdf") {
    document.getElementById("pdfViewer5").style.display = "block";
    document.getElementById("pdfViewer2").style.display = "none";
    document.getElementById("pdfViewer3").style.display = "none";
    document.getElementById("pdfViewer4").style.display = "none";
    document.getElementById("pdfViewer1").style.display = "none";
  }
}

document.getElementById("pdfViewer1").style.display = "block";
document.getElementById("pdfViewer2").style.display = "none";
document.getElementById("pdfViewer3").style.display = "none";
document.getElementById("pdfViewer4").style.display = "none";
document.getElementById("pdfViewer5").style.display = "none";
