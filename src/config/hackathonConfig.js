/**
 * NARI HACKS 2026 Central Configuration
 * Single Source of Truth for all event details, branding, fees, and links.
 * Components read from this file and hardcode no event facts.
 */

export const config = {
  // Brand Identity
  brand: {
    organization: "NARI",
    organizationFullName: "New Age Research Initiatives",
    hackathonName: "HACKS",
    edition: "2026",
    acronymExpansion: "Hub for Advanced Creativity, Knowledge & Solutions",
    tagline: "Ideas Today. Impact Tomorrow.",
    scriptLine: "Build. Innovate. Create Change.",
    heroDescription:
      "A premier national 2-stage innovation hackathon: submit your solution deck online in Round 1, and the top 100 squads advance to the 24-hour non-stop on-campus Grand Finale in Greater Noida.",
    hashtag: "#NariHack2026",
    logoUrl: "/nari-logo.png",
    websiteUrl: "https://thehacks.in/",
    officialDomain: "thehacks.in",
    nariWebsite: "https://narinexus.com/",
    nariTagline: "Connecting Ideas. Enabling Innovation. Delivering Impact.",
    contactEmail: "",
  },

  // Event Logistics & Confirmed Dates
  event: {
    format: "2-Stage National Hackathon: Online PPT Evaluation + 24-Hour Offline Grand Finale",
    duration: "24 Hours (Offline Grand Finale)",
    mode: "Hybrid: Round 1 Online • Round 2 In-Person (Offline)",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    dates: "Nov 21 – 22, 2026",
    grandFinaleDates: "November 21 – 22, 2026",
    round1Dates: "Sep 23 – Nov 15, 2026",
    round2Dates: "Nov 21 – 22, 2026",
    registrationDeadline: "October 25, 2026 (12:00 AM IST)",
    pptDeadline: "November 15, 2026 (06:36 AM IST)",
    shortlistAnnouncementDate: "Mid-November 2026",
    venue: "Delhi Technical Campus (DTC)",
    venueSubtitle: "Affiliated to Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi",
    venueAddress: "Plot No. 28/1, Knowledge Park III, Greater Noida, Uttar Pradesh 201306",
    venueLocation: "Delhi Technical Campus, Knowledge Park III, Greater Noida, UP",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Delhi+Technical+Campus+Knowledge+Park+III+Greater+Noida",
    mapEmbedUrl: "https://maps.google.com/maps?q=Delhi+Technical+Campus+Knowledge+Park+III+Greater+Noida+201306&t=&z=15&ie=UTF8&iwloc=&output=embed",
    transit: {
      metro: "Knowledge Park II Metro Station (~1.5 km, Aqua Line) & Pari Chowk Station (~3 km)",
      road: "Noida-Greater Noida Expressway (Knowledge Park III exit) & Yamuna Expressway",
      connectivity:
        "Seamless connectivity across Delhi-NCR via Aqua Line and Blue Line interchange, IGI Airport (DEL) via Airport Metro, and direct transit from New Delhi & Anand Vihar Railway Stations",
    },
    facilities: [
      {
        title: "High-Speed Wi-Fi & Dedicated Power",
        description: "Uninterrupted power points and high-speed network for every squad workstation.",
      },
      {
        title: "Hardware Labs & Workbenches",
        description: "Equipped prototyping desks with testing gear for hardware and robotics squads.",
      },
      {
        title: "24/7 Meals & Midnight Snacks",
        description: "Complimentary breakfast, lunch, dinner, midnight refreshments, and hot beverages.",
      },
      {
        title: "Rest & Rejuvenation Lounges",
        description: "Designated resting spaces with round-the-clock campus security and first-aid support.",
      },
    ],
  },

  // Registration & Team Constraints
  registration: {
    unstopUrl: "https://unstop.com/p/hacks-2026-hub-for-advanced-creativity-knowledge-solutions-nari-nexus-1759592",
    feePerMember: 500,
    currencySymbol: "₹",
    minTeamSize: 2,
    maxTeamSize: 5,
    openTo: "Undergraduate students, postgraduate students and early innovators",
    rulebookPdfUrl: "",
    topTeamsShortlisted: 100,
  },

  // Prize Pool & Opportunities
  prizes: {
    totalPool: "₹1,00,000+",
    subline: "plus exciting rewards and exclusive PPO / internship opportunities by Makunai Global for winners",
    description:
      "₹1,00,000+ prize pool plus exciting rewards. Winners and standout performers will receive exclusive Pre-Placement Offers (PPOs) and high-impact internship opportunities from Makunai Global.",
    breakdownAnnounced: false,
    hiringPartnersAnnounced: true,
    hiringPartner: {
      name: "Makunai Global",
      headline: "Best AI CRM Software India with Automation",
      url: "https://www.makunaiglobal.ai/",
      logo: "/makunai-logo.png",
      offer: "Exclusive PPO & Internship Opportunities for Winners",
    },
    tiers: [],
  },

  // Mentors & Industry Leaders
  mentors: {
    status: "To be announced",
    invitedOrganisations: ["HCLTech", "TCS", "IBM", "DRDO"],
    list: [],
    contactEmail: "",
  },

  // Schedule Timeline (6 steps with verified dates & milestone badges)
  schedule: [
    {
      step: 1,
      title: "Register on Unstop",
      description: "Sign up your squad on the official Unstop competition portal before the registration deadline (Oct 25, 12:00 AM IST).",
      date: "Sep 23 – Oct 25, 2026",
      badge: "Registration Open",
    },
    {
      step: 2,
      title: "Form Your Squad (2–5 Members)",
      description: "Assemble interdisciplinary talent across engineering, design, or research and lock your team on Unstop.",
      date: "By Oct 25, 2026",
      badge: "Team Lock",
    },
    {
      step: 3,
      title: "Online Round 1: PPT Submission",
      description: "Submit your solution deck covering problem statement, innovation, tech stack & wireframe before the last date (Nov 15, 06:36 AM IST).",
      date: "Sep 23 – Nov 15, 2026",
      badge: "Online Evaluation",
    },
    {
      step: 4,
      title: "Top 100 Shortlist Announcement",
      description: "Shortlisted finalist squads announced for the in-person 24-hour Grand Finale.",
      date: "Mid-November 2026",
      badge: "Finalists Revealed",
    },
    {
      step: 5,
      title: "24-Hour Offline Hackathon Build",
      description: "Top 100 teams gather on-campus in Greater Noida to build working prototypes non-stop.",
      date: "Nov 21 – 22, 2026",
      badge: "Grand Finale",
    },
    {
      step: 6,
      title: "Pitching, Awards & PPO Offers",
      description: "Demonstrate live code and hardware to the jury for the ₹1L+ cash pool and Makunai PPOs.",
      date: "Nov 22, 2026",
      badge: "Results & Awards",
    },
  ],

  // 5 Themes with deep problem statements, target tech stacks, and focus areas
  themes: [
    {
      number: "01",
      title: "AI & Software Innovations",
      description: "Autonomous AI workflows, machine learning pipelines, cybersecurity, and scalable cloud platforms.",
      tags: ["AI & ML", "Web & Mobile", "Cybersecurity", "Cloud Architecture"],
      recommendedStacks: ["Python", "PyTorch", "LangChain", "Next.js", "FastAPI", "Docker"],
      sampleAreas: [
        "Autonomous AI agents & LLM orchestration workflows for enterprise automation",
        "Proactive cybersecurity auditing, automated zero-day detection & vulnerability shields",
        "High-performance cloud microservices, developer SDKs, and distributed databases",
        "Low-latency real-time collaborative applications and intelligent mobile platforms",
      ],
    },
    {
      number: "02",
      title: "Hardware & Robotics",
      description: "Embedded systems, robotics, autonomous drones, smart sensors, and physical computing prototypes.",
      tags: ["Embedded", "Robotics", "Sensors", "Hardware Design"],
      recommendedStacks: ["ESP32", "Arduino", "Raspberry Pi", "ROS 2", "C/C++", "FreeRTOS"],
      sampleAreas: [
        "Autonomous mobile robotics (AMRs), robotic arms, and intelligent automated navigation",
        "Low-power edge microcontroller interfacing and real-time sensor telemetry networks",
        "Assistive physical mechatronics and rehabilitative hardware devices for accessibility",
        "Industrial closed-loop actuator control, motor drives, and custom PCB circuits",
      ],
    },
    {
      number: "03",
      title: "IoT & Smart Connected Systems",
      description: "Intelligent campus infrastructure, distributed edge sensor networks, telemetry, and industrial automation.",
      tags: ["IoT", "Edge Devices", "Smart Campus", "Industrial Automation"],
      recommendedStacks: ["MQTT", "LoRaWAN", "BLE Mesh", "Node-RED", "InfluxDB", "Grafana"],
      sampleAreas: [
        "Smart campus utility management, automated power efficiency, and water conservation",
        "Edge-AI smart security, distributed acoustic/environmental tracking, and asset tags",
        "Industrial IoT (IIoT) predictive maintenance via real-time vibration and thermal telemetry",
        "Precision smart agriculture and greenhouse climate monitoring over long-range wireless",
      ],
    },
    {
      number: "04",
      title: "Sustainability, Healthcare & Social Impact",
      description: "Clean energy optimization, accessible medical diagnostics, climate resilience, and civic technology.",
      tags: ["CleanTech", "MedTech", "Accessibility", "Civic Tech"],
      recommendedStacks: ["Bio-Sensors", "Flutter", "Python ML", "Edge Impulse", "GIS APIs"],
      sampleAreas: [
        "Affordable point-of-care medical diagnostic tools and non-invasive patient monitors",
        "Renewable microgrid load balancing, solar battery management, and carbon accounting",
        "Intelligent municipal solid waste sorting, circular economy tools, and water purity testing",
        "Assistive communications and spatial audio tech for visually or hearing-impaired users",
      ],
    },
    {
      number: "05",
      title: "Open Innovation",
      description: "Bold interdisciplinary solutions: immersive spatial computing (AR/VR), fintech, edtech, and wildcards.",
      tags: ["AR/VR", "FinTech", "EdTech", "Interdisciplinary"],
      recommendedStacks: ["Unity", "WebXR", "Three.js", "React Native", "Solidity", "Supabase"],
      sampleAreas: [
        "Immersive spatial computing, WebXR digital twins, and interactive AR/VR training suites",
        "Fraud-resilient fintech protocols, micro-lending, and automated escrow transaction tools",
        "Adaptive AI tutoring and interactive learning environments for underrepresented students",
        "Wildcard cross-disciplinary prototypes addressing unserved high-impact societal needs",
      ],
    },
  ],

  // Eligibility & Rules
  eligibility: [
    "Undergraduate students (B.Tech, B.E., B.Sc, BCA, etc.) from any recognized university or college",
    "Postgraduate students (M.Tech, MCA, M.Sc, MBA Tech, etc.) and research scholars",
    "Early innovators, self-taught builders, and aspiring tech creators",
  ],
  rules: [
    "Teams must consist of 2 to 5 members. Solo entries are strictly not allowed.",
    "Registration fee is ₹500 per member, paid exclusively through Unstop.",
    "Round 1 consists of an online PPT submission on Unstop. Top 100 teams qualify for Round 2.",
    "Round 2 is a 24-hour on-campus offline hackathon in Greater Noida; all squad members must be physically present.",
    "All code and hardware prototypes must be built fresh during the 24-hour hackathon window.",
    "Every participant must present a valid institutional student ID card during on-campus check-in.",
    "All participants must follow the NARI Code of Conduct and event guidelines.",
  ],

  // FAQ: Comprehensive with dates, venue, stages, and Instagram
  faqs: [
    {
      question: "What is HACKS 2026?",
      answer:
        "HACKS 2026 (Hub for Advanced Creativity, Knowledge & Solutions) is a national 2-stage innovation hackathon presented by New Age Research Initiatives (NARI). Round 1 is an online PPT submission, leading to an intense 24-hour offline Grand Finale on-campus in Greater Noida for the top 100 squads.",
    },
    {
      question: "What are the important dates and deadlines?",
      answer:
        "Registrations on Unstop close on October 25, 2026 (12:00 AM IST). Online Round 1 PPT submissions are open until the last date on November 15, 2026 (06:36 AM IST). Shortlisted top 100 teams will be announced in mid-November 2026. The 24-hour offline Grand Finale takes place on November 21 – 22, 2026 at Delhi Technical Campus (DTC), Greater Noida.",
    },
    {
      question: "Where is the offline Grand Finale venue?",
      answer:
        "The offline Grand Finale is hosted on-campus at Delhi Technical Campus (DTC), Plot No. 28/1, Knowledge Park III, Greater Noida, Uttar Pradesh 201306 (affiliated to Guru Gobind Singh Indraprastha University - GGSIPU, New Delhi). The campus is located within 5 minutes of Knowledge Park II and Pari Chowk Metro Stations on the Aqua Line.",
    },
    {
      question: "Who can participate and what is the team size?",
      answer:
        "Undergraduate and postgraduate students from any accredited college/university, as well as early innovators. Teams must have 2 to 5 members. Cross-college, cross-department, and cross-year squads are encouraged!",
    },
    {
      question: "What is the registration fee and how do I register?",
      answer:
        "The fee is ₹500 per member, processed securely through the official Unstop competition portal. Only verified registrations on Unstop are valid for participation.",
    },
    {
      question: "What do teams need to submit for Round 1?",
      answer:
        "Teams submit an online presentation deck (PPT/PDF) detailing their chosen problem statement, proposed innovation, system architecture/tech stack, wireframes or hardware block diagram, and potential impact.",
    },
    {
      question: "Can we build hardware and IoT projects?",
      answer:
        "Yes! Hardware & Robotics and IoT & Smart Connected Systems are dedicated tracks. Prototyping workstations and test benches are provided at the venue. Squads should bring their own development boards, sensors, and components.",
    },
    {
      question: "What are the prizes and partner perks?",
      answer:
        "Teams compete for a cash prize pool of ₹1,00,000+, plus exclusive Pre-Placement Offers (PPOs) and paid industry internship opportunities provided by our official talent partner, Makunai Global.",
    },
    {
      question: "Where can I follow live updates and announcements?",
      answer:
        "Join our official WhatsApp Community (chat.whatsapp.com/DZ1uOWeWatjFYibQln1cV9) for instant announcements, query resolution, and team matchmaking, and follow our official Instagram handle @nari.hackathons for live reveals, shortlisted teams, and mentor spotlights.",
    },
  ],

  // Community & Social Links
  socials: {
    whatsapp: "https://chat.whatsapp.com/DZ1uOWeWatjFYibQln1cV9",
    whatsappCommunity: "https://chat.whatsapp.com/DZ1uOWeWatjFYibQln1cV9",
    instagram: "https://www.instagram.com/nari.hackathons/",
    instagramHandle: "@nari.hackathons",
    twitter: "https://x.com/narihackathons",
    twitterHandle: "@narihackathons",
    linkedin: "",
    facebook: "",
  },
};

export default config;

