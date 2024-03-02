<template lang="es" id= "grid">
  <link href="https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap" rel="stylesheet"><link rel="stylesheet" href="./style.css">

  <div id= "grid">

    <header id="encabezado" class="p-3 m-0 bg-body-tertiary" data-bs-theme="light">
      <h1 id="h1app">Tres en Raya</h1>
    </header>

    <!-- Nav componente de bootstrap -->
    <nav id="menu_principal" class="navbar navbar-expand-lg p-2 m-0 bg-body-primary" data-bs-theme="light">
      <div class="container-fluid">

<!--         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
<!--             <li class="nav-item">
              <router-link to="/" class="nav-link" aria-current="page">INICIO</router-link>
            </li>
 -->
          </ul>
        </div>
      </div>
    </nav>
    <!-- fin del Nav -->

    <main id="bloque_principal" class="p-3 m-0 text-primary-emphasis bg-primary-subtle">
      <router-view/>    
    </main>

    <footer id="pie_pagina" data-bs-theme="light" class="p-3 m-0 bg-body-primary">
      <address><a href="mailto: contacto@gmail.com">kevin.cano@utp.edu.co</a></address>
      <small>&copy; Derechos Reservados 2024</small>
      <br><br>
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank"><img alt="Licencia Creative Commons" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"/></a>
      <br>
      <small>
        <br>se distribuye bajo una<br> 
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional.</a>
      </small>
    </footer>

  </div>
</template>

<script>
  
  export default {

    components: {
    },

    setup() {

      return {
      }; 

    },
    
  };
</script>

<style scoped lang="css">

  * {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  #grid { 
    display: grid;
    grid-gap: 5px;
    width: 100%;
    height: 100%;
  

    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(5, auto);

    grid-template-areas:    "H H H H"                             
                            "N N N N"
                            "M M M M"
                            "M M M M"
                            "F F F F";  
  }
  html {
    background-color: black;
    width: 100%;
    height: 100%;
  }
  body{
    background-color: black;

  }

  header {
    text-align: center;
    grid-area: H; 
    background-color: var(--bs-blue);

  }

  #h1app {
    margin: auto;
    letter-spacing: 0.0015em;
    font-family: "Henny Penny", cursive;
	  color: #274dff;
    font-size: 5em;
    text-shadow: 0 1px #8da1ff, -1px 0 #c0cbff, -1px 2px #8da1ff, -2px 1px #c0cbff,
      -2px 3px #8da1ff, -3px 2px #c0cbff, -3px 4px #8da1ff, -4px 3px #c0cbff,
      -4px 5px #8da1ff, -5px 4px #c0cbff, -5px 6px #8da1ff, -6px 5px #c0cbff,
      -6px 7px #8da1ff, -7px 6px #c0cbff, -7px 8px #8da1ff, -8px 7px #c0cbff;
    text-align: center;
  }

  nav {
    grid-area: N; 
  }

  .nav-link {
    color: lightskyblue;
    font-weight: bolder;
  }

  .nav-link:hover {
    color: blue;
  }

  main {
    grid-area: M; 
  }

  footer {
    text-align: center;
    font-weight: bold;
    margin: 10px;
    padding: 10px;
    padding-bottom: 30px;
    grid-area: F; 
    width: 100%;
    height: 100%;
  }

  address a {
    color: rgb(137, 135, 250);
    text-decoration: none;
    font-weight: 600;
  }

  footer a {
    text-decoration: none;
  }

  a img {
    border-width: 0px;
  }

  @media screen and (max-width: 900px) and (min-width: 551px) { 
    #grid {        
      grid-template-columns: repeat(3, 33.3%);
      grid-template-rows: repeat(4, auto);

      grid-template-areas:    "H H H"
                              "N N N"                                
                              "M M M"                                                                
                              "F F F"; 
    }
  }

  @media screen and (max-width: 550px) {  
    #grid {        
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: repeat(5, auto);

      grid-template-areas:    "H H"
                              "N N"
                              "M M"
                              "M M"                                                                  
                              "F F"; 
    }
  }
</style>
