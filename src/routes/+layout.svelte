<script lang="ts">
	import './styles.css';
</script>



<div class="ani_cont">
    <div class="cr1"><div class="vi"></div></div>
    <div class="cr2"><div class="vi"></div></div>
    <div class="cr3"><div class="vi"></div></div>
    <div class="cr4"><div class="vi"></div></div>
    <div class="cr5"><div class="vi"></div></div>
    <div class="cr6"><div class="vi"></div></div>
</div>


<slot/>



<style>
    :root {
        height: 100vh;
        width: 100vw;
    }
    * {
        margin: 0%;
        border: 0%;
        padding: 0%;
    }

    .ani_cont {
        position: absolute;
        height: 100vh;
        width: 100vw;
        z-index: -1;
        overflow-y: hidden;
    }

    .ani_cont > div {
        --perfect-rad: min(98vh, 98vw);
        height: var(--perfect-rad);
        width: var(--perfect-rad);

        z-index: inherit;
        position: inherit;
        left: calc(50vw - var(--perfect-rad)/2);
        top: calc(50vh - var(--perfect-rad)/2);

        border-radius: 50%;

        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    .ani_cont > div > div {
        height: 25%; 
        width: 25%;

        z-index: inherit;
        position: relative;
        left: 17%;
        top: 17%;

        border-top-right-radius: 90%;
        border-top-left-radius: 0%;
        border-bottom-left-radius: 90%;
        border-bottom-right-radius: 20%;

        filter: blur(2vh);
    }

    .cr1 {
        animation-name: mv1;
        animation-duration: 3.13s;
    }
    .cr1 > div {
        background-color: rgba(92, 3, 188, 0.511);
    }
    @keyframes mv1 {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
    }

    .cr2 {
        animation-name: mv2;
        animation-duration: 4.39s;
    }
    .cr2 > div {
        background-color: rgba(38, 8, 85, 0.425);
    }
    @keyframes mv2 {
        0% {transform: rotate(60deg);}
        100% {transform: rotate(420deg);}
    }

    .cr3 {
        animation-name: mv3;
        animation-duration: 5.71s;
    }
    .cr3 > div {
        background-color: rgba(45, 6, 87, 0.481);
    }
    @keyframes mv3 {
        0% {transform: rotate(120deg);}
        100% {transform: rotate(480deg);}
    }

    .cr4 {
        animation-name: mv4;
        animation-duration: 6.91s;
    }
    .cr4 > div {
        background-color: rgba(64, 5, 113, 0.453);
    }
    @keyframes mv4 {
        0% {transform: rotate(180deg);}
        100% {transform: rotate(540deg);}
    }

    .cr5 {
        animation-name: mv5;
        animation-duration: 8.29s;
    }
    .cr5 > div {
        background-color: rgba(91, 4, 138, 0.467);
    }
    @keyframes mv5 {
        0% {transform: rotate(240deg);}
        100% {transform: rotate(600deg);}
    }

    .cr6 {
        animation-name: mv6;
        animation-duration: 9.77s;
    }
    .cr6 > div {
        background-color: rgba(97, 4, 163, 0.451);
    }
    @keyframes mv6 {
        0% {transform: rotate(300deg);}
        100% {transform: rotate(660deg);}
    }
</style>