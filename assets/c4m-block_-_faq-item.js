document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.accordion button');

  function closeOtherAccordions(currentButton) {
    accordionButtons.forEach((button) => {
      if (button !== currentButton) {
        button.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !isExpanded);
      
      closeOtherAccordions(button);
    });
  });
});
