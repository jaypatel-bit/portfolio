const app = document.getElementById("app");

const receipts = [
  {
    id: "01",
    label: "AI Tracker",
    title: "Took an emerging AI search category from vague demand to paid product.",
    body:
      "Defined a workflow agencies could actually understand: prompts, tracked platforms, locations, and visibility over time. That made the product easier to buy, explain, and use.",
    outcome: "Beat beta adoption target by 24%",
  },
  {
    id: "02",
    label: "Advanced Analytics",
    title: "Made deeper analysis usable for enterprise agencies with more complex reporting needs.",
    body:
      "Positioned advanced analytics around segmentation, reporting flexibility, and cross-channel analysis instead of shipping another isolated feature set.",
    outcome: "AI reporting assistant reached 27% adoption",
  },
  {
    id: "03",
    label: "Integrations",
    title: "Expanded the platform surface from roughly 40 to 80+ integrations.",
    body:
      "Owned prioritization across ads, analytics, ecommerce, CRM, and warehouse layers while balancing customer demand, API constraints, and reporting quality.",
    outcome: "Broader product value across the full agency stack",
  },
];

const caseStudies = [
  {
    name: "AI Tracker",
    eyebrow: "AgencyAnalytics",
    title: "Turn AI search visibility into a product agencies could trust, buy, and explain to clients.",
    summary:
      "This work mattered because the category itself was still unstable. The product decision was not just what to build, but how narrow to keep the promise so the first release felt credible instead of speculative.",
    linkLabel: "See product context",
    linkHref: "https://agencyanalytics.com/p/ahead-of-next",
    sections: [
      {
        label: "Problem",
        text:
          "Agencies were getting questions about how brands showed up inside ChatGPT, Gemini, Perplexity, and other AI answers, but they had no repeatable reporting system for it. The real product problem was deciding what an agency should be able to measure before the market language had fully settled.",
      },
      {
        label: "Evidence",
        text:
          "Customer conversations pointed to the same core need: teams wanted a credible way to show whether their clients appeared in AI answers and how that changed over time. What they needed was not more AI hype. They needed a product they could defend in front of clients.",
      },
      {
        label: "Options Considered",
        text:
          "One option was to frame it like a traditional rank tracker and borrow familiar SEO language. Another was to push toward a much broader AI intelligence story. The better near-term option was a narrower workflow that focused on prompts, platforms, locations, and visibility movement over time.",
      },
      {
        label: "Trade-Offs",
        text:
          "The narrower scope meant a smaller first release and fewer headline claims, but it also reduced false precision and gave the product a cleaner mental model. That trade-off favored trust and clarity over breadth.",
      },
      {
        label: "Decision",
        text:
          "The product was shaped around a simple system: define prompts, choose tracked AI platforms, layer in geographic context, and surface visibility trends clearly enough that agencies could operationalize the output instead of debating what the interface meant.",
      },
      {
        label: "How I’d Measure It",
        text:
          "I would look at beta-to-paid conversion, number of prompts configured per account, repeat usage after setup, and whether customers could explain the product’s value to their own clients without relying heavily on account management support.",
      },
    ],
  },
  {
    name: "APIRadar",
    eyebrow: "Personal Project",
    title: "Build a change-intelligence product that helps teams act before provider-side changes become production problems.",
    summary:
      "APIRadar reflects the kind of product work I like most: start with a messy operational pain point, reduce it to the decision layer, and build a workflow that makes ownership obvious instead of generating more passive alerts.",
    linkLabel: "Open project",
    linkHref: "https://api-tracker-nine.vercel.app/signup",
    sections: [
      {
        label: "Problem",
        text:
          "Teams that depend on APIs usually find important changes too late. Changelogs, release notes, documentation, and deprecation notices are fragmented across providers, and alert fatigue means nobody wants another feed that still leaves action ownership unresolved.",
      },
      {
        label: "Evidence",
        text:
          "The product logic came from repeated patterns in integration-heavy environments: manual monitoring, duplicate triage work, and late discovery of breaking or behavior-changing updates. The initial provider set in APIRadar focused on high-risk systems where operational impact is immediate: GA4, Google Ads, and Meta.",
      },
      {
        label: "Options Considered",
        text:
          "A lightweight monitoring tool would have been easy to ship, but it would still leave teams to convert raw alerts into decisions. A much larger autonomous remediation platform would have been ambitious, but hard to trust early. The right starting point was monitoring plus structured triage.",
      },
      {
        label: "Trade-Offs",
        text:
          "I chose not to automate the final response step in the first version. That kept the product useful without pretending it could safely fix every issue. The trade-off was slower end-to-end automation in exchange for much better trust at the decision layer.",
      },
      {
        label: "Decision",
        text:
          "I built APIRadar as a shared control center with provider subscriptions, severity labels, AI summaries, suggested next steps, and a Kanban review board. I also included a demo mode so the value of the workflow was visible before setup friction took over.",
      },
      {
        label: "How I’d Measure It",
        text:
          "I would track number of subscribed providers per workspace, percentage of changes triaged within a target window, time from detection to ownership, and whether teams report fewer production surprises caused by upstream provider changes.",
      },
    ],
  },
];

