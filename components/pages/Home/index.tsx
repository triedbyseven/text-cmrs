import React from 'react';
import Hero from './Hero';
import { HeroProps } from './Hero/interfaces';

interface HomeProps {
  Hero: React.FC<HeroProps>;
};

const Home: HomeProps = (): void => {};

Home.Hero = Hero;

export default Home;