// Shared components for Nagy & Sons Builders site
// Components: Header, Footer, CTAButton, ServiceCard, ProcessStep, LeadForm,
// SectionHeading, ImagePlaceholder, ServiceAreaGrid, FAQItem, StickyEstimateBar

const { useState, useEffect, useRef } = React;

// ─── ImagePlaceholder ────────────────────────────────────────────
// Subtle striped SVG placeholder with monospace label
function ImagePlaceholder({ label = "image", ratio = "4/3", tone = "beige", style = {}, className = "" }) {
  const tones = {
    beige:   { bg: "var(--beige)",    stripe: "rgba(31,58,46,0.05)", text: "var(--green-deep)" },
    green:   { bg: "var(--green-deep)", stripe: "rgba(201,168,106,0.10)", text: "var(--gold)" },
    cream:   { bg: "var(--cream)",    stripe: "rgba(31,58,46,0.04)", text: "var(--green-deep)" },
    charcoal:{ bg: "var(--charcoal)", stripe: "rgba(201,168,106,0.10)", text: "var(--gold)" },
    gold:    { bg: "var(--gold)",     stripe: "rgba(31,58,46,0.08)",  text: "var(--green-deep)" },
  };
  const t = tones[tone] || tones.beige;
  return (
    <div
      className={`img-ph ${className}`}
      style={{
        aspectRatio: ratio,
        background: t.bg,
        color: t.text,
        backgroundImage: `repeating-linear-gradient(135deg, transparent 0 14px, ${t.stripe} 14px 15px)`,
        ...style,
      }}
    >
      <span className="img-ph__label">↳ {label}</span>
    </div>
  );
}

// ─── CTAButton ───────────────────────────────────────────────────
function CTAButton({ children, onClick, href, variant = "primary", size = "md", icon = true, ...rest }) {
  const cls = `cta cta--${variant} cta--${size}`;
  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );
  if (href) return <a className={cls} href={href} onClick={onClick} {...rest}>{inner}</a>;
  return <button className={cls} onClick={onClick} type="button" {...rest}>{inner}</button>;
}

