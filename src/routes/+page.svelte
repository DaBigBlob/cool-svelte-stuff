<script lang="ts">
	import './styles.css';
    import Blurflower from '../components/Blurflower.svelte';
</script>

<div class="bff"><Blurflower size='min(100vw, 100vh)' speed={1}/></div>
<din class="cont"><slot/></din>


<style>
    * {
        margin: 0%;
        border: 0%;
        padding: 0%;
    }

    .bff {
        max-height: 100vh;
        max-width: 100vw;
        height: 100vh;
        width: 100vw;

        overflow-y: hidden;
        overflow-x: hidden;

        z-index: -1;

        position: absolute;
        top: 0%;
        left: 0%;
    }

    /* .cont {

    }

    @media only screen and (max-width: 1056px) {

    } */
</style>