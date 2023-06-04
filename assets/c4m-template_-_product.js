document.addEventListener('DOMContentLoaded', function () {
  const claimOfferButton = document.querySelector('[id^=ImageWithText--] .button');
  const productSubmitButton = document.querySelector('[id^=ProductSubmitButton-]');
  claimOfferButton.addEventListener('click', function() {
    productSubmitButton.click();
  })

  const ratingBlock = document.querySelector('[data-scroll="rating-reviews--trigger"]');
  const judgeMeReviews = document.querySelector('.shopify-section:has(#judgeme_product_reviews)');
  ratingBlock.addEventListener('click', function() {
    judgeMeReviews.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  })

  const reviewsCount = document.querySelector('#judgeme_product_reviews .jdgm-rev-widg');
  console.log("YM", reviewsCount);
  // if (reviewsCount.dataset.numberOfReviews > 10) {
  //   judgeMeReviews.style.display = none;
  // }
});