<script lang="ts">
  import FeatureCard from "$lib/FeatureCard.svelte";
  import Icon from "$lib/Icon.svelte";
  import { IconType } from "$lib/icons";
  import Milestone from "$lib/Milestone.svelte";
</script>

<section class="main-section">
  <div class="main-content maxed">
    <div class="title-wrapper">
      <h1>MEAD</h1>
      <Icon
        fill="var(--text-active)"
        iconId={IconType.MeadowlarkCircled}
        height="3.2rem"
        width="3.2rem"
      />
      <h1>WLARK</h1>
    </div>
    <p class="subtitle">
      Meadowlark is a (currently incomplete) project that aims to be a FREE and
      open-source DAW for Linux, Mac and Windows. Help us release it by
      contributing on GitHub!
    </p>
    <div class="action-buttons">
      <a href="https://github.com/MeadowlarkDAW/Meadowlark"> Github </a>
      <a href="https://www.youtube.com/watch?v=p7YXXieghto"> Learn More </a>
    </div>
  </div>

  <img class="maxed" src="gui-mockup.png" alt="" />
</section>
<section class="features">
  <h1 id="features">Main features</h1>
  <div class="divisor" />
  <div class="features-grid">
    <FeatureCard
      title="Free & Open Source <span>Forever</span>"
      text="No paywalls, micro-transactions, free trials, locked features, or paying for pre-built binaries."
      icon={IconType.OpenSource}
    />
    <FeatureCard
      title="<span>Parameter fiesta</span>"
      text="Assign macros, LFOs, and envelopes to any parameter."
      icon={IconType.OpenSource}
    />
    <FeatureCard
      title="Meant to be <span>Flexible</span>"
      text="Easy FX chains, flexible grouping and sends anywhere! Organize your project however you like!"
      icon={IconType.OpenSource}
    />
    <FeatureCard
      title="Wide <span>Plugin Support</span>"
      text="First-class support for the powerful and open-source CLAP plugin format. VST/VST3 plugins are supported as well."
      icon={IconType.OpenSource}
    />
    <FeatureCard
      title="<span>Customize</span> the uncustomizable"
      text="Fully themeable UI to fit your mood and taste. Create and share your own themes for Meadowlark!"
      icon={IconType.OpenSource}
    />
    <FeatureCard
      title="Built with <span>Love</span>"
      text="Meadowlark is built by a passionate team of musicians who want better and accessible tools for everyone."
      icon={IconType.OpenSource}
    />
  </div>
</section>
<section class="milestones">
  <h1 id="milestones">Roadmap</h1>
  <div class="divisor" />
  <div class="milestones-list">
    <Milestone
      name="Release v1.0"
      description="Version 1.0 of Meadowlark!"
      expected="Infinity"
      color="var(--accent-color)"
      icon={IconType.OpenSource}
    />
  </div>
</section>

<style lang="scss">
  .main-section,
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main-section {
    background: radial-gradient(
        ellipse at top right,
        var(--header-color-2) 0%,
        transparent 80%
      ),
      radial-gradient(
        ellipse at top left,
        var(--header-color-1) 0%,
        transparent 60%
      ),
      radial-gradient(ellipse at bottom, var(--contrast) 0%, transparent 60%);
    gap: 4rem;
    padding: 4rem 0;
  }

  .main-content {
    gap: 2rem;
  }

  .title-wrapper {
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    h1 {
      text-align: center;
      font-size: 3.8rem;
      font-weight: 800;
      line-height: 5rem;
      color: var(--text-active);
    }
  }

  .subtitle {
    max-width: 50rem;
    text-align: center;
    color: var(--text-idle);
  }

  .action-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    overflow: scroll;

    a {
      text-decoration: none;
      border-radius: 2rem;
      cursor: pointer;
      border: 1px solid var(--interactable-idle-border);
      background-color: var(--interactable-idle);
      padding: 0.5rem 1rem;
      color: var(--text-idle);

      &:hover {
        border: 1px solid var(--interactable-active-border);
        background-color: var(--interactable-active);
        color: var(--text-active);
      }
    }
  }

  img {
    width: var(--page-width);
  }

  .features {
    width: 100%;

    background: var(--background-main);
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-weight: 600;
      font-size: 2.5rem;
    }
  }

  .features-grid {
    width: 100%;
    max-width: 70rem;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 2rem 0rem;
    gap: 2rem;
  }

  .divisor {
    width: 100%;
    height: 1px;
    max-width: 70rem;
    margin: 2rem 0rem;
    background: var(--background-secondary);
  }

  @media screen and (min-width: 35rem) {
    .features-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media screen and (min-width: 80rem) {
    .features-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .milestones {
    width: 100%;

    background: var(--background-main);
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .milestones-list {
    width: 100%;
    max-width: 70rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    padding: 2rem 0rem;
    gap: 1rem;
  }

  h1 {
    font-family: SUIT;
    font-weight: 700;
    font-size: 2.5rem;
  }
</style>
