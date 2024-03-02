import Vue from 'vue'
import Vuex from 'vuex'

export default new Vuex.Store({
  state: {  //Variables que serán pasadas entre los componentes
    Jugad: {
      id_jugador:'',
      nombre:'',
      puntuacion:''
    },

  },
  mutations: {  //Funciones para cambiar el valor de las variables
    actualizarJugadores(state, nuevoJugador) {
      state.Jugad = nuevoJugador;
    },

  },
  actions: {  //Funciones para realizar acciones asincronas y llamar a mutaciones
    actualizarJugadores({ commit }, nuevoJugador) {
      commit('actualizarJugadores', nuevoJugador);
    },
    
  }
})
