import { error } from 'console'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        error: '#F00000',
        black: '#000',
        gray: '#838383',
        secondary: '#F3F3F3',
        'stroke-secondary': '#E6E6E6',
        'stroke-primary': '#d4d4d4',
        backdrop: 'rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        animloader: {
          '0%': {
            'box-shadow': '14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px',
          },
          '25%': {
            'box-shadow': '14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 2px',
          },
          '50%': {
            'box-shadow': '14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 2px,  -38px 0 0 -2px',
          },
          '75%': {
            'box-shadow': '14px 0 0 2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px',
          },
          '100%': {
            'box-shadow': '14px 0 0 -2px,  38px 0 0 2px,  -14px 0 0 -2px,  -38px 0 0 -2px',
          },
        },
      },
      animation: {
        animloader: 'animloader 2s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
