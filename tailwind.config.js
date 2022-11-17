/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const spacing = {
    xs: '4px',
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    s: '8px',
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    m: '16px',
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    l: '24px',
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    xl: '32px',
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    '2xl': '40px',
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    '3xl': '60px',
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    '4xl': '80px',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    plugins: [
        plugin(({ addVariant }) => {
            addVariant('not-last', '&:not(:last-child)');
        }),
        require('tailwindcss'),
        require('precss'),
        require('autoprefixer'),
    ],
    safelist: [
        {
            pattern: /^p(x|y)-.*/,
        },
    ],
    theme: {
        colors: {
            general: '#CCCCCC',
            generalDark: '#8E8E8E',
            generalLight: '#F2F2F2',

            primary: '#F48882',
            primaryDark: '#AA5F5B',
            primaryLight: '#F69F9B',

            secondary: '#25262A',
            secondaryDark: '#1A1B20',
            secondaryLight: '#2D2E32',

            white: '#FFFFFF',
        },
        extend: {
            animation: {
                blink: 'blink 1s step-start infinite',
            },

            fontFamily: {
                raleway: ['Raleway', ...defaultTheme.fontFamily.sans],
            },
            height: spacing,
            keyframes: {
                blink: {
                    '50%': { opacity: 0 },
                },
            },
            margin: spacing,
            maxWidth: {
                wrapper: '1280px',
            },
            minHeight: {
                navbar: '68px',
            },
            padding: spacing,
            width: spacing,
        },
        fontSize: spacing,
        gap: { ...spacing, none: 0 },
        screens: {
            // eslint-disable-next-line sort-keys-fix/sort-keys-fix
            xs: { max: '639px' },
            // eslint-disable-next-line sort-keys-fix/sort-keys-fix
            sm: { min: '640px' },
            // eslint-disable-next-line sort-keys-fix/sort-keys-fix
            md: { min: '768px' },
            // eslint-disable-next-line sort-keys-fix/sort-keys-fix
            lg: { min: '1024px' },
            // eslint-disable-next-line sort-keys-fix/sort-keys-fix
            xl: { min: '1280px' },
            // eslint-disable-next-line sort-keys-fix/sort-keys-fix
            '2xl': { min: '1536px' },
        },
    },
};
