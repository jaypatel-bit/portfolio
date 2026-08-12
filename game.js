const app = document.getElementById("app");

const flagshipWins = [
  {
    number: "24%",
    label: "AI Tracker",
    title: "Took AI Tracker from signal to monetized launch",
    body:
      "Led the product from early opportunity through pricing, beta, and launch, beating the beta adoption target by 24%.",
  },
  {
    number: "80+",
    label: "Integrations",
    title: "Expanded the platform footprint under my watch",
    body:
      "Owned the integration ecosystem as it grew from roughly 40 to 80+ platforms, balancing customer value, API constraints, and reporting quality.",
  },
  {
    number: "27%",
    label: "Adoption",
    title: "Made advanced analytics more valuable for enterprise agencies",
    body:
      "Positioned Advanced Analytics around the complex reporting demands of enterprise agencies, then partnered with design and engineering to launch an AI reporting assistant that reduced manual report creation and reached 27% adoption.",
  },
];

const proofStats = [
  { value: "100+", label: "customer conversations run" },
  { value: "27%", label: "AI reporting assistant adoption" },
  { value: "2022 → now", label: "integration expansion era" },
];

const integrations = [
  "Google Ads",
  "Google Analytics",
  "Google Search Console",
  "Google Business Profile",
  "Google Sheets",
  "HubSpot",
  "Meta Ads",
  "Facebook",
  "Instagram",
  "Instagram Ads",
  "LinkedIn",
  "LinkedIn Ads",
  "Microsoft Ads",
  "TikTok",
  "TikTok Ads",
  "Reddit Ads",
  "X Ads",
  "Pinterest",
  "Pinterest Ads",
  "Snapchat Ads",
  "Spotify Ads",
  "YouTube",
  "Shopify",
  "WooCommerce",
  "Stripe",
  "BigCommerce",
  "Semrush",
  "Ahrefs",
  "Moz",
  "SE Ranking",
  "CallRail",
  "WhatConverts",
  "Trustpilot",
  "Klaviyo",
  "Mailchimp",
  "ActiveCampaign",
  "Salesforce",
  "Snowflake",
  "MySQL",
  "PostgreSQL",
  "Google BigQuery",
  "Amazon Redshift",
];

const themes = [
  {
    title: "Product clarity",
    text: "I tend to be most useful when there is too much demand, too much noise, and not enough signal. The work is to reduce ambiguity until the right bet is clear.",
  },
  {
    title: "Platform judgment",
    text: "A lot of my strongest product work sits below the surface: data layers, integration systems, reporting architecture, and the product decisions that make them coherent.",
  },
  {
    title: "Trust-first execution",
    text: "In analytics and AI, speed matters, but trust matters more. Customers need to believe the outputs, understand the trade-offs, and rely on the system.",
  },
];

const aiTrackerPlatforms = ["ChatGPT", "Gemini", "Perplexity", "Claude"];
const featuredIntegrations = [
  "Google Ads",
  "GA4",
  "Search Console",
  "Meta Ads",
  "LinkedIn Ads",
  "TikTok Ads",
  "HubSpot",
  "Shopify",
  "Stripe",
  "BigQuery",
  "Salesforce",
  "Klaviyo",
];

const apiTrackerLifecycle = [
  {
    stage: "1. Problem",
    title: "Started with a familiar operational pain point",
    body:
      "Marketing and analytics teams depend on APIs that change constantly, but changelogs, docs, and release notes are scattered. The risk is usually discovered late, after dashboards, automations, or client reporting have already drifted.",
  },
  {
    stage: "2. Scope",
    title: "Focused the first version on the highest-change provider set",
    body:
      "The product starts where the operational risk is clearest: GA4, Google Ads, and Meta. That keeps the surface opinionated while still covering the systems most likely to break reporting and campaign workflows.",
  },
  {
    stage: "3. Workflow",
    title: "Turned monitoring into a review workflow instead of another feed",
    body:
      "The core product shape is detect, classify, summarize, and route. High-risk changes move into a shared Kanban board so growth, analytics, and engineering can see ownership rather than just alerts.",
  },
  {
    stage: "4. Build",
    title: "Designed for trust, demos, and real operating constraints",
    body:
      "The app includes seeded providers, sample change events, and a public demo workspace so people can understand the workflow immediately. Under the hood, it supports subscriptions, diffs, cron-based fetching, and digest notifications.",
  },
  {
    stage: "5. Operate",
    title: "Shaped it like a product that could keep improving after launch",
    body:
      "The value is not one dashboard. It is an operating layer for API change intelligence: monitoring cadence, severity labeling, suggested actions, and enough structure to help teams act before production problems show up.",
  },
];

const apiTrackerHighlights = [
  "Tracks changelogs and release surfaces across GA4, Google Ads, and Meta",
  "Classifies changes by severity, type, and suggested next action",
  "Routes work into a shared Kanban-style review workflow",
  "Supports a public demo mode so the product can be evaluated instantly",
];

