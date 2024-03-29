let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let copydiv=document.querySelector(".copydiv");
let p=document.querySelector(".copydiv p");
let rgb1="#24cd3b";
let rgb2="#1664ea";

const hexavalues=()=>{
    let color="#";
    let hexavalue="0123456789abcdef";
    for(let i=0;i<6;i++){
        color=color+ hexavalue[Math.floor(Math.random() * 16)];;
    }
    return color;
}

// Function to set gradient direction based on the clicked paragraph
const setGradientDirection = (direction) => {
    document.body.style.backgroundImage = `linear-gradient(to ${direction}, ${rgb1}, ${rgb2})`;
    p.innerHTML = `background-image: linear-gradient(to ${direction}, ${rgb1}, ${rgb2});`;
}


const hbtn1=()=>{
     rgb1=hexavalues();
    console.log(rgb1);
    document.body.style.backgroundImage=`linear-gradient(to top right,${rgb1},${rgb2})`;
    p.innerHTML=`background-image: linear-gradient(to top right,${rgb1}, ${rgb2});`;
    btn1.innerText=rgb1;
}


const hbtn2=()=>{
    rgb2=hexavalues();
    console.log(rgb2);
    
    document.body.style.backgroundImage=`linear-gradient(to top right, ${rgb1},${rgb2})`;
    p.innerHTML=`background-image: linear-gradient(to top right,${rgb1},${rgb2});`;
    btn2.innerText=rgb2;
}
// copydiv.addEventListener('click',()=>{
//     navigator.clipboard.writeText(p.innerHTML);

    
//     // alert("copied");
// })

// Function to copy text and show animation
const copyTextAndAnimate = async(text) => {
    try{navigator.clipboard.writeText(text);
    
    

    // Add animation class to the copydiv element
    copydiv.classList.add('copy-animation');

    // Remove the animation class after 5 seconds
    setTimeout(() => {
        copydiv.classList.remove('copy-animation');
    }, 4000);

    // Change heading text and remove old text after 2 seconds
    const heading = document.querySelector('.heading');
    heading.textContent = 'Copied!';
    setTimeout(() => {
        heading.textContent = 'Copy linear-gradient color!';
    }, 1300);
}




catch (error) {
    console.error('Failed to copy text: ', error);

}
}
// Event listener for copying text and showing animation
copydiv.addEventListener('click', () => {
    copyTextAndAnimate(p.innerHTML); // Copy text and show animation
});













btn1.addEventListener('click',hbtn1);
btn2.addEventListener('click',hbtn2);


// 








// Event listener for setting gradient direction based on clicked paragraph
document.querySelectorAll('.directions p').forEach(para => {
    para.addEventListener('click', () => {
        setGradientDirection(para.innerText);
        console.log(para.innerText);
    });
});


//

// Function to handle click event on paragraph
const handleParagraphClick = (event) => {
    const clickedParagraph = event.target;
    
    // Remove 'selected' class from all paragraphs
    document.querySelectorAll('.directions p').forEach(para => {
        para.classList.remove('selected');
    });

    // Add 'selected' class to the clicked paragraph
    clickedParagraph.classList.add('selected');

    // Set gradient direction based on the clicked paragraph's text content
    setGradientDirection(clickedParagraph.innerText.toLowerCase().replace(' ', ' '));
}

// Event listener for setting gradient direction based on clicked paragraph
document.querySelectorAll('.directions p').forEach(para => {
    para.addEventListener('click', handleParagraphClick);
});

// ////////////////////

document.addEventListener("DOMContentLoaded", function() {
    const loaderBar = document.querySelector('.loader-bar');
    const loaderText = document.getElementById('loaderText');
    let width = 0;
    const interval = setInterval(function() {
        width++;
        loaderBar.style.width = width + '%';
        loaderText.textContent = width + '%';
        if (width >= 100) {
            clearInterval(interval);
            loaderText.textContent = 'Loaded!';
            setTimeout(() => {
         

                document.querySelector('.loader-wrapper').style.display = 'none';
            }, 500); // hide loader after 500ms delay
        }
    }, 10); // adjust the speed of the loading bar
});