const integrationRows = [
  [
    "Google Ads",
    "GA4",
    "Search Console",
    "Meta Ads",
    "LinkedIn Ads",
    "TikTok Ads",
    "HubSpot",
    "Shopify",
    "Klaviyo",
    "Salesforce",
    "BigQuery",
    "Snowflake",
  ],
  [
    "Stripe",
    "CallRail",
    "Mailchimp",
    "ActiveCampaign",
    "Semrush",
    "Ahrefs",
    "Moz",
    "Pinterest Ads",
    "Microsoft Ads",
    "Reddit Ads",
    "YouTube",
    "WooCommerce",
  ],
];

const processSteps = [
  {
    title: "Find the real job",
    text:
      "I spend a lot of time narrowing the problem until the user, the decision, and the proof of value are all specific enough to build against.",
  },
  {
    title: "Pressure-test options",
    text:
      "Before a roadmap bet hardens, I want the rejected options and trade-offs to be visible. Good product judgment usually shows up there first.",
  },
  {
    title: "Shape systems, not features",
    text:
      "The work I gravitate toward is usually underneath the visible surface: reporting layers, data models, integrations, and the product logic that holds them together.",
  },
  {
    title: "Measure what changed",
    text:
      "I care less about launch theater and more about whether the new workflow gets adopted, trusted, and used without extra explanation every time.",
  },
];

function renderReceipts(items) {
  return items
    .map(
      (item, index) => `
        <article class="receipt-card reveal" style="--delay:${index * 80}ms">
          <p class="receipt-id">${item.id}</p>
          <div class="receipt-copy">
            <p class="eyebrow">${item.label}</p>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </div>
          <p class="receipt-outcome">${item.outcome}</p>
        </article>
      `,
    )
    .join("");
}

