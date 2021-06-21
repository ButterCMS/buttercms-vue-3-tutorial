module.exports = {
    darkMode: false, // or 'media' or 'class'
    plugins: [ require( "@tailwindcss/typography" ) ],
    purge: [ "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}" ],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
}
