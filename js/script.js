$(document).ready(function(){
  var city="";
 $.getJSON( "http://ip-api.com/json/?callback=?", function(data) {
    city+=data.city;
   $('#city').html(data.city);
   $('#country').html(data.country);

   $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+",uk&appid=<API_Key_Here>",function(data){
     $('.tempr').text(Math.floor(data.main['temp']-273));
     $('#wCond').html(data.weather[0].main);
     $('#wImg').attr('src',"http://openweathermap.org/img/w/"+data.weather[0].icon+".png");

   });
});
  $('.tempType').on('click',function(){
    if($('.tempType').text()==='C'){
      $('.tempType').text("F");
      $('.tempr').text(Math.round(parseInt($('.tempr').text())*1.8+32));
    }
    else{
      $('.tempType').text("C");
      $('.tempr').text(Math.round((parseInt($('.tempr').text())-32)/1.8));

    }
  });
});
