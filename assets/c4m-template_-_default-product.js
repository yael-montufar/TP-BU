document.addEventListener('DOMContentLoaded', function () {
  const judgeMeReviews = document.querySelector('.shopify-section:has(#judgeme_product_reviews)');
  const reviewsCount = document.querySelector('.shopify-section:has(#judgeme_product_reviews) .jdgm-rev-widg');
    
  // TODO: set review count to 0 to hide current reviews but leave form open for others to leave a review; still requires editing other parts of widget to appear blank
  if (reviewsCount == null || Number(reviewsCount.dataset.numberOfReviews) < 10) {
    judgeMeReviews.style.display = 'none';
  }
});
