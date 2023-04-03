<script lang="ts">
	import './styles.css';
    import Blurflower from './Blurflower.svelte';
</script>

<div><Blurflower size='min(100vw, 100vh)' speed={0.8}/></div>

<slot/>

<style>
</style>