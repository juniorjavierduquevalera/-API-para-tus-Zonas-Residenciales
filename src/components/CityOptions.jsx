import PropTypes from "prop-types";

const CityOptions = ({
  selectedCity,
  selectedOptions,
  handleOptionChange,
  Aragua,
}) => {
  const cityData = Aragua.find((city) => city.ciudad === selectedCity);

  if (!cityData) {
    return null;
  }

  return (
    <div>
      {cityData.urbanizaciones && cityData.urbanizaciones.length > 0 && (
        <div>
          <p className="font-bold mb-2 text-white">Urbanizaciones:</p>
          {cityData.urbanizaciones.map((urbanizacion) => (
            <label
              key={urbanizacion}
              className="flex items-center mb-1 cursor-pointer hover:text-emerald-100"
            >
              <input
                type="checkbox"
                value={urbanizacion}
                checked={selectedOptions.includes(urbanizacion)}
                onChange={handleOptionChange}
                className="mr-2"
              />
              {urbanizacion}
            </label>
          ))}
        </div>
      )}
      {cityData.barrios && cityData.barrios.length > 0 && (
        <div>
          <p className="font-bold mb-2 text-white">Barrios:</p>
          {cityData.barrios.map((barrio) => (
            <label
              key={barrio}
              className="flex items-center mb-1 cursor-pointer hover:text-emerald-100"
            >
              <input
                type="checkbox"
                value={barrio}
                checked={selectedOptions.includes(barrio)}
                onChange={handleOptionChange}
                className="mr-2"
              />
              {barrio}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
CityOptions.propTypes = {
  selectedCity: PropTypes.string.isRequired,
  selectedOptions: PropTypes.array.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
  Aragua: PropTypes.array.isRequired,
};
export default CityOptions;
