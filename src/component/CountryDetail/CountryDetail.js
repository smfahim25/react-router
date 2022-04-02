import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [countryName]);
    return (
        <div>
            <h2>Country Details For: {countryName} </h2>
            <img src={country.flags?.png} alt="" />
            <h3>Name: {country.name?.common}</h3>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p>Area: {country.area}</p>
        </div>
    );
};

export default CountryDetail;