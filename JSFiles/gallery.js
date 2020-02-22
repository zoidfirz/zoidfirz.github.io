
var bootCampImageArray = []
var generalPhotoArray = []
var okinawaPhotoArray = []


//+1 to actual photocount.. it is used in for loop logic
const okinawaPhotoCount = 40;
const bootcampPhotoCount = 24;
const generalKaratePhotoCount = 24;
const promotion_2017_PhotoCount = 34;
const fikaTouramentPhotoCount = 9;




class myImage {
    constructor(imagName) {
        this.thumbNailSrc = "../Assets/GalleryPhotos/General/thumbnails/"+imagName+".jpg";
        this.fullSizeHref ="../Assets/GalleryPhotos/General/"+imagName+".jpg" ;

    }
}





function addOkinawa() {
    for (let i = 1; i < okinawaPhotoCount; i++) {
        const element = "OkinawaTournament-"+i;
        var image = new myImage(element);
        image.fullSizeHref ="../Assets/GalleryPhotos/Tournament/okinawa/"+element+".jpg";
        image.thumbNailSrc = image.fullSizeHref

        addimage(image)
    }

}

function loadBootCampPhotos() {
    for (let i = 1; i < bootcampPhotoCount; i++) {
        const element = "bootcamp-"+i;
        var image = new myImage(element);
        image.fullSizeHref ="../Assets/GalleryPhotos/Bootcamp/"+element+".jpg";
        image.thumbNailSrc = image.fullSizeHref;

        addBootcampImage(image)
        console.log(image)
    }


}

function addKarateGen(){
    for (let i = 2; i < generalKaratePhotoCount; i++) {
        const element = "karategen-"+i;
        const image = new myImage(element);


        addimage(image);
    };

    for (let i = 1; i < promotion_2017_PhotoCount; i++) {
        const element = "2017promotion-"+i;
        let image = new myImage(element);
        image.thumbNailSrc = image.fullSizeHref

        addimage(image);
    };
    for (let i = 1; i < fikaTouramentPhotoCount; i++) {
        const element = "fika-"+i;
        let image = new myImage(element);
        image.fullSizeHref = "../Assets/GalleryPhotos/Tournament/fika/"+element+".jpg"
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