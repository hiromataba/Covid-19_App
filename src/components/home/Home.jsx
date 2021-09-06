import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../../redux/countries/countries';
import Icon from '../Icon';
import formatNumber from '../../utils/formatNumber';
import './Home.css';
import virus from '../../assets/virus.svg';
import map from '../../assets/europe.png';

const Home = () => {
  const greeting = 'Hello';
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Home;
