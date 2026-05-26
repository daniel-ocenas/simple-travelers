'use client';

import React from 'react';

import {
  LuChevronRight as ChevronRight,
  LuCheck as Check,
  LuArrowRight as ArrowRight,
  LuMonitor as Monitor,
  LuShieldCheck as ShieldCheck,
  LuTrendingUp as TrendingUp,
  LuChartColumnBig as BarChart3,
} from 'react-icons/lu';

const FlowpayLogo = ({ className = 'h-8' }) => (
  <div
    className={`flex items-center font-black tracking-tighter ${className}`}
    style={{ fontSize: '1.5rem' }}
  >
    <span className="text-[#00D2FF]">F</span>
    <span className="text-[#00FFD1]">L</span>
    <span className="text-[#FFEA00]">O</span>
    <span className="text-[#FF9100]">W</span>
    <span className="text-[#FF007A]">P</span>
    <span className="text-[#C000FF]">A</span>
    <span className="text-[#0057FF]">Y</span>
  </div>
);

const RobotMascot = () => (
  <div
    className="relative h-32 w-32 animate-bounce transition-all duration-1000 md:h-40 md:w-40"
    style={{ animationDuration: '3s' }}
  >
    {/* Head/Body */}
    <div className="absolute inset-0 rounded-2xl border-t-4 border-orange-300 bg-linear-to-br from-orange-400 to-orange-600 shadow-xl">
      {/* Screen */}
      <div className="absolute inset-2 flex items-center justify-center rounded-xl border-2 border-orange-800 bg-black">
        {/* Smiling Eyes */}
        <div className="flex space-x-4">
          <div className="h-3 w-6 rounded-full border-b-4 border-white"></div>
          <div className="h-3 w-6 rounded-full border-b-4 border-white"></div>
        </div>
      </div>
      {/* Antenna */}
      <div className="absolute -top-4 left-1/2 h-4 w-1 -translate-x-1/2 bg-orange-600">
        <div className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-orange-400 shadow-md"></div>
      </div>
      {/* Side Bolt */}
      <div className="absolute -right-2 top-1/2 h-4 w-2 -translate-y-1/2 rounded-r-md bg-orange-700"></div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center space-y-12 bg-slate-100 p-4 font-sans text-slate-800 md:p-8">
      {/* PAGE 1 */}
      <div className="flex min-h-[1100px] w-full max-w-4xl flex-col overflow-hidden rounded-xs bg-white shadow-2xl">
        {/* Header Gradient */}
        <div className="relative flex h-80 items-center justify-between bg-linear-to-r from-[#FF0080] via-[#FF8C00] to-[#FFD700] p-10">
          <div className="z-10 max-w-lg">
            <h1 className="mb-2 text-4xl font-bold leading-tight text-white md:text-5xl">
              Unlock growth for your SMEs.
            </h1>
            <h2 className="text-3xl font-light text-white opacity-90 md:text-4xl">
              Without becoming a lender.
            </h2>
          </div>
          <div className="z-10 hidden md:block">
            <RobotMascot />
          </div>
          {/* Decorative shapes */}
          <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
        </div>

        {/* Subheader */}
        <div className="border-b border-slate-100 py-6 text-center">
          <p className="text-lg font-medium text-slate-600">
            Embedded Financing Powered by{' '}
            <span className="font-bold text-blue-600">Flowpay</span> – Directly
            inside Your Platform.
          </p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 gap-0 px-6 py-10 md:grid-cols-3">
          {/* Column 1 */}
          <div className="bg-slate-50/50 p-6">
            <h3 className="mb-6 border-b-2 border-blue-100 pb-2 text-xl font-bold text-blue-900">
              The Opportunity
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 shrink-0 text-blue-500" />
                <span>Cash flow challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 shrink-0 text-blue-500" />
                <span>Banks are slow & rigid</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 shrink-0 text-blue-500" />
                <span>Need for fast, easy capital</span>
              </li>
            </ul>
          </div>

          {/* Column 2 - Highlighted */}
          <div className="relative z-20 transform rounded-b-xl bg-blue-600 p-6 text-white shadow-xl md:scale-105 md:rounded-b-none">
            <h3 className="mb-6 border-b border-blue-400 pb-2 text-xl font-bold">
              What Flowpay Does
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 shrink-0 text-blue-200" />
                <span className="font-semibold">Integrated Financing</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 shrink-0 text-blue-200" />
                <span className="font-semibold">Revenue-Based Repayment</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 shrink-0 text-blue-200" />
                <span className="font-semibold">
                  Fully Digital & No Collateral
                </span>
              </li>
            </ul>
            {/* Arrow Pointer */}
            <div className="absolute -bottom-3 left-1/2 h-0 w-0 -translate-x-1/2 border-l-12 border-r-12 border-t-12 border-l-transparent border-r-transparent border-t-blue-600"></div>
          </div>

          {/* Column 3 */}
          <div className="bg-slate-50/50 p-6">
            <h3 className="mb-6 border-b-2 border-blue-100 pb-2 text-xl font-bold text-blue-900">
              How It Works
            </h3>
            <div className="space-y-4">
              {[
                'API Integration',
                'SME Sees Offer',
                'Quick Funding',
                'Repay as You Earn',
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  <span className="font-medium text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Diagram */}
        <div className="mt-auto px-10 pb-20 pt-10">
          <div className="flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
            {[
              { label: 'Your Platform', icon: <Monitor className="h-8 w-8" /> },
              {
                label: 'Embedded Financing',
                icon: <ShieldCheck className="h-8 w-8" />,
              },
              { label: 'SME Growth', icon: <TrendingUp className="h-8 w-8" /> },
              {
                label: 'Increased Revenue',
                icon: <BarChart3 className="h-8 w-8" />,
              },
            ].map((item, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="flex flex-1 flex-col items-center space-y-3 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-tight text-blue-900">
                    {item.label}
                  </span>
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="hidden h-6 w-6 text-blue-300 md:block" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom Gradient Decor */}
          <div className="mt-12 h-2 w-full rounded-full bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30"></div>
        </div>

        {/* Logo Footer */}
        <div className="mt-auto flex justify-center border-t border-slate-50 p-8">
          <FlowpayLogo />
        </div>
      </div>

      {/* PAGE 2 */}
      <div className="relative flex min-h-[1100px] w-full max-w-4xl flex-col overflow-hidden rounded-xs bg-white shadow-2xl">
        {/* Background Petals Decoration (CSS based) */}
        <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] opacity-20">
          <div className="absolute right-0 top-1/4 h-80 w-64 rotate-45 rounded-full bg-purple-500 blur-[80px]"></div>
          <div className="absolute bottom-0 right-1/4 h-64 w-80 rounded-full bg-blue-500 blur-[100px]"></div>
        </div>

        {/* Logo Top */}
        <div className="flex justify-end p-10">
          <FlowpayLogo className="h-10" />
        </div>

        {/* Value Proposition Grid */}
        <div className="grid grid-cols-1 gap-8 px-10 py-10 md:grid-cols-2">
          {[
            {
              number: 1,
              title: 'New Revenue Stream',
              bullets: ['Earn on Financed Volume', 'No Credit Risk'],
            },
            {
              number: 2,
              title: 'Increased Retention',
              bullets: ['Embedded in Workflows', 'Higher User Loyalty'],
            },
            {
              number: 3,
              title: 'Stronger SME Success',
              bullets: ['SMEs Grow Faster', 'More Transactions'],
            },
            {
              number: 4,
              title: 'Strategic Differentiation',
              bullets: [
                'From Software to Growth Partner',
                'Stand Out in the Market',
              ],
            },
          ].map((box) => (
            <div
              key={box.number}
              className="flex flex-col gap-4 rounded-xl border border-slate-100 bg-slate-50/80 p-8 shadow-xs backdrop-blur-xs transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-lg font-bold text-white">
                  {box.number}
                </span>
                <h3 className="text-xl font-bold text-blue-900">{box.title}</h3>
              </div>
              <ul className="mt-2 space-y-3 pl-14">
                {box.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Central Tagline */}
        <div className="flex flex-1 flex-col items-center justify-center p-10 text-center">
          <h2 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-blue-900 md:text-5xl">
            Together, We Help SMEs Thrive.
          </h2>

          {/* Visual abstract art placeholder (similar to the image's right bottom) */}
          <div className="relative mt-8 h-64 w-full max-w-lg overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-purple-50"></div>
            {/* Abstract petals created with divs */}
            <div className="absolute -right-10 bottom-0 h-48 w-48 animate-pulse rounded-full bg-purple-400/20 blur-xl"></div>
            <div className="absolute -bottom-10 right-20 h-64 w-64 rounded-full bg-blue-400/20 blur-2xl"></div>
          </div>
        </div>

        {/* Support Text Footer */}
        <div className="mt-auto p-10 text-center text-sm text-slate-400">
          &copy; 2024 Flowpay. All rights reserved.
        </div>
      </div>

      {/* Floating Action Button (Utility) */}
      <button
        onClick={() => window.print()}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-bold text-white shadow-2xl transition-all hover:bg-blue-700 active:scale-95"
      >
        <span className="hidden md:inline">Export to PDF</span>
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default App;
