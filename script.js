const typedText = document.querySelector(".typed-text");
const projectList = document.getElementById("projectList");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const siteHeader = document.querySelector(".site-header");

const typedWords = [
  "responsive experiences",
  "dynamic interfaces",
  "modern products",
  "clean digital journeys"
];

const rainbowColors = [
  "#ff5ea8",
  "#ffb86c",
  "#ffe66d",
  "#7ef9c6",
  "#58d3ff",
  "#8a7dff",
  "#c084fc"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function renderTypedWord() {
  if (!typedText) return;

  const currentWord = typedWords[wordIndex];
  const visibleText = currentWord.slice(0, charIndex);

  typedText.innerHTML = visibleText
    .split("")
    .map((char, index) => {
      const color = rainbowColors[(index + wordIndex) % rainbowColors.length];
      const displayChar = char === " " ? "&nbsp;" : char;

      return `<span class="typed-char" style="color: ${color}; text-shadow: 0 0 12px ${color}, 0 0 24px ${color};">${displayChar}</span>`;
    })
    .join("");
}

function typeLoop() {
  if (!typedText) return;

  const currentWord = typedWords[wordIndex];

  if (!deleting) {
    charIndex++;
    renderTypedWord();

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeLoop, 1200);
      return;
    }
  } else {
    charIndex--;
    renderTypedWord();

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % typedWords.length;
    }
  }

  const speed = deleting ? 45 : 95;
  setTimeout(typeLoop, speed);
}

const projects = [
  {
    title: "CompareWhere - Final Major Project",
    category: "Web Projects",
    description:
      "A budget-focused travel comparison website that helps users discover holidays based on how much they want to spend rather than choosing a destination first.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "UI/UX",
      "Accessibility",
      "Dynamic Data",
      "API Research",
      "Google Analytics",
      "GitHub",
      "VS Code",
      "Deployment"
    ],
    image: "images/CompareWhereimage.png",
    link: "https://comparewhere.co.uk"
  },
  {
    title: "PAKNTREK",
    category: "Web Projects",
    description:
      "A hiking package website where users enter their hiking preferences and experience level to receive a personalised selection of hiking essentials for delivery.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "UI/UX",
      "User Input Handling",
      "Dynamic Content",
      "Personalisation",
      "Form Design",
      "VS Code",
      "Web Design",
      "User Journey Planning"
    ],
    image: "images/PAKNTREKimage.png",
    video: "images/PAKNTREKwebrecording.mp4",
    pageLink: "projects.html"
  },
  {
    title: "PAKNTREK App",
    category: "Other Projects",
    description:
      "A companion app designed alongside the PaknTrek website to extend the hiking experience on the go. Users could view their equipment, discover nearby hikes, and access tips for hiking more sustainably and being eco-friendly while keeping the same brand and user experience as the website.",
    tags: [
      "Figma",
      "UI/UX Design",
      "App Design",
      "Wireframing",
      "Prototyping",
      "User Journey Planning",
      "Branding",
      "Interface Design"
    ],
    video: "images/PAKNTREKapprecording.mp4"
  },
  {
    title: "The Body Project",
    category: "Other Projects",
    description:
      "A two-week collaborative design-thinking project working with a real client to develop a new visual identity and digital presence. As a team, we created consistent branding across a website prototype, posters, social media, and merchandise while responding to client feedback throughout the design process.",
    tags: [
      "Adobe Photoshop",
      "Weebly",
      "UI/UX Design",
      "Web Design",
      "Branding",
      "Graphic Design",
      "Prototyping",
      "Design Thinking",
      "Client Communication",
      "Social Media Research",
      "Teamwork"
    ],
    image: "images/BodyProject.png"
  },
  {
    title: "Design Thinking & Project Methodology",
    category: "Other Projects",
    description:
      "An exploration of the planning and methodology behind my creative and digital projects, covering research, problem definition, user understanding, ideation, user journeys, prototyping, testing, feedback, and iterative design before reaching a final outcome.",
    tags: [
      "Design Thinking",
      "UX Research",
      "User-Centred Design",
      "Research & Analysis",
      "Ideation",
      "User Personas",
      "User Journeys",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Testing",
      "Iterative Design",
      "Project Planning"
    ],
    image: "images/DesignThinking.png"
  },
  {
    title: "DogWiki",
    category: "Web Projects",
    description:
      "An interactive dog dictionary where users can explore breeds and learn about their characteristics, with a Dog of the Week feature, dog-themed games, and a companion app designed in Adobe XD.",
    tags: [
      "HTML",
      "CSS",
      "Adobe XD",
      "UI/UX",
      "App Design",
      "Web Design",
      "Wireframing",
      "Prototyping",
      "Branding",
      "User Journey Planning",
      "Interface Design"
    ],
    image: "images/DogWikiimage.png",
    video: "images/DOGWIKIwebrecording.mp4",
    pageLink: "projects.html"
  },
  {
    title: "Experimenting with VR",
    category: "Other Projects",
    description:
      "An experimental VR game created to learn the fundamentals of virtual reality development and Unreal Engine. Players could move around an interactive environment, pick up a weapon, shoot targets, and interact with a portal while exploring VR interaction, level design, and 3D environments.",
    tags: [
      "Unreal Engine",
      "VR Development",
      "3D Level Design",
      "Environment Mapping",
      "Game Development",
      "Interaction Design",
      "Blueprint Visual Scripting"
    ],
    video: "images/VRGamerecording.mkv",
    videoType: "video/x-matroska"
  },
  {
    title: "Experimenting with Unreal Engine",
    category: "Other Projects",
    description:
      "An experimental Unreal Engine project focused on creating a 3D landscape that tells a story through its environment. I designed and built the landscape before using camera and sequencing tools to create a cinematic sequence that guides the viewer through the scene.",
    tags: [
      "Unreal Engine",
      "3D Environment Design",
      "Landscape Design",
      "Environmental Storytelling",
      "Cinematic Sequencing",
      "Camera Composition",
      "Level Design"
    ],
    video: "images/UnrealEnginerecording.mp4"
  }
];

