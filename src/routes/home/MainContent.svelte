<script>
    import Logo from "$lib/assets/logos/Logo.svelte";
    import { Logos } from "$lib/assets/logos/logos";
    import MainContentButton from "./MainContentButton.svelte";
</script>

<div class="parallax-layer img-background" />
<div class="parallax-layer front">
    <div class="main-content">
        <div class="main-content-title-wrapper">
            <h1 class="main-content-title">MEAD</h1>
            <Logo
                fill="var(--color-level-9)"
                logoId={Logos.MeadowlarkCircled}
                height="3.2rem"
                width="3.2rem"
            />
            <h1 class="main-content-title">WLARK</h1>
        </div>
        <p id="main-content-subtitle">
            Meadowlark is a (currently incomplete) project that aims to be a
            FREE and open-source DAW for Linux, Mac and Windows.
        </p>
        <div id="main-content-buttons">
            <MainContentButton text="Download" accented={true} />
            <MainContentButton text="Documentation" />
        </div>
    </div>
</div>

<style>
    .main-content {
        height: 100%;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;
        padding-bottom: 8rem;
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
        font-size: 4rem;
        font-weight: 900;
        line-height: 5rem;
        color: var(--color-level-9);
    }

    #main-content-subtitle {
        text-align: center;
        font-family: Min Sans;
        line-clamp: 2;
        color: var(--color-level-7);
        padding-top: 2rem;
        padding-bottom: 4rem;
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

    .img-background {
        width: 125%;
        height: 125%;
        background: linear-gradient(to bottom, #000000 0%, #00000000 50%),
            url("gui-mockup.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        /* Parallax */
        transform: translateZ(-350px) scale(2.5);
        z-index: 1;

        filter: blur(2px);
    }
</style>
