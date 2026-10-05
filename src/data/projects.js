// 100% Factual Source of Truth for Akash Patil — AI-focused Developer / AI Engineer
// Location: Panvel, Maharashtra, India

export const personalInfo = {
  name: 'Akash Patil',
  role: 'AI Developer / AI Engineer',
  positioning: 'AI-focused Developer / AI Engineer',
  location: 'Panvel, Maharashtra, India',
  phone: '+91 9082361045',
  email: 'akashpatil8150@gmail.com',
  summary:
    'Akash is an AI-focused developer with hands-on experience building Agentic AI, RAG, NLP, voice-based AI, and backend applications using Python. He has experience developing LLM-powered workflows, integrating external APIs and databases, and converting real-world business requirements into practical AI solutions.'
}

export const internshipInfo = {
  company: 'WERQ Labs Pvt. Ltd.',
  role: 'Python AI Intern',
  duration: 'June 16, 2026 – September 16, 2026',
  location: 'Sanpada, Navi Mumbai',
  workMode: 'On-Site',
  focusAreas: [
    'Agentic AI applications & autonomous multi-agent workflows',
    'Voice-based AI applications (Whisper STT + Kokoro TTS)',
    'Domain Retrieval-Augmented Generation (RAG) with FAISS',
    'FastAPI & Flask backend engineering with database integration'
  ],
  responsibilities: [
    'Developed Python-based AI applications translating real-world requirements into functional prototypes and backend solutions.',
    'Worked with RAG, LLMs, Prompt Engineering, Agent Workflows, Tool Integration, and Response Validation.',
    'Integrated AI workflows with databases, external APIs, authentication, validation, and backend business logic.',
    'Collaborated with the AI team on voice/audio asset creation, conversational components, and voice-based modules.'
  ]
}

