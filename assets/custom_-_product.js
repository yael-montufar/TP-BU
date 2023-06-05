const starRatingScrollTrigger = document.querySelector('[data-scroll="rating-reviews--trigger"]');

starRatingScrollTrigger.addEventListener("click", (event) => {
  const shopifyReviewsScrollTarget = document.querySelector('[data-scroll="rating-reviews--target"]');
  shopifyReviewsScrollTarget.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});