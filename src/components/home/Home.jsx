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

const Item = ({ confirmed, name }) => (
  <div className="Home-item-content">
    <div className="Home-item-icon">
      <Icon name="arrow_circle_right" />
    </div>
    <div className="Home-item-top">
      <img src={virus} alt="" className="Home-item-image" />
    </div>
    <div className="Home-item-bottom">
      <h4 className="App-title">{name}</h4>
      <p className="App-subtitle">{formatNumber(confirmed)}</p>
    </div>
  </div>
);

const Grid = ({ items = [] }) => (
  <ul className="Home-grid">
    {items.map(({ name, confirmed }) => (
      <li key={name} className="Home-grid-item">
        <Link to={`/country/${name}`}>
          <Item confirmed={confirmed} name={name} />
        </Link>
      </li>
    ))}
  </ul>
);

const Home = () => {
  const greeting = 'Hello';
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Home;
