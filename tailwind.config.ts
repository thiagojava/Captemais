import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#194AFA',
        secondary: '#FAEB0C'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-45deg)' },
          '50%': { transform: 'rotate(45deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
      }
    },
    fontFamily: {
      body: ['Exo', 'ui-sans-serif', 'system-ui'],
      title: ['Bebas Neue', 'ui-sans-serif', 'system-ui'],
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700',
    },
  },
  plugins: []
}
export default config
