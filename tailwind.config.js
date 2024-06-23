/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/main.jsx','./src/routers/login.jsx', './src/routers/signUp.jsx', './src/routers/notesApp.jsx', './src/Header.jsx', './src/MainContainer.jsx', './src/NoteList.jsx'],
  theme: {
    extend: {
      colors: {
        fullBlack: '#000000',
        lessBlack: '#282828',
        opaqueBlack: '#000000',
        white: '#ffffff',
        lightGray: '#f6f6f6',
        gray: '#7D7D7D',
        gray2: '#E5E5E5',
        gray3: '#D9D9D9',
        transparent: '#00000000',
        red: '#ff0000',
        green: '#00ff00',
      },
    },
  },
  plugins: [],
}

