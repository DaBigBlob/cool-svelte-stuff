<script>
    export let size = '500px';
    export let speed = 2;
</script>

<div class="ani_cont" style="--size: {size}; --speed: {speed};">
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


<style>
    * {
        margin: 0%;
        border: 0%;
        padding: 0%;

        z-index: inherit;
    }

    /* animation container */
    .ani_cont {
        max-height: 100%;
        max-width: 100%;
        height: 100%;
        width: 100%;

        position: relative;

        overflow-y: hidden;
        overflow-x: hidden;
    }

    /*circles*/
    .ani_cont > div > div, .ani_cont > div {
        height: var(--size);
        width: var(--size);

        position: absolute;

        border-radius: 50%;
    }

    /* group circle */
    .ani_cont > div {
        left: calc(50% - var(--size)/2);
        top: calc(50% - var(--size)/2);

        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-name: rot1;
    }

    /* petals */
    .vi {
        height: 25%; 
        width: 25%;

        position: absolute;
        left: 15%;
        top: 15%;

        border-top-right-radius: 90%;
        border-top-left-radius: 0%;
        border-bottom-left-radius: 90%;
        border-bottom-right-radius: 20%;

        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-timing-function: linear;
        animation-duration: calc(7s / var(--speed));
    }

    /* spread same grp petals */
    .cr1 {transform: rotate(0deg);}
    .cr2 {transform: rotate(120deg);}
    .cr3 {transform: rotate(240deg);}


    /* spread same grp petals */
    .cr1 > div {animation-name: blr1;}
    .cr2 > div {animation-name: blr2;}
    .cr3 > div {animation-name: blr3;}


    /* spread different petals */
    .grp1 {transform: rotate(0deg); animation-duration: calc(3s / var(--speed));}
    .grp2 {transform: rotate(60deg); animation-duration: calc(5s / var(--speed));}
    .grp3 {transform: rotate(120deg); animation-duration: calc(7s / var(--speed));}
    .grp4 {transform: rotate(180deg); animation-duration: calc(11s / var(--speed));}
    .grp5 {transform: rotate(240deg); animation-duration: calc(13s / var(--speed));}
    .grp6 {transform: rotate(300deg); animation-duration: calc(17s / var(--speed));}

    /* give diff grp petals dif color */
    .grp2 > div > div {background-color: rgba(255, 0, 89, 0.473);}
    .grp3 > div > div {background-color: rgba(149, 0, 255, 0.503);}
    .grp4 > div > div {background-color: rgba(180, 230, 0, 0.486);}
    .grp5 > div > div {background-color: rgba(15, 255, 219, 0.457);}
    .grp6 > div > div {background-color: rgba(246, 255, 0, 0.47);}

    /* rotation anims */
    @keyframes rot1 {0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);}}
    /* @keyframes rot2 {0% {transform: rotate(360deg);} 100% {transform: rotate(0deg);}} */

    /* blur in-out anims */
    @keyframes blr1 {0% {filter: blur(calc(0.01 * var(--size)));} 50% {filter: blur(calc(0.03 * var(--size)));} 100% {filter: blur(calc(0.08 * var(--size)));}}
    @keyframes blr2 {0% {filter: blur(calc(0.03 * var(--size)));} 50% {filter: blur(calc(0.08 * var(--size)));} 100% {filter: blur(calc(0.01 * var(--size)));}}
    @keyframes blr3 {0% {filter: blur(calc(0.08 * var(--size)));} 50% {filter: blur(calc(0.01 * var(--size)));} 100% {filter: blur(calc(0.03 * var(--size)));}}
    
</style>