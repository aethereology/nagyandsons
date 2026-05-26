// Home page for Nagy & Sons Builders

const { useState: useStateHome } = React;

function HomePage({ navigate, tweaks }) {
  const heroVariant = tweaks.heroVariant; // "dark" | "image" | "split"

  return (
    <main className="page page--home" data-screen-label="Home" id="page-body">

      {/* HERO */}
      {heroVariant === "dark" && (
        <section className="hero hero--dark" data-screen-label="Hero">
          <div className="hero__inner">
            <div className="hero__copy">
              <div className="eyebrow eyebrow--gold">Hollywood, FL · South Florida</div>
              <h1 className="hero__title">
                Condo, Kitchen<br/>&amp; Bathroom <em>Renovations</em><br/>
                <span className="hero__title-thin">in South Florida</span>
              </h1>
              <p className="hero__lede">
                A licensed Florida Certified General Contractor specializing in condo renovations,
                kitchen remodels, bathroom remodels, and full interior upgrades across Hollywood,
                Broward, and South Florida.
              </p>
              <div className="hero__actions">
                <CTAButton variant="gold" size="lg" onClick={() => navigate("contact")}>Request an Estimate</CTAButton>
                <CTAButton variant="ghost-light" size="lg" icon={false} onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>View Services</CTAButton>
              </div>
              <div className="hero__trust">
                <TrustBadge label="Florida Certified" sub="General Contractor"/>
                <TrustBadge label="CGC1513757" sub="License No."/>
                <TrustBadge label="Condo Specialists" sub="Association-friendly"/>
                <TrustBadge label="Kitchen & Bath" sub="Remodel experts"/>
                <TrustBadge label="South Florida" sub="Hollywood · Broward · Miami-Dade"/>
              </div>
            </div>
            <div className="hero__media">
              <div className="hero__img-wrap">
                <ImagePlaceholder label="luxury kitchen interior — replace" ratio="4/5" tone="beige" className="hero__img"/>
                <div className="hero__chip hero__chip--top">
                  <div className="hero__chip-num">15+</div>
                  <div className="hero__chip-lbl">Years building<br/>in South Florida</div>
                </div>
                <div className="hero__chip hero__chip--bot">
                  <div className="hero__chip-num">CGC</div>
                  <div className="hero__chip-lbl">Florida Certified<br/>General Contractor</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__marquee" aria-hidden="true">
            <div className="hero__marquee-track">
              {[..."Condo Renovations · Kitchen Remodels · Bathroom Remodels · Full Interior Upgrades · Investor Properties · Pre-Sale Refresh · Post-Purchase Renovation · ".repeat(2)].join("").split("·").map((t, i) => (
                <span key={i}>{t.trim()}<i>·</i></span>
              ))}
            </div>
          </div>
        </section>
      )}

      {heroVariant === "split" && (
        <section className="hero hero--split" data-screen-label="Hero">
          <div className="hero__copy hero__copy--split">
            <div className="eyebrow">Hollywood, FL · South Florida</div>
            <h1 className="hero__title">Condo, Kitchen &amp; Bathroom <em>Renovations</em> in South Florida</h1>
            <p className="hero__lede">A licensed Florida Certified General Contractor specializing in condo renovations, kitchen remodels, bathroom remodels, and full interior upgrades across Hollywood, Broward, and South Florida.</p>
            <div className="hero__actions">
              <CTAButton variant="primary" size="lg" onClick={() => navigate("contact")}>Request an Estimate</CTAButton>
              <CTAButton variant="ghost" size="lg" icon={false} onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>View Services</CTAButton>
            </div>
            <div className="hero__trust hero__trust--light">
              <TrustBadge variant="light" label="Florida Certified" sub="General Contractor"/>
              <TrustBadge variant="light" label="CGC1513757" sub="License No."/>
              <TrustBadge variant="light" label="Condo Specialists" sub="Association-friendly"/>
              <TrustBadge variant="light" label="Kitchen & Bath" sub="Remodel experts"/>
            </div>
          </div>
          <div className="hero__media hero__media--split">
            <ImagePlaceholder label="luxury kitchen interior — replace" ratio="auto" tone="beige" style={{ height: "100%", aspectRatio: "auto" }}/>
          </div>
        </section>
      )}

      {heroVariant === "image" && (
        <section className="hero hero--image" data-screen-label="Hero">
          <ImagePlaceholder label="luxury kitchen / condo renovation — replace" ratio="auto" tone="beige" style={{ position: "absolute", inset: 0, aspectRatio: "auto", borderRadius: 0 }} className="hero__bg"/>
          <div className="hero__overlay" />
          <div className="hero__inner hero__inner--centered">
            <div className="eyebrow eyebrow--gold">Hollywood, FL · South Florida</div>
            <h1 className="hero__title hero__title--center">Condo, Kitchen &amp; Bathroom <em>Renovations</em> in South Florida</h1>
            <p className="hero__lede">A licensed Florida Certified General Contractor specializing in condo renovations, kitchen remodels, bathroom remodels, and full interior upgrades across Hollywood, Broward, and South Florida.</p>
            <div className="hero__actions hero__actions--center">
              <CTAButton variant="gold" size="lg" onClick={() => navigate("contact")}>Request an Estimate</CTAButton>
              <CTAButton variant="ghost-light" size="lg" icon={false} onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>View Services</CTAButton>
            </div>
            <div className="hero__trust hero__trust--center">
              <TrustBadge label="Florida Certified" sub="General Contractor"/>
              <TrustBadge label="CGC1513757" sub="License No."/>
              <TrustBadge label="Condo Specialists" sub="Association-friendly"/>
              <TrustBadge label="South Florida" sub="Hollywood · Broward · Miami-Dade"/>
            </div>
          </div>
        </section>
      )}

      {/* SERVICES OVERVIEW */}
      <section className="section" id="services" data-screen-label="Services">
        <div className="container">
          <SectionHeading
            eyebrow="What we build"
            title={<>A focused renovation practice for<br/>South Florida homes &amp; condos.</>}
            lede="Three core services, one licensed contractor. We work in occupied buildings, coordinate trades, and manage scope from first walkthrough to final review."
          />
          <div className="svc-grid">
            <ServiceCard
              size="lg"
              tone="beige"
              title="Condo Renovations"
              description="Interior condo upgrades, flooring, drywall, kitchens, bathrooms, layout changes, finishes, and association-friendly renovation coordination."
              bullets={["Building access planning", "Association documentation", "Elevator + delivery logistics"]}
              onClick={() => navigate("condo")}
            />
            <ServiceCard
              size="lg"
              tone="cream"
              title="Kitchen Remodeling"
              description="Cabinets, countertops, lighting, backsplash, flooring, appliance coordination, layout changes, and complete kitchen transformations."
              bullets={["Cabinetry + countertops", "Layout reconfiguration", "Appliance + lighting plan"]}
              onClick={() => navigate("kitchen")}
            />
            <ServiceCard
              size="lg"
              tone="green"
              title="Bathroom Remodeling"
              description="Showers, tile, vanities, lighting, fixtures, waterproofing coordination, and complete bathroom remodels."
              bullets={["Shower + tile work", "Vanity + fixture install", "Waterproofing coordination"]}
              onClick={() => navigate("bathroom")}
            />
          </div>
          <div className="svc-grid__sub">
            <ServiceCard
              size="sm"
              tone="charcoal"
              title="Full Interior Renovations"
              description="Complete interior improvements for condos, townhomes, investment properties, and single-family homes."
            />
          </div>
        </div>
      </section>

      {/* WHY LICENSED CGC */}
      <section className="section section--green" data-screen-label="Why Licensed">
        <div className="container container--two">
          <div>
            <SectionHeading
              eyebrow="Why a Licensed CGC"
              title={<>Built for serious renovation work.</>}
              invert
              lede="Working with a Florida Certified General Contractor gives you confidence for larger or more complex renovations — especially condo and multi-trade projects."
            />
            <ul className="why-list">
              {[
                { t: "Licensed Florida CGC", d: "Certified General Contractor — license CGC1513757." },
                { t: "Multi-trade coordination", d: "Cabinetry, plumbing, electric, tile, and finishes managed under one scope." },
                { t: "Renovation planning", d: "Clear written scopes so expectations are aligned before work begins." },
                { t: "Professional communication", d: "Project-by-project updates and a single point of contact." },
                { t: "Built for South Florida", d: "Condo associations, elevator access, code, and humidity — all part of the plan." },
              ].map((x) => (
                <li key={x.t}>
                  <span className="why-list__mark" aria-hidden="true">
                    <svg viewBox="0 0 14 14" width="14" height="14" fill="none"><path d="M2 7l3.5 3.5L12 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <div>
                    <h4>{x.t}</h4>
                    <p>{x.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="why-stats">
            <div className="why-stats__card">
              <div className="why-stats__big">CGC1513757</div>
              <div className="why-stats__sub">Florida Certified General Contractor</div>
              <div className="why-stats__divider" />
              <div className="why-stats__row">
                <div><strong>Condo</strong><span>Kitchen &amp; bath in occupied buildings</span></div>
                <div><strong>Kitchen</strong><span>Full layout + finish replacement</span></div>
                <div><strong>Bathroom</strong><span>Waterproofing + tile + fixtures</span></div>
                <div><strong>Interior</strong><span>Whole-unit renovation projects</span></div>
              </div>
            </div>
            <ImagePlaceholder label="project site — replace" ratio="16/10" tone="gold" />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" data-screen-label="Process">
        <div className="container">
          <SectionHeading
            eyebrow="Our process"
            title={<>Clear scope. Steady execution.<br/>No surprises.</>}
            lede="A predictable four-step path from first conversation through final walkthrough."
          />
          <div className="proc">
            <ProcessStep num={1} title="Initial Consultation" description="We discuss your property, project goals, timeline, and budget range." />
            <ProcessStep num={2} title="Site Visit" description="We review existing conditions, measurements, building access, and renovation requirements." />
            <ProcessStep num={3} title="Scope & Estimate" description="You receive a clear written scope so expectations are aligned before work begins." />
            <ProcessStep num={4} title="Build & Final Walkthrough" description="The project is coordinated professionally through completion and final review." last />
          </div>
        </div>
      </section>

      {/* PROJECT TYPES GRID */}
      <section className="section section--beige" data-screen-label="Project Types">
        <div className="container">
          <SectionHeading
            eyebrow="Project types"
            title={<>What we help with most.</>}
            lede="Renovation work across condo units, single-family interiors, and investor properties."
          />
          <div className="ptype-grid">
            {[
              { t: "Condo unit renovations", d: "From dated to dialed-in.", img: "beige" },
              { t: "Kitchen remodels", d: "Cabinets, counters, layout.", img: "green" },
              { t: "Bathroom remodels", d: "Showers, tile, vanities.", img: "cream" },
              { t: "Flooring & finish upgrades", d: "Tile, LVP, paint, trim.", img: "beige" },
              { t: "Investor property improvements", d: "Turn-key for resale or rent.", img: "gold" },
              { t: "Full interior renovations", d: "Whole-unit transformations.", img: "charcoal" },
              { t: "Pre-sale property upgrades", d: "Market-ready refresh.", img: "cream" },
              { t: "Post-purchase renovations", d: "Make it yours, move-in ready.", img: "green" },
            ].map((p) => (
              <div key={p.t} className="ptype">
                <ImagePlaceholder label={`${p.t.toLowerCase()} — replace`} ratio="5/4" tone={p.img} />
                <div className="ptype__body">
                  <h4>{p.t}</h4>
                  <p>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL PLACEHOLDERS */}
      <section className="section" data-screen-label="Testimonials">
        <div className="container">
          <SectionHeading
            eyebrow="Client feedback — placeholders"
            title={<>Add real testimonials before launch.</>}
            lede="Replace these placeholders with quotes from past clients. We've left structured spots so layout stays clean once you drop real copy in."
          />
          <div className="testi-grid">
            {[
              { c: "Condo renovation · Hollywood", n: "Client name placeholder" },
              { c: "Kitchen remodel · Aventura", n: "Client name placeholder" },
              { c: "Bathroom remodel · Fort Lauderdale", n: "Client name placeholder" },
            ].map((t, i) => (
              <div key={i} className="testi">
                <div className="testi__quote" aria-hidden="true">"</div>
                <p className="testi__copy">
                  Testimonial copy placeholder. Replace with a 2–3 sentence quote from this client about the project scope, communication, and final result.
                </p>
                <div className="testi__divider" />
                <div className="testi__meta">
                  <strong>{t.n}</strong>
                  <span>{t.c}</span>
                </div>
                <div className="testi__ph">placeholder — replace before launch</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="section section--charcoal" data-screen-label="Service Areas">
        <div className="container container--two">
          <div>
            <SectionHeading
              eyebrow="Where we work"
              title="Hollywood + South Florida"
              invert
              lede="We serve Hollywood, Broward County, and surrounding South Florida communities. If your project is nearby and not listed, get in touch."
            />
            <CTAButton variant="gold" onClick={() => navigate("contact")}>Confirm coverage for your address</CTAButton>
          </div>
          <ServiceAreaGrid invert />
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="section section--cream" id="estimate" data-screen-label="Estimate Form">
        <div className="container container--form">
          <div className="form-side">
            <SectionHeading
              eyebrow="Request an estimate"
              title={<>Tell us about your project.</>}
              lede="Share a few details and we'll respond within one business day with next steps."
            />
            <ul className="form-side__list">
              <li><span /> Licensed Florida CGC · CGC1513757</li>
              <li><span /> Free, no-obligation consultation</li>
              <li><span /> Clear written scope before work begins</li>
              <li><span /> Direct communication with your contractor</li>
            </ul>
            <div className="form-side__contact">
              <div>
                <div className="form-side__lbl">Call</div>
                <a href="tel:+1XXXXXXXXXX">(XXX) XXX-XXXX</a>
              </div>
              <div>
                <div className="form-side__lbl">Email</div>
                <a href="mailto:info@nagysonsbuilders.com">info@nagysonsbuilders.com</a>
              </div>
            </div>
          </div>
          <div className="form-card">
            <LeadForm />
          </div>
        </div>
      </section>

    </main>
  );
}

function TrustBadge({ label, sub, variant = "dark" }) {
  return (
    <div className={`trust-badge trust-badge--${variant}`}>
      <div className="trust-badge__label">{label}</div>
      <div className="trust-badge__sub">{sub}</div>
    </div>
  );
}

Object.assign(window, { HomePage, TrustBadge });
