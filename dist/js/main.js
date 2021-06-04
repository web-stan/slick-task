$(function(){
    $('.games-slider').slick({
        slidesToShow: 1,
        slidesPerRow: 3,
        rows: 2,
        dots: true,
        prevArrow: `
            <button type="button" class="slick-prev">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1L1 6L7 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        `,
        nextArrow: `
            <button type="button" class="slick-next">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1L1 6L7 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        `,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesPerRow: 2,
            }
          },
          {
            breakpoint: 680,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesPerRow: 1,
                rows: 1,
                centerMode: true,
                variableWidth: true,
            }
          },
        ]
      });
});