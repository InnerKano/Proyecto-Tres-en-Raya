<template>
    <div id="grid_cmps">
        <!-- Componentes C01 y C02 -->
        <div id="C01"><C01 ref="c01Component"/></div>

        <div id="right">
            <div id="C02"><C02 ref="c02Component"/></div>
            <br><br>

            <!-- Botón de reinicio -->
            <button @click="resetComponents">Reset</button>
        </div>

    </div>
</template>

<script>
import C01 from '@/components/C01.vue'
import C02 from '@/components/C02.vue'

export default {
    components: {
        C01,
        C02,
    },
    methods: {
        resetComponents() {
           // Llama al método de reinicio de cada componente pasando el tipo de componente
           this.$refs.c01Component.reset('C01');
            this.$refs.c02Component.reset('C02');
        }
    }
};
</script>

<style>
    #grid_cmps { 
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display: grid;
        grid-gap: 0px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-template-areas:                       
            "C01 R"
            "C01 R";
            
            

        
    }
    #right {
        grid-area: R;
        display: flex;
        flex-direction: column; /* Alinea los elementos en columna */
        align-items: center; /* Centra los elementos horizontalmente */
    }

    button {
        margin-top: 10px; /* Espacio superior entre el componente y el botón */
        padding: 12.5px 30px;
        border: 0;
        border-radius: 100px;
        background-color: #2ba8fb;
        color: #ffffff;
        font-weight: Bold;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
    }

    button:hover {
    background-color: #6fc5ff;
    box-shadow: 0 0 20px #6fc5ff50;
    transform: scale(1.1);
    }

    button:active {
    background-color: #3d94cf;
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
    box-shadow: none;
    transform: scale(0.98);
    }
</style>