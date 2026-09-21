# Namrata Soni — Cloud Infrastructure & Security Portfolio

A modern, professional, fully static personal portfolio for **Namrata Soni**,
Cloud Infrastructure & Security Engineer at Celebal Technologies.

Built with **HTML5, CSS3, Vanilla JavaScript, Bootstrap 5 and Bootstrap Icons**.
No build tools, no package manager, no backend — just open `index.html` in a browser.

---

## 1. Tech stack

| Purpose             | Technology                            |
| ------------------- | ------------------------------------- |
| Structure / content | HTML5                                 |
| Styling             | CSS3 (custom properties) + Bootstrap 5 grid |
| Icons               | Bootstrap Icons (CDN)                 |
| Interactions        | Vanilla JavaScript (no frameworks)    |
| Fonts               | Inter (Google Fonts)                  |

Everything is loaded via **CDN**, so there is nothing to install.

## 2. Project structure

```text
namrata-soni-portfolio/
├── index.html              # Page structure + all written content
├── README.md               # This file
├── .nojekyll               # Tells GitHub Pages to serve files as-is
├── assets/
│   ├── icons/              # Custom icons (optional)
│   ├── images/             # Diagrams / screenshots (optional)
│   └── resume/             # Namrata_Soni_Resume.pdf  ← put your resume here
├── css/
│   ├── style.css           # Theme tokens, base styles, layout, background
│   └── components.css      # Navbar, cards, badges, modal, timeline, footer
└── js/
    ├── theme.js            # Dark/light toggle (remembers your choice)
    ├── projects.js         # ← EDIT THIS to manage your projects
    └── script.js           # Navbar, scroll animations, mobile menu
```

## 3. Run it locally

No server needed. Just double-click `index.html`.

If you prefer a local server (optional):

```bash
# Python 3
python -m http.server 8000

# then open http://localhost:8000
```

## 4. How to customise (no coding experience needed)

### Update your projects (most common)

Open **`js/projects.js`**. Every project is one object in the `PROJECTS` list:

```js
{
  id: "terraform-azure-infra",          // unique, used internally
  number: "02",                         // shown on the card
  title: "Terraform-Based Azure Infrastructure",
  type: "poc",                          // professional | poc | lab | learning
  category: "Infrastructure as Code · Terraform · Azure",
  description: "Short summary shown on the card...",
  tech: ["Terraform", "Azure", "Resource Groups"],
  focus: ["What you did", "What you learned"],
  flow: ["Terraform", "Modules", "Azure Resources"],       // optional diagram
  flowIcons: ["bi-filetype-tf", "bi-boxes", "bi-cloud"]    // optional icons
}
```

To **add** a project: copy one block, change the values, paste it into the list.
To **remove** one: delete its block. The cards update automatically.

### Update your links

Open **`index.html`** and find-and-replace these placeholders:

| Placeholder       | Replace with                      |
| ----------------- | --------------------------------- |
| `LINKEDIN_URL`    | `https://www.linkedin.com/in/...` |
| `GITHUB_URL`      | `https://github.com/...`          |
| `EMAIL_ADDRESS`   | `mailto:you@example.com`          |

### Add your resume

Save your PDF as **`assets/resume/Namrata_Soni_Resume.pdf`**.
The "View Resume" button points there already.

### Add a certification

In `index.html`, inside the Certifications card, copy the commented template:

```html
<div class="contrib-item mt-2">
  <i class="bi bi-patch-check"></i>
  <span><strong>AZ-104 — Azure Administrator</strong><br>
  Microsoft · 2025 · <a href="CREDENTIAL_LINK" target="_blank" rel="noopener">Verify</a></span>
</div>
```

### Change the colours

Open **`css/style.css`** and edit the variables at the top:

```css
:root {
  --accent: #6d8cff;   /* main blue-violet accent */
  --bg: #0b0f1a;       /* dark background */
}
```

The light theme has its own block: `html[data-theme="light"] { ... }`.

## 5. Deploy to GitHub Pages

1. Create a new repository on GitHub, e.g. `namrata-soni-portfolio`.
2. Push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/namrata-soni-portfolio.git
   git push -u origin main
   ```
3. In GitHub go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source = Deploy from a branch**.
5. Set **Branch = `main`** and **folder = `/ (root)`**, then **Save**.
6. Wait ~1 minute. Your site will be live at
   `https://<your-username>.github.io/namrata-soni-portfolio/`.

The included `.nojekyll` file tells GitHub Pages to serve the `css/` and `js/`
folders exactly as they are.

> Update the `og:url` and `canonical` link in `index.html` to match your final
> GitHub Pages URL.

## 6. Accessibility & performance notes

- Dark theme by default; light theme via the toggle in the navbar (saved in
  `localStorage`).
- Keyboard-friendly: every interactive element is reachable and visible via
  `:focus-visible`; the project modal closes with the `Escape` key.
- `prefers-reduced-motion` is respected — animations are disabled for users who
  request it.
- No tracking scripts, no heavy frameworks — the page is small and fast.

## 7. Content rules followed

- No invented job titles, certifications, years of experience, or metrics.
- Projects are clearly labelled **Professional Project / POC / Hands-on Lab /
  Learning Project**.
- No confidential client data, subscription IDs, IPs, or resource names.
- Placeholders (`LINKEDIN_URL`, `GITHUB_URL`, `EMAIL_ADDRESS`) are used until
  real links are provided.

## 8. License

Personal portfolio for Namrata Soni. Code is free to reuse for learning.