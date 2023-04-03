<script lang="ts">
	import './styles.css';
    import Blurflower from './Blurflower.svelte';
</script>

<div class="bff"><Blurflower size='min(100vw, 100vh)' speed={0.8}/></div>

<slot/>

<style>
    * {
        margin: 0%;
        border: 0%;
        padding: 0%;

        z-index: -1;

        overflow-y: hidden;
        overflow-x: hidden;
    }

    .bff {
        --this-size: min(100vw, 100vh);
        height: var(--this-size);
        width: var(--this-size);

        position: absolute;
        left: calc(50vw - var(--this-size)/2);
        top: calc(50vh - var(--this-size)/2);

    }
</style>