const withAnimations = require('animated-tailwindcss')
const plugin = require('tailwindcss/plugin')

module.exports = withAnimations({
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ursula-006600': '#006600',
        'ursula-173412': '#173412',
        'ursula-449342': '#449342',
        'ursula-4A9826': '#4A9826',
        'ursula-70C54D': '#70C54D',
        'ursula-2EAF7D': '#2EAF7D',
        'ursula-B0F0A1': '#B0F0A1',
        'ursula-02353C': '#02353C',
        'ursula-3FD0C9': '#3FD0C9',
        'facebook-blue': '#4267B2',
        'youtube-red': '#FF0000',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        '.bg-search': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='1'%3E%3Cpath d='M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.25 12.25L9.71251 9.71246' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/svg%3E%0A")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '20px',
        },
        '.bg-search-black': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='1'%3E%3Cpath d='M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.25 12.25L9.71251 9.71246' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/svg%3E%0A")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '20px',
        },
      }

      addUtilities(utilities)
    }),
    require('tailwindcss-textshadow'),
  ],
})
