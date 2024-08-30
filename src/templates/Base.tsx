import type { ReactNode } from 'react';
import React from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Sponsors } from './Sponsors';
import { VerticalFeatures } from './VerticalFeatures';

interface BaseProps {
  children?: ReactNode;
}

const Base: React.FC<BaseProps> = ({ children }) => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Sponsors />
    <VerticalFeatures />
    {children}
    <Banner />
    <Footer />
  </div>
);

export { Base };
