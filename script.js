
const offersText = [
    {
        id:0,
        model: '2021 BMW X7',
        type:'Lease for',
        dollarAmount:'479',
        lenght: 'for 36 mos',
        das:'$0 Due at Signing',
        inventoryLink:'https://www.bmwofminnetonka.com/new-vehicles/x3/'
    },
    {
        id:1,
        model: '2021 BMW 3 Series',
        type:'Lease for',
        dollarAmount:'249',
        lenght: 'for 36 mos',
        das:'$0 Due at Signing',
        inventoryLink:'https://www.bmwofminnetonka.com/new-vehicles/x3/'
    },
    {
        id:2,
        model: '2021 BMW X3',
        type:'Lease for',
        dollarAmount:'399',
        lenght: 'for 36 mos',
        das:'$0 Due at Signing',
        inventoryLink:'https://www.bmwofminnetonka.com/new-vehicles/x3/'
    }
]

console.log(offersText[1].dollarAmount)

const offerIndex = document.querySelector('.carousel-indicators li').classList;
console.log(offerIndex)
/* const offer = Array.from(document.querySelectorAll('#offer li'));

console.log(offer.textContent) */





function changeOffer() {


    const offer = Array.from(document.querySelectorAll('#offer li'));
    
    console.log(offer.length)
   
  
   
}
