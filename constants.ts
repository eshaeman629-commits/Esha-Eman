
import type { LetterData } from './types';

export const DEFAULT_LETTER_DATA: LetterData = {
  platforms: 'Binance, MetaTrader, eToro',
  incomeMin: '3500',
  incomeMax: '5000',
  fullName: '',
  passportNumber: '',
  email: '',
  date: new Date().toLocaleDateString('en-CA'), // YYYY-MM-DD format
};