// TIER 1: FLAGSHIP PROJECTS (With unique stable IDs: 'travel', 'voice', 'rag')
export const flagshipProjects = [
  {
    id: 'travel',
    slug: 'agentic-travel-planner',
    legacyId: 'agentic-travel-planner',
    title: 'Agentic AI Travel Planner',
    tagline: 'Multi-Agent Autonomous Travel Planning & Constraint Optimization Engine',
    category: 'Agentic AI & Orchestration',
    company: 'WERQ Labs Pvt. Ltd.',
    timeline: 'Internship 2026',
    isEnterprise: true,
    enterpriseLabel: 'Enterprise System · WERQ Labs',
    emoji: '🧭',
    color: 'brand',
    accentHex: '#4f8cff',
    problem:
      'Manual travel itinerary planning is fractured across fragmented tools (flights, lodging, weather forecasts, and local attractions). Users face frequent schedule conflicts, violation of personal budget constraints, and poor time buffering between venues.',
    solution:
      'Built a multi-agent orchestration architecture using FastAPI that decomposes trip requests into specialized autonomous sub-agents. Coordinates transport, hotels, activities, and weather, running constraint verification and multi-factor optimization to generate seamless personalized itineraries with sub-query caching and observability.',
    tech: [
      'Python',
      'FastAPI',
      'Multi-Agent Orchestration',
      'LLM-driven Planning',
      'API Integrations',
      'Constraint Handling',
      'Itinerary Optimization',
      'Caching',
      'Observability'
    ],
    // Architecture Flow: User Request → Orchestrator → Specialized Agents (Transport, Hotel, Activities, Weather) → Verification → Constraint Handling → Itinerary Optimization → Final Trip Plan
    architectureNodes: [
      {
        id: 'travel_request',
        label: 'USER REQUEST',
        subtitle: 'FastAPI Ingestion',
        icon: '📥',
        type: 'input',
        tech: 'FastAPI / Pydantic',
        details: 'Validates user destination, date ranges, budget boundaries, and personal preferences against typed schemas.'
      },
      {
        id: 'travel_orchestrator',
        label: 'ORCHESTRATOR',
        subtitle: 'Multi-Agent Coordinator',
        icon: '🧠',
        type: 'core',
        tech: 'Async Orchestration',
        details: 'Deconstructs trip requirements into dependency tasks and coordinates parallel sub-agent execution.'
      },
      {
        id: 'travel_agents',
        label: 'SPECIALIZED AGENTS',
        subtitle: 'Transport · Hotel · Activities · Weather',
        icon: '⚡',
        type: 'parallel',
        tech: '4 Domain Sub-agents',
        details: 'Coordinates transport routing, hotel filtering, attraction scheduling, and weather forecast queries concurrently.'
      },
      {
        id: 'travel_verification',
        label: 'VERIFICATION',
        subtitle: 'Rule Verification',
        icon: '🛡️',
        type: 'guardrail',
        tech: 'Validation Logic',
        details: 'Verifies schedule alignment, transit buffer times, venue operating hours, and weather contingencies.'
      },
      {
        id: 'travel_constraints',
        label: 'CONSTRAINT HANDLING',
        subtitle: 'Budget & Time Bounds',
        icon: '⚖️',
        type: 'guardrail',
        tech: 'Constraint Engine',
        details: 'Enforces strict user budget boundaries and prevents schedule overlap across daily activities.'
      },
      {
        id: 'travel_optimization',
        label: 'ITINERARY OPTIMIZATION',
        subtitle: 'Final Trip Plan Synthesis',
        icon: '📋',
        type: 'output',
        tech: 'Caching & Observability',
        details: 'Synthesizes conflict-free day-by-day travel plan, caches domain queries, and logs execution traces.'
      }
    ],
    architecture: [
      {
        step: '01',
        title: 'User Request & Schema Parsing',
        description: 'FastAPI endpoint validates user destinations, date ranges, budget boundaries, and preferences via Pydantic schemas.'
      },
      {
        step: '02',
        title: 'Central Orchestration Engine',
        description: 'Deconstructs trip requirements into dependency tasks and coordinates parallel sub-agent execution workflows.'
      },
      {
        step: '03',
        title: 'Specialized Domain Agents',
        description: 'Transport Agent, Hotel Agent, Activity Agent, and Weather Agent execute targeted queries concurrently.'
      },
      {
        step: '04',
        title: 'Verification Logic',
        description: 'Validates transit buffers, venue opening hours, and weather feasibility before compilation.'
      },
      {
        step: '05',
        title: 'Constraint Handling & Budget Checks',
        description: 'Enforces user-specified budget ceilings and prevents timeline overlap between consecutive venues.'
      },
      {
        step: '06',
        title: 'Itinerary Optimization & Output',
        description: 'Compiles validated recommendations into an optimized day-by-day itinerary with intermediate caching.'
      }
    ],
    contributions: [
      'Architected the asynchronous FastAPI backend managing multi-agent request pipelines and structured error handling.',
      'Constructed specialized agent task routines for transport routing, hotel filtering, attraction scheduling, and weather checks.',
      'Developed a deterministic constraint verification engine to prevent budget overruns and schedule overlaps.',
      'Implemented query caching strategies to avoid redundant computations and integrated structured observability logging.'
    ],
    highlights: [
      'Multi-Agent System Orchestration',
      'LLM-Driven Dynamic Planning',
      'Constraint Validation & Handling',
      'Sub-query Caching & Observability'
    ]
  },
  {
    id: 'voice',
    slug: 'ai-voice-agent-isp',
    legacyId: 'ai-voice-agent-isp',
    title: 'AI Voice Agent for Internet Service Provider',
    tagline: 'Conversational Voice AI Support & Automated Ticket Lifecycle Engine',
    category: 'Voice AI & LangGraph',
    company: 'WERQ Labs Pvt. Ltd.',
    timeline: 'Internship 2026',
    isEnterprise: true,
    enterpriseLabel: 'Enterprise System · WERQ Labs',
    emoji: '🎙️',
    color: 'brand-2',
    accentHex: '#00d4aa',
    problem:
      'ISP call centers experience high hold times, repetitive manual tier-1 customer verification, and cumbersome support-ticket logging for connectivity diagnostics, leading to elevated support costs and frustrated customers.',
    solution:
      'Engineered an end-to-end voice support pipeline integrating Groq-accelerated Whisper for speech-to-text, a stateful LangGraph conversation graph for intent routing, Kokoro TTS for natural speech synthesis, and MongoDB for real-time customer verification and ticket lifecycle management.',
    tech: [
      'FastAPI',
      'LangGraph',
      'Groq',
      'Whisper',
      'Kokoro TTS',
      'MongoDB',
      'Python',
      'Conversational Workflows'
    ],
    // Architecture Flow: Voice Input → Speech-to-Text → LangGraph → Customer Verification → Ticket Workflow → Text-to-Speech → Voice Response
    architectureNodes: [
      {
        id: 'voice_input',
        label: 'VOICE INPUT',
        subtitle: 'Audio Ingestion',
        icon: '🎙️',
        type: 'input',
        tech: 'Audio Stream Buffer',
        details: 'Captures caller microphone audio stream chunks and buffers input for real-time speech transcription.'
      },
      {
        id: 'voice_stt',
        label: 'SPEECH-TO-TEXT',
        subtitle: 'Groq Whisper STT',
        icon: '⚡',
        type: 'core',
        tech: 'Whisper via Groq',
        details: 'Transcribes streaming customer voice audio into structured text using Groq-accelerated Whisper.'
      },
      {
        id: 'voice_langgraph',
        label: 'LANGGRAPH',
        subtitle: 'Conversation / Workflow Logic',
        icon: '🕸️',
        type: 'core',
        tech: 'LangGraph State Machine',
        details: 'Manages conversational context, maintains session state, handles slot filling, and routes support intent.'
      },
      {
        id: 'voice_verification',
        label: 'CUSTOMER VERIFICATION',
        subtitle: 'MongoDB Identity Check',
        icon: '🔍',
        type: 'db',
        tech: 'MongoDB Lookups',
        details: 'Verifies caller phone number, account identity, and subscription tier against indexed MongoDB records.'
      },
      {
        id: 'voice_ticket',
        label: 'TICKET WORKFLOW',
        subtitle: 'Creation & Status Tracking',
        icon: '🎫',
        type: 'guardrail',
        tech: 'FastAPI / MongoDB',
        details: 'Executes automated diagnostic tagging, support ticket creation, status queries, and escalation tracking.'
      },
      {
        id: 'voice_tts',
        label: 'TEXT-TO-SPEECH',
        subtitle: 'Kokoro TTS Synthesis',
        icon: '🔊',
        type: 'core',
        tech: 'Kokoro TTS Engine',
        details: 'Synthesizes conversational responses into expressive, natural-sounding audio streams.'
      },
      {
        id: 'voice_response',
        label: 'VOICE RESPONSE',
        subtitle: 'FastAPI Stream Delivery',
        icon: '🎧',
        type: 'output',
        tech: 'FastAPI Audio Stream',
        details: 'Streams synthesized voice audio chunks directly back to the caller for conversational interaction.'
      }
    ],
    architecture: [
      {
        step: '01',
        title: 'Voice Input Streaming',
        description: 'Captures caller audio stream and pipes raw audio chunks to the transcription inference engine.'
      },
      {
        step: '02',
        title: 'Speech-to-Text Transcription',
        description: 'Groq-accelerated Whisper transcribes customer voice into accurate text in real-time.'
      },
      {
        step: '03',
        title: 'LangGraph Conversation & Workflow Logic',
        description: 'Stateful conversation graph routes intent, extracts parameters, and manages dialogue turns.'
      },
      {
        step: '04',
        title: 'Customer Verification Subroutine',
        description: 'Queries MongoDB customer collection to verify account identifiers and active subscriptions.'
      },
      {
        step: '05',
        title: 'Support Ticket Creation & Tracking',
        description: 'Logs connectivity diagnostic issues, generates support tickets, or checks existing ticket status in MongoDB.'
      },
      {
        step: '06',
        title: 'Text-to-Speech & Voice Delivery',
        description: 'Synthesizes response text via Kokoro TTS and streams audio back to the caller through FastAPI.'
      }
    ],
    contributions: [
      'Designed and implemented stateful conversation graphs using LangGraph for multi-turn customer verification and ticket handling.',
      'Integrated Groq-accelerated Whisper for sub-second transcription and Kokoro TTS for natural voice synthesis.',
      'Constructed MongoDB schemas and data pipelines for customer identity verification and support-ticket tracking.',
      'Engineered backend logic to coordinate voice input, graph routing, and automated ticket lifecycle operations.'
    ],
    highlights: [
      'Stateful Graph Dialog Orchestration',
      'Groq-accelerated Whisper STT',
      'Kokoro Voice Synthesis',
      'Automated Support Ticket Lifecycle'
    ]
  },
  {
    id: 'rag',
    slug: 'rag-tourism-chatbot',
    legacyId: 'rag-tourism-chatbot',
    title: 'RAG Tourism Chatbot – Kolhapur',
    tagline: 'Domain-Grounded Retrieval-Augmented Generation for Cultural & Heritage Tourism',
    category: 'RAG & Vector Search',
    company: 'WERQ Labs Pvt. Ltd.',
    timeline: 'Internship 2026',
    isEnterprise: true,
    enterpriseLabel: 'Enterprise System · WERQ Labs',
    emoji: '🏛️',
    color: 'brand-3',
    accentHex: '#a855f7',
    problem:
      'Standard general-purpose LLMs frequently hallucinate or produce generic, outdated advice when asked about regional heritage destinations, historical landmarks, temple traditions, festival schedules, and local transit in Kolhapur.',
    solution:
      'Built a specialized RAG architecture combining Sentence Transformers for dense semantic embedding, FAISS for ultra-fast local vector retrieval, MongoDB for dialogue history, and Groq/Llama for strictly grounded contextual answering with guardrails.',
    tech: [
      'FastAPI',
      'Sentence Transformers',
      'FAISS',
      'MongoDB',
      'Groq',
      'Llama',
      'Python',
      'Semantic Search'
    ],
    // Architecture Flow: User Query → Embeddings → FAISS → Relevant Context → LLM → Grounded Response
    architectureNodes: [
      {
        id: 'rag_query',
        label: 'USER QUERY',
        subtitle: 'Natural Language Input',
        icon: '💬',
        type: 'input',
        tech: 'FastAPI Ingestion',
        details: 'Receives user natural language questions concerning Kolhapur monuments, temples, transit, and culture.'
      },
      {
        id: 'rag_embeddings',
        label: 'EMBEDDINGS',
        subtitle: 'Sentence Transformers',
        icon: '🧮',
        type: 'core',
        tech: 'Dense Semantic Vectors',
        details: 'Converts chunked domain knowledge documents and user queries into dense semantic vector representations.'
      },
      {
        id: 'rag_faiss',
        label: 'FAISS',
        subtitle: 'Vector Retrieval',
        icon: '🔍',
        type: 'db',
        tech: 'FAISS Index',
        details: 'Performs cosine similarity search against indexed knowledge base of curated Kolhapur tourism records.'
      },
      {
        id: 'rag_context',
        label: 'RELEVANT CONTEXT',
        subtitle: 'Context Construction',
        icon: '🛡️',
        type: 'guardrail',
        tech: 'Prompt Guardrails',
        details: 'Assembles retrieved knowledge snippets into dynamic system prompts with strict anti-hallucination guardrails.'
      },
      {
        id: 'rag_llm',
        label: 'LLM',
        subtitle: 'Groq / Llama Generation',
        icon: '⚡',
        type: 'core',
        tech: 'Groq / Llama',
        details: 'Generates articulate, fact-grounded responses rooted strictly in retrieved local tourism context.'
      },
      {
        id: 'rag_response',
        label: 'GROUNDED RESPONSE',
        subtitle: 'Verified Output',
        icon: '✨',
        type: 'output',
        tech: 'MongoDB Session Store',
        details: 'Delivers accurate answer to user and logs dialogue session history in MongoDB for continuity.'
      }
    ],
    architecture: [
      {
        step: '01',
        title: 'Tourism Document Processing',
        description: 'Preprocessed and structured Kolhapur tourism documents (historical monuments, temple protocols, cuisine, transit).'
      },
      {
        step: '02',
        title: 'Embedding Generation',
        description: 'Sentence Transformers convert chunked tourism records into dense semantic vector representations.'
      },
      {
        step: '03',
        title: 'FAISS Knowledge-Base Construction',
        description: 'Indexes embeddings in FAISS to perform top-k cosine similarity retrieval on incoming user questions.'
      },
      {
        step: '04',
        title: 'Semantic Retrieval & Context Building',
        description: 'Retrieves relevant regional context and injects facts into dynamic system prompts with anti-hallucination guardrails.'
      },
      {
        step: '05',
        title: 'Groq / Llama Contextual Generation',
        description: 'Synthesizes articulate responses strictly grounded in the retrieved tourism knowledge base.'
      },
      {
        step: '06',
        title: 'Grounded Response & Session Logging',
        description: 'Returns fact-verified response and persists dialogue history in MongoDB for session continuity.'
      }
    ],
    contributions: [
      'Curated and chunked domain-specific tourism data into structured knowledge bases with metadata tagging.',
      'Implemented vector search using Sentence Transformers and FAISS for efficient similarity matching.',
      'Built FastAPI inference endpoints integrating Groq / Llama with prompt guardrails to eliminate hallucinated facts.',
      'Integrated MongoDB for session persistence, user dialogue history, and retrieval auditing.'
    ],
    highlights: [
      'Strict Factual Grounding (No Hallucinations)',
      'FAISS Semantic Vector Search',
      'Curated Regional Tourism Knowledge Base',
      'Persistent Session State in MongoDB'
    ]
  }
]

