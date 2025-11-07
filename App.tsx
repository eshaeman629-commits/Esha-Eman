
import React, { useState, useCallback } from 'react';
import type { LetterData } from './types';
import { DEFAULT_LETTER_DATA } from './constants';
import FormField from './components/FormField';
import LetterPreview from './components/LetterPreview';
import ActionButtons from './components/ActionButtons';

function App() {
  const [formData, setFormData] = useState<LetterData>(DEFAULT_LETTER_DATA);
  const [copyText, setCopyText] = useState('Copy to Clipboard');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const generateLetterText = useCallback((data: LetterData) => {
    const { platforms, incomeMin, incomeMax, fullName, passportNumber, email, date } = data;
    return `To,
Dubai Remote Work Visa Office
Dubai Tourism & Immigration

Subject: Self-Employment Declaration for Remote Work Visa

Dear Sir/Madam,

I am an independent online trader specializing in forex and cryptocurrency markets.
I conduct trading activities solely for my own personal investment and income purposes.
I do not provide trading or financial management services to any third parties or clients.

My trading accounts are maintained on international platforms such as [${platforms}],
and my monthly income averages around USD ${incomeMin} – USD ${incomeMax}.

I respectfully submit this declaration as part of my Remote Work Visa application.

Sincerely,
[${fullName}]
[${passportNumber}]
[${email}]
[${date}]`;
  }, []);

  const handleCopy = useCallback(() => {
    const letterToCopy = generateLetterText(formData);
    navigator.clipboard.writeText(letterToCopy).then(() => {
      setCopyText('Copied!');
      setTimeout(() => setCopyText('Copy to Clipboard'), 2000);
    });
  }, [formData, generateLetterText]);

  const handleReset = useCallback(() => {
    setFormData(DEFAULT_LETTER_DATA);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-sky-700">Remote Work Visa Declaration Generator</h1>
          <p className="text-slate-500 mt-1">Easily customize your self-employment declaration for Dubai.</p>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-lg shadow-lg h-full">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-3">Edit Your Information</h2>
            <div className="space-y-6">
              <FormField
                id="fullName"
                label="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name as per passport"
                required
              />
              <FormField
                id="passportNumber"
                label="Passport Number"
                value={formData.passportNumber}
                onChange={handleChange}
                placeholder="Enter your passport number"
                required
              />
              <FormField
                id="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
              <FormField
                id="platforms"
                label="Trading Platforms"
                value={formData.platforms}
                onChange={handleChange}
                placeholder="e.g., Binance, MetaTrader, eToro"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                 <FormField
                    id="incomeMin"
                    label="Minimum Monthly Income (USD)"
                    type="number"
                    value={formData.incomeMin}
                    onChange={handleChange}
                    placeholder="e.g., 3500"
                />
                 <FormField
                    id="incomeMax"
                    label="Maximum Monthly Income (USD)"
                    type="number"
                    value={formData.incomeMax}
                    onChange={handleChange}
                    placeholder="e.g., 5000"
                />
              </div>
              <FormField
                id="date"
                label="Date"
                type="date"
                value={formData.date}
                onChange={handleChange}
              />

              <ActionButtons onCopy={handleCopy} onReset={handleReset} copyText={copyText} />
            </div>
          </div>
          
          <div className="lg:sticky top-8">
             <LetterPreview data={formData} />
          </div>

        </div>
      </main>
      
      <footer className="text-center py-6 mt-8 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Declaration Generator. For application purposes only.</p>
      </footer>
    </div>
  );
}

export default App;
