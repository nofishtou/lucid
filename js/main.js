$(document).ready(function(){
  $('.slidercontainer').slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

  // map

  function initMap() {   
    var arbuzo = {lat: 51.4976252, lng: 31.2874932}; 
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: arbuzo,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    });
    var marker = new google.maps.Marker({
      position: arbuzo,
      map: map,
    });
  }