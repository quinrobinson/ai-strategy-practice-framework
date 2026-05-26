// ASPF Service Line × Pillar Matrix
// Source: IBM AI Practice engagement slides
// Each cell: deliverable name, AI Practice role, Service Line role, outcome

window.ASPF_MATRIX = {

  serviceLines: [
    {
      id: 'st',
      name: 'Strategy & Transformation',
      shortName: 'S&T',
      desc: 'Sets the AI-native vision and orchestrates the cross-service-line transformation.',
      color: '#6366F1',
    },
    {
      id: 'ba',
      name: 'Business Applications',
      shortName: 'BA',
      desc: 'Designs and implements the AI-native enterprise application estate — ERP, CRM, HCM, ServiceNow, and custom builds with agents embedded and orchestrated.',
      color: '#0EA5E9',
    },
    {
      id: 'ao',
      name: 'Applications Operations',
      shortName: 'AO',
      desc: 'Runs and maintains the AI-native application portfolio — supporting agents, models, and apps under multi-year managed services contracts.',
      color: '#10B981',
    },
    {
      id: 'bo',
      name: 'Business Operations',
      shortName: 'BO',
      desc: 'Runs entire business processes (F&A, HR, procurement, supply chain, claims, banking back-office) on behalf of the client — increasingly delivered by agents with humans in the loop.',
      color: '#F59E0B',
    },
  ],

  // cells[pillarId][serviceLineId]
  cells: {

    // ── Pillar 1: AI Value & Tech Strategy ───────────────────────────────────
    p1: {
      st: {
        deliverable: 'Design Enterprise AI-Native Strategy',
        practice: 'Defines the technical capabilities, architecture, and AI operating model. Co-leads blueprinting/design, roadmap, and investment case.',
        serviceLine: 'Leads transformation and change strategy development across business teams.',
        outcome: 'A comprehensive, AI-native strategy and value case.',
        skills: ['stakeholder-alignment', 'maturity-model', 'operating-model', 'outcome-definition'],
      },
      ba: {
        deliverable: 'Application and Agent Orchestration Strategy',
        practice: 'Designs the agent architecture and orchestration strategy so native agents across SAP, Salesforce, ServiceNow, and custom apps operate as one.',
        serviceLine: 'Defines the target application estate, BA package selection, and implementation plan.',
        outcome: 'Target application architecture and agent orchestration blueprint.',
        skills: ['stakeholder-alignment', 'operating-model', 'agent-design', 'outcome-definition'],
      },
      ao: {
        deliverable: 'AI Application Run Strategy',
        practice: 'Defines the production AI architecture, Site Reliability Engineering (SRE) model, and observability standards for AI in production.',
        serviceLine: 'Defines the AMS operating model, run-team structure, SLAs, and commercials.',
        outcome: 'AI-native AMS operating model and SLAs.',
        skills: ['operating-model', 'outcome-definition', 'mlops-readiness'],
      },
      bo: {
        deliverable: 'Agent-Run Process Operating Model',
        practice: 'Redesigns end-to-end processes so AI is the default operator.',
        serviceLine: 'Defines how IBM will run & enhance the newly designed processes. Defines pricing, SLAs, and the human-in-the-loop model for run/steady state.',
        outcome: 'Agent-run BPO operating model and commercials.',
        skills: ['operating-model', 'stakeholder-alignment', 'outcome-definition', 'responsible-ai'],
      },
    },

    // ── Pillar 2: AI Data Foundation ─────────────────────────────────────────
    p2: {
      st: {
        deliverable: 'Data Foundation Program Delivery',
        practice: 'Defines the AI data architecture, required data across processes, and data needed to make the organization AI-native.',
        serviceLine: 'Sponsors and mobilizes the cross-business teams, aligns the program with the broader transformation.',
        outcome: 'AI data architecture and program plan to deliver the data foundation.',
        skills: ['data-strategy', 'readiness-audit', 'stakeholder-alignment'],
      },
      ba: {
        deliverable: 'Application Data Readiness for AI',
        practice: 'Makes application data AI-ready, focused on semantic models, embeddings, and grounding for agents.',
        serviceLine: 'Configures and integrates source applications (SAP, Salesforce, Oracle, ServiceNow, Adobe) to expose governed data.',
        outcome: 'AI-ready application data layer.',
        skills: ['data-strategy', 'readiness-audit', 'responsible-ai'],
      },
      ao: {
        deliverable: 'Data Platform Run Readiness',
        practice: 'Engineers the run-side AI data architecture — quality, lineage, access, and retrieval performance.',
        serviceLine: 'Advises on data architecture to support source data consumption. Implements the AMS run model for the data platform — pipelines, monitoring, and break-fix.',
        outcome: 'Production-ready data platform run model.',
        skills: ['data-strategy', 'model-monitoring', 'mlops-readiness'],
      },
      bo: {
        deliverable: 'Process Data Readiness',
        practice: 'Defines the process-specific data requirements, guardrails, and grounding for agents to operate effectively.',
        serviceLine: 'Advises on process data semantics, grounding, and quality.',
        outcome: 'Process-ready data and stewardship model.',
        skills: ['data-strategy', 'responsible-ai', 'risk-mapping'],
      },
    },

    // ── Pillar 3: AI Innovation Garage ────────────────────────────────────────
    p3: {
      st: {
        deliverable: 'Intake, Prioritize, and Build',
        practice: 'Rapidly designs and launches AI-native processes and agents.',
        serviceLine: 'Aligns the use-case portfolio with the transformation program and secures business sponsorship.',
        outcome: 'Prioritized use-case portfolio in flight.',
        skills: ['use-case-prioritization', 'problem-qualification', 'stakeholder-alignment', 'agent-design'],
      },
      ba: {
        deliverable: 'Agent Build & Cross-App Orchestration',
        practice: 'Builds and orchestrates agents across business apps and custom agents — e.g., Salesforce-native agents communicating with SAP- and ServiceNow-native agents.',
        serviceLine: 'Implements the underlying application changes and integrations agents need.',
        outcome: 'Working agents integrated for select applications for pilot/pre-scale.',
        skills: ['agent-design', 'ai-method-selection', 'responsible-ai', 'user-feedback-loops'],
      },
      ao: {
        deliverable: 'N/A',
        practice: 'No application run work is required within the Garage scope (pilot/pre-scale).',
        serviceLine: null,
        outcome: null,
        skills: [],
        na: true,
      },
      bo: {
        deliverable: 'N/A',
        practice: 'No business process run work is required within the Garage scope (pilot/pre-scale).',
        serviceLine: null,
        outcome: null,
        skills: [],
        na: true,
      },
    },

    // ── Pillar 4: AI Governance ───────────────────────────────────────────────
    p4: {
      st: {
        deliverable: 'Responsible AI Program',
        practice: 'Designs the AI governance model, model inventory, and risk controls.',
        serviceLine: 'N/A',
        outcome: 'Enterprise AI governance framework.',
        skills: ['responsible-ai', 'risk-mapping', 'stakeholder-alignment', 'outcome-definition'],
      },
      ba: {
        deliverable: 'Build and Integrate App-Specific and Broader Agent Governance',
        practice: 'Implements governance framework across app-specific agents — evaluations, guardrails, audits.',
        serviceLine: 'Configures in-app governance controls for app-specific agents.',
        outcome: 'Embedded controls and audit trail.',
        skills: ['responsible-ai', 'risk-mapping', 'model-monitoring'],
      },
      ao: {
        deliverable: 'Run App-Specific Agent Governance',
        practice: 'Implements governance layer and "closed loop" system to operate app-specific agents.',
        serviceLine: 'Provides oversight, monitoring, and ops support for relevant apps and their respective agents in the run state.',
        outcome: 'Continuous compliance monitoring in place.',
        skills: ['responsible-ai', 'model-monitoring', 'risk-mapping', 'user-feedback-loops'],
      },
      bo: {
        deliverable: 'Run AI Process Governance',
        practice: 'Codifies and embeds process-specific requirements into the AI system.',
        serviceLine: 'Provides oversight, monitoring, and ops support for business process execution and outcomes in run state.',
        outcome: 'Process guardrails, grounding, compliance, and governance embedded into the AI-native processes and overall AI system.',
        skills: ['responsible-ai', 'risk-mapping', 'model-monitoring', 'mid-project-audit'],
      },
    },

    // ── Pillar 5: AI Factory ──────────────────────────────────────────────────
    p5: {
      st: {
        deliverable: 'Enterprise Scaling Program',
        practice: 'Co-leads factory execution. Builds and integrates AI-native process agents for scale.',
        serviceLine: 'Leads workforce change, adoption, and business value realization.',
        outcome: 'Scaled deployment of AI-native processes and measurable value capture.',
        skills: ['mlops-readiness', 'operating-model', 'outcome-definition', 'stakeholder-alignment'],
      },
      ba: {
        deliverable: 'Scaled AI in Production',
        practice: 'Builds the agent orchestration layer and builds and/or integrates agents across the client\'s application estate in a continuous factory model.',
        serviceLine: 'Industrializes application-specific agent delivery templates, factories, and release engineering at scale.',
        outcome: 'Application-specific and custom agents launched in production.',
        skills: ['mlops-readiness', 'model-monitoring', 'readiness-audit'],
      },
      ao: {
        deliverable: 'N/A',
        practice: 'No application run work is required within the Factory scope (build and launch at scale).',
        serviceLine: null,
        outcome: null,
        skills: [],
        na: true,
      },
      bo: {
        deliverable: 'N/A',
        practice: 'No business process run work is required within the Factory scope (build and launch at scale).',
        serviceLine: null,
        outcome: null,
        skills: [],
        na: true,
      },
    },

    // ── Pillar 6: Run & Enhance ───────────────────────────────────────────────
    p6: {
      st: {
        deliverable: 'Adoption & Value Realization',
        practice: 'Measures AI value and continuously improves AI system, agents, and outcomes.',
        serviceLine: 'Monitors operations and tracks/measures value realization.',
        outcome: 'Adoption plan and value-tracking model.',
        skills: ['managed-service-model', 'outcome-definition', 'retrospective', 'maturity-model'],
      },
      ba: {
        deliverable: 'Continuous Agent and Orchestration Enhancement',
        practice: 'Continuously enhances embedded agents and models — tuning, evaluations, and new capability releases across the application estate.',
        serviceLine: 'Continuously enhances the underlying applications — releases, integrations, and configuration changes that keep the AI-native estate current.',
        outcome: 'Continuous release of enhanced apps and agents in production.',
        skills: ['managed-service-model', 'model-monitoring', 'user-feedback-loops', 'retrospective'],
      },
      ao: {
        deliverable: 'Managed AI Services',
        practice: 'Advises on and engineers app-specific AI enhancements.',
        serviceLine: 'Provides L1–L2 support, break-fix, and SLA-backed run for AI applications and agents.',
        outcome: 'AMS contract delivering against SLAs.',
        skills: ['managed-service-model', 'model-monitoring', 'responsible-ai'],
      },
      bo: {
        deliverable: 'Continuous Process Improvement',
        practice: 'Uses operational data to continuously tune the system, agents, and prompts. Validates closed-loop observations and changes.',
        serviceLine: 'Continuously improves processes, outcomes, and unit economics in production.',
        outcome: 'Quarter-on-quarter improvement in outcomes.',
        skills: ['managed-service-model', 'model-monitoring', 'user-feedback-loops', 'retrospective'],
      },
    },
  },
};
