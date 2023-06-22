import { useState } from "react";
import { Aragua } from "../api/ApiAragua";

const useCity = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setShowOptions(false);
    setSelectedOptions([]);
    if (city !== "") {
      const selectedCityObj = Aragua.find((c) => c.ciudad === city);
      if (
        selectedCityObj.urbanizaciones &&
        selectedCityObj.urbanizaciones.length > 0
      ) {
        setShowOptions(true);
      }
    }
  };

  const handleOptionChange = (event) => {
    const option = event.target.value;
    const index = selectedOptions.indexOf(option);
    if (index > -1) {
      const updatedOptions = selectedOptions.filter((o) => o !== option);
      setSelectedOptions(updatedOptions);
    } else {
      const updatedOptions = [...selectedOptions, option];
      setSelectedOptions(updatedOptions);
    }
  };

  return {
    selectedCity,
    showOptions,
    selectedOptions,
    handleCityChange,
    handleOptionChange,
  };
};

export default useCity;
