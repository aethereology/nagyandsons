// Main app — router + tweaks for Nagy & Sons Builders

const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "default",
  "typeSet": "serif",
  "heroVariant": "dark",
  "showStickyBar": true
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useStateApp(() => {
    const h = window.location.hash.replace("#", "");
    return ["home", "condo", "kitchen", "bathroom", "about", "contact"].includes(h) ? h : "home";
  });
  const [scrolled, setScrolled] = useStateApp(false);

  // Apply palette + type to body
  useEffectApp(() => {
    document.body.dataset.palette = tweaks.palette;
    document.body.dataset.type = tweaks.typeSet;
  }, [tweaks.palette, tweaks.typeSet]);

  // Hash-based routing
  useEffectApp(() => {
    function onHash() {
      const h = window.location.hash.replace("#", "");
      if (["home", "condo", "kitchen", "bathroom", "about", "contact"].includes(h)) {
        setRoute(h);
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Scroll listener for header shadow
  useEffectApp(() => {
    function onScroll() { setScrolled(window.scrollY > 12); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function navigate(to) {
    window.location.hash = to;
    setRoute(to);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  // Show sticky bar only on service pages (and after some scroll)
  const showSticky = tweaks.showStickyBar && ["condo", "kitchen", "bathroom", "about"].includes(route);

  return (
    <>
      <Header route={route} navigate={navigate} scrolled={scrolled} />
      {route === "home" && <HomePage navigate={navigate} tweaks={tweaks} />}
      {(route === "condo" || route === "kitchen" || route === "bathroom") && (
        <ServicePage kind={route} navigate={navigate} />
      )}
      {route === "about" && <AboutPage navigate={navigate} />}
      {route === "contact" && <ContactPage navigate={navigate} />}
      <Footer navigate={navigate} />
      <StickyEstimateBar show={showSticky} navigate={navigate} />

      <TweaksPanel>
        <TweakSection label="Palette" />
        <TweakRadio
          label="Color set"
          value={tweaks.palette}
          options={["default", "warm", "forest", "modern"]}
          onChange={(v) => setTweak("palette", v)}
        />

        <TweakSection label="Typography" />
        <TweakRadio
          label="Type pairing"
          value={tweaks.typeSet}
          options={["serif", "sans", "modern"]}
          onChange={(v) => setTweak("typeSet", v)}
        />

        <TweakSection label="Hero (home page)" />
        <TweakRadio
          label="Variant"
          value={tweaks.heroVariant}
          options={["dark", "split", "image"]}
          onChange={(v) => setTweak("heroVariant", v)}
        />

        <TweakSection label="Conversion" />
        <TweakToggle
          label="Sticky estimate bar"
          value={tweaks.showStickyBar}
          onChange={(v) => setTweak("showStickyBar", v)}
        />
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
