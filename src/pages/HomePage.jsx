import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Themes from '../components/Themes';
import Schedule from '../components/Schedule';
import Prizes from '../components/Prizes';
import MentorsTeaser from '../components/MentorsTeaser';
import EligibilityRules from '../components/EligibilityRules';
import FAQ from '../components/FAQ';
import Venue from '../components/Venue';
import InstagramCommunity from '../components/InstagramCommunity';
import RegisterBand from '../components/RegisterBand';

export const HomePage = () => {
  useEffect(() => {
    document.title = 'HACKS 2026 | Hub for Advanced Creativity, Knowledge & Solutions';
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Themes />
      <Schedule />
      <Prizes />
      <MentorsTeaser />
      <EligibilityRules />
      <FAQ />
      <Venue />
      <InstagramCommunity />
      <RegisterBand />
    </div>
  );
};

export default HomePage;