// TIER 2: MAJOR AI/NLP PROJECT
export const majorAiProject = {
  id: 'talent-ai',
  title: 'Talent AI',
  subtitle: 'Smart Resume Screening & Ranking System',
  tierLabel: 'Tier 2 · Major NLP System',
  description:
    'AI-powered recruitment automation platform designed to reduce manual hiring effort by parsing, scoring, and ranking resumes against job descriptions using NLP and BERT.',
  emoji: '🎯',
  tags: ['NLP', 'BERT', 'Flask', 'Transformers'],
  category: 'NLP & LLMs',
  tech: ['Python', 'NLP', 'BERT', 'Flask', 'Transformers', 'Streamlit', 'Hugging Face'],
  github: 'https://github.com/akashpatil8150/Talent-AI---Smart-Resume-Screening-and-Ranking-System',
  demo: 'https://akash8150-talent-ai-smart-resume-screening-and-r-175d457.hf.space/',
  year: '2026',
  status: 'Live on HF',
  researchStatus: 'Research paper submitted for publication, currently under review.',
  capabilities: [
    'Candidate profile extraction',
    'Candidate scoring against job requirements',
    'Candidate ranking algorithm',
    'Deep resume content analysis',
    'Recruiter-friendly evaluation workflow',
    'Real-time candidate assessment'
  ]
}

