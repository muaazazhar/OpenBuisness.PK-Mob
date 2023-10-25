import React from 'react';

export interface HeaderProps {
  title: string;
  navigation: any;
  back?: {title: string};
}

export interface InputProps {
  label: string;
  type: 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
  max: number;
  value: string;
  onChange: (text: string) => void;
}

export interface BodyProps {
  height?: number;
  children: React.ReactNode;
}
