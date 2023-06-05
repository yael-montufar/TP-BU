$(document).on('click', ".aj-side-btn", function () {
  $(".aj-side-btn").removeClass("active");
  $(this).addClass("active");
});

const howItWorksBTN = document.querySelector('[data-id="det_id"]');
const faqBTN = document.querySelector('[data-id="faq_id"]');

howItWorksBTN.addEventListener("click", (event) => {
  const howItWorksSection = document.querySelector('.d_div > div:nth-of-type(1)');
  howItWorksSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
})

faqBTN.addEventListener("click", (event) => {
  const faqSection = document.querySelector('.d_div > div:nth-of-type(2)');
  // console.log(faqSection);
  faqSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
})