
import React from 'react';
import type { LetterData } from '../types';

interface LetterPreviewProps {
  data: LetterData;
}

const LetterPreview: React.FC<LetterPreviewProps> = ({ data }) => {
  const { platforms, incomeMin, incomeMax, fullName, passportNumber, email, date } = data;

  const letterText = `To,
Dubai Remote Work Visa Office
Dubai Tourism & Immigration

Subject: Self-Employment Declaration for Remote Work Visa

Dear Sir/Madam,

I am an independent online trader specializing in forex and cryptocurrency markets.
I conduct trading activities solely for my own personal investment and income purposes.
I do not provide trading or financial management services to any third parties or clients.

My trading accounts are maintained on international platforms such as [${platforms || '...'}],
and my monthly income averages around USD ${incomeMin || '...'} – USD ${incomeMax || '...'}.

I respectfully submit this declaration as part of my Remote Work Visa application.

Sincerely,
[${fullName || 'Your Full Name'}]
[${passportNumber || 'Passport Number'}]
[${email || 'Email Address'}]
[${date || 'Date'}]`;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg h-full">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-3">Letter Preview</h2>
      <pre className="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-wrap font-sans">
        {letterText}
      </pre>
    </div>
  );
};

export default LetterPreview;
