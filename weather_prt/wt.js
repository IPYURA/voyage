$.getJSON(
  "https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=9fc7546ee7fc96f12c21088f91f25843&units=metric",
  function (data) {
    $(".temp").append(data.main.temp);
    $(".low_temp").append(data.main.temp_min);
    $(".high_temp").append(data.main.temp_max);
    var w_iconUrl = (
      <img
        src="https://openweathermap.org/img/wn/'+data.weather[0].icon+'.png"
        alt="'+data.weather[0].description+'"
      ></img>
    );
    $(".icon").html(w_iconUrl);
  }
);

// $.getJSON(
//   "https://m.stock.naver.com/api/json/sise/enrollItemListJson.nhn?pageSize=202",
//   function (an) {
//    $(".samsung").append(an.result.itemlist[0].nv);
//    $(".lg_energy_solution").append(an.result.itemlist[1].nv);
//    $(".sk_hynix").append(an.result.itemlist[2].nv);

//   }
// );
