<script>
    import Logo from "$lib/assets/logos/Logo.svelte";
    import { Logos } from "$lib/assets/logos/logos";
    import MainContentButton from "./MainContentButton.svelte";
</script>

<div class="parallax-layer img-wrapper">
    <img class="img-background" src="gui-mockup.png" alt="meadowlark" />
</div>
<div class="parallax-layer front">
    <div class="main-content">
        <div class="main-content-title-wrapper">
            <h1 class="main-content-title">MEAD</h1>
            <Logo
                fill="var(--text-active)"
                logoId={Logos.MeadowlarkCircled}
                height="3.2rem"
                width="3.2rem"
            />
            <h1 class="main-content-title">WLARK</h1>
        </div>
        <p id="main-content-subtitle">
            Meadowlark is a (currently incomplete) project that aims to be a
            FREE and open-source DAW for Linux, Mac and Windows. Help us release
            it by contributing on GitHub!
        </p>
        <div id="main-content-buttons">
            <MainContentButton
                text="GitHub"
                link="https://github.com/MeadowlarkDAW/Meadowlark"
            />
            <MainContentButton
                text="Learn More"
                link="https://www.youtube.com/watch?v=p7YXXieghto"
            />
        </div>
    </div>
</div>

<style>
    .main-content {
        height: 100%;
        max-width: 28rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-top: 8rem;
        margin: auto;
    }

    .main-content-title-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
    }

    .main-content-title {
        text-align: center;
        font-family: SUIT;
        font-size: 3rem;
        font-weight: 900;
        line-height: 5rem;
        color: var(--text-active);
    }

    #main-content-subtitle {
        text-align: center;
        line-clamp: 2;
        color: var(--text-idle);
        padding-top: 1rem;
        padding-bottom: 2rem;
    }

    #main-content-buttons {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        gap: 1rem;
        overflow: scroll;
    }

    .front {
        transform: translateZ(0) scale(1);
        z-index: 100;
    }

    .img-wrapper {
        transform: translateZ(-50px) scale(1.125);
        z-index: 1;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .img-background {
        width: 30rem;
        height: 16.8rem;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        margin-top: 26rem;
    }

    @media screen and (min-width: 35rem) {
        .img-background {
            width: 40rem;
            height: 22.5rem;
        }

        .main-content {
            max-width: 38rem;
        }
        .main-content-title {
            font-size: 4rem;
        }
    }

    @media screen and (min-width: 80rem) {
        .img-background {
            width: 65rem;
            height: 36.5rem;
        }
    }
</style>
