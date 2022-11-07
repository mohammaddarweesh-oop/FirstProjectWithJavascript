// main color 

let mainColor = localStorage.getItem("color-option");
let backgroundOptions;
console.log(mainColor);

if (mainColor !== null) {
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("color-option"));

    document.querySelectorAll(".color-list li").forEach((ele) => {
        //remove active class from children
        ele.classList.remove("active");

        // add class active on check
        if (ele.dataset.color === localStorage.getItem("color-option") ) {
            ele.classList.add("active");
        }
    });


    

};



let gear = document.querySelector(".toggle .settings-box-icon");
let setting = document.querySelector(".settings-box");
gear.onclick = () => {
    gear.classList.toggle('fa-spin');
    setting.classList.toggle("opend");
};

let landingPage = document.querySelector(".landing");

    // get array images 
    let images = [
        "../images/image1.jpg"
    ,"../images/image2.jpg"
    ,"../images/image3.jpg" 
    , "../images/image4.jpg"
    ,"../images/image5.jpg" 
    , "../images/image6.jpg"
    ];
    // end images


backgroundOptions = true;
// storage local browser
let storage = localStorage.getItem("backgroundOptions");
//check backgroundOptions not null
if (storage !== null) {

    console.log("not empty");
    if (storage === 'true') {
        backgroundOptions = true;
    }else{
        backgroundOptions = false;
    }

    //remove class active 
    document.querySelectorAll(".random-background span").forEach((element) => {
        element.classList.remove("active");
    } );
    if (storage === "true") {
        document.querySelector(".random-background .yes").classList.add("active");
    }else {
        document.querySelector(".random-background .no").classList.add("active");
    }
}

let backgroundInterval;
function randomizeImg(){
    if (backgroundOptions === true) { 
        // select landing page element 
    

    
    backgroundInterval =  setInterval(()=>{
        let random = Math.floor(Math.random() * images.length);
        landingPage.style.backgroundImage = `url(${images[random]})`; 
    } ,10000);
    }
    
};   
        
randomizeImg();
console.log(backgroundInterval);
// Start nav bar ====================================================================

let link = document.querySelectorAll(".landing .links li a")



console.log(link)
// End nav bar   ====================================================================

// ========================= colors =============================
let colorLi = document.querySelectorAll(".color-list li");
colorLi.forEach(li => {
    
    li.addEventListener("click" , (event) => {
        console.log(event.target.dataset.color);
        document.documentElement.style.setProperty("--main-color" , event.target.dataset.color);//
        localStorage.setItem("color-option" , event.target.dataset.color);

        //remove active class from children
        // event.target.parentElement.querySelectorAll(".active").forEach((ele) => {
        //     ele.classList.remove("active");
        // });
        // // add active class on self 
        // event.target.classList.add("active");


        handleActive(event);

    });
});
console.log(colorLi);

// ======================================= background random =============================================================




let randomBackground = document.querySelectorAll(".random-background span");
randomBackground.forEach((bkElement) => {
    bkElement.addEventListener("click" , (ele) => {
        console.log(ele);
        // ele.target.parentElement.querySelectorAll(".active").forEach((ele2) => {
        //     ele2.classList.remove("active");
        // });
        // ele.target.classList.add("active");
        handleActive(ele);


        if (ele.target.dataset.background === "no") {
            backgroundOptions = false;
            backgroundOptions = localStorage.getItem("backgroundOptions");
            clearInterval(backgroundInterval);
            localStorage.setItem("backgroundOptions" , false);
            console.log("No change Background ");
        }else{
            backgroundOptions = true;
            randomizeImg();
            localStorage.setItem("backgroundOptions" , true);
            console.log("changing Background ");
        }
    });
});

//==========================================================| Our Skills |======================================================================
//select akills

let ourSkills = document.querySelector(".our-skills");
window.onscroll = () => {
    //skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;
    console.log(skillsOffsetTop); //176

    // skills offset height 
    let skillsOffsetHieght = ourSkills.offsetHeight;
    console.log(skillsOffsetHieght);

    // window height 
    let windowHeight = this.innerHeight;
    console.log(this.innerHeight); 

    let windowSchrollTop = this.pageYOffset;
    this.console.log(windowSchrollTop);

    if (windowSchrollTop > (skillsOffsetTop + skillsOffsetHieght - windowHeight)) {
        console.log("skill section");
        
        //select skills
        let allSkills = document.querySelectorAll(".our-skills .skills-box .skils-progress span");

        allSkills.forEach(skill => {
            // fill progress 
            skill.style.width = skill.dataset.progress;
        });
    }
}


