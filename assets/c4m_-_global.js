document.addEventListener('DOMContentLoaded', function () {
  const elem = document.querySelector('.shopify-section:has([data-test="eg"])');
  elem.addEventListener('click', function () {
    document.body.classList.remove('overflow-hidden');
  })
});