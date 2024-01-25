/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./fundamental-utility.html"],
  darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        poppins: ['Poppins']
                    },
                    colors: {
                        primary: '#e73f'
                    },
                    animation: {
                        'spin-slow': 'spin 5s linear infinite',
                        'goyang': 'goyang 0.5s ease-in infinite'
                    },
                    keyframes: {
                        goyang: {
                            '0%, 100%': {
                                transform: 'rotate(10deg)'
                            },
                            '50%': {
                                transform: 'rotate(4deg)'
                            }
                        }
                    }
                }
            },
  plugins: [],
}


