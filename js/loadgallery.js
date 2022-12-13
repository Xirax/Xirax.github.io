const MAX_PHOTOS_AT_TIME = 5;
const LAST_PHOTO = 19;

let GALLERY_FIRST_PHOTO = 1;
let ACTIVE_PHOTO = 1;


function loadGallery(first, last){
    let gallery = document.getElementById('gallery');
    let imagesCount = last - first;

    gallery.innerHTML = '<div class="slide-button bleft"> &#60; </div>';

    for(let i=first; i<=imagesCount; i++){
        let imgURL = '../imgs/gallery/' + i + '.jpg';
        let img = document.createElement('img');
        img.src = imgURL;
        img.classList.add('image');
        if(i == ACTIVE_PHOTO) img.classList.add('active');

        gallery.appendChild(img);
    }

    gallery.innerHTML += '<div class="slide-button bright"> > </div>';
}

function loadPreview(){
    let imgURL = '../imgs/gallery/' + ACTIVE_PHOTO + '.jpg';
    document.getElementById('preview-image').src = imgURL;

    let active = document.getElementsByClassName('active');
    for(let i=0; i<active.length; i++) active[i].classList.remove('active');
}

function nextPhoto(){
    ACTIVE_PHOTO++;
    if(ACTIVE_PHOTO > LAST_PHOTO) ACTIVE_PHOTO = 1;
    loadPreview();
}

function previousPhoto(){
    ACTIVE_PHOTO--;
    if(ACTIVE_PHOTO < 1) ACTIVE_PHOTO = LAST_PHOTO;
    loadPreview();
}


loadGallery(1, 6);