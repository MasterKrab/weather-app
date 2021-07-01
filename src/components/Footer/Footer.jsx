import React from 'react';

import { StyledFooter, Link } from './Footer.styles';

const Footer = () => (
  <StyledFooter>
    <p>
      created by
      {' '}
      <Link href="https://devchallenges.io/portfolio/MasterKrab" target="_blank" rel="noopener">
        masterkrab
      </Link>
      {' '}
      - devChallenges.io
    </p>
    <p>
      Weather data by
      {' '}
      <Link href="https://www.metaweather.com/api/" target="_blank" rel="noopener">
        MetaWeather
      </Link>
    </p>
  </StyledFooter>
);

export default Footer;
