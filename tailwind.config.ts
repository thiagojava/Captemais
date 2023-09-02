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
