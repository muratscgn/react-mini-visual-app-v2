import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@picocss/pico'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/*
- [x] Default olarak hicbir gorsel secilmesin ve bu durumda gorsel secilmedi componenti ekranda gozuksun
- [x] Products icinde id, name, imgName, thumbnail, isAvailable(true,false), isActive(false)
- [x] Lorem Picsum gorselleri imgNanem icinde ve thumbnail icinde tutulsun
- [x] Bolum sonu calisması v1 layout uygulansın
- [x] Img thumbnail altında sec butonu olsun ve sec dediğimizde isActive true olsun
*/