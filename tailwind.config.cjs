module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0B1B2B',
        'accent': '#00AEEF',
        'accent2': '#FFD400',
        'muted': '#F4F6F8'
      },
      borderRadius: {
        'md-lg': '14px'
      }
    }
  },
  plugins: []
};
