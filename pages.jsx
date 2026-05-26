// Service pages: Condo, Kitchen, Bathroom + About + Contact

function ServicePage({ kind, navigate }) {
  const meta = {
    condo: {
      eyebrow: "Condo Renovations",
      title: "Condo Renovation Contractor in Hollywood, FL",
      lede: "Interior condo upgrades for South Florida buildings — kitchens, bathrooms, flooring, finishes, and layout updates, coordinated with building access and association requirements in mind.",
      breadcrumbs: [{ label: "Home", to: "home" }, { label: "Condo Renovations" }],
      intro:
        "Nagy & Sons Builders works with condo owners across Hollywood, Hallandale Beach, Aventura, Fort Lauderdale, and the wider South Florida coast — renovating interiors, updating kitchens and bathrooms, replacing flooring, improving layouts, and refreshing older units.\n\nCondo work is its own discipline. Building access, elevator reservations, association rules, working hours, and protecting shared corridors all matter as much as the construction itself. As a licensed Florida CGC (CGC1513757), we plan the scope, coordinate trades, and run projects in a way that respects both your unit and your neighbors.",
      sections: [
        {
          h: "Condo renovation services",
          p: "Full and partial interior renovations for condo units, including kitchens, bathrooms, flooring replacement, drywall, lighting, painting, closet build-outs, and complete unit refreshes.",
          bullets: ["Full unit renovations", "Kitchen and bathroom remodels", "Flooring + finish upgrades", "Lighting + electrical updates", "Closet + storage build-outs"],
          tone: "beige",
        },
        {
          h: "Kitchen & bath updates for condos",
          p: "The two highest-impact rooms in any condo. We handle cabinetry, countertops, tile, fixtures, and the plumbing and electrical coordination they depend on.",
          bullets: ["Cabinet + countertop replacement", "Tile + backsplash work", "Vanity + plumbing fixtures", "Layout updates within unit footprint"],
          tone: "cream",
        },
        {
          h: "Flooring, drywall, lighting & finishes",
          p: "Surface and finish work that brings a dated unit back to current. Tile, LVP, paint, baseboards, trim, doors, and lighting.",
          bullets: ["Tile + luxury vinyl plank", "Drywall + paint", "Baseboards, trim, doors", "Recessed + decorative lighting"],
          tone: "green",
        },
        {
          h: "Working with condo associations",
          p: "South Florida associations vary — some require contractor licensing on file, certificates of insurance, work-hour windows, and material delivery coordination. We come prepared. We can submit licensing and insurance documentation, follow building rules on noise and access, and schedule heavier work around what your association allows.",
          bullets: ["Licensing + COI submission", "Working-hour compliance", "Elevator + delivery coordination", "Common-area protection"],
          tone: "charcoal",
        },
        {
          h: "Why choose a licensed CGC",
          p: "A Florida Certified General Contractor can pull permits for and supervise a wider range of work than smaller specialty licenses. For larger condo scopes — multiple trades, structural touches, or whole-unit renovations — a CGC is the right level of license.",
          bullets: ["License CGC1513757", "Multi-trade supervision", "Permitted work where required", "Single point of accountability"],
          tone: "gold",
        },
      ],
    },
    kitchen: {
      eyebrow: "Kitchen Remodeling",
      title: "Kitchen Remodeling in Hollywood & South Florida",
      lede: "Cabinets, countertops, backsplash, lighting, layout improvements, flooring, appliances, and full kitchen upgrades — for condos, townhomes, and single-family homes across South Florida.",
      breadcrumbs: [{ label: "Home", to: "home" }, { label: "Kitchen Remodeling" }],
      intro:
        "A kitchen remodel is usually the biggest single change you can make to a home's daily feel and resale value. We handle complete kitchen renovations — cabinetry, countertops, backsplash, tile, lighting, plumbing fixtures, appliance coordination, and the layout changes that make a real difference.\n\nWhether you're updating a condo galley or opening up a whole-home kitchen, we work from a clear written scope so you know what's included before construction starts. Licensed Florida CGC1513757.",
      sections: [
        {
          h: "Complete kitchen renovation services",
          p: "From a finishes refresh to a full kitchen rebuild. We coordinate every trade involved — cabinetry, countertops, plumbing, electrical, tile, and finishes — under one project plan.",
          bullets: ["Full kitchen renovations", "Cabinet + counter replacement", "Plumbing + electrical updates", "Tile + flooring", "Lighting + appliances"],
          tone: "beige",
        },
        {
          h: "Design & layout considerations",
          p: "Good kitchens come down to good layout. We work through work-triangle, storage, lighting, and traffic flow before specifying finishes — so the final design lives well, not just looks good.",
          bullets: ["Work-triangle planning", "Storage + pantry strategy", "Counter + prep zones", "Lighting layers"],
          tone: "cream",
        },
        {
          h: "Materials & finishes",
          p: "We help you specify cabinetry, countertops, tile, fixtures, and lighting that fit your budget and the building you're in. Materials are coordinated and ordered with realistic lead times so installation runs smoothly.",
          bullets: ["Cabinet level + door style", "Quartz, granite, porcelain counters", "Backsplash + flooring tile", "Faucets, sinks, lighting"],
          tone: "green",
        },
        {
          h: "Condo kitchen remodels",
          p: "Condo kitchens have constraints — plumbing stack locations, load-bearing walls, building rules, and material delivery limits. We've handled all of it. Layouts are designed within the realities of the building, not against them.",
          bullets: ["Stack-aware layouts", "Building-rule scheduling", "Delivery + elevator planning", "Neighbor-aware demo work"],
          tone: "charcoal",
        },
      ],
    },
    bathroom: {
      eyebrow: "Bathroom Remodeling",
      title: "Bathroom Remodeling in Hollywood & South Florida",
      lede: "Shower remodels, tile, vanities, lighting, fixtures, layout upgrades, waterproofing coordination, and full bathroom renovations across condos and homes.",
      breadcrumbs: [{ label: "Home", to: "home" }, { label: "Bathroom Remodeling" }],
      intro:
        "Bathrooms are the highest-detail rooms in any renovation. Small footprint, dense plumbing and electrical, waterproofing that has to be right the first time, and a finished surface that's mostly tile.\n\nWe renovate primary baths, secondary baths, powder rooms, and condo bathrooms across South Florida — with clear scope around demolition, waterproofing, tile, fixtures, and lighting. Licensed Florida CGC1513757.",
      sections: [
        {
          h: "Bathroom remodeling services",
          p: "From finishes refresh to full down-to-studs renovation. We coordinate demo, rough plumbing and electrical, waterproofing, tile, vanity, fixtures, lighting, and final paint.",
          bullets: ["Full bath renovations", "Shower + tub replacement", "Vanity + countertop install", "Tile + waterproofing", "Lighting + ventilation"],
          tone: "beige",
        },
        {
          h: "Condo bathroom renovations",
          p: "Condo bathrooms come with extra rules — waterproofing standards, plumbing stack restrictions, and association documentation. We come prepared with paperwork and work to the building's standards, not around them.",
          bullets: ["Waterproofing per building specs", "Stack + plumbing planning", "Documentation for associations", "Quiet-hours scheduling"],
          tone: "cream",
        },
        {
          h: "Shower & tile upgrades",
          p: "Walk-in showers, frameless glass, custom tile, niches, and benches — built on a proper waterproofing assembly so the finish work lasts.",
          bullets: ["Walk-in + curbless showers", "Custom tile + niches", "Frameless glass coordination", "Linear + standard drains"],
          tone: "green",
        },
        {
          h: "Modern vanities & fixtures",
          p: "Vanities, mirrors, sinks, faucets, lighting, and ventilation — specified together so the finished bath is cohesive and built to last in South Florida humidity.",
          bullets: ["Vanity + counter coordination", "Mirror + lighting planning", "Faucets + plumbing fixtures", "Ventilation + humidity control"],
          tone: "charcoal",
        },
      ],
    },
  };

  const m = meta[kind];

  // Real photos mapped by service + section index
  const heroImg = { condo: IMG.condo3, kitchen: IMG.kitchen3, bathroom: IMG.bathroom3 }[kind];
  const sectionImgs = {
    condo: [IMG.condo1, IMG.kitchen2, IMG.condo2, IMG.consult2, IMG.consult1],
    kitchen: [IMG.kitchen1, IMG.kitchen4, IMG.consult1, IMG.kitchen2],
    bathroom: [IMG.bathroom1, IMG.bathroom2, IMG.bathroom3, IMG.bathroom2],
  }[kind];

  return (
    <main className="page" data-screen-label={`Service — ${m.eyebrow}`} id="page-body">
      <PageHero
        eyebrow={m.eyebrow}
        title={m.title}
        lede={m.lede}
        breadcrumbs={m.breadcrumbs}
        navigate={navigate}
        img={heroImg}
      />

      {/* INTRO */}
      <section className="section">
        <div className="container container--narrow">
          <div className="intro-block">
            <div className="intro-block__rule" />
            <div className="intro-block__copy">
              {m.intro.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="section section--beige">
        <div className="container">
          <div className="svc-content">
            {m.sections.map((s, i) => (
              <div className="svc-content__row" key={s.h}>
                <div className="svc-content__media">
                  <ImagePlaceholder src={sectionImgs[i]} alt={`${s.h} — Nagy & Sons Builders, South Florida`} label={`${s.h.toLowerCase()} — replace`} ratio="5/4" tone={s.tone} />
                  <div className="svc-content__idx">{String(i + 1).padStart(2, "0")}</div>
                </div>
                <div className="svc-content__body">
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                  {s.bullets && (
                    <ul className="svc-content__bullets">
                      {s.bullets.map((b) => (
                        <li key={b}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CGC PILL */}
      <section className="section section--green">
        <div className="container">
          <div className="cgc-banner">
            <div className="cgc-banner__mark" aria-hidden="true">
              <svg viewBox="0 0 64 64" width="48" height="48" fill="none">
                <rect x="6" y="6" width="52" height="52" rx="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M18 32l10 10 18-22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="cgc-banner__copy">
              <div className="eyebrow eyebrow--gold">Licensed contractor</div>
              <h3>Florida Certified General Contractor · CGC1513757</h3>
              <p>For larger condo scopes, multi-trade work, or whole-unit renovations, a CGC is the right level of license — and gives you a single accountable point of contact from start to finish.</p>
            </div>
            <CTAButton variant="gold" size="lg" onClick={() => navigate("contact")}>Request Estimate</CTAButton>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Service area" title="Hollywood + surrounding South Florida"/>
          <ServiceAreaGrid />
        </div>
      </section>

      {/* CONTENT CTA */}
      <ContentCTA navigate={navigate} title={`Ready to start your ${m.eyebrow.toLowerCase().replace("s","")}?`} lede="Share a few project details and we'll respond within one business day." />

      {/* INLINE LEAD FORM */}
      <section className="section section--cream" id="estimate">
        <div className="container container--form">
          <div className="form-side">
            <SectionHeading
              eyebrow="Request an estimate"
              title={<>Tell us about your {m.eyebrow.toLowerCase().replace(" remodeling","").replace(" renovations","")} project.</>}
              lede="Share a few details and we'll respond within one business day with next steps."
            />
            <ul className="form-side__list">
              <li><span /> Licensed Florida CGC · CGC1513757</li>
              <li><span /> Free, no-obligation consultation</li>
              <li><span /> Clear written scope before work begins</li>
            </ul>
          </div>
          <div className="form-card">
            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── About ───────────────────────────────────────────────────────
function AboutPage({ navigate }) {
  return (
    <main className="page" data-screen-label="About" id="page-body">
      <PageHero
        eyebrow="About"
        title="About Nagy & Sons Builders"
        lede="A Hollywood, Florida–based construction and renovation company led by a licensed Florida Certified General Contractor."
        breadcrumbs={[{ label: "Home", to: "home" }, { label: "About" }]}
        navigate={navigate}
        img={IMG.gallery}
      />

      <section className="section">
        <div className="container container--narrow">
          <div className="about-lede">
            <div className="about-lede__copy">
              <p className="about-lede__first">
                Nagy &amp; Sons Builders is a family-run renovation company based in Hollywood, Florida.
                We focus on what we do well — condo renovations, kitchen remodels, bathroom remodels, and
                full interior renovations across the South Florida coast.
              </p>
              <p>
                The business is led by a Florida Certified General Contractor (license CGC1513757), which
                means we're built to handle larger, more complex renovation work — multi-trade projects,
                condo work that requires association documentation, and whole-unit interior renovations
                where coordination matters as much as construction.
              </p>
              <p>
                We work the way you'd want a contractor to work: clear written scopes before construction,
                steady project communication, professional coordination of cabinetry, plumbing, electrical,
                tile, and finishes, and a single point of accountability from first conversation through
                final walkthrough.
              </p>
            </div>
            <aside className="about-lede__aside">
              <ImagePlaceholder src={IMG.consult2} alt="Nagy & Sons Builders reviewing renovation plans with a client in Hollywood, FL" ratio="4/5" tone="beige" />
              <div className="about-lede__caption">
                <strong>Planning with our clients</strong>
                <span>Consultation · Hollywood, FL</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container">
          <SectionHeading
            eyebrow="What we stand on"
            title="A short list, taken seriously."
            lede="Five things we care about. They show up in how we plan, communicate, and finish work."
          />
          <div className="values">
            {[
              { h: "Licensed CGC", p: "Florida Certified General Contractor — license CGC1513757. The right level of license for serious renovation work." },
              { h: "South Florida experience", p: "We work in the buildings, codes, and conditions that South Florida actually has — including condo associations, humidity, and code requirements." },
              { h: "Focused services", p: "Condo, kitchen, bathroom, and interior renovation work. We say no to projects we shouldn't be the right contractor for." },
              { h: "Clear communication", p: "Written scopes, regular updates, and a single point of contact. You always know what's happening." },
              { h: "Professional coordination", p: "Cabinetry, plumbing, electrical, tile, and finishes managed under one project plan, not scattered across subs." },
              { h: "Quality workmanship", p: "Built to look right on day one and to hold up in a South Florida environment over time." },
            ].map((v, i) => (
              <div key={v.h} className="values__item">
                <div className="values__num">{String(i + 1).padStart(2, "0")}</div>
                <h4>{v.h}</h4>
                <p>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--green">
        <div className="container">
          <div className="cgc-banner">
            <div className="cgc-banner__mark" aria-hidden="true">
              <svg viewBox="0 0 64 64" width="48" height="48" fill="none">
                <rect x="6" y="6" width="52" height="52" rx="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M18 32l10 10 18-22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="cgc-banner__copy">
              <div className="eyebrow eyebrow--gold">License</div>
              <h3>Florida Certified General Contractor · CGC1513757</h3>
              <p>Verifiable through the Florida Department of Business and Professional Regulation (DBPR).</p>
            </div>
            <CTAButton variant="gold" size="lg" onClick={() => navigate("contact")}>Get in touch</CTAButton>
          </div>
        </div>
      </section>

      <ContentCTA navigate={navigate} title="Start a conversation." lede="Tell us about your project — we'll respond within one business day." />
    </main>
  );
}

// ─── Contact ─────────────────────────────────────────────────────
function ContactPage({ navigate }) {
  return (
    <main className="page" data-screen-label="Contact" id="page-body">
      <PageHero
        eyebrow="Contact"
        title="Request a renovation estimate"
        lede="Tell us a little about your project and we'll respond within one business day."
        breadcrumbs={[{ label: "Home", to: "home" }, { label: "Contact" }]}
        navigate={navigate}
        img={IMG.condo1}
      />

      <section className="section">
        <div className="container container--form">
          <div className="form-side">
            <div className="contact-block">
              <div className="contact-block__lbl">Call</div>
              <a className="contact-block__big" href="tel:+19546215285">(954) 621-5285</a>
              <div className="contact-block__sub">Mon–Fri · Hollywood, FL</div>
            </div>
            <div className="contact-block">
              <div className="contact-block__lbl">Email</div>
              <a className="contact-block__big contact-block__big--sm" href="mailto:info@nagysonsbuilders.com">info@nagysonsbuilders.com</a>
              <div className="contact-block__sub">Replies within one business day</div>
            </div>
            <div className="contact-block">
              <div className="contact-block__lbl">Service area</div>
              <p className="contact-block__txt">
                Hollywood, Hallandale Beach, Aventura, Fort Lauderdale, Dania Beach, Pembroke Pines, Broward County, Miami-Dade, and surrounding South Florida communities.
              </p>
            </div>
            <address className="contact-block contact-block--address">
              <div className="contact-block__lbl">Based in</div>
              <p className="contact-block__txt">
                <strong>Hollywood, Florida</strong><br/>
                Serving all of Broward and Miami-Dade County
              </p>
            </address>
            <div className="lic-pill">
              <span className="lic-pill__dot" />
              Licensed &amp; Insured · Florida CGC1513757
            </div>
            <a className="lic-verify" href="https://www.myfloridalicense.com/wl11.asp?mode=1" target="_blank" rel="noopener noreferrer">
              Verify our license at the Florida DBPR
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8l6-6M3 2h5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          <div className="form-card">
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions before you call."
            lede="A few of the most common ones. If yours isn't here, send it via the form above."
          />
          <div className="faq">
            <FAQItem
              defaultOpen
              q="Do you work on condos?"
              a="Yes — condo renovations are one of our core services. We've worked with South Florida condo associations on documentation, building access, working hours, and elevator scheduling."
            />
            <FAQItem
              q="Do you remodel kitchens and bathrooms?"
              a="Yes — both. Kitchen and bathroom remodels are core services. We handle everything from a finishes refresh to a full down-to-studs renovation, including layout changes where possible."
            />
            <FAQItem
              q="Are you licensed?"
              a="Yes. We're a Florida Certified General Contractor — license number CGC1513757 — verifiable through the Florida Department of Business and Professional Regulation."
            />
            <FAQItem
              q="What areas do you serve?"
              a="Hollywood, Hallandale Beach, Aventura, Fort Lauderdale, Dania Beach, Pembroke Pines, Broward County, Miami-Dade, and surrounding South Florida communities. If you're nearby and not listed, get in touch."
            />
            <FAQItem
              q="How do I request an estimate?"
              a="Submit the form on this page, call (954) 621-5285, or email info@nagysonsbuilders.com. We'll respond within one business day to schedule a consultation or site visit."
            />
            <FAQItem
              q="Can you handle larger renovation projects?"
              a="Yes — as a Florida Certified General Contractor, we're licensed for larger and more complex renovation scopes, including whole-unit interior renovations and multi-trade condo work."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { ServicePage, AboutPage, ContactPage });
