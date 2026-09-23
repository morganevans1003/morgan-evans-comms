import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, ExternalLink, Mail, MapPin, Menu, MessageSquareText, X } from "lucide-react";

const EMAIL = "morganevans1003@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/morgan-evans-comms/";
const enquiryLink = (subject = "Freelance project enquiry", body = "") =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const projects = [
  { title: "NTI Townsville 500", type: "Major event communications", teaser: "Coordinated public information for a major event with wide-ranging community impacts.", challenge: "A major event brings excitement, but also changes to access, movement and day-to-day activity. The communications challenge was to make practical information easy for different audiences to understand and act on.", role: "Supported strategic and public-facing communications, translating operational information into clear, timely messaging across relevant channels.", delivered: ["Public-facing event messaging", "Stakeholder and community information", "Cross-channel content", "Clear translation of operational impacts"], outcome: "A coordinated communications approach that helped audiences understand what was happening, what it meant for them and where to find the information they needed.", tags: ["Messaging", "Stakeholders", "Public information"] },
  { title: "Protect Our Trees", type: "Behaviour change campaign", teaser: "Community-focused environmental communications that made an important issue clear and actionable.", challenge: "Environmental issues can be technical and easy to overlook. The campaign needed to explain why protecting local trees matters while giving the community practical, accessible information.", role: "Developed and refined audience-first campaign content that turned environmental information into straightforward community messaging.", delivered: ["Campaign messaging", "Community education content", "Digital and promotional copy", "Audience-focused calls to action"], outcome: "A clearer, more approachable campaign that connected an environmental priority with practical community action.", tags: ["Campaigns", "Education", "Content"] },
  { title: "Snap Send Solve", type: "Youth engagement campaign", teaser: "Youth-led communications designed to make civic participation simple, relevant and approachable.", challenge: "The project needed to encourage younger audiences to engage with a practical reporting tool without making the campaign feel overly corporate or institutional.", role: "Supported the development of youth-focused campaign messaging and materials, shaping content around participation, accessibility and a clear call to action.", delivered: ["Youth-focused social copy", "Campaign and flyer content", "Website messaging", "Supporting video campaign copy"], outcome: "An approachable communications package that positioned civic participation as something young people could easily understand and take part in.", tags: ["Engagement", "Youth", "Digital"] },
  { title: "Gulliver & Hugh Streets", type: "Infrastructure communications", teaser: "Practical project communications helping affected audiences understand works, impacts and timing.", challenge: "Infrastructure works can create uncertainty for residents, businesses and road users. Communications needed to translate project detail into the information affected audiences actually cared about.", role: "Prepared project communications and stakeholder-facing materials focused on timing, access, impacts and what people could expect throughout works.", delivered: ["Works notifications", "Resident and stakeholder messaging", "Project updates", "Technical-to-public translation"], outcome: "Clearer project information designed to reduce uncertainty and keep affected audiences informed as works progressed.", tags: ["Infrastructure", "Notifications", "Community"] }
];

const services = [
  { n: "01", title: "Communications planning", copy: "A practical plan that turns objectives into audiences, key messages, channels, tactics and an achievable action plan.", fit: "Best for projects that need direction before delivery starts." },
  { n: "02", title: "Stakeholder engagement", copy: "Stakeholder mapping, engagement approaches and materials designed to make consultation clearer, more purposeful and easier to deliver.", fit: "Best for projects involving communities, partners or affected stakeholders." },
  { n: "03", title: "Content & campaigns", copy: "Human, audience-first copy for web, EDMs, social, project updates, articles, flyers and campaign materials.", fit: "Best when you know what needs saying but need help saying it well." },
  { n: "04", title: "Project communications", copy: "Straightforward communications support for infrastructure, change, events and projects where people need timely, accurate information.", fit: "Best for complex delivery environments with real community impacts." }
];

const packages = [
  { name: "Essential", price: "AUD $750", kicker: "A focused starting point", desc: "For smaller projects that need a clear communications direction without unnecessary complexity.", includes: ["Project discovery and objectives", "Priority audience identification", "Core key messages", "Recommended channels and tactics", "Simple action timeline", "One round of revisions"] },
  { name: "Standard", price: "AUD $1,250", kicker: "Most popular", featured: true, desc: "A detailed communications and engagement plan for projects involving multiple audiences or stakeholders.", includes: ["Everything in Essential", "Stakeholder identification and mapping", "Engagement approach", "Detailed tactics and responsibilities", "Issues and risk considerations", "Measurement approach", "Two rounds of revisions"] },
  { name: "Comprehensive", price: "AUD $2,000", kicker: "For complex projects", desc: "A comprehensive strategy for projects that need deeper stakeholder thinking and a stronger implementation roadmap.", includes: ["Everything in Standard", "Detailed stakeholder analysis", "Tailored engagement methods", "Message framework by audience", "Detailed action and engagement schedule", "Supporting FAQ or briefing document", "Implementation handover session", "Two rounds of revisions"] }
];

