'use client';

import React from 'react';
import {
    LuChevronRight as ChevronRight,
    LuCheck as Check,
    LuArrowRight as ArrowRight,
    LuMonitor as Monitor,
    LuShieldCheck as ShieldCheck,
    LuTrendingUp as TrendingUp,
    LuBarChart3 as BarChart3,
    LuBot as Bot
} from 'react-icons/lu';

const FlowpayLogo = ({ className = "h-8" }) => (
    <div className={`flex items-center font-black tracking-tighter ${className}`} style={{ fontSize: '1.5rem' }}>
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
    <div className="relative w-32 h-32 md:w-40 md:h-40 animate-bounce transition-all duration-1000" style={{ animationDuration: '3s' }}>
        {/* Head/Body */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-xl border-t-4 border-orange-300">
            {/* Screen */}
            <div className="absolute inset-2 bg-black rounded-xl flex items-center justify-center border-2 border-orange-800">
                {/* Smiling Eyes */}
                <div className="flex space-x-4">
                    <div className="w-6 h-3 border-b-4 border-white rounded-full"></div>
                    <div className="w-6 h-3 border-b-4 border-white rounded-full"></div>
                </div>
            </div>
            {/* Antenna */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-4 bg-orange-600">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-400 rounded-full shadow-md"></div>
            </div>
            {/* Side Bolt */}
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-2 h-4 bg-orange-700 rounded-r-md"></div>
        </div>
    </div>
);

const App = () => {
    return (
        <div className="min-h-screen bg-slate-100 p-4 md:p-8 flex flex-col items-center space-y-12 font-sans text-slate-800">

            {/* PAGE 1 */}
            <div className="w-full max-w-4xl bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col min-h-[1100px]">
                {/* Header Gradient */}
                <div className="relative h-80 bg-gradient-to-r from-[#FF0080] via-[#FF8C00] to-[#FFD700] p-10 flex items-center justify-between">
                    <div className="z-10 max-w-lg">
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
                            Unlock growth for your SMEs.
                        </h1>
                        <h2 className="text-3xl md:text-4xl font-light text-white opacity-90">
                            Without becoming a lender.
                        </h2>
                    </div>
                    <div className="hidden md:block z-10">
                        <RobotMascot />
                    </div>
                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                </div>

                {/* Subheader */}
                <div className="py-6 text-center border-b border-slate-100">
                    <p className="text-lg font-medium text-slate-600">
                        Embedded Financing Powered by <span className="text-blue-600 font-bold">Flowpay</span> – Directly inside Your Platform.
                    </p>
                </div>

                {/* Content Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 px-6 py-10">
                    {/* Column 1 */}
                    <div className="p-6 bg-slate-50/50">
                        <h3 className="text-xl font-bold text-blue-900 mb-6 border-b-2 border-blue-100 pb-2">The Opportunity</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                <span>Cash flow challenges</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                <span>Banks are slow & rigid</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                <span>Need for fast, easy capital</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 - Highlighted */}
                    <div className="relative p-6 bg-blue-600 text-white rounded-b-xl md:rounded-b-none shadow-xl transform md:scale-105 z-20">
                        <h3 className="text-xl font-bold mb-6 border-b border-blue-400 pb-2">What Flowpay Does</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-blue-200 mt-1 shrink-0" />
                                <span className="font-semibold">Integrated Financing</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-blue-200 mt-1 shrink-0" />
                                <span className="font-semibold">Revenue-Based Repayment</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-blue-200 mt-1 shrink-0" />
                                <span className="font-semibold">Fully Digital & No Collateral</span>
                            </li>
                        </ul>
                        {/* Arrow Pointer */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-blue-600"></div>
                    </div>

                    {/* Column 3 */}
                    <div className="p-6 bg-slate-50/50">
                        <h3 className="text-xl font-bold text-blue-900 mb-6 border-b-2 border-blue-100 pb-2">How It Works</h3>
                        <div className="space-y-4">
                            {[
                                "API Integration",
                                "SME Sees Offer",
                                "Quick Funding",
                                "Repay as You Earn"
                            ].map((step, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full">
                                        {idx + 1}
                                    </span>
                                    <span className="text-slate-700 font-medium">{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Process Diagram */}
                <div className="mt-auto px-10 pb-20 pt-10">
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
                        {[
                            { label: "Your Platform", icon: <Monitor className="w-8 h-8" /> },
                            { label: "Embedded Financing", icon: <ShieldCheck className="w-8 h-8" /> },
                            { label: "SME Growth", icon: <TrendingUp className="w-8 h-8" /> },
                            { label: "Increased Revenue", icon: <BarChart3 className="w-8 h-8" /> }
                        ].map((item, idx, arr) => (
                            <React.Fragment key={idx}>
                                <div className="flex flex-col items-center text-center space-y-3 flex-1">
                                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shadow-sm border border-blue-100">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm font-bold text-blue-900 uppercase tracking-tight">{item.label}</span>
                                </div>
                                {idx < arr.length - 1 && (
                                    <ArrowRight className="hidden md:block w-6 h-6 text-blue-300" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Bottom Gradient Decor */}
                    <div className="mt-12 h-2 w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-30"></div>
                </div>

                {/* Logo Footer */}
                <div className="p-8 flex justify-center mt-auto border-t border-slate-50">
                    <FlowpayLogo />
                </div>
            </div>

            {/* PAGE 2 */}
            <div className="w-full max-w-4xl bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col min-h-[1100px] relative">
                {/* Background Petals Decoration (CSS based) */}
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 right-0 w-64 h-80 bg-purple-500 rounded-full blur-[80px] rotate-45"></div>
                    <div className="absolute bottom-0 right-1/4 w-80 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
                </div>

                {/* Logo Top */}
                <div className="p-10 flex justify-end">
                    <FlowpayLogo className="h-10" />
                </div>

                {/* Value Proposition Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-10">
                    {[
                        {
                            number: 1,
                            title: "New Revenue Stream",
                            bullets: ["Earn on Financed Volume", "No Credit Risk"]
                        },
                        {
                            number: 2,
                            title: "Increased Retention",
                            bullets: ["Embedded in Workflows", "Higher User Loyalty"]
                        },
                        {
                            number: 3,
                            title: "Stronger SME Success",
                            bullets: ["SMEs Grow Faster", "More Transactions"]
                        },
                        {
                            number: 4,
                            title: "Strategic Differentiation",
                            bullets: ["From Software to Growth Partner", "Stand Out in the Market"]
                        }
                    ].map((box) => (
                        <div key={box.number} className="bg-slate-50/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center justify-center w-10 h-10 bg-blue-700 text-white font-bold rounded-full text-lg">
                                    {box.number}
                                </span>
                                <h3 className="text-xl font-bold text-blue-900">{box.title}</h3>
                            </div>
                            <ul className="space-y-3 mt-2 pl-14">
                                {box.bullets.map((bullet, bIdx) => (
                                    <li key={bIdx} className="flex items-center gap-3 text-slate-700">
                                        <Check className="w-5 h-5 text-blue-500" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Central Tagline */}
                <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight leading-tight mb-8">
                        Together, We Help SMEs Thrive.
                    </h2>

                    {/* Visual abstract art placeholder (similar to the image's right bottom) */}
                    <div className="relative w-full max-w-lg h-64 mt-8 overflow-hidden rounded-3xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
                        {/* Abstract petals created with divs */}
                        <div className="absolute -right-10 bottom-0 w-48 h-48 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
                        <div className="absolute right-20 -bottom-10 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl"></div>
                    </div>
                </div>

                {/* Support Text Footer */}
                <div className="p-10 text-center text-slate-400 text-sm mt-auto">
                    &copy; 2024 Flowpay. All rights reserved.
                </div>
            </div>

            {/* Floating Action Button (Utility) */}
            <button
                onClick={() => window.print()}
                className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold hover:bg-blue-700 transition-all active:scale-95 z-50 flex items-center gap-2"
            >
                <span className="hidden md:inline">Export to PDF</span>
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};

export default App;
