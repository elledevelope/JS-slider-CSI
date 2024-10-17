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
    const divNext = createNavBtn("divNext", "fa-caret-right");
    const divPrev = createNavBtn("divPrev", "fa-caret-left");
};

export { initNavigation };