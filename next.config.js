/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['simpletravelers.sk'],
	},
	i18n: {
		// These are all the locales you want to support in
		// your application
		locales: ['sk-SK', 'sk'],
		// This is the default locale used when visiting
		// a non-locale prefixed path e.g. `/hello`
		defaultLocale: 'sk-SK',
	},
};
