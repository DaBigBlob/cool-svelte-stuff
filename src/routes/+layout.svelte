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
    .ani_cont {
        position: absolute;
        height: 100vh;
        width: 100vw;
        z-index: -1;
    }

    .ani_cont > div {
        --perfect-rad: min(98vh, 98vw);
        --left-center: calc(50vw - var(--perfect-rad)/2);
        height: var(--perfect-rad);
        width: var(--perfect-rad);

        z-index: inherit;
        position: inherit;
        left: var(--left-center);

        border-radius: 50%;
        
    }

    .ani_cont > div > div {
        height: 35%;
        width: 35%;

        z-index: inherit;
        position: relative;
        left: 16%;
        top: 16%;

        border-top-right-radius: 98%;
        border-top-left-radius: 0%;
        border-bottom-left-radius: 98%;
        border-bottom-right-radius: 0%;

        background-color: rgba(52, 110, 95, 0.344);
    }

    .cr1 {
        animation-name: mv1;
        animation-duration: 3s;
        animation-iteration-count: infinite;
    }
    @keyframes mv1 {
        0% {
            transform: rotate(0deg);       
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .cr2 {
        animation-name: mv2;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }
    @keyframes mv2 {
        0% {
            transform: rotate(0deg);       
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .cr3 {
        animation-name: mv3;
        animation-duration: 3s;
        animation-iteration-count: infinite;
    }
    @keyframes mv3 {
        0% {
            transform: rotate(0deg);       
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .cr4 {
        animation-name: mv4;
        animation-duration: 5s;
        animation-iteration-count: infinite;
    }
    @keyframes mv4 {
        0% {
            transform: rotate(0deg);       
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .cr5 {
        animation-name: mv5;
        animation-duration: 7s;
        animation-iteration-count: infinite;
    }
    @keyframes mv5 {
        0% {
            transform: rotate(0deg);       
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .cr6 {
        animation-name: mv6;
        animation-duration: 11s;
        animation-iteration-count: infinite;
    }
    @keyframes mv6 {
        0% {
            transform: rotate(0deg);       
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>