import React from "react";

const WeatherBox = ({ weather }) => {
  console.log(`weatherBox`, weather);
  const temperatureC = weather && weather.main.temp;

  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>
        {temperatureC}도 / 습도 : {weather && weather.main.humidity}
      </h2>
      <h3>현재 날씨 : {weather && weather.weather[0].main}</h3>
    </div>
  );
};

export default WeatherBox;
//도시데이터는 되고 다른건 안되었던 이유 :
//App.js에서 useState({}) 로 타입을 객체로만 정의했기 때문에...?
//CSR에서 흔히 발생하는 문제이다. 데이터를 끌고오면 출력하는걸로 바꾸면 된다.
//?(쿼리)를 주면 데이터를 다 가져오면... 이라는 뜻이다.
//단락회로 평가도 사용한다.
