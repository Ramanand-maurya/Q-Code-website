//---------------slick slider js
$().ready(function(){
    $('.slider-content-js').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      infinite: true,
      fade: true,
      autoplay:true,
      autoplaySpeed:2000,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: false,
          }
        }
      ]
    });
  });

  // --------services slider
  $('.slider-nav1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: true,
    focusOnSelect: true,
    autoplay:false,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows:false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows:false,
        }
      },
    ]
  });
  //--------------recent-work-profile-----------
  $('.work-slider-nav').slick({
      dots: true,
      arrows: true,
      slidesToShow: 1,
      infinite: true,
      fade: true,
      focusOnSelect: true,
      autoplay:true,
      autoplaySpeed:2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            arrows:false,
          }
        }
      ]
  });

    // --------Leader Team slider
    $('.Leader-Team').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      focusOnSelect: true,
      autoplay:false,
      autoplaySpeed:2000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows:true,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true,
          }
        },
      ]
    });
//  Menu js

$(document).ready(function(){
  $(".triggerBtn").click(function(){
    $(".trigger1").toggleClass("active");
    $(".menu-list").toggleClass("active");
    $(".sidebar-overlay").toggleClass("active");
    $("body").toggleClass("active");
  });
});
$(document).ready(function(){
  $(".times1").click(function(){
    $(".trigger1").toggleClass("active");
    $(".menu-list").toggleClass("active");
    $(".sidebar-overlay").toggleClass("active");
    $("body").toggleClass("active");
  });
});
$(document).ready(function(){
  $(".sidebar-overlay").click(function(){
    $(".trigger1").toggleClass("active");
    $(".menu-list").toggleClass("active");
    $(".sidebar-overlay").toggleClass("active");
    $("body").toggleClass("active");
  });
});
$(document).ready(function(){
  $(".mega-menu").click(function(){
    $(".sub-menu-block").slideToggle();
    $(this).toggleClass("active");
  });
});
$(document).ready(function(){
  $(".sub-menu-head").click(function(){
    $(this).parent().siblings().find(".sub-menu-lists").slideUp();
    $(this).parent().siblings().find(".sub-menu-head").removeClass("active");
    $(this).siblings(".sub-menu-lists").slideToggle();
    $(this).toggleClass("active");
  });
});


// modal js //
$(document).ready(function(){
  $(".applyTrigger").click(function(){
    $(".cm-section-modal.first-modal").toggleClass("active");
    $("body").toggleClass("modalBox");
    $(".modal-overlay").toggleClass("active");
  });
});

$(document).ready(function(){
  $(".closBtn").click(function(){
    $(".cm-section-modal").removeClass("active");
    $("body").removeClass("modalBox");
    $(".modal-overlay").removeClass("active");
  });
});

$(document).ready(function(){
  $(".applyBtn-dsc").click(function(){
    $(".cm-section-modal.second-Modal").toggleClass("active");
    $(".cm-section-modal.first-modal").removeClass("active");
  });
});


// input file upload js

const finputs = Array.from(
  document.querySelectorAll('.uploadCvFiles [type="file"]')
);

finputs.forEach((input) => {
  input.addEventListener("change", (e) => {
      const path = e.target.value;
      const filenameField = e.target.parentElement.querySelector("span");
      const filename = path.split(/\/|\\/).pop();
      if (filename) {
        filenameField.innerText = filename;
      }
  });
});

$( '.uploadCvFiles [type="file"]' ).change(function() {
  var upfilePath=$('.uploadCvFiles [type="file"]').val();
  if (upfilePath){
    $(".uploadCv .uploadCvFiles div a.cvfile").addClass("active");
  }
});

$(document).ready(function(){
  $(".uploadCv .uploadCvFiles div a.cvfile small").click(function(){
    $(".uploadCv .uploadCvFiles div a.cvfile").removeClass("active");
  });
});

// contact page active btn
$(document).ready(function(){
  $(".servicesBtn div a").click(function(){
    $(this).addClass("active");
    $(this).parent().siblings().find("a").removeClass("active");
  });
});