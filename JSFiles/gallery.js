
var bootCampImageArray = []
var generalPhotoArray = []



class myImage {
    constructor(imagName) {
        this.thumbNailSrc = "../Assets/GalleryPhotos/General/thumbnails/"+imagName+".jpg";
        this.fullSizeHref ="../Assets/GalleryPhotos/General/"+imagName+".jpg" ;

    }
}



function addOkinawa() {
    for (let i = 1; i < 40; i++) {
        const element = "OkinawaTournament-"+i;
        var image = new myImage(element);
        image.fullSizeHref ="../Assets/GalleryPhotos/Tournament/okinawa/"+element+".jpg";
        image.thumbNailSrc = image.fullSizeHref

        addimage(image)
    }

}

function loadBootCampPhotos() {
    for (let i = 1; i < 24; i++) {
        const element = "bootcamp-"+i;
        var image = new myImage(element);
        image.fullSizeHref ="../Assets/GalleryPhotos/Bootcamp/"+element+".jpg";
        image.thumbNailSrc = image.fullSizeHref;

        addBootcampImage(image)
        console.log(image)
    }


}

function addKarateGen(){
    for (let i = 1; i < 24; i++) {
        const element = "karategen-"+i;
        const image = new myImage(element);

        addimage(image);
    };

    for (let i = 1; i < 34; i++) {
        const element = "2017promotion-"+i;
        let image = new myImage(element);
        image.thumbNailSrc = image.fullSizeHref

        addimage(image);
    };

};


function addimage(element){
    $("#genGallery").append("<div class='col-lg-3 col-sm-6 col-md-6 col-xs-12 imagecell'> <a href='"+element.fullSizeHref+"' data-lightbox='Gallery'><img src='"+element.thumbNailSrc+"' class='img-thumbnail img-fluid' alt='karate image'></a></div>");

};

function addBootcampImage(element) {
    $("#bootCampGallery").append("<div class='col-lg-3 col-sm-6 col-md-6 col-xs-12 imagecell'> <a href='"+element.fullSizeHref+"' data-lightbox='Gallery'><img src='"+element.thumbNailSrc+"' class='img-thumbnail img-fluid' alt='karate image'></a></div>");

}


addKarateGen();
addOkinawa();
loadBootCampPhotos()