if (projectList) {
  const isAllProjectsPage = document.body.dataset.projectPage === "all";
  const visibleProjects = isAllProjectsPage
    ? projects
    : projects.filter((project) => project.category === "Web Projects");

  const renderProject = (project) => `
    <article class="project-card reveal">
      ${isAllProjectsPage && project.video ? `
        <video class="project-preview project-video" controls autoplay muted playsinline preload="metadata">
          <source src="${project.video}" type="${project.videoType || "video/mp4"}" />
          Your browser does not support the video element.
        </video>
      ` : project.image ? `
        <img class="project-preview project-image" src="${project.image}" alt="${project.title} project preview" />
      ` : `<div class="project-preview" aria-hidden="true"></div>`}
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tags">
        ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      ${project.link ? `
        <a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">
          Visit project <span aria-hidden="true">↗</span>
        </a>
      ` : project.pageLink && !isAllProjectsPage ? `
        <a class="project-link" href="${project.pageLink}">
          View full project <span aria-hidden="true">↗</span>
        </a>
      ` : ""}
    </article>
  `;

  if (isAllProjectsPage) {
    const categories = [...new Set(visibleProjects.map((project) => project.category))];

    projectList.innerHTML = categories.map((category) => `
      <section class="project-group reveal">
        <div class="project-group-heading">
          <p class="eyebrow">Category</p>
          <h2>${category}</h2>
        </div>
        <div class="project-group-list">
          ${visibleProjects
            .filter((project) => project.category === category)
            .map(renderProject)
            .join("")}
        </div>
      </section>
    `).join("");
  } else {
    projectList.innerHTML = visibleProjects.map(renderProject).join("");
  }

  document.querySelectorAll(".project-video").forEach((video) => {
    video.addEventListener("click", () => {
      if (document.fullscreenElement) return;

      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (siteHeader) {
  const toggleHeaderState = () => {
    siteHeader.classList.toggle("scrolled", window.scrollY > 20);
  };

  toggleHeaderState();
  window.addEventListener("scroll", toggleHeaderState, { passive: true });
}

typeLoop();
