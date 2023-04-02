<script lang="ts">
	import './styles.css';
</script>



<div class="ani_cont">
    <div class="grp1">
        <div class="cr1"><div class="vi"></div></div>
        <div class="cr2"><div class="vi"></div></div>
        <div class="cr3"><div class="vi"></div></div>
    </div>
    <div class="grp2">
        <div class="cr1"><div class="vi"></div></div>
        <div class="cr2"><div class="vi"></div></div>
        <div class="cr3"><div class="vi"></div></div>
    </div>
    <div class="grp3">
        <div class="cr1"><div class="vi"></div></div>
        <div class="cr2"><div class="vi"></div></div>
        <div class="cr3"><div class="vi"></div></div>
    </div>
    <div class="grp4">
        <div class="cr1"><div class="vi"></div></div>
        <div class="cr2"><div class="vi"></div></div>
        <div class="cr3"><div class="vi"></div></div>
    </div>
    <div class="grp5">
        <div class="cr1"><div class="vi"></div></div>
        <div class="cr2"><div class="vi"></div></div>
        <div class="cr3"><div class="vi"></div></div>
    </div>
    <div class="grp6">
        <div class="cr1"><div class="vi"></div></div>
        <div class="cr2"><div class="vi"></div></div>
        <div class="cr3"><div class="vi"></div></div>
    </div>
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


    /* animation container */
    .ani_cont {
        position: absolute;
        height: 100vh;
        width: 100vw;
        z-index: -1;
        overflow-y: hidden;
    }

    /* petals */
    .vi {
        height: 25%; 
        width: 25%;

        z-index: inherit;
        position: relative;
        left: 13%;
        top: 13%;

        border-top-right-radius: 90%;
        border-top-left-radius: 0%;
        border-bottom-left-radius: 90%;
        border-bottom-right-radius: 20%;

        filter: blur(2vh);
    }

    /*circles*/
    .ani_cont > div > div, .ani_cont > div {
        --perfect-rad: min(98vh, 98vw);
        height: var(--perfect-rad);
        width: var(--perfect-rad);

        z-index: -1;
        position: absolute;

        border-radius: 50%;
    }

    /* group circle */
    .ani_cont > div {
        left: calc(50vw - var(--perfect-rad)/2);
        top: calc(50vh - var(--perfect-rad)/2);

        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-name: rot1;
    }
    @keyframes rot1 {0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);}}

    /* spread same grp petals */
    .cr1 {transform: rotate(0deg);}
    .cr2 {transform: rotate(120deg);}
    .cr3 {transform: rotate(240deg);}


    /* spread different petals */
    .grp2 {transform: rotate(0deg); animation-duration: 3s;}
    .grp2 {transform: rotate(60deg); animation-duration: 5s;}
    .grp3 {transform: rotate(120deg); animation-duration: 7s;}
    .grp4 {transform: rotate(180deg); animation-duration: 9s;}
    .grp5 {transform: rotate(240deg); animation-duration: 11s;}
    .grp6 {transform: rotate(300deg); animation-duration: 13s;}

    /* rotation anims */
    
    /* @keyframes rot2 {0% {transform: rotate(0deg);} 100% {transform: rotate(-360deg);}} */

    /* give diff grp petals dif color */
    .grp2 > div > div {background-color: rgba(255, 0, 89, 0.473);}
    .grp3 > div > div {background-color: rgba(149, 0, 255, 0.503);}
    .grp4 > div > div {background-color: rgba(180, 230, 0, 0.486);}
    .grp5 > div > div {background-color: rgba(15, 255, 219, 0.457);}
    .grp6 > div > div {background-color: rgba(255, 140, 0, 0.47);}


    /* .cr1 {
        animation-name: mv1;
        animation-duration: 3.13s;
    } */
</style>