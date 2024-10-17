const initImg = () => {
    // console.dir(carousel);
    const fixedImage = document.createElement("img");
    fixedImage.classList.add("fixedImg");
    fixedImage.alt = "Image slider";
    fixedImage.src = dataSlider[currentImg].urlImg;
    carousel.append(fixedImage);

    const moveImage = document.createElement("img");
    moveImage.classList.add("moveImg");
    moveImage.alt = "Image slider";
    moveImage.src = dataSlider[currentImg].urlImg;
    carousel.append(moveImage);

    fixedImage.width = moveImage.width = 300;
    fixedImage.height = moveImage.height = 500;
};

export { initImg };