function renderWins(items) {
  return items
    .map(
      (item, index) => `
        <article class="win-card reveal" style="--delay:${index * 90}ms">
          <p class="win-metric">${item.number}</p>
          <p class="win-label">${item.label}</p>
          <h3>${item.title}</h3>
          <p class="win-body">${item.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderStats(items) {
  return items
    .map(
      (item, index) => `
        <div class="stat-card reveal" style="--delay:${index * 70}ms">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </div>
      `,
    )
    .join("");
}

function renderThemes(items) {
  return items
    .map(
      (item, index) => `
        <article class="theme-card reveal" style="--delay:${index * 90}ms">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderPlatformBadges(items) {
  return items.map((item) => `<span class="platform-badge">${item}</span>`).join("");
}

function renderIntegrationTiles(items) {
  return items
    .map(
      (item, index) => `
        <div class="integration-tile reveal" style="--delay:${index * 45}ms">
          <span>${item}</span>
        </div>
      `,
    )
    .join("");
}

function renderLifecycle(items) {
  return items
    .map(
      (item, index) => `
        <article class="lifecycle-card reveal" style="--delay:${index * 70}ms">
          <p class="lifecycle-stage">${item.stage}</p>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderCaseStudyBullets(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

app.innerHTML = `
  <main class="page">
    <header class="site-header reveal">
      <a class="brand" href="#top">Jay Patel</a>
      <nav class="site-nav">
        <a href="#wins">Wins</a>
        <a href="#case-studies">Case Studies</a>
        <a href="#systems">Systems</a>
        <a href="#approach">Approach</a>
      </nav>
    </header>

    <section class="hero" id="top">
      <div class="hero-copy reveal" style="--delay:40ms">
        <p class="eyebrow">Senior Product Manager</p>
        <h1>I build the systems behind analytics, AI, and reporting products.</h1>
        <p class="hero-text">
          My strongest work has centered on three things: launching AI Tracker, shaping advanced analytics for more complex enterprise reporting,
          and expanding the integration ecosystem at AgencyAnalytics into a much broader, more valuable platform.
        </p>
      </div>
      <aside class="hero-aside reveal" style="--delay:140ms">
        <p class="aside-kicker">Current position</p>
        <p class="aside-line">Product strategy for data platforms, integration infrastructure, and AI products.</p>
        <p class="aside-note">Built for fast understanding: what shipped, what scaled, and what changed the product surface.</p>
      </aside>
    </section>

    <section class="stats-band">
      ${renderStats(proofStats)}
    </section>

    <section class="wins-section" id="wins">
      <div class="section-intro reveal">
        <p class="eyebrow">Flagship Work</p>
        <h2>The work I would want someone to understand in under a minute.</h2>
      </div>
      <div class="wins-grid">
        ${renderWins(flagshipWins)}
      </div>
    </section>

    <section class="case-studies-section" id="case-studies">
      <div class="section-intro reveal">
        <p class="eyebrow">Case Study</p>
        <h2>A personal product that shows how I think through the full lifecycle.</h2>
        <p class="section-copy">
          APIRadar is a personal project, but the product logic is familiar: find a recurring operational pain point,
          define the right first scope, make the workflow legible, and build something teams can actually act on.
        </p>
      </div>

      <div class="case-study-hero">
        <article class="case-study-panel reveal" style="--delay:40ms">
          <p class="eyebrow">APIRadar</p>
          <h3>Change intelligence for marketing and analytics APIs.</h3>
          <p class="case-study-copy">
            Built as a SaaS-style control center for tracking API changes across GA4, Google Ads, and Meta before they break dashboards,
            campaigns, automations, and reporting workflows.
          </p>
          <div class="case-study-actions">
            <a href="https://api-tracker-nine.vercel.app" target="_blank" rel="noreferrer">View Live Product</a>
            <a href="https://api-tracker-nine.vercel.app/signup" target="_blank" rel="noreferrer">Open Demo Workspace</a>
          </div>
        </article>

        <aside class="case-study-proof reveal" style="--delay:100ms">
          <div class="case-proof-stat">
            <strong>3</strong>
            <span>core providers in the first focused release</span>
          </div>
          <div class="case-proof-stat">
            <strong>4-step</strong>
            <span>workflow: detect, classify, summarize, route</span>
          </div>
          <div class="case-proof-stat">
            <strong>Demo-ready</strong>
            <span>public sample workspace for fast product evaluation</span>
          </div>
        </aside>
      </div>

      <div class="case-study-layout">
        <div class="case-study-details reveal" style="--delay:60ms">
          <p class="list-kicker">What the product does</p>
          <ul class="case-study-list">
            ${renderCaseStudyBullets(apiTrackerHighlights)}
          </ul>
        </div>
        <div class="case-study-timeline">
          ${renderLifecycle(apiTrackerLifecycle)}
        </div>
      </div>
    </section>

    <section class="systems-section" id="systems">
      <div class="section-intro reveal">
        <p class="eyebrow">Platform Expansion</p>
        <h2>The integration footprint should be obvious at a glance.</h2>
        <p class="section-copy">
          I owned the ecosystem as it expanded from roughly 40 to 80+ integrations. Instead of hiding that in copy, this section shows the product surface directly.
        </p>
      </div>
      <div class="systems-showcase">
        <div class="integrations-hero reveal" style="--delay:40ms">
          <div class="integrations-count">
            <strong>80+</strong>
            <span>integrations across ads, analytics, ecommerce, CRM, email, and data warehousing</span>
          </div>
          <div class="integration-grid">
            ${renderIntegrationTiles(featuredIntegrations)}
          </div>
        </div>
        <div class="integration-list-card reveal" style="--delay:100ms">
          <p class="list-kicker">Broader catalog</p>
          <div class="list-columns">
            <div>${integrations.slice(0, 14).map((item) => `<span>${item}</span>`).join("")}</div>
            <div>${integrations.slice(14, 28).map((item) => `<span>${item}</span>`).join("")}</div>
            <div>${integrations.slice(28, 42).map((item) => `<span>${item}</span>`).join("")}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="tracker-section">
      <div class="section-intro reveal">
        <p class="eyebrow">AI Tracker</p>
        <h2>Track AI search. Prove it’s working.</h2>
        <p class="section-copy">
          This section now uses the actual demo surface and a few of the clearest product cues from AgencyAnalytics: unified data,
          deeper campaign analysis, and reporting that makes complex work easier to understand.
        </p>
      </div>

      <div class="tracker-layout">
        <article class="tracker-stage reveal" style="--delay:60ms">
          <div class="tracker-window tracker-window-video">
            <div class="tracker-frame-copy">
              <p class="tracker-kicker">AgencyAnalytics product demo</p>
              <h3>Show the product doing the work instead of simulating it.</h3>
            </div>

            <div class="showcase-video-shell">
              <iframe
                class="showcase-video-frame"
                src="https://fast.wistia.net/embed/iframe/jxiaxo8qat?seo=false&videoFoam=true"
                title="AgencyAnalytics Advanced Filtering demo"
                allow="autoplay; fullscreen"
                loading="lazy"
              ></iframe>
            </div>

            <div class="tracker-proof-strip">
              <div class="tracker-proof-card">
                <span class="strip-label">Product value</span>
                <strong>Deeper campaign analysis</strong>
              </div>
              <div class="tracker-proof-card">
                <span class="strip-label">System layer</span>
                <div class="platform-row">
                  ${renderPlatformBadges(["Unified client data", "Cross-channel reporting"])}
                </div>
              </div>
              <div class="tracker-proof-card">
                <span class="strip-label">Why it lands</span>
                <strong>Analyze results across clients without more manual work</strong>
              </div>
            </div>
          </div>
        </article>

        <aside class="tracker-notes reveal" style="--delay:120ms">
          <div class="note-card">
            <p class="eyebrow">What Shipped</p>
            <h3>Advanced analytics built for agencies with more complex demands.</h3>
            <p>
              The real value was not just shipping filters. It was making enterprise-style analysis feel usable inside an agency reporting workflow
              that spans channels, clients, and stakeholder expectations.
            </p>
          </div>
          <div class="note-card alt">
            <p class="eyebrow">Why It Matters</p>
            <h3>Trust comes from clearer reporting, not more feature noise.</h3>
            <p>
              That same product shape carried into the AI reporting assistant work: partner tightly with design and engineering, cut manual report creation,
              and make the output feel reliable enough to adopt.
            </p>
          </div>
        </aside>
      </div>
    </section>

    <section class="warehouse-section">
      <div class="warehouse-panel reveal">
        <p class="eyebrow">Advanced Analytics</p>
        <h2>Built for enterprise agencies with more complex reporting demands.</h2>
        <p>
          This was product infrastructure with a clear customer: agencies that needed more flexible analysis, cleaner segmentation,
          and reporting systems that could handle complexity without turning into internal-only tooling.
        </p>
      </div>
      <div class="warehouse-panel alt reveal" style="--delay:90ms">
        <p class="eyebrow">AI Reporting Assistant</p>
        <h2>Partnered with design and engineering to reduce manual report creation.</h2>
        <p>
          The outcome was practical rather than flashy: less manual report work for teams, clearer outputs for customers,
          and 27% adoption early enough to show the workflow had real pull.
        </p>
      </div>
    </section>

    <section class="approach-section" id="approach">
      <div class="section-intro reveal">
        <p class="eyebrow">Approach</p>
        <h2>How I tend to lead product work.</h2>
      </div>
      <div class="theme-grid">
        ${renderThemes(themes)}
      </div>
    </section>
  </main>
`;

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));
