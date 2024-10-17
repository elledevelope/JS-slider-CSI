const createNavBtn = (className, faClass) => {
    const div = document.createElement("div");
    div.classList.add(className);
    const i = document.createElement("i");
    i.classList.add(faClass);
    i.classList.add("fa-solid");
    carousel.append(div);
    div.append(i);
    return div;
};

const initNavigation = () => {
    const divPrev = createNavBtn("divPrev", "fa-caret-left");
    // divPrev.addEventListener("click", () => {
    //     if (currentImg === dataSlider.length + 1) {
    //         currentImg = 0;
    //     } else {
    //         currentImg--;
    //     };
    //     document.querySelector(".moveImg").src = dataSlider[currentImg].urlImg;
    //     document.querySelector(".fixedImg").classList.add("slide-left");
    // });

    const divNext = createNavBtn("divNext", "fa-caret-right");
    divNext.addEventListener("click", () => {
        if (currentImg === dataSlider.length - 1) {
            currentImg = 0;
        } else {
            currentImg++;
        };
        document.querySelector(".fixedImg").src = dataSlider[currentImg].urlImg;
        document.querySelector(".moveImg").classList.add("slide-right");
    });
};

export { initNavigation };