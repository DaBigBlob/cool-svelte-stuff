<script lang="ts">
	import './styles.css';
</script>



<div class="ani_cont">
    <div class="cr1"></div>
    <div class="cr2"></div>
    <div class="cr3"></div>
    <div class="cr4"></div>
    <div class="cr5"></div>
    <div class="cr6"></div>
</div>


<slot/>



<style>
    .ani_cont {
        position: absolute;
        height: 100vh;
        width: 100vw;
        z-index: -1;
    }

    .cr1 {
        position: relative;
        left: 50%;
        top: 50%;
        animation-name: mv1;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        background-color: blueviolet;

        border-radius: 50%;
    }

    @keyframes mv1 {
        0% {
            border-top-right-radius: 20%;
            border-top-left-radius: 90%;
            border-bottom-left-radius: 20%;
            border-bottom-right-radius: 70%;

            height: 30vh;
            width: 30vh;

        }
        33% {
            border-top-right-radius: 70%;
            border-top-left-radius: 60%;
            border-bottom-left-radius: 90%;
            border-bottom-right-radius: 60%;

            height: 21vh;
            width: 21vh;

        }
        100% {
            border-top-right-radius: 20%;   
            border-top-left-radius: 90%;
            border-bottom-left-radius: 20%;
            border-bottom-right-radius: 70%;

            height: 30vh;
            width: 30vh;

        }
    }
</style>