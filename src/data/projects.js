// 100% Factual Data for Akash Patil — AI Developer / AI Engineer
// Current/Recent Internship: WERQ Labs Pvt. Ltd. | Python AI Intern | June 16, 2026 – September 16, 2026

export const internshipInfo = {
  company: 'WERQ Labs Pvt. Ltd.',
  role: 'Python AI Intern',
  duration: 'June 16, 2026 – September 16, 2026',
  location: 'Remote / India',
  type: 'Full-time Internship',
  focusAreas: [
    'Multi-Agent System Orchestration & Autonomous Workflows',
    'Voice-first AI Pipelines (Groq/Whisper STT + Kokoro TTS)',
    'Domain Retrieval-Augmented Generation (RAG) with FAISS',
    'High-throughput FastAPI Backend Engineering & MongoDB Persistence'
  ],
  summary:
    'Engineered production-grade AI systems, including a multi-agent travel orchestration engine, a low-latency ISP voice support agent, and a domain-grounded tourism RAG chatbot using LangGraph, FastAPI, FAISS, and MongoDB.'
}

export const flagshipProjects = [
  {
    id: 'agentic-travel-planner',
    title: 'Agentic AI Travel Planner',
    tagline: 'Multi-Agent Autonomous Travel Planning & Constraint Optimization Engine',
    category: 'Multi-Agent Systems',
    company: 'WERQ Labs Pvt. Ltd.',
    timeline: 'Internship 2026',
    isEnterprise: true,
    enterpriseLabel: 'Enterprise System · WERQ Labs',
    emoji: '🧭',
    color: 'brand', // blue
    accentHex: '#4f8cff',
    problem:
      'Manual travel itinerary planning is fractured across fragmented tools (flights, lodging, weather forecasts, and local attractions). Users face frequent schedule conflicts, violation of personal budget constraints, and poor time buffering between venues.',
    solution:
      'Designed a multi-agent orchestration architecture using FastAPI that decomposes trip requests into specialized autonomous sub-agents. The system runs constraint verification and multi-factor optimization to generate seamless, personalized day-by-day itineraries with cached sub-queries and execution observability.',
    tech: [
      'Python',
      'FastAPI',
      'Agentic Orchestration',
      'AsyncIO',
      'Pydantic',
      'Constraint Optimization',
      'Caching',
      'Observability'
    ],
    architecture: [
      {
        step: '01',
        title: 'Request Ingestion & Schema Parsing',
        description: 'FastAPI endpoint validates user destinations, date ranges, budget boundaries, and preferences via Pydantic schemas.'
      },
      {
        step: '02',
        title: 'Central Orchestration Engine',
        description: 'Deconstructs trip requirements into dependency tasks and spawns parallel sub-agent execution workflows.'
      },
      {
        step: '03',
        title: 'Specialized Domain Agents',
        description: 'Transport Agent, Hotel Agent, Activity Agent, and Weather Agent execute targeted queries concurrently.'
      },
      {
        step: '04',
        title: 'Verification & Constraint Engine',
        description: 'Validates budget feasibility, travel transit buffers, opening hours, and weather contingencies.'
      },
      {
        step: '05',
        title: 'Synthesis & Itinerary Generator',
        description: 'Compiles validated recommendations into an optimized, conflict-free, day-by-day itinerary.'
      },
      {
        step: '06',
        title: 'Caching & Execution Observability',
        description: 'Caches intermediate domain queries to cut response times and logs structured traces for system monitoring.'
      }
    ],
    contributions: [
      'Architected the asynchronous FastAPI backend managing multi-agent request pipelines and structured error handling.',
      'Constructed specialized agent task routines for transport routing, hotel filtering, attraction scheduling, and weather checks.',
      'Developed a deterministic constraint verification engine to prevent budget overruns and schedule overlaps.',
      'Implemented query caching strategies to avoid redundant computations and integrated structured observability logging.'
    ],
    highlights: [
      'Parallel Sub-Agent Execution',
      'Deterministic Constraint Verification',
      'Sub-query Caching Layer',
      'Full Request Observability Tracing'
    ]
  },
  {
    id: 'ai-voice-agent-isp',
    title: 'AI Voice Agent for ISP',
    tagline: 'Real-Time Conversational Voice Support & Automated Ticket Lifecycle Engine',
    category: 'Voice AI & LangGraph',
    company: 'WERQ Labs Pvt. Ltd.',
    timeline: 'Internship 2026',
    isEnterprise: true,
    enterpriseLabel: 'Enterprise System · WERQ Labs',
    emoji: '🎙️',
    color: 'brand-2', // teal/emerald
    accentHex: '#00d4aa',
    problem:
      'ISP call centers experience high hold times, repetitive manual tier-1 customer verification, and cumbersome support-ticket logging for connectivity diagnostics, leading to elevated support costs and frustrated customers.',
    solution:
      'Engineered an end-to-end voice support pipeline integrating Groq-accelerated Whisper for speech-to-text, a stateful LangGraph conversation graph for intent routing, Kokoro TTS for natural speech synthesis, and MongoDB for real-time customer verification and ticket lifecycle management.',
    tech: [
      'FastAPI',
      'LangGraph',
      'Groq',
      'Whisper (STT)',
      'Kokoro TTS',
      'MongoDB',
      'Python',
      'State Machines'
    ],
    architecture: [
      {
        step: '01',
        title: 'Inbound Audio Stream & Whisper STT',
        description: 'Receives user voice input and streams to Groq-hosted Whisper for near-instant, high-accuracy speech-to-text.'
      },
      {
        step: '02',
        title: 'LangGraph Stateful Conversation Graph',
        description: 'Manages conversational context, handles slot filling, tracks conversation phase, and routes user intent.'
      },
      {
        step: '03',
        title: 'Customer Verification Subroutine',
        description: 'Queries MongoDB customer collection to verify account identifiers and subscription status in real-time.'
      },
      {
        step: '04',
        title: 'Ticket Lifecycle & Operations Node',
        description: 'Executes automated ticket creation, status check, diagnostic tagging, and escalation workflows in MongoDB.'
      },
      {
        step: '05',
        title: 'Kokoro Speech Synthesis',
        description: 'Converts agent dialog responses into expressive, natural-sounding audio streams using Kokoro TTS.'
      },
      {
        step: '06',
        title: 'FastAPI Stream Delivery',
        description: 'Streams synthesized audio bytes back to client with low latency for a smooth conversational experience.'
      }
    ],
    contributions: [
      'Designed and implemented stateful conversation graphs using LangGraph for multi-turn verification and ticket handling.',
      'Integrated Groq-accelerated Whisper for sub-second transcription and Kokoro TTS for natural, expressive voice responses.',
      'Constructed MongoDB schemas and data pipelines for customer profile verification and support-ticket tracking.',
      'Optimized pipeline execution to minimize end-to-end latency between speech input and audio response playback.'
    ],
    highlights: [
      'Stateful Graph Dialog Orchestration',
      'Ultra-Fast STT via Groq Whisper',
      'Kokoro Voice Synthesis',
      'Automated MongoDB Ticket Lifecycle'
    ]
  },
  {
    id: 'rag-tourism-chatbot',
    title: 'RAG Tourism Chatbot – Kolhapur',
    tagline: 'Domain-Grounded Retrieval-Augmented Generation for Cultural & Heritage Tourism',
    category: 'RAG & Vector Search',
    company: 'WERQ Labs Pvt. Ltd.',
    timeline: 'Internship 2026',
    isEnterprise: true,
    enterpriseLabel: 'Enterprise System · WERQ Labs',
    emoji: '🏛️',
    color: 'brand-3', // purple
    accentHex: '#a855f7',
    problem:
      'Standard general-purpose LLMs frequently hallucinate or produce generic, outdated advice when asked about regional heritage destinations, historical landmarks, temple traditions, festival schedules, and local transit in Kolhapur.',
    solution:
      'Built a specialized RAG architecture combining Sentence Transformers for dense semantic embedding, FAISS for ultra-fast local vector retrieval, MongoDB for dialogue history, and Groq/Llama 3 for strictly grounded contextual answering with guardrails.',
    tech: [
      'FastAPI',
      'Sentence Transformers',
      'FAISS',
      'MongoDB',
      'Groq',
      'Llama 3',
      'Python',
      'RAG Architecture'
    ],
    architecture: [
      {
        step: '01',
        title: 'Domain Knowledge Ingestion',
        description: 'Preprocessed and structured Kolhapur tourism documents (historical monuments, temple protocols, cuisine, transit).'
      },
      {
        step: '02',
        title: 'Dense Semantic Embedding',
        description: 'Sentence Transformers convert chunked tourism records into dense semantic vector representations.'
      },
      {
        step: '03',
        title: 'FAISS Sub-millisecond Vector Index',
        description: 'Indexes embeddings in FAISS to perform top-k cosine similarity retrieval on incoming user questions.'
      },
      {
        step: '04',
        title: 'Context Grounding & Guardrails',
        description: 'Injects retrieved knowledge into dynamic system prompts with strict anti-hallucination guardrails.'
      },
      {
        step: '05',
        title: 'Groq / Llama 3 Inference',
        description: 'Generates articulate, fact-grounded responses rooted strictly in retrieved local tourism context.'
      },
      {
        step: '06',
        title: 'MongoDB Chat Logging',
        description: 'Stores conversational session state and query metadata in MongoDB for continuity and analytics.'
      }
    ],
    contributions: [
      'Curated and chunked domain-specific tourism data into structured knowledge bases with metadata tagging.',
      'Implemented vector search using Sentence Transformers and FAISS for efficient similarity matching.',
      'Built FastAPI inference endpoints integrating Groq / Llama 3 with prompt guardrails to eliminate hallucinated facts.',
      'Integrated MongoDB for session persistence, user dialogue history, and retrieval auditing.'
    ],
    highlights: [
      'Strict Factual Grounding (No Hallucinations)',
      'Sub-millisecond FAISS Vector Search',
      'Curated Regional Tourism Knowledge Base',
      'Persistent Session State in MongoDB'
    ]
  }
]

