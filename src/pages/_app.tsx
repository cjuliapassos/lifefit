import '../styles/global.css'

//Esse arquivo é feito pra gente reaproveitar os componentes da nossa aplicaçao: menu, sidebar...
function MyApp({ Component, pageProps }) {
 
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
