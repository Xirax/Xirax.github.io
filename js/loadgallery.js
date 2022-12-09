
function loadGallery(photoCtn=0){
    let gallery = document.getElementById('photo-gallery');

    for(let i=1; i<=photoCtn; i++){
        let miniURL = '../imgs/gallery/miniatures/' + i + '.jpg';
        let photoURL = '../imgs/gallery/original/' + i + '.JPG';
        let img = document.createElement('img');
        img.classList.add('photo-frame');
        img.src = miniURL;
        img.onclick = () => { showImage(photoURL) }

        gallery.appendChild(img);
    }
}

loadGallery(20);



function showImage(imgURL){
    document.getElementById('big-preview').style.display = 'flex';
    let imgFrame = document.getElementById('big-image');
    imgFrame.src = imgURL;

    loadDetails(imgURL)
}

async function loadDetails(imgURL){
    let detailsURL = '..' + imgURL.split('.')[2] + '.txt';
    console.log(detailsURL);
    let file = await fetch(detailsURL); 
    let details = await file.text();
    details = details.split('\n');

    document.getElementById('parameters').innerHTML = "";

    for(let i=0; i<details.length; i++){
        details[i].replace('\r', '');
        console.log(details[i]);
        let param = document.createElement('span');
        param.innerText = details[i];

        document.getElementById('parameters').appendChild(param);
    }
}

function closePreview(){
    document.getElementById('big-preview').style.display = 'none';
}