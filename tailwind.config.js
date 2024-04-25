/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            screens: {
                xsm: "378px",
            },
            fontFamily: {
                rubik: ["Rubik", "sans-serif"],
            },
            boxShadow: {
                cardShadow: "0 3px 8px rgba(0,0,0, 0.24)",
            },
        },
    },
    plugins: [],
};
