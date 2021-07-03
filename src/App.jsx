import React from 'react';
import { ThemeProvider } from 'styled-components';
import './normalize.css';

import WeatherProvider from './context/Provider';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import colors from './theming/colors';

const App = () => (
  <ThemeProvider theme={colors}>
    <GlobalStyles />
    <WeatherProvider>
      <Header />
      <Main />
      <Footer />
    </WeatherProvider>
  </ThemeProvider>
);

export default App;
