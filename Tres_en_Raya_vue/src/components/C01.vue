<!-- COMPONENTE 1: FUNCIONAMIENTO JUEGO -->

<template>
    <div id="grid_game" class="text-primary">
        <!-- Botones para cada celda del juego -->
        <button id="C1" class="btn-custom" @click="makeMove(0)">{{ cells[0] }}</button>
        <button id="C2" class="btn-custom" @click="makeMove(1)">{{ cells[1] }}</button>
        <button id="C3" class="btn-custom" @click="makeMove(2)">{{ cells[2] }}</button>
        <button id="C4" class="btn-custom" @click="makeMove(3)">{{ cells[3] }}</button>
        <button id="C5" class="btn-custom" @click="makeMove(4)">{{ cells[4] }}</button>
        <button id="C6" class="btn-custom" @click="makeMove(5)">{{ cells[5] }}</button>
        <button id="C7" class="btn-custom" @click="makeMove(6)">{{ cells[6] }}</button>
        <button id="C8" class="btn-custom" @click="makeMove(7)">{{ cells[7] }}</button>
        <button id="C9" class="btn-custom" @click="makeMove(8)">{{ cells[8] }}</button>
                
        <!-- Alerta de ganador -->
        <div v-if="winner" class="alert alert-primary" role="alert">
            ¡{{ winner }} ha ganado!
        </div>

        <!-- Alerta de empate -->
        <div v-if="tie" class="alert alert-primary" role="alert">
            ¡Empate!
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    setup() {
        // Declaración de variables reactivas
        const cells = reactive(["", "", "", "", "", "", "", "", ""]);
        let currentPlayer = "X"; // Jugador actual (puede ser "X" o "O")
        let gameOver = false; // Indica si el juego ha terminado
        const winner = ref(""); // Referencia para almacenar al ganador
        const tie = ref(false); // Referencia para indicar empate

        // Función para realizar una jugada
        const makeMove = (index) => {
            // Verifica si el juego aún no ha terminado y la celda está vacía
            if (!winner.value && !tie.value && cells[index] === "") {
                cells[index] = currentPlayer; // Asigna el jugador actual a la celda
                checkWinner(); // Verifica si hay un ganador
                currentPlayer = currentPlayer === "X" ? "O" : "X"; // Cambia de jugador
            }
        };

        // Función para verificar si hay un ganador
        const checkWinner = () => {
            // Patrones de victoria en el juego
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
                [0, 4, 8], [2, 4, 6] // Diagonales
            ];
            // Itera sobre los patrones de victoria
            for (let pattern of winPatterns) {
                const [a, b, c] = pattern;
                // Verifica si las celdas en el patrón son iguales y no están vacías
                if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                    winner.value = cells[a]; // Establece al ganador
                    return;
                }
            }
            // Si no hay ganador y todas las celdas están llenas, se declara empate
            if (!cells.includes("")) {
                tie.value = true;
            }
        };
        const reset = () => {
            // Reinicia todas las celdas y las variables relacionadas con el juego
            cells.forEach((cell, index) => {
                cells[index] = "";
            });
            winner.value = "";
            tie.value = false;
            currentPlayer = "X"; // Reinicia el jugador actual
        };

        // Retorna las variables y funciones para ser usadas en el template
        return { cells, makeMove, winner, tie, reset };
    }


};
</script>


<style>
    .alert {
        padding: 10px;
        margin-top: 20px;
        border-radius: 5px;
        font-size: 18px;
    }
    * {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    /* Celda 1: Colum1 Fil1 */
    #grid_game { 
        width: 50%;
        height: 100%;
        margin: 0 auto;
        display: grid;
        grid-gap: 0px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-template-areas:                       
            "C1 C2 C3"
            "C4 C5 C6"
            "C7 C8 C9"
            "AL AL AL";
        align-items: center;
        justify-items: center;
        text-align: center;
    }
    /* BORDES  DE LAS CELDAS */

    /* CELDAS */
    #C1 {
        grid-area: C1;
    }
    #C2 {
        grid-area: C2;
        border-left: 10px solid blueviolet;
        border-right: 10px solid blueviolet;
    }
    #C3 {
        grid-area: C3;
    }
    #C4 {
        grid-area: C4;
        border-top: 10px solid blueviolet;
        border-bottom: 10px solid  blueviolet;
        
    }
    #C5 {
        grid-area: C5;
        border: 10px solid blueviolet;
    }
    #C6 {
        grid-area: C6;
        border-top: 10px solid blueviolet;
        border-bottom: 10px solid blueviolet;
    }
    #C7 {
        grid-area: C7;
    }
    #C8 {
        grid-area: C8;
        border-left: 10px solid blueviolet;
        border-right: 10px solid  blueviolet;
    }
    #C9 {
        grid-area: C9;
    }

    h2{
        grid-area: H2;
    }
    /* Botones X y O */
    .btn-custom {
        /* Cambiar la fuente */
        font-family: "Henny Penny", cursive;
        /* Cambiar el tamaño de la fuente */
        text-shadow: -1px -1px 0px #0042889f,
            1px 1px 1px #004b9b9f,
            0.5px 0.5px 0px #00000055;
        font-size: 170%;
        /* Cambiar el color del texto */
        color: #ffffffc7;
        /* Cambiar el color de fondo */
        background-color: #007bff9f;
        /* Añadir bordes redondeados */
        border-radius: 5px;
        /* Cambiar el espaciado alrededor del texto */
        padding: 10px 20px;

        /* Transición suave al pasar el ratón */
        transition: all 0.3s ease;
        font-weight: bold;
        text-align: center;
        margin: 5px;
        min-width: 80px; /* Establece un ancho mínimo */
        min-height: 100px; /* Establece un alto mínimo */
        width: 100%; /* Ancho preestablecido */
        height: 100%; /* Alto preestablecido */ 
        border-style: none;
    }
    .btn-custom:focus {
        /* Quitar el contorno al enfocar */
        outline: none;
        /* Agregar sombra al enfocar */
        box-shadow: 0 0 0 0.2rem rgba(0, 47, 255, 0.25);
    }

    button:hover {
        background-color: #0030b4ce;
        border-radius: 10%;
    }

    button:focus {
        outline: none;
    }

    .alert {
        padding: 10px;
        margin-top: 20px;
        border-radius: 5px;
        font-size: 18px;
        grid-area: AL;
        text-align: center;
    }

</style>