export const secondaryProjects = [
  {
    id: 'talent-ai',
    title: 'Talent AI',
    subtitle: 'Smart Resume Screening & Ranking System',
    description:
      'Recruitment automation platform that intelligently parses and ranks resumes against job descriptions using NLP and semantic similarity. Eliminates manual bottlenecks for technical recruiters.',
    emoji: '🎯',
    tags: ['NLP', 'Transformers', 'Semantic Search'],
    tech: ['Python', 'NLP', 'Transformers', 'Streamlit', 'Hugging Face'],
    github: 'https://github.com/akashpatil8150/Talent-AI---Smart-Resume-Screening-and-Ranking-System',
    demo: 'https://akash8150-talent-ai-smart-resume-screening-and-r-175d457.hf.space/',
    year: '2026',
    status: 'Live on HF'
  },
  {
    id: 'deepclean',
    title: 'DeepClean',
    subtitle: 'CNN Autoencoder for Image Denoising',
    description:
      'A deep learning vision system using convolutional autoencoders to reconstruct clean image representations from corrupted image pairs with high structural fidelity.',
    emoji: '🖼️',
    tags: ['Computer Vision', 'Deep Learning'],
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
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    github: 'https://github.com/akashpatil8150/Smart-Crop-Recommendation-System',
    demo: 'https://smart-crop-recommendation-system-kbm9gcraovslzqf4akdhzh.streamlit.app/',
    year: '2025',
    status: 'Live Streamlit'
  }
]

