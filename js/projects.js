/* =====================================================================
   projects.js  →  Project data + modal rendering
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to add, remove, or change a
   project. index.html reads this list automatically.

   Each project object:
     id            → unique key used by the modal
     number        → reference number shown on the card (e.g. "01")
     title         → project name
     type          → "professional" | "poc" | "lab" | "learning"
     category      → short technical line shown under the title
     description   → 1–2 sentence summary shown on the card
     tech          → technology tags
     focus         → "what I did / what I learned" bullet points
     flow          → (optional) small architecture pipeline steps
     code          → (optional) generic, non-sensitive code preview
   ===================================================================== */

const PROJECTS = [
  {
    id: "enterprise-data-platform",
    number: "01",
    title: "Enterprise Cloud Data Platform",
    type: "professional",
    category: "Professional Project · Azure · Databricks · Microsoft Fabric",
    description:
      "Exposure to an enterprise data-platform environment integrating on-premises operational data with Azure, Databricks, and Microsoft Fabric. Focused on understanding secure connectivity, private networking, data-platform infrastructure, and platform-level troubleshooting.",
    tech: [
      "Azure", "Azure Databricks", "Microsoft Fabric", "Azure Data Factory",
      "ADLS Gen2", "Event Hubs", "IoT Hub", "Unity Catalog",
      "Private Endpoints", "Private DNS", "Terraform"
    ],
    focus: [
      "Private Databricks architecture and managed networking",
      "ADLS Gen2 integration with Unity Catalog",
      "External Locations and Storage Credentials",
      "Private connectivity through Private Endpoints and Private DNS",
      "Fabric integration and gateway concepts",
      "Event Hub and IoT Hub connectivity patterns",
      "Infrastructure documentation and walkthroughs"
    ],
    flow: ["On-prem / IoT", "Connectivity", "Azure", "Databricks / Fabric", "Data Platform"],
    flowIcons: ["bi-hdd-network", "bi-ethernet", "bi-cloud", "bi-database", "bi-diagram-3"]
  },

  {
    id: "terraform-azure-infra",
    number: "02",
    title: "Terraform-Based Azure Infrastructure",
    type: "poc",
    category: "Infrastructure as Code · Terraform · Azure",
    description:
      "Hands-on infrastructure automation using Terraform to provision and organize Azure resources through reusable modules, variables, outputs, and environment-specific configurations.",
    tech: [
      "Terraform", "Azure", "Resource Groups", "Storage Accounts",
      "Private Endpoints", "Private DNS Zones", "Terraform Modules",
      "Variables & Outputs", "tfvars", "Azure DevOps"
    ],
    focus: [
      "Modular Terraform structure and layout",
      "Environment separation concepts (dev / prod)",
      "Resource dependencies and ordering",
      "Reusable infrastructure patterns",
      "Secure private connectivity for provisioned resources",
      "Infrastructure provisioning workflows"
    ],
    flow: ["Terraform", "Modules", "Environment Config", "Azure Resources"],
    flowIcons: ["bi-filetype-tf", "bi-boxes", "bi-sliders", "bi-cloud-arrow-up"],
    code: [
      { t: "# Generic example — reusable module call" },
      { t: 'module "storage" {' },
      { t: '  source  = "./modules/storage-account"', c: true },
      { t: '  count   = var.environment == "prod" ? 1 : 0' },
      { t: "" },
      { t: "  name                = var.storage_name" },
      { t: '  resource_group_name = data.azurerm_resource_group.rg.name' },
      { t: "  is_private          = true", c: true },
      { t: "}" },
      { t: "" },
      { t: "# Private connectivity for the storage account" },
      { t: 'resource "azurerm_private_endpoint" "pe" {' },
      { t: '  name                = "pe-${module.storage.name}"' },
      { t: "  subnet_id           = var.subnet_id" },
      { t: "  private_service_connection {" },
      { t: "    name                 = \"psc-${module.storage.name}\"" },
      { t: "    is_manual_connection = false" },
      { t: "  }" },
      { t: "}" }
    ]
  },

  {
    id: "aks-appgw-lab",
    number: "03",
    title: "AKS & Application Gateway Ingress Lab",
    type: "lab",
    category: "Hands-on Lab · Azure Kubernetes Service",
    description:
      "Hands-on Azure Kubernetes Service lab focused on understanding Kubernetes infrastructure, ingress routing, Application Gateway integration, and cloud networking.",
    tech: [
      "AKS", "Kubernetes", "Application Gateway", "AGIC", "Ingress",
      "Services", "Node Pools", "Azure VNet", "Public IP", "HPA / Autoscaling"
    ],
    focus: [
      "AKS cluster architecture and node pools",
      "Application Gateway Ingress Controller (AGIC)",
      "Ingress routing and backend services",
      "Node pools and autoscaling concepts (HPA / VPA)",
      "Backend health troubleshooting",
      "Public vs private API server concepts",
      "Azure networking fundamentals"
    ],
    flow: ["User", "Application Gateway", "Ingress", "Service", "Pods"],
    flowIcons: ["bi-person", "bi-shield-lock", "bi-signpost-split", "bi-hdd-rack", "bi-box"]
  },

  {
    id: "azure-devops-cicd",
    number: "04",
    title: "Azure DevOps CI/CD Learning Project",
    type: "learning",
    category: "DevOps · Azure DevOps · Git",
    description:
      "Built and configured a learning project to understand Git workflows, Azure Repos, YAML pipelines, build automation, and CI/CD fundamentals.",
    tech: [
      "Azure DevOps", "Azure Repos", "Azure Pipelines", "YAML",
      "Git", "GitHub", "Node.js / npm"
    ],
    focus: [
      "Repository management and structure",
      "Git branching and remote configuration",
      "YAML pipeline structure and stages",
      "Build and artifact publishing",
      "CI/CD workflow understanding",
      "Troubleshooting pipeline configuration"
    ],
    flow: ["Code", "Git", "Azure Repos", "Pipeline", "Build", "Artifact"],
    flowIcons: ["bi-code-slash", "bi-git", "bi-folder", "bi-diagram-2", "bi-box-seam", "bi-package"]
  },

  {
    id: "clickhouse-genai-lab",
    number: "05",
    title: "ClickHouse Observability & GenAI Lab",
    type: "learning",
    category: "Learning Project · Observability · AI/GenAI",
    description:
      "Hands-on learning in observability and AI/GenAI infrastructure, exploring ClickHouse, ClickStack, Langfuse, LangChain, Grafana, MCP, and LibreChat.",
    tech: [
      "ClickHouse", "ClickStack", "Langfuse", "LangChain",
      "Grafana", "MCP", "LibreChat", "Docker", "Azure VM"
    ],
    focus: [
      "Observability fundamentals",
      "Logs, metrics, and traces concepts",
      "AI application observability",
      "LLM tracing concepts",
      "MCP integration",
      "Local AI tooling",
      "Containerized lab environments"
    ],
    flow: ["Apps / LLMs", "Langfuse", "ClickHouse", "Grafana"],
    flowIcons: ["bi-robot", "bi-graph-up", "bi-database-fill", "bi-bar-chart-line"]
  },

  {
    id: "azure-ai-rag",
    number: "06",
    title: "Azure AI & RAG Exploration",
    type: "poc",
    category: "AI Infrastructure · Azure AI",
    description:
      "Explored Azure AI services, AI Foundry, RAG concepts, AI agents, and the infrastructure considerations involved in building AI-powered applications.",
    tech: ["Azure AI Foundry", "Azure AI Services", "RAG", "AI Agents", "Azure", "Python", "APIs"],
    focus: [
      "AI service architecture",
      "RAG workflow understanding",
      "AI agent concepts",
      "Model deployment concepts",
      "Backend and frontend integration troubleshooting",
      "Cloud infrastructure requirements for AI workloads"
    ],
    flow: ["User Query", "AI Foundry", "RAG / Agents", "Response"],
    flowIcons: ["bi-chat-dots", "bi-cpu", "bi-diagram-3", "bi-check2-circle"]
  }
];

