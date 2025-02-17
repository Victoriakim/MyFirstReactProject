/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./build/**/*.{html,js}"
],
theme: {
    extend: {
        fontFamily: {
            mono: ['IBM Plex Mono', 'monospace']
        }
    },
},
plugins: [],
}
