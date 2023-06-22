import { MdLocationOn } from "react-icons/md";
import useCity from "./useCity";
import CityOptions from "./CityOptions";
import { Aragua } from "../api/ApiAragua";

const CityForm = () => {
  const {
    selectedCity,
    showOptions,
    selectedOptions,
    handleCityChange,
    handleOptionChange,
  } = useCity();

  return (
    <div className="p-4 flex flex-col items-center text-emerald-200 w-full h-screen pt-10 bg-gradient-to-br from-purple-900 to-blue-600">
      <h2 className="text-2xl font-bold mb-4 text-white text-center">
        Zonas de Maracay y Alrededores
      </h2>
      <div className="mb-4 flex items-center">
        <MdLocationOn className="mr-2 w-8 h-8 text-white" />
        <select
          id="citySelect"
          value={selectedCity}
          onChange={handleCityChange}
          className="p-2 rounded text-black outline-none border-none"
        >
          <option className="bg-blue-500" value="">
            -- Elige una ciudad --
          </option>
          {Aragua.map((city) => (
            <option key={city.id} value={city.ciudad}>
              {city.ciudad}
            </option>
          ))}
        </select>
      </div>
      {showOptions && selectedCity && (
        <CityOptions
          selectedCity={selectedCity}
          selectedOptions={selectedOptions}
          handleOptionChange={handleOptionChange}
          Aragua={Aragua}
        />
      )}
    </div>
  );
};

export default CityForm;