/* ---------------------------------------------------------------------
   TYPE LABELS — controls the coloured badge shown on each card.
   Add a new type here if you invent a new category.
   --------------------------------------------------------------------- */
const TYPE_LABELS = {
  professional: "Professional Project",
  poc: "POC",
  lab: "Hands-on Lab",
  learning: "Learning Project"
};

/* =====================================================================
   Rendering helpers
   ===================================================================== */

/* Escape user-supplied strings so HTML can never be injected */
function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = String(value);
  return div.innerHTML;
}

/* Build one technology tag: <span class="tag"><i class="bi bi..."></i>name</span> */
function tagHtml(name) {
  return `<span class="tag"><i class="bi bi-code-square"></i>${escapeHtml(name)}</span>`;
}

/* Build the small architecture pipeline used on cards and in modals */
function flowHtml(project) {
  if (!project.flow) return "";
  const steps = project.flow.map((label, i) => {
    const icon = project.flowIcons && project.flowIcons[i] ? project.flowIcons[i] : "bi-arrow-right";
    return `<div class="flow-step"><i class="bi ${icon}"></i><span>${escapeHtml(label)}</span></div>`;
  });
  const arrows = project.flow.slice(1).map(() => `<div class="flow-arrow"><i class="bi bi-arrow-right"></i></div>`);
  // interleave: step arrow step arrow ... step
  let html = steps[0];
  for (let i = 1; i < steps.length; i++) html += arrows[i - 1] + steps[i];
  return `<div class="flow">${html}</div>`;
}