// Backward-compatibility export so any residual project references continue to work
export const projects = secondaryProjects

export const skills = {
  'Agentic Systems & LLMs': {
    icon: '🤖',
    color: 'brand',
    items: ['LangGraph', 'Multi-Agent Orchestration', 'Groq', 'Whisper (STT)', 'Kokoro TTS', 'Llama 3', 'Prompt Engineering']
  },
  'RAG & Vector Search': {
    icon: '🔍',
    color: 'brand-3',
    items: ['FAISS', 'Sentence Transformers', 'Dense Embeddings', 'Document Chunking', 'Hybrid Search', 'Context Grounding']
  },
  'Backend & APIs': {
    icon: '⚡',
    color: 'brand-2',
    items: ['FastAPI', 'Python', 'AsyncIO', 'Pydantic', 'REST APIs', 'Caching', 'Observability Traces']
  },
  'Databases & Storage': {
    icon: '🗄️',
    color: 'accent',
    items: ['MongoDB', 'Vector Indexes', 'PostgreSQL', 'SQL', 'Data Pipelines']
  },
  'ML / DL & NLP Core': {
    icon: '🧠',
    color: 'brand',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face Transformers', 'spaCy', 'Pandas', 'NumPy']
  },
  'Deployment & Tools': {
    icon: '🛠️',
    color: 'brand-2',
    items: ['Docker', 'Git / GitHub', 'Streamlit', 'Gradio', 'Hugging Face Spaces', 'Linux / Bash', 'VS Code']
  }
}

export const bubbleSkills = [
  'LangGraph',
  'FastAPI',
  'Groq / Whisper',
  'Kokoro TTS',
  'FAISS',
  'RAG',
  'Sentence Transformers',
  'MongoDB',
  'Python',
  'PyTorch',
  'Multi-Agent',
  'Docker'
]
