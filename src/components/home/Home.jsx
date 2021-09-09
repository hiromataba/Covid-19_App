import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../redux/countries/countries';
import Icon from '../Icon';
import formatNumber from '../utils/formatNumber';
import './Home.css';
import map from '../../assets/europe.png';
import Grid from './Grid';

const Home = () => {
  const continent = 'Europe';

  const dispatch = useDispatch();
  const { items, totalConfirmed, loading } = useSelector((state) => ({
    ...state.countries,
    loading: state.loadingBar.default,
  }));

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchCountries(continent));
    }
  }, []);

  if (loading) {
    return null;
  }

  return (
    <section>
      <header className="App-header">
        <Icon name="arrow_back_ios" />
        <h4>2021</h4>
        <h5 className="App-header-title">most views</h5>
        <Icon name="mic" />
        <div className="pl-5">
          <Icon name="settings" />
        </div>
      </header>
      <div className="Home-banner">
        <div className="Home-banner-left">
          <img src={map} alt="Banner view" className="App-map" />
        </div>
        <div className="Home-banner-right">
          <h1 className="App-title">{continent}</h1>
          <p className="App-subtitle">
            {`${formatNumber(totalConfirmed)} cases`}
          </p>
        </div>
      </div>
      <section className="Home-stats">
        <h5 className="App-section-title">STATS By COUNTRY</h5>
        <Grid items={items} />
      </section>
    </section>
  );
};

export default Home;