// TIER 3: ADDITIONAL WORK
export const secondaryProjects = [
  majorAiProject,
  {
    id: 'deepclean',
    title: 'DeepClean',
    subtitle: 'CNN Autoencoder for Image Denoising',
    description:
      'A deep learning vision system using convolutional autoencoders to reconstruct clean image representations from corrupted image pairs with high structural fidelity.',
    emoji: '🖼️',
    tags: ['Computer Vision', 'Deep Learning'],
    category: 'Computer Vision',
    tech: ['Python', 'CNN', 'Autoencoders', 'TensorFlow', 'Gradio', 'Hugging Face'],
    github: 'https://github.com/akashpatil8150/DeepClean-CNN-Autoencoder-for-Image-Denoising',
    demo: 'https://huggingface.co/spaces/Akash8150/DeepClean-CNN-Autoencoder-for-Image-Denoising',
    year: '2026',
    status: 'Live on HF'
  },
  {
    id: 'ner-system',
    title: 'NER System',
    subtitle: 'Transformer Named Entity Recognition',
    description:
      'NLP information extraction pipeline that identifies and classifies named entities (entities, organizations, locations, dates) from raw unstructured documents.',
    emoji: '🏷️',
    tags: ['NLP', 'Information Extraction'],
    category: 'NLP & LLMs',
    tech: ['Python', 'NLP', 'spaCy', 'Transformers', 'Gradio', 'Hugging Face'],
    github: 'https://github.com/akashpatil8150/Named-Entity-Recognition-System',
    demo: 'https://huggingface.co/spaces/Akash8150/Named-Entity-Recognition',
    year: '2026',
    status: 'Live on HF'
  },
  {
    id: 'pare-ai',
    title: 'Pare AI Chatbot',
    subtitle: 'Conversational LLM Assistant',
    description:
      'Conversational AI application with responsive web interface and backend LLM integration, demonstrating full-stack AI deployment from model endpoint to browser.',
    emoji: '💬',
    tags: ['LLMs', 'Conversational AI'],
    category: 'Conversational AI',
    tech: ['Python', 'LLM', 'Flask', 'Hugging Face', 'REST API'],
    github: 'https://github.com/akashpatil8150/Pare-AI-Chatbot',
    demo: 'https://akash8150-pare-ai-chatbot.hf.space',
    year: '2026',
    status: 'Live on HF'
  },
  {
    id: 'crop-recommendation',
    title: 'Crop Recommendation',
    subtitle: 'Supervised ML Agritech System',
    description:
      'Supervised ML system recommending optimal crops based on soil nutrients (N, P, K) and environmental conditions with evaluated classifier models.',
    emoji: '🌾',
    tags: ['Machine Learning', 'Data Analytics'],
    category: 'Machine Learning',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    github: 'https://github.com/akashpatil8150/Smart-Crop-Recommendation-System',
    demo: 'https://smart-crop-recommendation-system-kbm9gcraovslzqf4akdhzh.streamlit.app/',
    year: '2025',
    status: 'Live Streamlit'
  }
]

