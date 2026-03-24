import profileImg from '../assets/profile.jpg';

export const portfolioData = {
  personalInfo: {
    name: "Azhar Ali Mubashar",
    title: "Testing and Commissioning Engineer",
    experience: "13 Years",
    contact: "+966-502619327",
    email: "engr.azhar429@gmail.com",
    location: "Saudi Arabia",
    iqama: "Transferable Iqama",
    profileImage: profileImg,
    resumeLink: "/CV_Azhar_Ali_Mubashar.pdf"
  },
  summary: "Experience of working at a variety of Engineering fields including Oil & Gas, Metro Train, Water Quality Improvement Projects, Industrial Projects, Pumping Station etc. Looking forward to connecting with an organization to advance my professional career in BMS and ELV System Engineering.",
  skills: {
    technical: [
      "PLC Programming & HMI Designing",
      "SCADA Configuration & Development",
      "System Architecture Design",
      "VFD Configuration & Control",
      "Electrical Systems Design",
      "P&IDs, ITPs, Loop Testing",
      "Control Valves, ON/OFF Valves",
      "Fire Alarm Systems"
    ],
    tools: [
      "TIA Portal, Simatic Manager",
      "SCADA: WinCC V7.5, WinCC RT Advance / Pro, WinCC Unified",
      "Studio 5000, RS Logix",
      "Factory Talk View (Site & Machine Edition)",
      "Centum VP",
      "Bently Nevada 3500 Monitoring System",
      "SINAMICS, INVT, SCHNEIDER, INVERTEK, FUJI, Mitsubishi",
      "MODBUS, PROFIBUS, PROFINET"
    ],
    soft: [
      "Cost and Labor Estimation",
      "Managing Electrical Contractors",
      "Resolving Electrical Problems",
      "Leadership",
      "Creative & Adaptive"
    ]
  },
  experience: [
    {
      id: 1,
      role: "Senior BMS Engineer",
      company: "WEBUILD – (Saudi Arabia)",
      duration: "Jan 2025 – To Date",
      responsibilities: "Electrical design modifications and updates for control systems | Review of electrical schematics and panel layouts | Coordination with SCADA/PLC teams for design integration | Preparing as-built drawings and documentation | Support during testing & commissioning of BMS panel",
      projects: ["Riyadh Metro Train Project (Focus on Rockwell PLC integration & panel design)"]
    },
    {
      id: 2,
      role: "Testing and Commissioning Engineer",
      company: "Avanceon – Middle East & South Asia (Saudi Arabia)",
      duration: "Sep 2023 – Dec 2024",
      responsibilities: "Testing and commissioning of electrical and control systems | Verification of single-line diagrams and load distribution | Functional testing of panels and field devices | Pre-commissioning and commissioning of automation systems (PLC, DCS and SCADA)",
      projects: ["Riyadh Metro Train Project (Testing and commissioning support for Rockwell PLC, HMI & SCADA systems)", "Water Quality Improvement Program (T&C in TIA Portal V18 environments with SCADA integration)"]
    },
    {
      id: 3,
      role: "Instrumentation and control Engineer",
      company: "IPC Engineering Co.",
      duration: "July 2022 – Aug 2023",
      responsibilities: "PLC Programming | HMI Designing | SCADA | VFD Configuration & Control | Instrument & Control | Troubleshooting | Modification in Existing PLC Program | Testing & Commissioning",
      projects: ["Methyl acetate Plant with UWNTEK-500A DCS"]
    },
    {
      id: 4,
      role: "E& I Inspector",
      company: "CAP Engineering Co. Ltd",
      duration: "Dec 2016 – June 2022",
      responsibilities: "PLC Programming | HMI Designing | SCADA | VFD Configuration & Control | Instrument & Control | Troubleshooting | Modification in Existing PLC Program | Commissioning",
      projects: ["Evaporator automation using HC-900 hybrid PLC", "Designing, developing of Ethyl acetate Plant with UWNTEK-500A DCS", "Designing, developing and commissioning of Boilers"]
    },
    {
      id: 5,
      role: "Electrical and Instrumentation Engineer",
      company: "S.A Automation (Pvt.) Ltd.",
      duration: "March 2013 – Dec 2016",
      responsibilities: "Design Review | Technical Queries | PLC Programming | HMI Designing | Instrument & Control | Troubleshooting | Commissioning",
      projects: ["Water Storage Tank System & Pumping Station", "NutriCo. Morinaga IMF Dry Milk Plant", "Boiler Automation with S7-300 PLC"]
    },
    {
      id: 6,
      role: "Electrical Supervisor",
      company: "PAK Power System (Pvt.) Ltd.",
      duration: "Feb 2012 – Feb 2013",
      responsibilities: "Design Review | Technical Queries | VFD Installation | Instrument & Control | Troubleshooting | Commissioning",
      projects: ["Electrical Site Works | Projects Execution"]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelors : Electrical Engineering",
      institution: "University of The Punjab",
      score: "CGPA : 3.42 out of 4"
    },
    {
      id: 2,
      degree: "College : Pre-Engineering",
      institution: "Superior Higher Secondary School",
      score: "Percentage: 73.54%"
    },
    {
      id: 3,
      degree: "Matriculation (School, 10 Years)",
      institution: "Taemeer-e-Nue Model School",
      score: "Percentage: 70.00%"
    }
  ],
  certifications: [
    "Process Control & Instrumentation",
    "SINAMICS VFD Drives Control",
    "Process Control Engineering (SITRAIN- SIEMENS)",
    "SIEMENS TIA Portal PLC Programming & HMI Designing",
    "RADAR Level Measurement Technology",
    "PLC Programming & HMI Designing using Simatic Manager",
    "SIEMENS S7-1200 PLC & WinCC Advance",
    "SIEMENS PLCs Training (SITRAIN- SIEMENS)",
    "Variable Frequency Drives Control",
    "Permit to Work (PTW), Hazard Identification, BP's 8-Golden Safety Rule & Control of Work (COW)"
  ]
};
