const events = [
  {
    title: "The Games by In The Zone",
    role: "Play Station Team Member",
    date: "May 2026",
    year: "2026",
    category: "Sports",
    description:
      "Handled live match reporting and operations for 64 competitive matches.",
    status: "Completed",
    scale: "64 Matches",
    icon: "🎮",
    vibeColor: "#3B82F6",
  },

  {
    title: "Young Theater Festival",
    role: "Indoor Theater Member",
    date: "May 2026",
    year: "2026",
    category: "Festival",
    description:
      "Coordinated attendees and managed participant engagement inside theater halls.",
    status: "Completed",
    scale: "Festival",
    icon: "🎭",
    vibeColor: "#EC4899",
  },

  {
    title: "Alpha X Manara Edition",
    role: "Event Team Member",
    date: "April 2026",
    year: "2026",
    category: "Fitness",
    description:
      "Judged athlete performance while ensuring fairness and operational accuracy.",
    status: "Completed",
    scale: "Competition",
    icon: "🏋️",
    vibeColor: "#F97316",
  },

  {
    title: "Partille World Cup Cairo",
    role: "Competition Team Member",
    date: "April 2026",
    year: "2026",
    category: "Sports",
    description:
      "Managed match operations, reporting, and official documentation for a 3-day international tournament.",
    status: "Completed",
    scale: "International",
    icon: "⚽",
    vibeColor: "#22C55E",
  },

  {
    title: "Alpha X Simulation Edition",
    role: "Delta Team Member",
    date: "April 2026",
    year: "2026",
    category: "Operations",
    description:
      "Provided flexible support across all event functions ensuring seamless transitions and operational flow.",
    status: "Completed",
    scale: "Large Scale",
    icon: "🛰️",
    vibeColor: "#6366F1",
  },

  {
    title: "Impact Her by Carerha",
    role: "Crowd Team Leader",
    date: "March 2026",
    year: "2026",
    category: "Leadership",
    description:
      "Led crowd operations and coordinated attendee experience while supervising the team.",
    status: "Completed",
    scale: "Leadership",
    icon: "👑",
    vibeColor: "#A855F7",
  },

  {
    title: "EVs Electrify Egypt Summit",
    role: "Flow Team Leader",
    date: "December 2025",
    year: "2025",
    category: "Technology",
    description:
      "Led attendee flow operations and managed on-ground movement during the summit.",
    status: "Completed",
    scale: "Summit",
    icon: "⚡",
    vibeColor: "#06B6D4",
  },

  {
    title: "Alpha X Grand Egyptian Museum Edition",
    role: "Sled Pull Team",
    date: "December 2025",
    year: "2025",
    category: "Fitness",
    description:
      "Judged athletes and ensured fairness during competition phases.",
    status: "Completed",
    scale: "Competition",
    icon: "🏛️",
    vibeColor: "#F59E0B",
  },

  {
    title: "HELM at Unity Cup",
    role: "Joker Team",
    date: "November 2025",
    year: "2025",
    category: "Social Impact",
    description:
      "Supported operational logistics and helped the event run smoothly.",
    status: "Completed",
    scale: "Community",
    icon: "🤝",
    vibeColor: "#14B8A6",
  },

  {
    title: "Alpha X AUC Edition",
    role: "BURPEE Team",
    date: "October 2025",
    year: "2025",
    category: "Fitness",
    description:
      "Judged athletes and guided competition flow during event phases.",
    status: "Completed",
    scale: "Competition",
    icon: "🏃",
    vibeColor: "#F97316",
  },

  {
    title: "Femi Tech Egypt",
    role: "Registration Team",
    date: "July 2025",
    year: "2025",
    category: "Technology",
    description:
      "Registered and handled check-in operations for 4000+ attendees.",
    status: "Completed",
    scale: "4000+ Attendees",
    icon: "🧾",
    vibeColor: "#0EA5E9",
  },

  {
    title: "Forum of Investment Experts in Securities",
    role: "Joker Team",
    date: "June 2025",
    year: "2025",
    category: "Finance",
    description:
      "Handled registration for 200+ students and supported crowd operations.",
    status: "Completed",
    scale: "200+ Participants",
    icon: "📈",
    vibeColor: "#10B981",
  },

  {
    title: "Social Education Summit",
    role: "Stage Team",
    date: "June 2025",
    year: "2025",
    category: "Education",
    description:
      "Managed speaker coordination and ensured smooth stage transitions.",
    status: "Completed",
    scale: "Summit",
    icon: "🎤",
    vibeColor: "#8B5CF6",
  },

  {
    title: "Empowerment & Building Conference",
    role: "VIP Team",
    date: "May 2025",
    year: "2025",
    category: "Leadership",
    description:
      "Welcomed VIP guests and coordinated panel sessions.",
    status: "Completed",
    scale: "Conference",
    icon: "🌟",
    vibeColor: "#EAB308",
  },

  {
    title: "Data Science Conference MENA",
    role: "Flow Team",
    date: "April 2025",
    year: "2025",
    category: "Technology",
    description:
      "Managed event flow and operational movement during the conference.",
    status: "Completed",
    scale: "Conference",
    icon: "📊",
    vibeColor: "#3B82F6",
  },

  {
    title: "Iftar Zayed",
    role: "Operation Team",
    date: "March 2025",
    year: "2025",
    category: "Social Impact",
    description:
      "Helped organize a massive iftar for 7000+ orphaned children.",
    status: "Completed",
    scale: "7000+ People",
    icon: "🌙",
    vibeColor: "#14B8A6",
  },

  {
    title: "Blissify – Egypt Career Summit",
    role: "Interviews Area",
    date: "February 2025",
    year: "2025",
    category: "Career",
    description:
      "Scheduled candidate interviews and supported registration operations.",
    status: "Completed",
    scale: "Career Summit",
    icon: "💼",
    vibeColor: "#6366F1",
  },

  {
    title: "Cairo Marathons",
    role: "Crowd Team",
    date: "February 2025",
    year: "2025",
    category: "Sports",
    description:
      "Guided runners and coordinated traffic flow to ensure safety.",
    status: "Completed",
    scale: "Marathon",
    icon: "🏅",
    vibeColor: "#EF4444",
  },

  {
    title: "HELM at Unity Cup",
    role: "Court Team Leader",
    date: "November 2024",
    year: "2024",
    category: "Leadership",
    description:
      "Led activities supporting individuals with disabilities during competitions.",
    status: "Completed",
    scale: "Community",
    icon: "♿",
    vibeColor: "#0EA5E9",
  },

  {
    title: "HELM at SEED'3 Graduation Party",
    role: "Joker Team",
    date: "November 2024",
    year: "2024",
    category: "Social Impact",
    description:
      "Supported logistics and celebration coordination for graduates.",
    status: "Completed",
    scale: "Graduation Event",
    icon: "🎓",
    vibeColor: "#F43F5E",
  },
];

export default events;