export const projects = secondaryProjects

// SECTION 3: PRIMARY TECHNICAL SKILLS
export const technicalSkills = {
  'Programming': {
    icon: '💻',
    color: 'brand',
    description: 'Core languages for AI systems, analytics, and high-performance algorithms',
    items: ['Python', 'SQL', 'R']
  },
  'AI & Machine Learning': {
    icon: '🧠',
    color: 'brand',
    description: 'Foundations and advanced methods across autonomous systems, language, and retrieval',
    items: ['Machine Learning', 'Deep Learning', 'NLP', 'RAG', 'LLMs', 'Agentic AI', 'Prompt Engineering']
  },
  'Backend & APIs': {
    icon: '⚡',
    color: 'brand-2',
    description: 'Object-oriented service development, asynchronous endpoints, and microservices',
    items: ['FastAPI', 'Flask', 'REST APIs', 'OOP']
  },
  'Databases': {
    icon: '🗄️',
    color: 'accent',
    description: 'Relational and document storage for state, profiles, tickets, and dialogue logs',
    items: ['MySQL', 'PostgreSQL', 'MongoDB']
  },
  'Data & Visualization': {
    icon: '📊',
    color: 'brand-3',
    description: 'Data transformation, array manipulation, and analytical dashboards',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Excel', 'Power BI (Basic)']
  },
  'Tools & Deployment': {
    icon: '🛠️',
    color: 'brand-2',
    description: 'Source control, containerization, security, and external API integration',
    items: ['Git', 'GitHub', 'Docker', 'API Integration', 'JWT']
  }
}