// create pop up gallary 
let ourGallary = document.querySelectorAll(".gallry img");
// loop on array gallary
ourGallary.forEach(img => {
    // click
    img.addEventListener("click" , event => {

        // create over lay element
        let overlay = document.createElement("div");
        // add class 
        overlay.className = "popup-overlay";
        // add in body 
        document.body.appendChild(overlay);

        //create popup element
        let popupBox = document.createElement("div");
        popupBox.className = "popup-box";

        if (img.src !== null) {
            let heading = document.createElement("h3");

            // text heding
            let textHeding = document.createTextNode(img.alt);
            heading.appendChild(textHeding);

            // add heding in pop up box 
            popupBox.appendChild(heading);
        }

        // overlay

        //create pop up image 
        let popupImage = document.createElement("img");
        // add source or path for image 
        popupImage.src = img.src; 
        popupBox.appendChild(popupImage);
        document.body.appendChild(popupBox);
        

        // create close button 

        let closeButton = document.createElement("span");

        let closeButtonText = document.createTextNode("X");

        closeButton.appendChild(closeButtonText);

        closeButton.className = "close-button";

        // add close button in pop up
        popupBox.appendChild(closeButton);

        
    });

});

// remove pop up 

document.addEventListener("click" , (event) => {
    if (event.target.className === "close-button") {
        event.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove();
    }
});


// All Bullets ==========================================================================

const bullets = document.querySelectorAll(".nav-buletts .bulett");

// bullets.forEach((bullet) => {
//     bullet.addEventListener("click",(ele) => {
//         document.querySelector(ele.target.dataset.section).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// links =======================================================

const links = document.querySelectorAll(".links a");

// links.forEach(link => {

//     link.addEventListener("click",(element) => {
//         // 
//         element.preventDefault();
//         document.querySelector(element.target.dataset.section).scrollIntoView({
//             behavior : 'smooth'
//         });
//     });
// });


function allLoop(elements){
    elements.forEach(element => {

        element.addEventListener("click",(ele) => {
            // 
            ele.preventDefault();
            document.querySelector(ele.target.dataset.section).scrollIntoView({
                behavior : 'smooth'
            });
        });
    });
};

allLoop(links);
allLoop(bullets);

// ===================================================| hundle active state |==============================================

function handleActive(elements){

    elements.target.parentElement.querySelectorAll(".active").forEach((ele) => {
        ele.classList.remove("active");
        });

        // add active class on self 
        elements.target.classList.add("active");
};

// bullets option 
let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-buletts");

let localBullets = localStorage.getItem("bullets_option");

bulletsSpan.forEach((span) => {
    span.addEventListener("click" , (e) => {

        if (span.dataset.display === "show") {
            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets_option" , 'block');
        }else {
            bulletsContainer.style.display = 'none';

            localStorage.setItem("bullets_option" , 'block');
        };

        handleActive(e);

    });
});


// local storage for bullets options 

if (localBullets !== null) {
    
    bullets.forEach((span) => {
        span.classList.remove("active");
    });

    if (localStorage === 'block') {
        bulletsContainer.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");
    }else {
        bulletsContainer.style.display = 'none';

        document.querySelector(".bullets-option .no").classList.add("active");
    };
};



// reset local storage 

document.querySelector(".reset-options").onclick = function (){
    localStorage.removeItem("backgroundOptions");
    localStorage.removeItem("color-option");
    window.location.reload();
    // localStorage.removeItem("");
    // localStorage.clear();
};


// toggle 
let togBtn = document.querySelector('.togle-menu');
let tLinks = document.querySelector('.links');
let box = document.querySelectorAll('li');

togBtn.onclick = function (e){
    e.stopPropagation();
    this.classList.toggle('menu-active');
    tLinks.classList.toggle('open');

};
tLinks.onclick = function (e){
    e.stopPropagation();
}

// click anyware toggle 

document.addEventListener('click', e => {
    if (e.target !== togBtn && e.target !== tLinks) {
        if (tLinks.classList.contains("open") && togBtn.classList.contains("menu-active")) {
            togBtn.classList.remove('menu-active');
            tLinks.classList.remove('open');
        }
        // console.log('done');
    }
    // else{
    //     console.log("No");
    // }
});

