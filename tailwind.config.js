const spacing = {
    '2xl': '40px',
    l: '24px',
    m: '16px',
    s: '8px',
    xl: '32px',
    xs: '4px',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
    theme: {
        extend: {
            margin: spacing,
            maxWidth: {
                wrapper: '1280px',
            },
            minHeight: {
                navbar: '68px',
            },
            padding: spacing,
        },
        fontSize: spacing,
        gap: spacing,
        screens: {
            lg: '1200px',
            md: '900px',
            sm: '600px',
            xl: '1536px',
            xs: '375px',
        },
    },
};