export const categorizedSkills = technicalSkills

// SECTION 9: EDUCATION
export const educationList = [
  {
    degree: 'Master of Science in Data Analytics',
    shortDegree: 'MSc - DA',
    institution: 'Pillai College of Arts, Commerce & Science',
    duration: 'June 2024 – April 2026',
    status: 'Completed · April 2026',
    location: 'Panvel / Navi Mumbai, India',
    details:
      'Rigorous curriculum covering machine learning algorithms, deep learning architectures, statistical modeling, vector geometry, natural language processing, and distributed data pipelines.'
  },
  {
    degree: 'Bachelor of Science in Information Technology',
    shortDegree: 'BSc - IT',
    institution: 'Pillai College of Arts, Commerce & Science',
    duration: 'June 2021 – March 2024',
    status: 'Completed · March 2024',
    location: 'Panvel / Navi Mumbai, India',
    details:
      'Foundations in software engineering, database management systems (SQL/RDBMS), object-oriented programming, network architectures, and full-stack web applications.'
  }
]

// SECTION 10: CERTIFICATIONS
export const certificationsList = [
  {
    issuer: 'Salesforce',
    title: 'Certified AI Associate',
    year: '2024',
    badge: 'AI Credential',
    icon: '☁️'
  },
  {
    issuer: 'Salesforce',
    title: 'Agentforce Specialist',
    year: '2024',
    badge: 'Autonomous AI',
    icon: '⚡'
  },
  {
    issuer: 'Cisco Networking Academy',
    title: 'Data Analytics Essentials',
    year: '2024',
    badge: 'Data Analytics',
    icon: '🌐'
  }
]

