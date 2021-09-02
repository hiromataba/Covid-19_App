import './App.css';
import { useState } from 'react';

const App = () => {
  const [countries, setCountries] = useState([
    'Congo',
    'Rwanda',
    'Burundi',
    'Kenya',
    'Uganda',
  ]);
  const countriesFiltered = countries.filter((country) => country.length > 5);
  const handleCountry = () => {
    setCountries([...countries, countriesFiltered]);
  };
  return (
    <div className="App">
      {countries.map((country) => (
        <h4 key={country}>{country}</h4>
      ))}
      <button
        className="btn btn-success sm"
        type="submit"
        onClick={handleCountry}
      >
        Change
      </button>
      <div className="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>
    </div>
  );
};

export default App;
