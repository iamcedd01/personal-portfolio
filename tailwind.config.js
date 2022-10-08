/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    plugins: [],
    theme: {
        extend: {},
        screens: {
            lg: '1200px',
            md: '900px',
            sm: '600px',
            xl: '1536px',
            xs: '375px',
        },
    },
};
