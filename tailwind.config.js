module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        '2xl': '3rem',
      },
    },
    extend: {
      screens: {
        small: { raw: '(min-height: 400px)' },
        medium: { raw: '(min-height: 700px)' },
        tall: { raw: '(min-height: 800px)' },
        sm: '640px',
        sm2: '700px',
        md: '768px',
        md2: '850px',
        lg: '1024px',
        lg2: '1100px',
        xl: '1200px',
        xl2: '1238px',
        xl3: '1280px',
      },
      dropShadow: {
        '3xl': '0px 8px 32px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: { x: '8px' },
      colors: {
        // Primary
        'primary-blue': '#004E89',
        'primary-blue-new': '#0957CB',
        'primary-green': '#00CC66',
        'primary-green-1': '#00A854',
        // Primary
        // Secondary
        'secondary-aqua': '#00ADE5',
        'secondary-ocean': '#007AB8',
        'secondary-deep': '#003964',
        'secondary-blaze': '#FF0000',
        'secondary-ember': '#FDB913',
        'secondary-blue-active': '#0746A2',
        'secondary-blue-inactive': '#D6E7FF',
        // Secondary
        white: '#FFFFFF',
        black: '#000000',
        // Neutral
        'off-white': '#FEFEFE',
        'grey-1': '#FCFCFC',
        'grey-2': '#E6E6E6',
        'grey-3': '#D2D2D2',
        'grey-4': '#BEBEBE',
        'grey-5': '#AAAAAA',
        'grey-6': '#969696',
        'grey-7': '#828282',
        'grey-8': '#6E6E6E',
        'grey-9': '#5A5A5A',
        'grey-dark': '#3C3C3C',
        // Neutral
        // Alert
        'alert-red': '#FF0000',
        'alert-ember': '#FDB913',
        'alert-green': '#00CC66',
        // Alert
        // Aqua
        aqua: {
          50: '#E5F7FC',
          100: '#BFEBF9',
          200: '#80D6F2',
          300: '#40C1EB',
          400: '#1FB7E8',
          500: '#00ADE5',
          600: '#009CCE',
          700: '#0082AC',
          800: '#005773',
          900: '#002B39',
        },
        'aqua-light': '#F1F8FA',
        // Aqua
        // Deep
        deep: {
          50: '#E5EBEF',
          100: '#D1DBE3',
          200: '#99B0C1',
          300: '#7392AA',
          400: '#4D7492',
          500: '#336183',
          600: '#1F5177',
          700: '#0D436C',
          800: '#003964',
          900: '#002B4B',
        },
        'deep-light': '#E5EBEF',
        // Deep
        // Blaze
        blaze: {
          50: '#FFE5E5',
          100: '#FFBFBF',
          200: '#FF8080',
          300: '#FF4040',
          400: '#FF2626',
          500: '#FF0000',
          600: '#E50000',
          700: '#BF0000',
          800: '#800000',
          900: '#400000',
        },
        // Blaze
        // Spark
        spark: {
          50: '#FFF0E5',
          100: '#FFD9BF',
          200: '#FFB280',
          300: '#FF8C40',
          400: '#FF781F',
          500: '#FF6600',
          600: '#E55C00',
          700: '#BF4D00',
          800: '#803300',
          900: '#401A00',
        },
        // Spark
        // Ember
        ember: {
          50: '#FFF8E7',
          100: '#FFEDC4',
          200: '#FEDC89',
          300: '#FDCB4E',
          400: '#FDC12F',
          500: '#FDB913',
          600: '#E4A611',
          700: '#BE8B0E',
          800: '#7F5D0A',
          900: '#3F2E05',
        },
        'ember-light': '#BEBEBE',
        // Ember
        // Light surface
        'light-neutral': '#FBFBFB',
        'light-neutral-2': '#F3F3F3',
        // Light surface
        // Transparent white
        white: '#fff',
        white: {
          50: 'rgba(255, 255, 255, 0.04)',
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.25)',
          300: 'rgba(255, 255, 255, 0.4)',
          400: 'rgba(255, 255, 255, 0.55)',
          500: 'rgba(255, 255, 255, 0.7)',
          600: 'rgba(255, 255, 255, 0.8)',
          700: 'rgba(255, 255, 255, 0.9)',
        },
        // Transparent white
        // Transparent black
        black: {
          50: 'rgba(0, 0, 0, 0.04)',
          100: 'rgba(0, 0, 0, 0.1)',
          200: 'rgba(0, 0, 0, 0.25)',
          300: 'rgba(0, 0, 0, 0.4)',
          400: 'rgba(0, 0, 0, 0.55)',
          500: 'rgba(0, 0, 0, 0.7)',
          600: 'rgba(0, 0, 0, 0.8)',
          700: 'rgba(0, 0, 0, 0.9)',
        },
        // Transparent black
        'deep-9': '#003964',
        'grey-8': '#6E6E6E',
        'grey-3': '#D2D2D2',
        'grey-darkest': '#3C3C3C',
        'primary-hmi-blue': '#004E89',
        'primary-hmi-green': '#00CC66',
        'surface-light-neutral-1': '#FBFBFB',
        'surface-light-neutral-2': '#F3F3F3',
        'surface-light-deep-1': '#E5EBEF',
        'surface-light-ember-1': '#F4F3F0',
        'secondary-ocean': '#0084C6',
        'aqua-6': '#00ADE5',
        'tab-bg': 'rgba(0, 0, 0, 0.04)',
        'alice-blue': '#F1F6FF',
      },
      fontSize: {
        'head-osize': ['48px', '1.4'],
        'head-1': ['40px', '1.4'],
        'head-2': ['32px', '1.4'],
        'head-3': ['24px', '1.4'],
        'head-4': ['18px', '1.4'],
        'head-5': ['14px', '1.4'],
        'head-6': ['12px', '1.6'],
        'body-xl': ['20px', '1.5'],
        'body-l': ['18px', '1.5'],
        'body-n': ['16px', '1.5'],
        'body-sm': ['14px', '1.6'],
        'body-mn': ['12px', '1.6'],
        normal: ['16px', '1.5'],
        'nav-primary': ['18px', '1'],
        'nav-mprimary': ['15px', '1.5'],
        'nav-secondary': ['12px', '1.6'],
        'nav-utility': ['11px', '1'],
        'nav-mastheads': ['14px', '1.5'],
        'nav-footers': ['12px', '1.6'],
        'button-l': ['20px', '1'],
        'button-sm': ['14px', '1'],
        'button-mn': ['12px', '1'],
        'button-mic': ['10px', '1'],
        'table-header': ['14px', '1.6'],
        'table-data': ['16px', '1.5'],
        'res-head-1': ['32px', '1.4'],
        'res-head-2': ['28px', '1.4'],
        'res-head-3': ['18px', '1.4'],
        'res-head-4': ['16px', '1.4'],
        'res-nav-primary': ['16px', '1'],
      },
      spacing: {
        '430px': '430px',
        '450px': '450px',
        '500px': '500px',
        '64vh': '64vh',
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
      },
      minHeight: {
        '50px': '50px',
      },
      scale: {
        80: '0.8',
        85: '0.85',
        300: '3',
        400: '4',
      },
      animation: {
        shine: 'shine 1s',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
    },
    boxShadow: {
      list: '0 2px 4px rgba(0,0,0,.08)',
      navigation: '0 3px 6px rgba(0, 0, 0, 0.16)',
      navigationReverse: '0 -3px 6px rgba(0, 0, 0, 0.16)',
      header: '0 2px 3px rgba(0, 0, 0, 0.08)',
      subMenu: '1px 2px 3px rgba(0, 0, 0, 0.08)',
      bottomNavigation: '0 -2px 3px rgba(0, 0, 0, 0.06)',
      listContainer: '0px 1px 2px 1px rgba(0, 0, 0, 0.07)',
      point: '0px 8px 32px rgba(0, 0, 0, 0.1)',
      soft: '0px 4px 8px rgba(0, 0, 0, 0.07)',
      tight: '0px 1px 2px 1px rgba(0, 0, 0, 0.07)',
      raise: '0px 8px 32px rgba(0, 0, 0, 0.1)',
      megaMenu: '0px 8px 32px 0px rgba(0, 0, 0, 0.04)',
      level2: '0px 12px 48px 0px rgba(0, 0, 0, 0.08)',
      level3: '0px 1px 14px 0px rgba(0, 0, 0, 0.09)',
    },
    dropShadow: {
      rised: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    },
    fontFamily: {
      inter: 'Inter, Helvetica, Arial, sans-serif',
      roboto: ["'Roboto', sans-serif"],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'lower-roman',
    },
  },
  plugins: [
    require('tailwind-children'),
    // FOR SELECTING FIRST CHILD
    function ({ addVariant, e }) {
      addVariant('first-child', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`first-child${separator}${className}`)}:first-child`
        })
      })
    },
    require('@tailwindcss/forms'),
  ],
}
