<script lang="ts">
	import './styles.css';
    import Blurflower from './Blurflower.svelte';
</script>

<div><Blurflower size='min(100vw, 100vh)'/></div>

<slot/>

<style>
    div {
        z-index: -1;
    }
</style>