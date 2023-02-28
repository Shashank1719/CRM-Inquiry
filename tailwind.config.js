/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',
        
        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
        
      },
      gridColumn: {
        'span-14': 'span 14 / span 14',
      },
      colors: {
         p:'#FF4897',
         t:'#393939',
         pu:'#8E44AD',
         gr:'#747880',
         g:'#0E9532',
         r:'#C0392B',
         y:'#F39C12',
         o:'#F8874A',
         a1:'#7289D9',
         a2:'#688491',
         a3:'#393939',
         b:'#393939',
      }
    }
  },
  plugins: [],
}