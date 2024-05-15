import React from 'react';

export const enum CHART_TYPES {
  LINE = 'line',
  BAR = 'bar',
  RADIAL = 'radial',
}

export const enum METRICS {
  ATTACKS = 'attacks',
  DEFENSE = 'defense',
  CONCEDED = 'conceded',
  SCORED = 'scored',
  CORNERS = 'corners',
  FREEKICKS = 'freeKicks',
  POSSESSION = 'possession'
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

export interface MetricOptionsInterface {
  id: string;
  label: string;
  color: string;
}

export interface ChartSetInterface {
  label: string;
  data: number[];
  borderColor: string;
  borderWidth: number;
  tension: number;
  backgroundColor?: string;
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