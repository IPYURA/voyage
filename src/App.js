import "./App.css";
import { useState, useEffect } from "react";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

// const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [weather, setWeather] = useState(undefined);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getWeatherByCurrentPosition = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9fc7546ee7fc96f12c21088f91f25843&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    //위 3줄은 같이 움직인다.(비동기) -> 해결하기 위해 await -> async 함수여야 await 사용가능.
    //data에 담긴 값을 weather에 뿌려줘야한다.
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fc7546ee7fc96f12c21088f91f25843&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentPosition(lat, lon);
    });
  };

  const handleCityChange = (city) => {
    if (city === "current") {
      setWeather(getCurrentLocation());
    } else {
      setCity(city);
    }
  };

  //도시값이 바뀌면 실행되는 useEffect
  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div className="App">
      {loading ? (
        <ClipLoader color="#f88c6b" loading={loading} size={150} />
      ) : (
        <div>
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            handleCityChange={handleCityChange}
          />
        </div>
      )}
    </div>
  );
}
//setCity라는 함수를 전달한다

export default App;
