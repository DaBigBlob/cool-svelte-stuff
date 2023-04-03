<script lang="ts">
	import './styles.css';
    import Blurflower from './Blurflower.svelte';
</script>

<div><Blurflower size='min(100vw, 100vh)' speed={2}/></div>

<slot/>

<style>
    div {
        z-index: -1;
    }
</style>