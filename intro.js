
const center = document.querySelector('.letter')
const dots = document.querySelectorAll('.dot')


const letterI = document.querySelector('.I')

const letterL = document.querySelector('.L')

const letterN = document.querySelector('.N')
const letterO = document.querySelector('.O')

const letterR = document.querySelector('.R')


const elementsI = document.querySelectorAll('.elementI')

const elementsL = document.querySelectorAll('.elementL')

const elementsN = document.querySelectorAll('.elementN')
const elementsO = document.querySelectorAll('.elementO')


const elementsR = document.querySelectorAll('.elementR')



letterI.addEventListener('mouseover', () => {
    // center.style.opacity = '0'
    elementsI.forEach((elementI, idx) => {
        // setTimeout(() => {
            //elementA.classList.add('running');
            elementI.style.animationPlayState = 'running';
        // }, idx * 500);
    });
});

  
letterL.addEventListener('mouseover', () => {
    // center.style.opacity = '0'
    elementsL.forEach((elementL, idx) => {
        // setTimeout(() => {
            //elementA.classList.add('running');
            elementL.style.animationPlayState = 'running';
        // }, idx * 500);
    });
});


letterN.addEventListener('mouseover', () => {
    // center.style.opacity = '0'
    elementsN.forEach((elementN, idx) => {
        // setTimeout(() => {
            //elementA.classList.add('running');
            elementN.style.animationPlayState = 'running';
        // }, idx * 500);
    });
});

letterO.addEventListener('mouseover', () => {
    // center.style.opacity = '0'
    elementsO.forEach((elementO, idx) => {
        // setTimeout(() => {
            //elementA.classList.add('running');
            elementO.style.animationPlayState = 'running';
        // }, idx * 500);
    });
});




letterR.addEventListener('mouseover', () => {
    // center.style.opacity = '0'
    elementsR.forEach((elementR, idx) => {
        // setTimeout(() => {
            //elementA.classList.add('running');
            elementR.style.animationPlayState = 'running';
        // }, idx * 500);
    });
});
