module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLC: "hsl(193, 38%, 86%)",
        primaryNG: "hsl(150, 100%, 66%)",
        neutralGB: "hsl(217, 19%, 38%)",
        neutralDGB: "hsl(217, 19%, 24%)",
        neutralDB: "hsl(218, 23%, 16%)",
      },
      fontSize: {
        qoute: "1.75rem",
      },
      boxShadow: {
        primary: "0 0 30px 0 hsl(150, 100%, 66%)",
      },
      letterSpacing: {
        advice: "0.3em",
      },
    },
  },
  plugins: [],
};
