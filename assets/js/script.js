function Modal() {
    document.querySelector("#modal-container").classList.remove("invisible");
    document.querySelector("#modal").classList.remove("invisible");
    document.querySelector("#modal-image").src = event.target.src;
    document.querySelector("#caption").innerHTML = event.target.alt;
    
    disableScroll();
}

function UnModal() {
    document.querySelector("#modal-container").classList.add("invisible");
    document.querySelector("#modal").classList.add("invisible");
    enableScroll();
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}

let imgs = document.querySelectorAll("img");
for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () { Modal(); }
}

// let modalHTML = '<div onclick="UnModal()" class="invisible" id="modal-container"></div><div class="invisible" id="modal"><img id="modal-image" src="" alt=""></div>';
// document.querySelector("body").innerHTML = modalHTML + document.querySelector("body").innerHTML;
