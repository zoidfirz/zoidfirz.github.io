var currentPageNumber = 0
var imageArrays = [];
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



function addimage(element){
    $("#genGallery").append("<div class='col-lg-3 col-sm-6 col-md-6 col-xs-12 imagecell'> <a href='"+element.fullSizeHref+"' data-lightbox='Gallery'><img src='"+element.thumbNailSrc+"' class='img-thumbnail img-fluid' alt='karate image'></a></div>");
};


function addKarateGen(){
    for (let i = 1; i < 24; i++) {
        const element = "karategen-"+i;
        const image = new myImage(element);

        addimage(image);
    };
};

function addOkinawa() {
    for (let i = 20; i < 49; i++) {
        const element = "Okinawa-"+i;
        var image = new myImage(element);
        image.fullSizeHref ="../Assets/GalleryPhotos/Tournament/okinawa/"+element+".jpg";
        image.thumbNailSrc = "../Assets/GalleryPhotos/Tournament/okinawa/thumbnails/"+element+"-thumb.jpg";

        addimage(image)
    }

}

function laPuppetTournament2019(_pageNumber){
    if(_pageNumber !== 0) {
        const pn = parseInt(_pageNumber) - 1
        var imageArrayBeingUsed = imageArrays[pn]
        for (let i = 0; i < imageArrayBeingUsed.length; i++) {
            addlaPuppetTournamentimage(imageArrayBeingUsed[i])
            console.log(imageArrayBeingUsed[i])
        }
    }else {
        var imageArrayBeingUsed = imageArrays[0]
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
    for (let i = 0; i < imageArrays.length; i++) {
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
        imageArrays.push(tempArray.splice(0,50));
    }

}

splicelaPuppetPhotGallery()
laPuppetTournament2019(currentPageNumber);
addKarateGen();
addOkinawa();
galleryFooter();
getCurrentPageNumber();







