const slider = document.getElementsByClassName('aboutContentSlider')[0];
const sliderLabels = document.getElementsByClassName('aboutContent__label');
const sliderRadios = document.getElementsByClassName('aboutContent__input');
const sliderItems = document.getElementsByClassName('aboutContent__item');

slider.addEventListener('click', () => {
    for (let i = 0; i < sliderLabels.length; i++) {
        if (sliderRadios[i].checked){
            sliderLabels[i].classList.add('aboutContent__label-active');
            sliderItems[i].classList.add('aboutContent__item-active');
        } else {
            sliderLabels[i].classList.remove('aboutContent__label-active');
            sliderItems[i].classList.remove('aboutContent__item-active');
        }
    }
})

