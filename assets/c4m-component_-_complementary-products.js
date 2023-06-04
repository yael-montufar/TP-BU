class ComplementaryProducts extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const handleIntersection = (entries, observer) => {
      if (!entries[0].isIntersecting) return;
      observer.unobserve(this);

      fetch(this.dataset.url)
        .then(response => response.text())
        .then(text => {
          const html = document.createElement('div');
          html.innerHTML = text;
          const recommendations = html.querySelector('c4m-complementary-products');

          if (recommendations && recommendations.innerHTML.trim().length) {
            this.innerHTML = recommendations.innerHTML;
          }

          // if (!this.querySelector('slideshow-component') && this.classList.contains('c4m-complementary-products')) {
          //   this.remove();
          // }

          if (html.querySelector('.slide')) {
            this.classList.add('product-recommendations--loaded');
          }

          // Call initCarousel() after the content is updated
          this.initCarousel();
        })
        .catch(e => {
          console.error(e);
        });
    }

    new IntersectionObserver(handleIntersection.bind(this), {rootMargin: '0px 0px 400px 0px'}).observe(this);
  }

  initCarousel() {
    const sectionRoot = this;
    const container = this.querySelector('.carousel-container');
    const slides = Array.from(this.querySelectorAll('.slide'));

    // Check if there are any slides before executing the carousel logic
    if (slides.length === 0) {
      return;
    }
    
    const leftButton = this.querySelector('.carousel-control[aria-label="Previous"]');
    const rightButton = this.querySelector('.carousel-control[aria-label="Next"]');

    // Retrieve the interval duration from the schema setting
    const intervalDuration = sectionRoot.dataset.interval * 1000;
    const carouselDirection = parseInt(sectionRoot.dataset.direction);

    let offset = 0;

    function moveCarousel(steps) {
      offset = slides[0].offsetWidth * steps;
      container.style.transition = 'left ease-in-out 500ms';
      container.style.left = -offset + 'px';
      setTimeout(() => {
        container.style.transition = 'none';
        if (steps > 0) {
          const movedSlides = slides.splice(0, steps);
          slides.push(...movedSlides);
        } else {
          const movedSlides = slides.splice(steps);
          slides.unshift(...movedSlides);
        }
        slides.forEach((slide, index) => {
          slide.style.order = index;
        });
        container.style.left = 0;
      }, 500);
    }

    if(intervalDuration >= 1) {
      // Initialize the interval timer
      let interval = setInterval(() => {
        moveCarousel(carouselDirection);
      }, intervalDuration);
  
      // Reset the interval timer
      function resetInterval() {
        clearInterval(interval);
        interval = setInterval(() => {
          moveCarousel(carouselDirection);
        }, intervalDuration);
      }
    }

    if(!leftButton || !rightButton) return;
    
    leftButton.addEventListener('click', () => {
      moveCarousel(-1);
      if(intervalDuration < 1) return;
      resetInterval();
    });

    rightButton.addEventListener('click', () => {
      moveCarousel(1);
      if(intervalDuration < 1) return;
      resetInterval();
    });
  }
}

customElements.define('c4m-complementary-products', ComplementaryProducts);
