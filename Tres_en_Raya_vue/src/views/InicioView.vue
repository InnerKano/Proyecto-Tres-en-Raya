<template>
    <div id= "grid_inicio">
        <h2 id="h2c0">GAME</h2>        
        <br><br>    
        <main>
            <div> <Comp01View/> </div>
        </main> 
    </div>
</template>

<script>
    import Comp01View from './Comp01View.vue';
    export default {
        
        components: {
            Comp01View,
        },

    };
</script>

<style>

* {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

#h2c0 {
    font-size: 25pt;
    text-align: center;
    font-weight: bolder;
    font-family: "Henny Penny", cursive;
}

</style>