// Skill to Project mapping (Section 15)
export const skillToProjects = {
  'fastapi': ['travel', 'voice', 'rag', 'agentic-travel-planner', 'ai-voice-agent-isp', 'rag-tourism-chatbot'],
  'flask': ['talent-ai', 'pare-ai'],
  'python': ['travel', 'voice', 'rag', 'agentic-travel-planner', 'ai-voice-agent-isp', 'rag-tourism-chatbot', 'talent-ai', 'deepclean', 'ner-system', 'pare-ai', 'crop-recommendation'],
  'mongodb': ['voice', 'rag', 'ai-voice-agent-isp', 'rag-tourism-chatbot'],
  'langgraph': ['voice', 'ai-voice-agent-isp'],
  'faiss': ['rag', 'rag-tourism-chatbot'],
  'whisper': ['voice', 'ai-voice-agent-isp'],
  'whisper (stt)': ['voice', 'ai-voice-agent-isp'],
  'kokoro tts': ['voice', 'ai-voice-agent-isp'],
  'groq': ['voice', 'rag', 'ai-voice-agent-isp', 'rag-tourism-chatbot'],
  'llama': ['rag', 'rag-tourism-chatbot'],
  'rag': ['rag', 'rag-tourism-chatbot'],
  'nlp': ['talent-ai', 'ner-system', 'rag', 'rag-tourism-chatbot'],
  'bert': ['talent-ai'],
  'transformers': ['talent-ai', 'ner-system', 'rag', 'rag-tourism-chatbot'],
  'agentic ai': ['travel', 'voice', 'agentic-travel-planner', 'ai-voice-agent-isp'],
  'docker': ['travel', 'voice', 'agentic-travel-planner', 'ai-voice-agent-isp'],
  'git': ['travel', 'voice', 'rag', 'agentic-travel-planner', 'ai-voice-agent-isp', 'rag-tourism-chatbot', 'talent-ai', 'deepclean', 'ner-system', 'pare-ai', 'crop-recommendation'],
  'github': ['travel', 'voice', 'rag', 'agentic-travel-planner', 'ai-voice-agent-isp', 'rag-tourism-chatbot', 'talent-ai', 'deepclean', 'ner-system', 'pare-ai', 'crop-recommendation'],
  'rest apis': ['travel', 'voice', 'rag', 'agentic-travel-planner', 'ai-voice-agent-isp', 'rag-tourism-chatbot', 'pare-ai'],
  'machine learning': ['crop-recommendation', 'talent-ai'],
  'deep learning': ['deepclean']
}

export const bubbleSkills = [
  'Python',
  'FastAPI',
  'LangGraph',
  'Groq / Whisper',
  'Kokoro TTS',
  'FAISS',
  'RAG',
  'BERT',
  'MongoDB',
  'PostgreSQL',
  'Docker',
  'Agentic AI'
]
