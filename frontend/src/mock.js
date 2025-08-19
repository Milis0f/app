// Mock data for Matteo Pollo's portfolio
export const portfolioData = {
  personal: {
    name: "MATTEO POLLO",
    title: "Sécurité IT & Développement",
    subtitle: "Inscrit en Bachelor AIS (Administrateur d'Infrastructures Sécurisées)",
    location: "Sup'Etixs OL vallée - Rentrée 2025",
    description: "Étudiant en BTS CIEL, futur alternant en Bachelor AIS. Passionné par le développement mobile et la cybersécurité, j'ai déjà créé des applications professionnelles, des API et mis en place des systèmes sécurisés.",
    email: "matteo.pro021@gmail.com",
    phone: "+33 7 81 60 08 22",
    address: "215 route de montluel, 01120 Nievroz",
    linkedin: "POLLO Matteo"
  },
  
  experience: [
    {
      id: 1,
      title: "Développeur d'application",
      company: "Socra E.leclerc",
      location: "Pusignan, France", 
      period: "2023 - 2025",
      description: "Développement d'une application mobile sécurisée sous WinDev Mobile",
      tasks: [
        "Développement d'une application mobile sécurisée sous WinDev Mobile",
        "Création d'une API REST connectée à une base Oracle",
        "Mise en place d'un système de gestion des droits utilisateurs"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Grille d'inspection de l'Éducation nationale",
      description: "Formulaire web, JS, PDF export",
      technologies: ["JavaScript", "HTML/CSS", "PDF Export"],
      status: "Terminé"
    },
    {
      id: 2,
      title: "Application Mobile Sécurisée",
      description: "Application développée avec WinDev Mobile connectée à une API REST",
      technologies: ["WinDev Mobile", "API REST", "Oracle"],
      status: "En cours"
    },
    {
      id: 3,
      title: "Système de Gestion des Droits",
      description: "Implémentation d'un système de gestion des droits utilisateurs",
      technologies: ["Active Directory", "C#", "SQL"],
      status: "Terminé"
    }
  ],

  education: [
    {
      id: 1,
      degree: "BTS CIEL option IR",
      school: "École Sup'Etixs",
      location: "Décines, France",
      period: "2025-2025",
      status: "En cours"
    },
    {
      id: 2,
      degree: "BAC Pro SN opt RISC",
      school: "Lycée St Charles",
      location: "Rilleux-la-pape, France",
      period: "2020-2023",
      mention: "Mention Très Bien"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "ANSSI",
      score: "Score moyen 94%",
      description: "Certification française en cybersécurité délivrée par l'Agence nationale de la sécurité des systèmes d'information"
    }
  ],

  skills: {
    development: [
      "Développement d'applications : WinDev Mobile, API REST, Oracle, Visual Studio, C#, SQL"
    ],
    system: [
      "Administration système & réseau : Gestion d'un Active Directory (AD), mise en place de VPN, VLAN, sécurité réseau"
    ],
    tools: [
      "Outils & environnement : Git, Windows Server, Virtualisation (VM), outils de supervision"
    ],
    project: [
      "Gestion de projet : Analyse des besoins, rédaction de cahier des charges, déploiement d'applications"
    ],
    security: [
      "Cybersécurité : Notions en sécurisation des accès, gestion des droits, surveillance vidéo IP"
    ]
  },

  languages: [
    { name: "Français", level: "Courant" },
    { name: "Anglais", level: "Intermédiaire" }
  ],

  interests: [
    "L'entrepreneuriat",
    "Création de sites web à titre personnel (vitrine, one-page)", 
    "L'automobile"
  ]
};