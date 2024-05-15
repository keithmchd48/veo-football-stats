import React from 'react';

export const enum CHART_TYPES {
  LINE = 'line',
  BAR = 'bar',
  RADIAL = 'radial',
}

export interface SportsDataInterface {
  date: string;
  attacks: number;
  defense: number;
  conceded: number;
  scored: number;
  corners: number;
  freeKicks: number;
  possession: number;
}

export interface OptionsInterface {
  value: string;
  label: string;
}

export interface SelectBoxInterface {
  options: OptionsInterface[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface ChartConfigInterface {
  responsive: boolean;
  maintainAspectRatio: boolean;
  plugins: {
    legend: {
      display: boolean;
      position: 'top' | 'bottom' | 'left' | 'right';
    };
    title: {
      display: boolean;
      text: string;
    };
  };
}