// ─── SectionHeading ──────────────────────────────────────────────
function SectionHeading({ eyebrow, title, lede, align = "left", invert = false }) {
  return (
    <div className={`sec-hd sec-hd--${align} ${invert ? "sec-hd--invert" : ""}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="sec-hd__title">{title}</h2>
      {lede && <p className="sec-hd__lede">{lede}</p>}
    </div>
  );
}

// ─── Header ──────────────────────────────────────────────────────
function Header({ route, navigate, scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { label: "Home", to: "home" },
    { label: "Condo", to: "condo" },
    { label: "Kitchen", to: "kitchen" },
    { label: "Bathroom", to: "bathroom" },
    { label: "About", to: "about" },
    { label: "Contact", to: "contact" },
  ];
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} data-screen-label="Header">
      <div className="site-header__inner">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); navigate("home"); }}>
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="32" height="32">
              <rect x="1" y="1" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M8 23V9l8 11V9M20 9v14h4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="brand__text">
            <span className="brand__name">Nagy &amp; Sons</span>
            <span className="brand__sub">Builders · CGC1513757</span>
          </span>
        </a>
        <nav className="nav" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.to}
              href={`#${l.to}`}
              className={`nav__link ${route === l.to ? "is-active" : ""}`}
              onClick={(e) => { e.preventDefault(); navigate(l.to); }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="site-header__actions">
          <a className="site-header__phone" href="tel:+1XXXXXXXXXX">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 3c0 5 4 9 9 9l1-2.5-3-1-1 1c-1.5-.6-2.9-2-3.5-3.5l1-1L4 2 2 3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
            (XXX) XXX-XXXX
          </a>
          <CTAButton variant="primary" size="sm" onClick={() => navigate("contact")}>
            Request Estimate
          </CTAButton>
          <button
            className="hamburger"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      {/* mobile drawer */}
      {mobileOpen && (
        <div className="mobile-drawer" onClick={() => setMobileOpen(false)}>
          <div className="mobile-drawer__panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer__head">
              <span className="brand__name">Nagy &amp; Sons</span>
              <button className="twk-x" onClick={() => setMobileOpen(false)} aria-label="Close menu">✕</button>
            </div>
            <div className="mobile-drawer__links">
              {links.map((l) => (
                <a
                  key={l.to}
                  href={`#${l.to}`}
                  className={`mobile-drawer__link ${route === l.to ? "is-active" : ""}`}
                  onClick={(e) => { e.preventDefault(); navigate(l.to); setMobileOpen(false); }}
                >
                  {l.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              ))}
            </div>
            <div className="mobile-drawer__cta">
              <CTAButton variant="primary" onClick={() => { navigate("contact"); setMobileOpen(false); }}>
                Request Estimate
              </CTAButton>
              <a className="mobile-drawer__phone" href="tel:+1XXXXXXXXXX">(XXX) XXX-XXXX</a>
              <div className="mobile-drawer__lic">Florida CGC1513757</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Footer ──────────────────────────────────────────────────────
function Footer({ navigate }) {
  return (
    <footer className="site-footer" data-screen-label="Footer">
      <div className="site-footer__inner">
        <div className="site-footer__col site-footer__brand">
          <div className="brand brand--lg">
            <span className="brand__mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="36" height="36">
                <rect x="1" y="1" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M8 23V9l8 11V9M20 9v14h4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="brand__text">
              <span className="brand__name">Nagy &amp; Sons Builders</span>
              <span className="brand__sub" style={{ color: "rgba(246,243,236,0.55)" }}>Renovation Contractors</span>
            </span>
          </div>
          <p className="site-footer__lede">
            A Hollywood, Florida–based renovation contractor specializing in condo, kitchen, and bathroom remodels across South Florida.
          </p>
          <div className="lic-pill lic-pill--invert">
            <span className="lic-pill__dot" />
            Florida Certified General Contractor · CGC1513757
          </div>
        </div>

        <div className="site-footer__col">
          <div className="site-footer__h">Services</div>
          <ul>
            <li><a href="#condo" onClick={(e) => { e.preventDefault(); navigate("condo"); }}>Condo Renovations</a></li>
            <li><a href="#kitchen" onClick={(e) => { e.preventDefault(); navigate("kitchen"); }}>Kitchen Remodeling</a></li>
            <li><a href="#bathroom" onClick={(e) => { e.preventDefault(); navigate("bathroom"); }}>Bathroom Remodeling</a></li>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); navigate("home"); }}>Full Interior Renovations</a></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <div className="site-footer__h">Service Area</div>
          <ul className="site-footer__compact">
            <li>Hollywood, FL</li>
            <li>Hallandale Beach</li>
            <li>Aventura</li>
            <li>Fort Lauderdale</li>
            <li>Dania Beach</li>
            <li>Pembroke Pines</li>
            <li>Broward County</li>
            <li>Miami-Dade</li>
          </ul>
        </div>

        <div className="site-footer__col">
          <div className="site-footer__h">Contact</div>
          <ul>
            <li><a href="tel:+1XXXXXXXXXX">(XXX) XXX-XXXX</a></li>
            <li><a href="mailto:info@nagysonsbuilders.com">info@nagysonsbuilders.com</a></li>
            <li>Hollywood, Florida</li>
          </ul>
          <CTAButton variant="ghost-light" size="sm" onClick={() => navigate("contact")}>
            Request Estimate
          </CTAButton>
        </div>
      </div>
      <div className="site-footer__base">
        <div>© {new Date().getFullYear()} Nagy &amp; Sons Builders. All rights reserved.</div>
        <div>Florida Certified General Contractor · CGC1513757</div>
      </div>
    </footer>
  );
}

// ─── ServiceCard ─────────────────────────────────────────────────
function ServiceCard({ icon, title, description, bullets, onClick, size = "lg", tone = "beige" }) {
  return (
    <article className={`svc-card svc-card--${size}`} onClick={onClick}>
      <ImagePlaceholder label={`${title.toLowerCase()} — replace`} ratio="4/3" tone={tone} className="svc-card__img" />
      <div className="svc-card__body">
        <h3 className="svc-card__title">{title}</h3>
        <p className="svc-card__desc">{description}</p>
        {bullets && (
          <ul className="svc-card__bullets">
            {bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
        )}
        {onClick && (
          <div className="svc-card__more">
            Learn more
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        )}
      </div>
    </article>
  );
}

// ─── ProcessStep ─────────────────────────────────────────────────
function ProcessStep({ num, title, description, last }) {
  return (
    <div className="proc-step">
      <div className="proc-step__num">{String(num).padStart(2, "0")}</div>
      <div className="proc-step__body">
        <h3 className="proc-step__title">{title}</h3>
        <p className="proc-step__desc">{description}</p>
      </div>
      {!last && <div className="proc-step__line" aria-hidden="true" />}
    </div>
  );
}

// ─── ServiceAreaGrid ─────────────────────────────────────────────
function ServiceAreaGrid({ invert = false }) {
  const areas = [
    "Hollywood, FL", "Hallandale Beach", "Aventura", "Fort Lauderdale",
    "Dania Beach", "Pembroke Pines", "Broward County", "Miami-Dade",
    "Sunny Isles", "Davie", "Cooper City", "South Florida",
  ];
  return (
    <div className={`area-grid ${invert ? "area-grid--invert" : ""}`}>
      {areas.map((a) => (
        <div className="area-grid__item" key={a}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1" />
            <circle cx="5" cy="5" r="1.5" fill="currentColor" />
          </svg>
          {a}
        </div>
      ))}
    </div>
  );
}

// ─── FAQItem ─────────────────────────────────────────────────────
function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button className="faq-item__q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="faq-item__chev">
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="faq-item__a" style={{ maxHeight: open ? "320px" : "0" }}>
        <p>{a}</p>
      </div>
    </div>
  );
}

// ─── LeadForm ────────────────────────────────────────────────────
function LeadForm({ compact = false, dark = false }) {
  const [data, setData] = useState({
    name: "", phone: "", email: "", address: "",
    projectType: "", budget: "", timeline: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  function update(k, v) {
    setData((d) => ({ ...d, [k]: v }));
    if (touched[k]) validate({ ...data, [k]: v }, k);
  }
  function blur(k) {
    setTouched((t) => ({ ...t, [k]: true }));
    validate(data, k);
  }
  function validate(d, field) {
    const e = { ...errors };
    if (field === "name" || !field) {
      if (!d.name.trim()) e.name = "Please enter your name."; else delete e.name;
    }
    if (field === "phone" || !field) {
      const digits = d.phone.replace(/\D/g, "");
      if (!d.phone.trim()) e.phone = "Phone is required.";
      else if (digits.length < 10) e.phone = "Enter a 10-digit phone number.";
      else delete e.phone;
    }
    if (field === "email" || !field) {
      if (!d.email.trim()) e.email = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "Enter a valid email.";
      else delete e.email;
    }
    if (field === "projectType" || !field) {
      if (!d.projectType) e.projectType = "Select a project type."; else delete e.projectType;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: 1, phone: 1, email: 1, projectType: 1 });
    if (validate(data)) {
      setSubmitted(true);
    }
  }
  function formatPhone(v) {
    const d = v.replace(/\D/g, "").slice(0, 10);
    if (d.length < 4) return d;
    if (d.length < 7) return `(${d.slice(0,3)}) ${d.slice(3)}`;
    return `(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}`;
  }

  if (submitted) {
    return (
      <div className={`lead-form lead-form--success ${dark ? "lead-form--dark" : ""}`}>
        <div className="lead-form__success-mark" aria-hidden="true">
          <svg viewBox="0 0 48 48" width="48" height="48">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M14 24l7 7 14-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        <h3>Thank you, {data.name.split(" ")[0]}.</h3>
        <p>We've received your request and will follow up at <strong>{data.phone}</strong> or <strong>{data.email}</strong> within one business day.</p>
        <div className="lead-form__summary">
          <div><span>Project</span><strong>{data.projectType}</strong></div>
          {data.budget && <div><span>Budget</span><strong>{data.budget}</strong></div>}
          {data.timeline && <div><span>Timeline</span><strong>{data.timeline}</strong></div>}
        </div>
        <button className="cta cta--ghost cta--sm" onClick={() => { setSubmitted(false); setData({ name:"", phone:"", email:"", address:"", projectType:"", budget:"", timeline:"", message:"" }); setTouched({}); setErrors({}); }}>
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form className={`lead-form ${compact ? "lead-form--compact" : ""} ${dark ? "lead-form--dark" : ""}`} onSubmit={handleSubmit} noValidate>
      <div className="lead-form__grid">
        <div className={`field ${errors.name && touched.name ? "field--err" : ""}`}>
          <label htmlFor="lf-name">Name <span className="req">*</span></label>
          <input id="lf-name" type="text" value={data.name} onChange={(e) => update("name", e.target.value)} onBlur={() => blur("name")} autoComplete="name" placeholder="Jane Smith" />
          {errors.name && touched.name && <div className="field__err">{errors.name}</div>}
        </div>
        <div className={`field ${errors.phone && touched.phone ? "field--err" : ""}`}>
          <label htmlFor="lf-phone">Phone <span className="req">*</span></label>
          <input id="lf-phone" type="tel" value={data.phone} onChange={(e) => update("phone", formatPhone(e.target.value))} onBlur={() => blur("phone")} autoComplete="tel" placeholder="(305) 555-0100" />
          {errors.phone && touched.phone && <div className="field__err">{errors.phone}</div>}
        </div>
        <div className={`field ${errors.email && touched.email ? "field--err" : ""}`}>
          <label htmlFor="lf-email">Email <span className="req">*</span></label>
          <input id="lf-email" type="email" value={data.email} onChange={(e) => update("email", e.target.value)} onBlur={() => blur("email")} autoComplete="email" placeholder="you@example.com" />
          {errors.email && touched.email && <div className="field__err">{errors.email}</div>}
        </div>
        <div className="field">
          <label htmlFor="lf-addr">Project address or city</label>
          <input id="lf-addr" type="text" value={data.address} onChange={(e) => update("address", e.target.value)} placeholder="Hollywood, FL" />
        </div>
        <div className={`field ${errors.projectType && touched.projectType ? "field--err" : ""}`}>
          <label htmlFor="lf-type">Project type <span className="req">*</span></label>
          <div className="select-wrap">
            <select id="lf-type" value={data.projectType} onChange={(e) => update("projectType", e.target.value)} onBlur={() => blur("projectType")}>
              <option value="">Select project type</option>
              <option>Condo renovation</option>
              <option>Kitchen remodel</option>
              <option>Bathroom remodel</option>
              <option>Full interior renovation</option>
              <option>Other</option>
            </select>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="select-wrap__chev"><path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          {errors.projectType && touched.projectType && <div className="field__err">{errors.projectType}</div>}
        </div>
        <div className="field">
          <label htmlFor="lf-budget">Estimated budget</label>
          <div className="select-wrap">
            <select id="lf-budget" value={data.budget} onChange={(e) => update("budget", e.target.value)}>
              <option value="">Select range</option>
              <option>Under $15,000</option>
              <option>$15,000 – $30,000</option>
              <option>$30,000 – $75,000</option>
              <option>$75,000 – $150,000</option>
              <option>$150,000+</option>
            </select>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="select-wrap__chev"><path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
        <div className="field field--full">
          <label htmlFor="lf-timeline">Timeline</label>
          <div className="seg" role="radiogroup" aria-label="Timeline">
            {["ASAP", "1–3 months", "3–6 months", "Planning ahead"].map((t) => (
              <button
                key={t}
                type="button"
                role="radio"
                aria-checked={data.timeline === t}
                className={`seg__btn ${data.timeline === t ? "is-on" : ""}`}
                onClick={() => update("timeline", t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="field field--full">
          <label htmlFor="lf-msg">Tell us about your project</label>
          <textarea id="lf-msg" rows="4" value={data.message} onChange={(e) => update("message", e.target.value)} placeholder="A few details about the space, scope, or what you're hoping to achieve..." />
        </div>
      </div>
      <div className="lead-form__foot">
        <CTAButton variant={dark ? "gold" : "primary"} size="lg" onClick={handleSubmit}>
          Request My Estimate
        </CTAButton>
        <p className="lead-form__disclaimer">
          By submitting this form, you agree to be contacted about your renovation project.
        </p>
      </div>
    </form>
  );
}

// ─── StickyEstimateBar ───────────────────────────────────────────
function StickyEstimateBar({ show, navigate }) {
  if (!show) return null;
  return (
    <div className="sticky-bar" role="region" aria-label="Get a quick estimate">
      <div className="sticky-bar__inner">
        <div className="sticky-bar__msg">
          <span className="sticky-bar__eyebrow">Free estimate</span>
          <span className="sticky-bar__txt">Plan your renovation with a licensed Florida CGC.</span>
        </div>
        <div className="sticky-bar__actions">
          <a className="sticky-bar__phone" href="tel:+1XXXXXXXXXX">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 3c0 5 4 9 9 9l1-2.5-3-1-1 1c-1.5-.6-2.9-2-3.5-3.5l1-1L4 2 2 3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
            Call
          </a>
          <CTAButton variant="gold" size="sm" onClick={() => navigate("contact")}>Request Estimate</CTAButton>
        </div>
      </div>
    </div>
  );
}

// ─── PageHero (reusable hero for sub-pages) ──────────────────────
function PageHero({ eyebrow, title, lede, breadcrumbs, navigate }) {
  return (
    <section className="page-hero" data-screen-label={`Hero — ${title}`}>
      <div className="page-hero__inner">
        {breadcrumbs && (
          <nav className="crumbs" aria-label="Breadcrumb">
            {breadcrumbs.map((c, i) => (
              <React.Fragment key={c.label}>
                {i > 0 && <span className="crumbs__sep">/</span>}
                {c.to ? (
                  <a href={`#${c.to}`} onClick={(e) => { e.preventDefault(); navigate(c.to); }}>{c.label}</a>
                ) : (
                  <span>{c.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
        {eyebrow && <div className="eyebrow eyebrow--gold">{eyebrow}</div>}
        <h1 className="page-hero__title">{title}</h1>
        {lede && <p className="page-hero__lede">{lede}</p>}
        <div className="page-hero__actions">
          <CTAButton variant="gold" onClick={() => navigate("contact")}>Request an estimate</CTAButton>
          <CTAButton variant="ghost-light" onClick={() => { document.getElementById("page-body")?.scrollIntoView({ behavior: "smooth", block: "start" }); }} icon={false}>
            Learn more
          </CTAButton>
        </div>
        <div className="page-hero__lic">
          <span className="lic-pill__dot" /> Florida Certified General Contractor · CGC1513757
        </div>
      </div>
      <div className="page-hero__deco" aria-hidden="true">
        <ImagePlaceholder label={`${title.toLowerCase()} — replace`} ratio="auto" tone="gold" style={{ height: "100%", aspectRatio: "auto" }} />
      </div>
    </section>
  );
}

// ─── ContentCTA (mid-page CTA strip) ─────────────────────────────
function ContentCTA({ navigate, title = "Ready to plan your renovation?", lede = "Share a few project details and we'll respond within one business day." }) {
  return (
    <section className="content-cta">
      <div className="content-cta__inner">
        <div>
          <div className="eyebrow eyebrow--gold">Free estimate</div>
          <h3>{title}</h3>
          <p>{lede}</p>
        </div>
        <div className="content-cta__actions">
          <CTAButton variant="gold" size="lg" onClick={() => navigate("contact")}>Request Estimate</CTAButton>
          <a href="tel:+1XXXXXXXXXX" className="content-cta__phone">(XXX) XXX-XXXX</a>
        </div>
      </div>
    </section>
  );
}

// expose to other scripts
Object.assign(window, {
  ImagePlaceholder, CTAButton, SectionHeading, Header, Footer,
  ServiceCard, ProcessStep, ServiceAreaGrid, FAQItem, LeadForm,
  StickyEstimateBar, PageHero, ContentCTA,
});
