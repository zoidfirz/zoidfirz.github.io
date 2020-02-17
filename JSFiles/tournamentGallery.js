var currentPageNumber = 0
var laPuppet2019ImageArray = [];
var tempArray = [];





class myImage {
    constructor(imagName) {
      this.thumbNailSrc = "../Assets/GalleryPhotos/General/thumbnails/"+imagName+".jpg";
      this.fullSizeHref ="../Assets/GalleryPhotos/General/"+imagName+".jpg" ;

    }
  }


function getCurrentPageNumber() {
    var linkDoc = document.querySelectorAll(".footer-nav")
    for (let i = 0; i < linkDoc.length; i++) {
        linkDoc[i].addEventListener("click", function () {
            $("#lapuppet2019gal").empty()
            if (currentPageNumber !== linkDoc[i].innerHTML){
                currentPageNumber = linkDoc[i].innerHTML;
                laPuppetTournament2019(currentPageNumber);
            };
        });
    };
};


function laPuppetTournament2019(_pageNumber){
    if(_pageNumber !== 0) {
        const pn = parseInt(_pageNumber) - 1
        var imageArrayBeingUsed = laPuppet2019ImageArray[pn]
        for (let i = 0; i < imageArrayBeingUsed.length; i++) {
            addlaPuppetTournamentimage(imageArrayBeingUsed[i])
            console.log(imageArrayBeingUsed[i])
        }
    }else {
        var imageArrayBeingUsed = laPuppet2019ImageArray[0]
        for (let i = 0; i < imageArrayBeingUsed.length; i++) {

            addlaPuppetTournamentimage(imageArrayBeingUsed[i])
        }
    }

}


function addlaPuppetTournamentimage(element){
    $("#lapuppet2019gal").append("<div class='col-lg-3 col-sm-6 col-md-6 col-xs-12 imagecell'> <a href='"+element.fullSizeHref+"' data-lightbox='Gallery'><img src='"+element.thumbNailSrc+"' class='img-thumbnail img-fluid' alt='karate image'></a></div>");
}


function galleryFooter(){
    var navLinkClass = ""
    var selectedPageNumber
    for (let i = 0; i < laPuppet2019ImageArray.length; i++) {
        $("#laPuppet2019tournamentGalleryFooter").append("<li class='nav-item' id='num"+i+1+"'> <a class='nav-link footer-nav' href='#'>"+(i+1)+"</a>")

    }

}



function splicelaPuppetPhotGallery() {
    for (let i = 1; i < 512 ; i++) {
        const imageName = "laPuppet2019-"+i;
        var image = new myImage(imageName);
        image.fullSizeHref = "../Assets/GalleryPhotos/Tournament/laPuppet2019/"+imageName+".jpg";
        image.thumbNailSrc = image.fullSizeHref;
        tempArray.push(image)
    }

    while (tempArray.length > 0){
        laPuppet2019ImageArray.push(tempArray.splice(0,50));
    }

}

splicelaPuppetPhotGallery()
laPuppetTournament2019(currentPageNumber);

galleryFooter();
getCurrentPageNumber();







