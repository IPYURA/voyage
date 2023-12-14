import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

//key와 동일한 이름으로 값을 받아옴
const WeatherButton = ({ cities, setCity, handleCityChange }) => {
//   console.log(`cities:`, cities);
  return (
    <div>
      <Button onClick={() => handleCityChange("current")} variant="warning">Current Location</Button>{" "}
      {cities.map((it) => (
        <Button onClick={()=> setCity(it)} variant="warning">
          {it}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
