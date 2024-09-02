/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/main.jsx','./src/routers/login.jsx', './src/routers/signUp.jsx', './src/routers/forgotPassword.jsx', './src/routers/createNewPassword.jsx', './src/routers/accountRegistered.jsx', './src/auth/GithubSignIn.jsx', './src/auth/GoogleSignIn.jsx','./src/routers/notesApp.jsx', './src/app/Header.jsx', './src/app/MainContainer.jsx', './src/app/NoteList.jsx', './src/app/CreateNotes.jsx', './src/app/Editor.jsx', './src/app/EmptyNote.jsx', './src/app/SelectNote.jsx'],
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
        unselected: '#FBFBFB',
        unselectedText: '#C6C6C6',
        unselectedHeading: '#868686',
        unselectedContent: '#BABABA',
      },
    },
  },
  plugins: [],
}

