let index = 0;

const offersText = [
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
        length: 'for 36 mos',
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



/* const slide = document.querySelector('.carousel-indicators>li>.active');
console.log(index) */




function Next (prop) {
    index = index + 1;
    index === 3 ? index = 0 : index;
    const offer = Array.from(document.querySelectorAll('#offer li'));
    let buttonLink = document.querySelector('#offer a');
    let video = document.querySelector('video source');
    
    offer[0].innerHTML = offersText[index].model;
    offer[1].innerHTML = offersText[index].type;
    offer[2].innerHTML = `<span id='dollar'>$</span>`+ offersText[index].dollarAmount;
    offer[3].innerHTML = offersText[index].length;
    offer[4].innerHTML = offersText[index].das;
    buttonLink.href = offersText[index].inventoryLink;  
    video.src = offersText[index].videoSrc;

}

 






/* 'DOMTokenList' */






/* .getAttribute('data-slide-to'); */

 


/* const offer = Array.from(document.querySelectorAll('#offer li'));

console.log(offer.innerHTML) */

/* const offer = Array.from(document.querySelectorAll('#offer li'));
    
console.log(offer[0].innerHTML)
console.log(offer[1].innerHTML)
console.log(offer[2].innerHTML)
console.log(offer[3].innerHTML)
console.log(offer[4].innerHTML)
console.log(offer[5].innerHTML) */

   



/* function changeOffer() {


    const offer = Array.from(document.querySelectorAll('#offer li'));
    
    console.log(offer[2].innerHTML)
   
  
   
} */
