const theme = 'blue';

const presets = {
  theme: `${theme}`,
  appTitle: 'Restaurant ERP',
  images: {
    logo: 'NovaStudio.jpeg',
    loginFondo: 'nova.jpeg',
    welcomeFondo: 'https://www.via-asesores.com/backgrounds/smartproject/smartproject_bg02.jpg'
  },
  locations: {
    login: '/login',
    companiasUsuario: '/welcome',
    welcome: '/companiasUsuario',
    profile: '/miPerfil',
    welcomeTemp: '/welcome'
  },
  toaster: {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'light'
  }
};

export default presets;
