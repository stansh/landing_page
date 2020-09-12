
let offerIndex = 0;

const offersData = [
    {
        id:0,
        model: '2021 BMW X7',
        type:'Lease for',
        dollarAmount:'479',
        length: 'for 36 mos',
        das:'$0 Due at Signing',
        inventoryLink:'https://www.bmwofminnetonka.com/new-vehicles/x7/',
        videoSrc:'videos/X7.mp4'
    },
    {
        id:1,
        model: '2021 BMW 3 Series',
        type:'Lease for',
        dollarAmount:'249',
        length: 'for 24 mos',
        das:'$0 Due at Signing',
        inventoryLink:'https://www.bmwofminnetonka.com/new-vehicles/3-series/',
        videoSrc:'videos/3series.mp4'
    },
    {
        id:2,
        model: '2021 BMW X3',
        type:'Lease for',
        dollarAmount:'399',
        length: 'for 36 mos',
        das:'$0 Due at Signing',
        inventoryLink:'https://www.bmwofminnetonka.com/new-vehicles/x3/',
        videoSrc:'videos/X3.mp4'
    }
]
window.onload = function getVideoLinks() {
    const videoSlides = Array.from(document.querySelectorAll('video')); 
    for (let i = 0; i < offersData.length; i++) {
        videoSlides[i].setAttribute('src', offersData[i].videoSrc);
        videoSlides[i].setAttribute('id', offersData[i].id);
    }   
    videoSlides[0].autoplay = true;
 } 









function Next (props) {
    
    
    offerIndex = offerIndex + 1;
    offerIndex === offersData.length ? offerIndex = 0 : offerIndex;
    const offer = Array.from(document.querySelectorAll('#offer li'));
    let buttonLink = document.querySelector('#offer a');
    offer[0].innerHTML = offersData [offerIndex].model;
    offer[1].innerHTML = offersData [offerIndex].type;
    offer[2].innerHTML = `<span id='dollar'>$</span>`+ offersData [offerIndex].dollarAmount;
    offer[3].innerHTML = offersData [offerIndex].length;
    offer[4].innerHTML = offersData [offerIndex].das;
    buttonLink.href = offersData [offerIndex].inventoryLink; 
    const videos = Array.from(document.querySelectorAll('video'));
    videos.forEach(video => video.pause())  
    videos[offerIndex].play();   
}

function Prev (props) {
    switch (offerIndex) {
         case 0 : offerIndex = offersData.length - 1;
         break;
         case offersData.length - 1 : offerIndex = offersData.length - 2;
         break;
         case offersData.length - 2 : offerIndex = offersData.length - 3;
         break;
     }
     
    const offer = Array.from(document.querySelectorAll('#offer li'));
    let buttonLink = document.querySelector('#offer a');
    offer[0].innerHTML = offersData [offerIndex].model;
    offer[1].innerHTML = offersData [offerIndex].type;
    offer[2].innerHTML = `<span id='dollar'>$</span>`+ offersData [offerIndex].dollarAmount;
    offer[3].innerHTML = offersData [offerIndex].length;
    offer[4].innerHTML = offersData [offerIndex].das;
    buttonLink.href = offersData [offerIndex].inventoryLink; 
    const videos = Array.from(document.querySelectorAll('video'));
    videos.forEach(video => video.pause())  
    videos[offerIndex].play();  
    
}

 









   



