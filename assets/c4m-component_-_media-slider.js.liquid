class MediaSlider extends HTMLElement {
  constructor() {
    super();
    this.slider = this.querySelector('[id^="_Custom_-_Slider-"]');
    this.sliderItems = this.querySelectorAll('[id^="_Custom_-_Slide-"]');
    this.enableSliderLooping = false;
    this.currentPageElement = this.querySelector('._custom_-_slider-counter--current');
    this.currentPageElements = this.querySelectorAll('[data-slide-to]');
    this.pageTotalElement = this.querySelector('._custom_-_slider-counter--total');
    this.prevButton = this.querySelector('button[name="_custom_-_previous"]');
    this.nextButton = this.querySelector('button[name="_custom_-_next"]');

    if (!this.slider || !this.nextButton) return;

    this.initPages();
    const resizeObserver = new ResizeObserver(entries => this.initPages());
    resizeObserver.observe(this.slider);

    this.slider.addEventListener('scroll', this.update.bind(this));
    this.prevButton.addEventListener('click', this.onButtonClick.bind(this));
    this.nextButton.addEventListener('click', this.onButtonClick.bind(this));
    this.currentPageElements.forEach(element => {
      element.addEventListener('click', this.onDotClick.bind(this));
    });
  }

  initPages() {
    this.sliderItemsToShow = Array.from(this.sliderItems).filter(element => element.clientWidth > 0);
    if (this.sliderItemsToShow.length < 2) return;
    this.sliderItemOffset = this.sliderItemsToShow[1].offsetLeft - this.sliderItemsToShow[0].offsetLeft;
    this.slidesPerPage = Math.floor((this.slider.clientWidth - this.sliderItemsToShow[0].offsetLeft) / this.sliderItemOffset);
    this.totalPages = this.sliderItemsToShow.length - this.slidesPerPage + 1;
    this.update();
  }

  resetPages() {
    this.sliderItems = this.querySelectorAll('[id^="_Custom_-_Slide-"]');
    this.initPages();
  }

  update() {
    // Temporarily prevents unneeded updates resulting from variant changes
    // This should be refactored as part of https://github.com/Shopify/dawn/issues/2057
    if (!this.slider || !this.nextButton) return;

    const previousPage = this.currentPage;
    this.currentPage = Math.round(this.slider.scrollLeft / this.sliderItemOffset) + 1;

    if (this.currentPageElement && this.pageTotalElement) {
      // <CUSTOM_MOD>
      this.currentPageElements.forEach(element => {
        element.classList.remove('active');
      });
      this.currentPageElements.item(this.currentPage - 1).classList.add('active');
      
      this.currentPageElement.textContent = this.currentPage;
      this.pageTotalElement.textContent = this.totalPages;
    }

    if (this.currentPage != previousPage) {
      this.dispatchEvent(new CustomEvent('slideChanged', { detail: {
        currentPage: this.currentPage,
        currentElement: this.sliderItemsToShow[this.currentPage - 1]
      }}));
    }

    if (this.enableSliderLooping) return;

    if (this.isSlideVisible(this.sliderItemsToShow[0]) && this.slider.scrollLeft === 0) {
      this.prevButton.setAttribute('disabled', 'disabled');
    } else {
      this.prevButton.removeAttribute('disabled');
    }

    if (this.isSlideVisible(this.sliderItemsToShow[this.sliderItemsToShow.length - 1])) {
      this.nextButton.setAttribute('disabled', 'disabled');
    } else {
      this.nextButton.removeAttribute('disabled');
    }
  }

  isSlideVisible(element, offset = 0) {
    const lastVisibleSlide = this.slider.clientWidth + this.slider.scrollLeft - offset;
    return (element.offsetLeft + element.clientWidth) <= lastVisibleSlide && element.offsetLeft >= this.slider.scrollLeft;
  }

  onButtonClick(event) {
    event.preventDefault();
    
    const step = event.currentTarget.dataset.step || 1;
    this.slideScrollPosition = event.currentTarget.name === '_custom_-_next' ? this.slider.scrollLeft + (step * this.sliderItemOffset) : this.slider.scrollLeft - (step * this.sliderItemOffset);
    this.slider.scrollTo({
      left: this.slideScrollPosition
    });
  }

  onDotClick(event) {
    event.preventDefault();
    const step = event.currentTarget.dataset.slideTo || 1;

    this.slideScrollPosition = (event.currentTarget.dataset.slideTo - 1) * this.sliderItemOffset;
    
    this.slider.scrollTo({
      left: this.slideScrollPosition
    });
  }
}

customElements.define('c4m-media-slider', MediaSlider);