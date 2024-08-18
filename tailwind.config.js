/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "425px",
            md: "768px",
            lg: "1024px"
        },
        fontFamily: {
            sans: ["Montserrat Alternates", "sans-serif"]
        },
        extend: {
            spacing: {
                "8xl": "96rem",
                "9xl": "128rem",
                18: "4.5rem"
            },
            borderRadius: {
                "4xl": "2rem"
            }
        }
    },
    plugins: []
}