const addons = [
  ["Stakeholder map", "From AUD $250"],
  ["Key messages + FAQ", "From AUD $300"],
  ["Works / project notification", "From AUD $200"],
  ["Web or EDM copy", "From AUD $250"],
  ["Additional briefing document", "From AUD $300"],
  ["Additional revision round", "From AUD $150"]
];

const btn = "inline-flex items-center justify-center rounded-full px-5 py-3 font-black transition";

export default function App() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const filters = ["All", "Campaigns", "Engagement", "Infrastructure"];
  const visible = useMemo(() => filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter)), [filter]);
  const nav = ["Services", "Packages", "Work", "About", "Contact"];

  return (
    <main className="min-h-screen bg-[#f5f2ea] text-[#13251f] selection:bg-[#d5ff68]">
      <header className="sticky top-0 z-50 border-b border-[#13251f]/10 bg-[#f5f2ea]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="text-lg font-black">ME<span className="text-[#39725c]">.</span></a>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((i) => <a key={i} href={`#${i.toLowerCase()}`} className="text-sm font-medium hover:text-[#39725c]">{i}</a>)}
            <a href={enquiryLink()} className={`${btn} bg-[#13251f] text-white hover:bg-[#39725c]`}>Discuss a project <ArrowRight className="ml-2 h-4 w-4" /></a>
          </nav>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden">{open ? <X /> : <Menu />}</button>
        </div>
        {open && <div className="px-5 py-5 md:hidden">{nav.map((i) => <a onClick={() => setOpen(false)} key={i} href={`#${i.toLowerCase()}`} className="block py-3 text-lg font-bold">{i}</a>)}</div>}
      </header>

      <section id="top" className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-20 md:grid-cols-12 md:px-8 md:pb-28 md:pt-28">
        <div className="md:col-span-9">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#13251f]/15 px-4 py-2 text-xs font-bold uppercase tracking-[.14em]"><span className="h-2 w-2 rounded-full bg-[#78a944]" />Available for freelance & contract projects</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl text-6xl font-black leading-[.91] tracking-[-.065em] sm:text-7xl md:text-[108px]">Clear communication for projects that <span className="text-[#39725c]">matter.</span></motion.h1>
        </div>
        <div className="flex flex-col justify-end md:col-span-3">
          <p className="mb-6 text-lg leading-relaxed text-[#13251f]/70">I'm Morgan Evans. I help organisations turn complex projects, stakeholder needs and technical information into communications people can understand and act on.</p>
          <a href={enquiryLink()} className={`${btn} mb-4 bg-[#d5ff68] text-[#13251f] hover:bg-[#c7ef58]`}>Tell me about your project <ArrowRight className="ml-2 h-4 w-4" /></a>
          <a href="#packages" className="text-center text-sm font-bold underline underline-offset-4">View packages and rates</a>
        </div>
      </section>

      <section className="bg-[#13251f] text-[#f5f2ea]"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-9 text-sm md:grid-cols-3 md:px-8"><div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#d5ff68]" />New Zealand · Available remotely</div><div className="flex items-center gap-3"><MessageSquareText className="h-4 w-4 text-[#d5ff68]" />Communications · Engagement · Content</div><div className="md:text-right">Freelance projects · Contract support · Defined deliverables</div></div></section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-14 grid gap-5 md:grid-cols-2"><div><p className="mb-3 text-xs font-black uppercase tracking-[.18em] text-[#39725c]">How I can help</p><h2 className="text-5xl font-black tracking-[-.05em] md:text-7xl">Bring me the<br />messy brief.</h2></div><div className="max-w-md self-end"><p className="mb-5 text-lg text-[#13251f]/65">Whether you need a plan from scratch or extra capacity to get a project over the line, I provide practical communications support with a clear end product.</p><a href="#packages" className="inline-flex items-center font-bold text-[#39725c]">See packages and pricing <ChevronRight className="h-4 w-4" /></a></div></div>
        <div className="grid border-t border-[#13251f]/20 md:grid-cols-2">{services.map((s, i) => <a href="#packages" key={s.n} className={`block border-b border-[#13251f]/20 py-9 md:p-9 ${i % 2 === 0 ? "md:border-r" : ""}`}><div className="mb-10 text-xs font-black text-[#39725c]">{s.n}</div><h3 className="mb-4 text-2xl font-black">{s.title}</h3><p className="mb-5 text-[#13251f]/65">{s.copy}</p><p className="text-sm font-bold">{s.fit}</p></a>)}</div>
      </section>

      <section id="packages" className="bg-[#13251f] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-3 text-xs font-black uppercase tracking-[.18em] text-[#d5ff68]">Packages & rates</p>
          <h2 className="mb-12 text-5xl font-black tracking-[-.05em] md:text-7xl">A clear starting point.</h2>
          <div className="grid gap-5 lg:grid-cols-3">{packages.map((p) => <div key={p.name} className={`relative rounded-[2rem] border p-8 ${p.featured ? "border-[#d5ff68] bg-[#f5f2ea] text-[#13251f]" : "border-white/15 bg-white/5"}`}>{p.featured && <span className="absolute right-6 top-6 rounded-full bg-[#d5ff68] px-3 py-1 text-xs font-black">POPULAR</span>}<p className="mb-3 text-xs font-black uppercase tracking-[.14em] text-[#78a944]">{p.kicker}</p><h3 className="text-3xl font-black">{p.name}</h3><div className="mb-5 mt-3 text-3xl font-black">{p.price}<span className="text-sm font-medium opacity-60"> starting price</span></div><p className="mb-7 opacity-70">{p.desc}</p><div className="mb-8 space-y-3">{p.includes.map((x) => <div key={x} className="flex gap-3 text-sm font-semibold"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#78a944]" />{x}</div>)}</div><a href={enquiryLink(`${p.name} package enquiry`, `Hi Morgan,\n\nI'm interested in your ${p.name} package. My project is:\n\nDesired timing:\n\nThanks,`)} className={`${btn} w-full ${p.featured ? "bg-[#13251f] text-white" : "bg-[#d5ff68] text-[#13251f]"}`}>Choose {p.name}<ArrowRight className="ml-2 h-4 w-4" /></a></div>)}</div>
          <div className="mt-14 grid gap-8 rounded-[2rem] border border-white/15 p-8 md:grid-cols-2"><div><p className="mb-3 text-xs font-black uppercase tracking-[.14em] text-[#d5ff68]">Optional add-ons</p><h3 className="text-3xl font-black">Build the scope you actually need.</h3></div><div className="grid gap-3 sm:grid-cols-2">{addons.map(([n, p]) => <a key={n} href={enquiryLink(`${n} enquiry`, `Hi Morgan,\n\nI'd like to discuss adding ${n.toLowerCase()} to my project.\n\nProject details:\n`)} className="rounded-xl bg-white/5 p-4 hover:bg-white/10"><div className="font-bold">{n}</div><div className="mt-1 text-sm text-[#d5ff68]">{p}</div></a>)}</div></div>
        </div>
      </section>

      <section className="bg-[#f5f2ea] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-14 grid gap-6 md:grid-cols-2"><div><p className="mb-3 text-xs font-black uppercase tracking-[.18em] text-[#39725c]">See what you'll receive</p><h2 className="text-5xl font-black tracking-[-.05em] md:text-7xl">From strategy to a usable plan.</h2></div><p className="max-w-lg self-end text-lg leading-relaxed text-[#13251f]/65">Before starting a project, it's useful to know what the finished work could look like. Explore two illustrative examples showing how I structure practical communications and stakeholder engagement plans.</p></div>
          <div className="grid gap-5 md:grid-cols-2">
            <a href="/samples/communications-plan-sample.pdf" target="_blank" rel="noreferrer" className="group flex min-h-[370px] flex-col rounded-[2rem] bg-white p-8 transition hover:-translate-y-1"><div className="mb-16 flex items-start justify-between"><span className="text-xs font-black uppercase tracking-[.14em] text-[#39725c]">01 · Illustrative sample</span><span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#13251f]/15 transition group-hover:bg-[#d5ff68]"><ExternalLink className="h-4 w-4" /></span></div><h3 className="mb-4 text-3xl font-black tracking-[-.04em]">Communications Plan</h3><p className="mb-8 max-w-lg flex-1 leading-relaxed text-[#13251f]/65">See how objectives, audiences, key messages, channels, tactics, risks and measurement come together in a practical communications roadmap.</p><span className="inline-flex items-center font-black text-[#39725c]">View sample <ExternalLink className="ml-2 h-4 w-4" /></span></a>
            <a href="/samples/stakeholder-engagement-plan-sample.pdf" target="_blank" rel="noreferrer" className="group flex min-h-[370px] flex-col rounded-[2rem] bg-[#39725c] p-8 text-white transition hover:-translate-y-1"><div className="mb-16 flex items-start justify-between"><span className="text-xs font-black uppercase tracking-[.14em] text-[#d5ff68]">02 · Illustrative sample</span><span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition group-hover:bg-[#d5ff68] group-hover:text-[#13251f]"><ExternalLink className="h-4 w-4" /></span></div><h3 className="mb-4 text-3xl font-black tracking-[-.04em]">Stakeholder Engagement Plan</h3><p className="mb-8 max-w-lg flex-1 leading-relaxed text-white/70">See how stakeholder mapping, prioritisation, engagement methods, issues, feedback and evaluation can be structured into an actionable engagement plan.</p><span className="inline-flex items-center font-black text-[#d5ff68]">View sample <ExternalLink className="ml-2 h-4 w-4" /></span></a>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[#13251f]/50">Illustrative examples created to demonstrate my approach and deliverable structure. Client plans are tailored to each organisation, project, audience and stakeholder environment.</p>
        </div>
      </section>

      <section id="work" className="bg-[#dce5d6] py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-black uppercase tracking-[.18em] text-[#39725c]">Selected work</p><h2 className="text-5xl font-black md:text-7xl">Proof, not promises.</h2></div><div className="flex flex-wrap gap-2">{filters.map((f) => <button onClick={() => setFilter(f)} key={f} className={`rounded-full px-4 py-2 text-xs font-bold ${filter === f ? "bg-[#13251f] text-white" : "border border-[#13251f]/20"}`}>{f}</button>)}</div></div>
          <div className="grid gap-5 md:grid-cols-2">{visible.map((p) => <div key={p.title} className="flex flex-col rounded-[2rem] bg-[#f5f2ea] p-8"><p className="mb-12 text-xs font-black uppercase text-[#39725c]">{p.type}</p><h3 className="mb-4 text-3xl font-black">{p.title}</h3><p className="mb-7 flex-1 text-[#13251f]/65">{p.teaser}</p><button onClick={() => setActive(p)} className="inline-flex items-center self-start font-black text-[#39725c]">Read case study <ArrowRight className="ml-2 h-4 w-4" /></button></div>)}</div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-12 md:px-8"><div className="md:col-span-4"><p className="text-xs font-black uppercase tracking-[.18em] text-[#39725c]">Why work with me</p></div><div className="md:col-span-8"><h2 className="mb-10 text-4xl font-black md:text-6xl">Strategy when you need direction. Delivery when you need things done.</h2><p className="max-w-3xl leading-relaxed text-[#13251f]/65">My background spans communications, stakeholder and community engagement, infrastructure projects, public campaigns and content. I work comfortably with technical teams, stakeholders and competing priorities, then turn the complexity into something useful for the audience.</p></div></section>

      <section id="contact" className="mx-3 mb-3 rounded-[2.5rem] bg-[#39725c] px-5 py-20 text-white md:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12"><div className="md:col-span-8"><p className="mb-5 text-xs font-black uppercase tracking-[.18em] text-[#d5ff68]">Let's work together</p><h2 className="text-5xl font-black md:text-8xl">Let's make your project easier to communicate.</h2></div><div className="flex flex-col justify-end gap-3 md:col-span-4"><a href={enquiryLink()} className={`${btn} bg-[#d5ff68] text-[#13251f]`}><Mail className="mr-2 h-4 w-4" />Email Morgan</a><a href={LINKEDIN} target="_blank" rel="noreferrer" className={`${btn} border border-white/30 text-white`}>LinkedIn <ExternalLink className="ml-2 h-4 w-4" /></a></div></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-9 text-xs text-[#13251f]/55 md:flex-row md:justify-between md:px-8"><div>© 2026 Morgan Evans · Communications & Stakeholder Engagement</div><div className="flex gap-5"><a href={enquiryLink()}>Email</a><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a><a href="#packages">Rates</a><a href="#top">Back to top</a></div></footer>

      {active && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#13251f]/60 p-5 backdrop-blur-sm" onClick={() => setActive(null)}><div onClick={(e) => e.stopPropagation()} className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-[#f5f2ea] p-8"><div className="flex justify-between"><div><p className="text-xs font-black uppercase text-[#39725c]">{active.type}</p><h2 className="mt-2 text-4xl font-black">{active.title}</h2></div><button aria-label="Close case study" onClick={() => setActive(null)}><X /></button></div><div className="mt-8 grid gap-8 md:grid-cols-2"><div><b>The challenge</b><p className="mt-2 text-[#13251f]/70">{active.challenge}</p></div><div><b>My role</b><p className="mt-2 text-[#13251f]/70">{active.role}</p></div><div className="rounded-2xl bg-[#dce5d6] p-6"><b>What I delivered</b>{active.delivered.map((x) => <div key={x} className="mt-3 flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#39725c]" />{x}</div>)}</div><div className="rounded-2xl bg-white p-6"><b>Outcome</b><p className="mt-2 text-[#13251f]/70">{active.outcome}</p></div></div></div></div>}
    </main>
  );
}
