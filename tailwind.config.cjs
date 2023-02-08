/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            dropShadow: {
                'vite': '0px 0px 5px linear-gradient( to right, #ffffff , #fffacc)'
            }
        },
    },
    plugins: [],
}