/* Build the optional generic code preview */
function codeHtml(project) {
  if (!project.code) return "";
  const lines = project.code.map((line) => {
    const cls = line.c ? "c" : "";
    return `<span class="${cls}">${escapeHtml(line.t) || "&nbsp;"}</span>`;
  });
  return `
    <div class="code-block">
      <div class="terminal-bar">
        <i style="background:#ff5f56"></i><i style="background:#ffbd2e"></i><i style="background:#27c93f"></i>
        <span class="t-title">main.tf — generic example</span>
      </div>
      <pre>${lines.join("\n")}</pre>
    </div>`;
}

/* =====================================================================
   renderProjectCards()
   Fills the #projectsGrid container in index.html.
   ===================================================================== */
function renderProjectCards() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p) => `
    <article class="card-tech project-card reveal">
      <div class="project-top">
        <div>
          <h3>${escapeHtml(p.title)}</h3>
          <span class="project-cat">${escapeHtml(p.category)}</span>
        </div>
        <span class="type-label type-${p.type}">${TYPE_LABELS[p.type] || "Project"}</span>
      </div>
      <p>${escapeHtml(p.description)}</p>
      <div class="tag-list">${p.tech.map(tagHtml).join("")}</div>
      <div class="project-foot">
        <span class="project-number">${escapeHtml(p.number)}</span>
        <button class="btn-tech btn-tech-outline" data-project="${escapeHtml(p.id)}">
          View Details <i class="bi bi-arrow-right"></i>
        </button>
      </div>
    </article>`).join("");

  // Wire every "View Details" button to open its modal
  grid.querySelectorAll("[data-project]").forEach((btn) => {
    btn.addEventListener("click", () => openProjectModal(btn.dataset.project));
  });
}

/* =====================================================================
   openProjectModal(id)
   Builds and shows the detail modal for one project.
   ===================================================================== */
function openProjectModal(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;

  let modal = document.getElementById("projectModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "projectModal";
    modal.className = "modal-backdrop-custom";
    modal.innerHTML = `<div class="modal-custom"></div>`;
    document.body.appendChild(modal);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  modal.querySelector(".modal-custom").innerHTML = `
    <div class="modal-head">
      <div>
        <span class="type-label type-${p.type}">${TYPE_LABELS[p.type] || "Project"}</span>
        <h3 class="mt-2">${escapeHtml(p.title)}</h3>
        <span class="modal-sub">${escapeHtml(p.category)}</span>
      </div>
      <button class="icon-btn" id="modalClose" aria-label="Close project details">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
    <div class="modal-body">
      <p>${escapeHtml(p.description)}</p>

      <h4>Architecture Flow</h4>
      ${flowHtml(p)}

      ${codeHtml(p)}

      <h4>Technologies</h4>
      <div class="tag-list">${p.tech.map(tagHtml).join("")}</div>

      <h4>Contribution / Learning Focus</h4>
      <ul class="bullets">
        ${p.focus.map((f) => `<li><i class="bi bi-chevron-right"></i><span>${escapeHtml(f)}</span></li>`).join("")}
      </ul>
    </div>`;

  modal.classList.add("open");
  document.body.style.overflow = "hidden"; // lock background scroll

  const closeBtn = document.getElementById("modalClose");
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (closeBtn) closeBtn.focus(); // keyboard focus for accessibility
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

/* Close the modal with the Escape key */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* Render the cards as soon as the page is ready */
document.addEventListener("DOMContentLoaded", renderProjectCards);
