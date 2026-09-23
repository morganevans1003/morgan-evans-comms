import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  X,
} from "lucide-react";

const EMAIL = "morganevans1003@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/morgan-evans-comms/";

const enquiryLink = (
  subject = "Freelance project enquiry",
  body = ""
) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

const projects = [
  {
    title: "NTI Townsville 500",
    type: "Major event communications",
    teaser:
      "Coordinated public information for a major event with wide-ranging community impacts.",
    challenge:
      "A major event brings excitement, but also changes to access, movement and day-to-day activity. The communications challenge was to make practical information easy for different audiences to understand and act on.",
    role:
      "Supported strategic and public-facing communications, translating operational information into clear, timely messaging across relevant channels.",
    delivered: [
      "Public-facing event messaging",
      "Stakeholder and community information",
      "Cross-channel content",
      "Clear translation of operational impacts",
    ],
    outcome:
      "A coordinated communications approach that helped audiences understand what was happening, what it meant for them and where to find the information they needed.",
    tags: ["Messaging", "Stakeholders", "Public information"],
  },
  {
    title: "Protect Our Trees",
    type: "Behaviour change campaign",
    teaser:
      "Community-focused environmental communications that made an important issue clear and actionable.",
    challenge:
      "Environmental issues can be technical and easy to overlook. The campaign needed to explain why protecting local trees matters while giving the community practical, accessible information.",
    role:
      "Developed and refined audience-first campaign content that turned environmental information into straightforward community messaging.",
    delivered: [
      "Campaign messaging",
      "Community education content",
      "Digital and promotional copy",
      "Audience-focused calls to action",
    ],
    outcome:
      "A clearer, more approachable campaign that connected an environmental priority with practical community action.",
    tags: ["Campaigns", "Education", "Content"],
  },
  {
    title: "Snap Send Solve",
    type: "Youth engagement campaign",
    teaser:
      "Youth-led communications designed to make civic participation simple, relevant and approachable.",
    challenge:
      "The project needed to encourage younger audiences to engage with a practical reporting tool without making the campaign feel overly corporate or institutional.",
    role:
      "Supported the development of youth-focused campaign messaging and materials, shaping content around participation, accessibility and a clear call to action.",
    delivered: [
      "Youth-focused social copy",
      "Campaign and flyer content",
      "Website messaging",
      "Supporting video campaign copy",
    ],
    outcome:
      "An approachable communications package that positioned civic participation as something young people could easily understand and take part in.",
    tags: ["Engagement", "Youth", "Digital"],
  },
  {
    title: "Gulliver & Hugh Streets",
    type: "Infrastructure communications",
    teaser:
      "Practical project communications helping affected audiences understand works, impacts and timing.",
    challenge:
      "Infrastructure works can create uncertainty for residents, businesses and road users. Communications needed to translate project detail into the information affected audiences actually cared about.",
    role:
      "Prepared project communications and stakeholder-facing materials focused on timing, access, impacts and what people could expect throughout works.",
    delivered: [
      "Works notifications",
      "Resident and stakeholder messaging",
      "Project updates",
      "Technical-to-public translation",
    ],
    outcome:
      "Clearer project information designed to reduce uncertainty and keep affected audiences informed as works progressed.",
    tags: ["Infrastructure", "Notifications", "Community"],
  },
];

const services = [
  {
    n: "01",
    title: "Communications planning",
    copy:
      "A practical plan that turns objectives into audiences, key messages, channels, tactics and an achievable action plan.",
    fit: "Best for projects that need direction before delivery starts.",
  },
  {
    n: "02",
    title: "Stakeholder engagement",
    copy:
      "Stakeholder mapping, engagement approaches and materials designed to make consultation clearer, more purposeful and easier to deliver.",
    fit:
      "Best for projects involving communities, partners or affected stakeholders.",
  },
  {
    n: "03",
    title: "Content & campaigns",
    copy:
      "Human, audience-first copy for web, EDMs, social, project updates, articles, flyers and campaign materials.",
    fit:
      "Best when you know what needs saying but need help saying it well.",
  },
  {
    n: "04",
    title: "Project communications",
    copy:
      "Straightforward communications support for infrastructure, change, events and projects where people need timely, accurate information.",
    fit:
      "Best for complex delivery environments with real community impacts.",
  },
];

const packages = [
  {
    name: "Essential",
    price: "AUD $750",
    kicker: "A focused starting point",
    desc:
      "For smaller projects that need a clear communications direction without unnecessary complexity.",
    includes: [
      "Project discovery and objectives",
      "Priority audience identification",
      "Core key messages",
      "Recommended channels and tactics",
      "Simple action timeline",
      "One round of revisions",
    ],
  },
  {
    name: "Standard",
    price: "AUD $1,250",
    kicker: "Most popular",
    featured: true,
    desc:
      "A detailed communications and engagement plan for projects involving multiple audiences or stakeholders.",
    includes: [
      "Everything in Essential",
      "Stakeholder identification and mapping",
      "Engagement approach",
      "Detailed tactics and responsibilities",
      "Issues and risk considerations",
      "Measurement approach",
      "Two rounds of revisions",
    ],
  },
  {
    name: "Comprehensive",
    price: "AUD $2,000",
    kicker: "For complex projects",
    desc:
      "A comprehensive strategy for projects that need deeper stakeholder thinking and a stronger implementation roadmap.",
    includes: [
      "Everything in Standard",
      "Detailed stakeholder analysis",
      "Tailored engagement methods",
      "Message framework by audience",
      "Detailed action and engagement schedule",
      "Supporting FAQ or briefing document",
      "Implementation handover session",
      "Two rounds of revisions",
    ],
  },
];

const addons = [
  ["Stakeholder map", "From AUD $250"],
  ["Key messages + FAQ", "From AUD $300"],
  ["Works / project notification", "From AUD $200"],
  ["Web or EDM copy", "From AUD $250"],
  ["Additional briefing document", "From AUD $300"],
  ["Additional revision round", "From AUD $150"],
];

const btn =
  "inline-flex items-center justify-center rounded-full px-5 py-3 font-black transition";

export default function App() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const filters = ["All", "Campaigns", "Engagement", "Infrastructure"];

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.tags.includes(filter