function renderCaseStudies(items) {
  return items
    .map(
      (item, index) => `
        <article class="case-study-card reveal" style="--delay:${index * 100}ms">
          <div class="case-study-topline">
            <div>
              <p class="eyebrow">${item.eyebrow}</p>
              <h3>${item.name}</h3>
            </div>
            <a class="inline-link" href="${item.linkHref}" target="_blank" rel="noreferrer">${item.linkLabel}</a>
          </div>

          <div class="case-study-summary">
            <h4>${item.title}</h4>
            <p>${item.summary}</p>
          </div>

          <div class="case-study-grid">
            ${item.sections
              .map(
                (section) => `
                  <section class="case-study-block">
                    <p class="case-study-label">${section.label}</p>
                    <p>${section.text}</p>
                  </section>
                `,
              )
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderIntegrationRow(items, direction) {
  const content = [...items, ...items]
    .map((item) => `<span class="integration-pill">${item}</span>`)
    .join("");

  return `
    <div class="integration-marquee ${direction}">
      <div class="integration-track">
        ${content}
      </div>
    </div>
  `;
}

function renderProcess(items) {
  return items
    .map(
      (item, index) => `
        <article class="process-card reveal" style="--delay:${index * 75}ms">
          <p class="process-index">0${index + 1}</p>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

app.innerHTML = `
  <main class="page">
    <div class="progress-rail" aria-hidden="true">
      <span class="progress-bar"></span>
    </div>

    <header class="site-header reveal">
      <a class="brand" href="#top">Jay Patel</a>
      <nav class="site-nav">
        <a href="#work">Work</a>
        <a href="#case-studies">Case studies</a>
        <a href="#systems">Systems</a>
        <a href="#process">Process</a>
      </nav>
    </header>

    <section class="hero" id="top">
      <div class="hero-copy reveal" style="--delay:40ms">
        <p class="eyebrow">Senior Product Manager</p>
        <p class="hero-intro">Hi, I’m Jay Patel.</p>
        <h1>I build analytics and AI products that make complex systems <span class="scribble-word">easier to trust</span>.</h1>
        <p class="hero-text">
          My best work sits where product strategy meets data infrastructure: AI Tracker, advanced analytics for enterprise agency reporting,
          and the integration systems that expanded AgencyAnalytics into a much broader platform.
        </p>
        <div class="hand-note reveal" style="--delay:90ms">
          <span class="hand-note-arrow" aria-hidden="true">↗</span>
          <p>Strategy, systems thinking, and product judgment over surface polish.</p>
        </div>
        <div class="hero-actions">
          <a class="button button-primary" href="#case-studies">See the work</a>
          <a class="button button-secondary" href="mailto:jaypatel131194@gmail.com">Email me</a>
        </div>
        <p class="hero-note"><span class="hand-drawn-line">Selected work and product judgment, not fluff, below.</span></p>
      </div>

      <aside class="signal-stage reveal" style="--delay:140ms">
        <div class="signal-orbit"></div>
        <div class="motion-scene" data-motion-scene>
          <article class="motion-layer drift motion-layer-base" data-depth="10">
            <p class="signal-label">Scroll-linked scene</p>
            <strong>AI Tracker</strong>
            <span>Prompt → platform → location → visibility</span>
          </article>
          <article class="motion-layer drift motion-layer-mid" data-depth="18">
            <p class="signal-label">Platform surface</p>
            <strong>80+ integrations</strong>
            <span>Expanded the reporting system across the full agency stack</span>
          </article>
          <article class="motion-layer drift motion-layer-top" data-depth="14">
            <p class="signal-label">Enterprise value</p>
            <strong>Advanced Analytics</strong>
            <span>27% adoption on AI reporting assistant</span>
          </article>
          <article class="motion-caption">
            <p class="motion-caption-label">Inspired by oil-motion</p>
            <p>The scene separates as you scroll so the three strongest bets become legible one at a time instead of competing at once.</p>
          </article>
        </div>
      </aside>
    </section>

    <section class="receipts-section" id="work">
      <div class="section-intro reveal">
        <p class="eyebrow">Selected Work</p>
        <h2>The quickest way to understand my product work is through the bets that changed the product surface.</h2>
        <p class="section-doodle">Three bets I’d want someone to remember after a fast skim.</p>
      </div>
      <div class="receipts-list">
        ${renderReceipts(receipts)}
      </div>
    </section>

    <section class="case-studies-section" id="case-studies">
      <div class="section-intro reveal">
        <p class="eyebrow">Case Studies</p>
        <h2>Depth matters more than volume when the goal is showing product judgment.</h2>
        <p class="section-copy">
          These are structured around the product decisions themselves: the problem, the evidence, the options considered, the trade-offs,
          the build decision, and the metrics that would tell me whether the bet was actually working.
        </p>
      </div>
      <div class="showcase-layout showcase-layout-inline">
        <article class="showcase-frame reveal" style="--delay:40ms">
          <div class="showcase-copy">
            <p class="showcase-kicker">AI Tracker product view</p>
            <h3>Keep the product story tied to the actual surface customers would use.</h3>
          </div>
          <div class="showcase-video-shell">
            <iframe
              class="showcase-video-frame"
              src="https://fast.wistia.net/embed/iframe/jxiaxo8qat?seo=false&videoFoam=true"
              title="AgencyAnalytics AI Tracker related demo"
              allow="autoplay; fullscreen"
              loading="lazy"
            ></iframe>
          </div>
        </article>

        <aside class="showcase-notes reveal" style="--delay:110ms">
          <article class="note-card">
            <p class="eyebrow">Why it belongs here</p>
            <h3>The AI Tracker story should stay next to the product surface.</h3>
            <p>
              The point is not just that I shaped the product strategy. It is that the strategy resolved into a workflow agencies could actually
              understand in product: what to track, where visibility appears, and how that changes over time.
            </p>
          </article>
          <article class="note-card alt">
            <p class="eyebrow">What to notice</p>
            <h3>Clarity matters more than novelty in an emerging category.</h3>
            <p>
              The strongest decision was keeping the workflow legible. Agencies needed a product they could explain confidently to clients, not
              a vague AI feature cluster with unclear reporting value.
            </p>
          </article>
        </aside>
      </div>
      <div class="case-studies-stack">
        ${renderCaseStudies(caseStudies)}
      </div>
    </section>

    <section class="systems-section" id="systems">
      <div class="section-intro reveal">
        <p class="eyebrow">Systems Work</p>
        <h2>The integration footprint should be visible, not buried in one line of resume copy.</h2>
        <p class="section-copy">
          I owned the ecosystem as it grew from roughly 40 to 80+ integrations across ads, analytics, ecommerce, CRM, and warehouse layers.
          The value was not just breadth. It was making the reporting platform more complete and more useful for agency teams doing real client work.
        </p>
      </div>

      <div class="systems-panel reveal">
        <div class="systems-stat drift" data-depth="10">
          <span>Platform expansion</span>
          <strong>80+</strong>
          <p>integrations spanning acquisition, analytics, ecommerce, CRM, and data warehouse workflows</p>
        </div>
        <div class="systems-marquees">
          ${renderIntegrationRow(integrationRows[0], "forward")}
          ${renderIntegrationRow(integrationRows[1], "reverse")}
        </div>
      </div>
    </section>

    <section class="process-section" id="process">
      <div class="section-intro reveal">
        <p class="eyebrow">Process</p>
        <h2>How I usually lead product work when the problem is noisy and the right bet is not obvious yet.</h2>
      </div>
      <div class="process-grid">
        ${renderProcess(processSteps)}
      </div>
    </section>

    <footer class="site-footer reveal">
      <p class="footer-title">Jay Patel</p>
      <p class="footer-copy">Senior Product Manager focused on analytics, AI, reporting systems, and platform product strategy.</p>
      <a class="inline-link" href="https://jaypatelpm.vercel.app/" target="_blank" rel="noreferrer">jaypatelpm.vercel.app</a>
    </footer>
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
  { threshold: 0.14 },
);

document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

const root = document.documentElement;
const drifters = [...document.querySelectorAll(".drift")];
const motionScene = document.querySelector("[data-motion-scene]");

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  root.style.setProperty("--scroll-progress", progress.toFixed(4));
}

let currentSceneProgress = 0;
let targetSceneProgress = 0;

let pointerX = 0;
let pointerY = 0;
let rafId = null;

function updateSceneTarget() {
  if (!motionScene) return;
  const rect = motionScene.getBoundingClientRect();
  const start = window.innerHeight * 0.15;
  const end = window.innerHeight * 0.92;
  const raw = (end - rect.top) / (end - start);
  targetSceneProgress = Math.max(0, Math.min(1, raw));
}

function paintMotion() {
  rafId = null;

  currentSceneProgress += (targetSceneProgress - currentSceneProgress) * 0.11;
  root.style.setProperty("--scene-progress", currentSceneProgress.toFixed(4));

  drifters.forEach((node) => {
    const depth = Number(node.dataset.depth || 0);
    const moveX = pointerX * (depth / 100);
    const moveY = pointerY * (depth / 120);
    node.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  });

  const sceneSettled = Math.abs(targetSceneProgress - currentSceneProgress) < 0.0015;
  if (!sceneSettled) {
    queueMotionPaint();
  }
}

function queueMotionPaint() {
  if (!rafId) {
    rafId = window.requestAnimationFrame(paintMotion);
  }
}

window.addEventListener(
  "scroll",
  () => {
    updateScrollProgress();
    updateSceneTarget();
    queueMotionPaint();
  },
  { passive: true },
);
window.addEventListener(
  "resize",
  () => {
    updateScrollProgress();
    updateSceneTarget();
    queueMotionPaint();
  },
  { passive: true },
);
window.addEventListener(
  "mousemove",
  (event) => {
    pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
    pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
    root.style.setProperty("--pointer-x", pointerX.toFixed(4));
    root.style.setProperty("--pointer-y", pointerY.toFixed(4));
    queueMotionPaint();
  },
  { passive: true },
);

updateScrollProgress();
updateSceneTarget();
queueMotionPaint();
