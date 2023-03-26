const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const arrayofImages=[];
arrayofImages.push("ollie/ollie1.jpeg");
arrayofImages.push("ollie/ollie2.jpeg");
arrayofImages.push("ollie/ollie3.jpeg");
arrayofImages.push("ollie/ollie4.jpeg");
arrayofImages.push("ollie/ollie5.jpeg");

/* Declaring the alternative text for each image file */
const alts={
    "ollie1.jpeg":"pic1alt",
    "ollie2.jpeg":"pic2alt",
    "ollie3.jpeg":"pic3alt",
    "ollie4.jpeg":"pic4alt",
    "ollie5.jpeg":"pic5alt"
}

/* Looping through images */
for(const image of arrayofImages){


    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', alts[image]);  
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click',newdis);
    function newdis(){
        newImage.getattribute('src');
        newImage.getAttribute('alt');
        displayedImage.setAttribute('newsrc','src')
        displayedImage.setAttribute('src', 'newsrc')
    }
}
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click',darkn);
function darkn(){
    if (btn.getattribute('class')='dark'){
        btn.setAttribute("class", "light");
        btn.textContent = Lighten;
        overlay.style.backgroundColor =rgba(0,0,0,0.5);

    }
    
}