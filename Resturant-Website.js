

/// navbar section
function UponScroll() {
    //    console.log("hello World")
    document.getElementById('navbar').style.background = 'transparent';
    let scrollPosition = window.pageYOffset;
    if (scrollPosition >= 600) {
        document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0,0.5)';
        // console.log(scrollPosition);
    }

}

window.addEventListener(`scroll`, UponScroll);






// side bar section
function disableScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollTop}px`;
    document.body.style.left = `-${scrollLeft}px`;
}

function allowScroll() {
    let scrollTop = parseInt(window.pageYOffset || document.body.style.top, 10) || 0;
    let scrollLeft = parseInt(window.pageXOffset || document.body.style.left, 10) || 0;
    console.log(scrollTop);
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    // Scroll the page back to the original position
}

let sidebarBg=document.getElementById('sideBarCon');
// console.log(sidebarBg);



// let sideBarClose=  document.getElementById('sideBarClose');
// let sideBarOpen = document.getElementById('side-bar-btn');
// let sidebar = document.querySelector('#side-bar');
// console.log(sidebar);
// sideBarOpen.addEventListener(`click`, function () {
//     debugger
//     sidebar.classList.toggle('closed');
//     sidebarBg.classList.toggle('active');
//     console.log(sidebar);
// })





// Event Section

let timer = document.getElementById('card-4');

function countDown(e) {

    function restart() {
        timer.innerHTML = e;
        let i = e;
        let interval = setInterval(() => {
            if (i > 0) {
                i--;
                timer.innerHTML = i;
            }
            else {
                clearInterval(interval);
                restart();
            }

        }, 1000);
        timer.classList.add('display-1')
        timer.classList.add('text-danger')
        // timer.classList.add('coregette')

    }
    restart();
}
countDown(59);


let timer2 = document.getElementById('card-3');

function countDown1(e1) {
    timer2.innerHTML = e1;
    let i1 = e1;
    let interval1 = setInterval(() => {
        if (i1 > 0) {
            i1--;
            timer2.innerHTML = i1;
        }
        else {
            clearInterval(interval1);
        }
    }, 60 * 1000);
    timer2.classList.add('display-1')
    timer2.classList.add('text-danger')
}
countDown1(59)


let timer3 = document.getElementById('card-2');

function countDown3(e3) {
    timer3.innerHTML = e3;
    let i3 = e3;
    let interval3 = setInterval(() => {
        if (i3 > 0) {
            i3--;
            console.log(i3);
            timer3.innerHTML = i3;
        }
        else {
            clearInterval(interval3);
            console.log("0");
        }
    }, 60 * 60 * 1000);
    timer3.classList.add('display-1')
    timer3.classList.add('text-danger')
}
countDown3(24)



let daystimer = document.getElementById('card-1');


function countDown5(e5) {
    daystimer.innerHTML = e5;
    let i5 = e5;
    let interval = setInterval(() => {
        if (i5 > 1) {
            i5--;
            console.log(i5)
            daystimer.innerHTML = i5;
        }
    }, 24 * 60 * 60 * 1000)
    daystimer.classList.add('display-1')
    daystimer.classList.add('text-danger')
}

countDown5(25);



// let u=;

const carsouel = document.getElementById('carousel-sec');


window.setTimeout(
    function () {
        const elements = document.querySelectorAll('.car-btn');
        elements.forEach(element => {
            element.style.transform = 'translateY(-20px)';
        });
    },100)
// reservation table section



window.setTimeout(
    function () {
        const elements = document.querySelectorAll('.restur');
        elements.forEach(element => {
            element.style.transform = 'scale(1)';
        });
    },100)


window.setTimeout( function () {
    const elements = document.querySelectorAll('.Fat');
    elements.forEach(element => {
        element.style.transform = "scale(1)"
    })

},100)

 
window.setTimeout(function(){
        const element = document.getElementById('navbar');
        element.style.transform = "translateX(0px)"

},100)

window.setTimeout(function(){
    const elements = document.querySelectorAll('.welcome'); 
    elements.forEach(element => {
        element.style.transform = "translateY(0px)"
    })
},100)


function nextItem(){
 
    {
        const element = document.getElementById('navbar');
            element.style.transform = "translateY(-200px)"
    }
    {
        const elements = document.querySelectorAll('.Fat');
        elements.forEach(element => {
            element.style.transform = 'scale(0)';
        });
    }

    {
        const elements = document.querySelectorAll('.welcome'); 
        elements.forEach(element => {
            element.style.transform = "translateX(-250px)"
        })
    }
    // overf.classList.add('overflow-hidden');

    {
        const elements = document.querySelectorAll('.restur');
            elements.forEach(element => {
                element.style.transform = 'translateX(400px)';
            });
    }
    
    {
        const elements = document.querySelectorAll('.car-btn');
            elements.forEach(element => {
                element.style.transform = 'translateY(400px)';
            });
    }

    window.setTimeout(
        function () {
            const elements = document.querySelectorAll('.car-btn');
            elements.forEach(element => {
                element.style.transform = 'translateY(-20px)';
            });
        },100)
    // reservation table section
    
    
    
    window.setTimeout(
        function () {
            const elements = document.querySelectorAll('.restur');
            elements.forEach(element => {
                element.style.transform = 'scale(1)';
            });
        },100)
    
    
    window.setTimeout( function () {
        const elements = document.querySelectorAll('.Fat');
        elements.forEach(element => {
            element.style.transform = "scale(1)"
        })
    
    },100)
    
     
    window.setTimeout(function(){
            const element = document.getElementById('navbar');
            element.style.transform = "translateY(0px)"
    
    },500)
    
    window.setTimeout(function(){
        const elements = document.querySelectorAll('.welcome'); 
        elements.forEach(element => {
            element.style.transform = "translateY(0px)"
        })
    },100)
    
}

function prevItem(){
 
    {
        const element = document.getElementById('navbar');
            element.style.transform = "translateY(-200px)"
    }
    {
        const elements = document.querySelectorAll('.Fat');
        elements.forEach(element => {
            element.style.transform = 'scale(0)';
        });
    }

    {
        const elements = document.querySelectorAll('.welcome'); 
        elements.forEach(element => {
            element.style.transform = "translateX(250px)"
        })
    }
    // overf.classList.add('overflow-hidden');

    {
        const elements = document.querySelectorAll('.restur');
            elements.forEach(element => {
                element.style.transform = 'translateX(-400px)';
            });
    }
    
    {
        const elements = document.querySelectorAll('.car-btn');
            elements.forEach(element => {
                element.style.transform = 'translateY(-200px)';
            });
    }

    window.setTimeout(
        function () {
            const elements = document.querySelectorAll('.car-btn');
            elements.forEach(element => {
                element.style.transform = 'translateY(-20px)';
            });
        },100)
    // reservation table section
    
    
    
    window.setTimeout(
        function () {
            const elements = document.querySelectorAll('.restur');
            elements.forEach(element => {
                element.style.transform = 'scale(1)';
            });
        },100)
    
    
    window.setTimeout( function () {
        const elements = document.querySelectorAll('.Fat');
        elements.forEach(element => {
            element.style.transform = "scale(1)"
        })
    
    },100)
    
     
    window.setTimeout(function(){
            const element = document.getElementById('navbar');
            element.style.transform = "translateY(0px)"
    
    },500)
    
    window.setTimeout(function(){
        const elements = document.querySelectorAll('.welcome'); 
        elements.forEach(element => {
            element.style.transform = "translateY(0px)"
        })
    },100)
    
}





// video section


//<====================== awaisahib765@gmail.com===========>