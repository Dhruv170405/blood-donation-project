# 🩸 Blood Donation Awareness & Public Health Hub

An evidence-based, interactive public health web application designed to promote voluntary blood donation, educate communities on transfusion science, dispel medical myths, and provide a client-side prototype for donor registration and directory discovery.

Built strictly with **Vanilla HTML5, Vanilla CSS3, and modern Vanilla ES6 JavaScript** — zero frameworks, zero external dependencies, and zero build steps required.

---

## 🌟 Key Features

1. **Sticky Glassmorphic Navigation & Mobile Drawer**
   - High-contrast responsive navbar with active section scrollspy highlighting.
   - Accessible hamburger menu with smooth sliding drawer for mobile devices (`< 860px`).
   - Dedicated skip-to-content link and accessible focus indicators (`:focus-visible`).

2. **Aims & Objectives Section (`#aims`)**
   - Highlights 4 strategic public health pillars aligned with World Health Organization (WHO) benchmarks:
     - 100% Voluntary Non-Remunerated Donation (VNRD).
     - Stringent safety screenings (NAT, serology).
     - Community emergency preparedness & disaster reserves.
     - Youth and college campus mobilization.
   - 3 focused educational objective cards on biological literacy, pre-donation wellness, and establishing lifelong donation habits.

3. **Educational Clinical Impact Cards (`#essential`)**
   - Direct hospital use-case cards: Massive trauma resuscitations, oncology chemotherapy, organ transplants, and maternal/neonatal hemorrhage management.
   - Cellular component breakdown integrating `assets/images/impact.jpg`:
     - **Red Blood Cells (RBCs)**: 35–42 days refrigerated (1°C–6°C).
     - **Platelets**: 5–7 days at room temperature (20°C–24°C) under gentle continuous agitation.
     - **Fresh Frozen Plasma (FFP)**: Up to 1 year frozen (-18°C or colder).

4. **Interactive ABO/Rh Compatibility Explorer (`#compatibility`)**
   - Interactive two-way explorer supporting all 8 blood groups (`O-`, `O+`, `A-`, `A+`, `B-`, `B+`, `AB-`, `AB+`).
   - Synchronized quick-select chips and dropdown selector.
   - Shows erythrocyte surface antigens and circulating plasma antibodies.
   - Displays clear compatibility tags for both red cell donation and reception.
   - Highlights Universal Red Cell Donor (`O-`) and Universal Recipient (`AB+`).
   - Prominent **Clinical Transfusion Disclaimer** explaining that actual transfusions require laboratory crossmatching and specialist supervision.

5. **Eligibility, Preparation & Aftercare Guidance (`#eligibility`)**
   - 3-Tab Interactive Panel:
     1. *General Eligibility*: Age (18–65), minimum weight (50 kg / 110 lbs), hemoglobin thresholds, and 56-day donation interval.
     2. *Preparation Guidelines*: Hydration (500 mL water), iron-rich meals, avoiding fatty foods, 7–8 hours sleep.
     3. *Aftercare & Recovery*: 15-minute rest observation, fluid replenishment, avoiding strenuous lifting for 24 hours, and venipuncture care.
   - **5-Point Self-Assessment Checklist**: Interactive checkboxes with a live readiness counter and temporary deferral guidance.
   - Medical disclaimer clarifying that online questionnaires serve educational awareness only and final clearance is performed on donation day.

6. **Interactive Myths vs. Facts Section (`#myths`)**
   - 6 peer-reviewed myth-busting cards addressing common phobias (needle infections, permanent weakness, tattoos, dietary restrictions).
   - Category filter buttons (*All Topics*, *Physical Health*, *Safety & Hygiene*, *Diet & Nutrition*, *Time & Convenience*, *Eligibility & Medications*).
   - Click and keyboard activation (`Enter` / `Space`) with visual focus indicators.

7. **Five-Question Knowledge Quiz with Final Score & Registration CTA (`#quiz`)**
   - 5 peer-reviewed questions testing whole blood intervals, universal red blood cell donor, platelet shelf life, testing protocols, and donation volumes.
   - Visual progress bar and score tracker.
   - Instant answer feedback cards with medical rationale.
   - Final score badge and percentage display.
   - Direct Call-to-Action button to jump smoothly to the donor registration section.

8. **Voluntary Donor Registration & Live Directory Prototype (`#register`)**
   - **Live Validation Form**: Full Name (letters only), Age (18–65), Gender, Blood Group, City/Campus, Contact Phone (10+ digits), and mandatory Demo Consent checkbox.
   - **Inline Error Feedback**: Specific error messages shown inline with `.has-error` visual cues and automatic focus on the first invalid field.
   - **Privacy Guard & Phone Masking**: Protects personal privacy by formatting phone numbers (e.g. `•••-•••-4821 [Demo]`) so real contact details are never exposed.
   - **Local Browser Storage (`localStorage`)**: Persists registered donors client-side (`blood_donation_demo_donors_v2`) with graceful in-memory fallback for private browsing.
   - **Multi-Criteria Search & Filtering**: Real-time name/city search, blood group filter, dynamically populated city/campus filter, clear filters button, dynamic result count, and empty state screen.
   - **Reset Demo Data Action**: Button to restore the directory back to default fictional seed donors at any time.

9. **Upcoming Blood Drives & Community RSVP (`#camps`)**
   - Displays scheduled local blood drives with target unit progress bars and one-click RSVP confirmation.

10. **Accessible Footer & Contact Inquiry (`#contact`)**
    - Emergency telephone helpline (`1-800-RED-LIFE`).
    - Interactive contact/inquiry form with real-time submission confirmation.
    - Quick navigation links and print report utility (`window.print()`).
    - Floating back-to-top button.

---

## 📂 Project Structure

```text
blood-donation-awareness/
├── index.html                  # Semantic HTML5 document & landmarks
├── styles/
│   └── main.css                # Vanilla CSS3 design system, tokens & responsive styles
├── scripts/
│   ├── app.js                  # Vanilla ES6 application logic & DOM interactions
│   └── data.js                 # Structured medical datasets & fictional seed donors
├── assets/
│   └── images/
│       ├── hero.jpg            # Clinic donation photo
│       └── impact.jpg          # Educational community graphic
├── docs/
│   ├── project-report.md       # Comprehensive academic project report
│   └── viva-questions.md       # 25+ technical & conceptual Q&A for exams/interviews
└── README.md                   # Project documentation & setup guide
```

---

## 🚀 Quick Setup & Local Execution

This project is a 100% static client-side web application. Because it uses modern JavaScript ES6 modules (`import`/`export`), it should be served via a local HTTP server to avoid browser `file://` CORS security restrictions.

### Option 1: Python (Recommended)
Open a terminal in the project root directory and run:
```bash
# Python 3
python3 -m http.server 8080

# Or Python 2
python -m SimpleHTTPServer 8080
```
Open your browser and navigate to: **`http://localhost:8080`**

### Option 2: Node.js / npx
```bash
npx serve .
# or
npx http-server -p 8080
```

### Option 3: VS Code Live Server
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click on `index.html` and click **"Open with Live Server"**.

---

## 🧪 Testing & Verification Guide

| Test Area | Action | Expected Result |
|---|---|---|
| **Sticky Navigation** | Scroll down the page past 20px. | Header elevates with subtle glassmorphic backdrop and shadow; active nav item reflects current section. |
| **Mobile Drawer** | View on viewport `< 860px` and click the hamburger button. | Mobile navigation drawer slides open; clicking any anchor or the close button closes the drawer. |
| **ABO/Rh Explorer** | Click the `O-` or `AB+` chips or change the select dropdown. | Table updates antigens, antibodies, recipient, and donor badges in real time. |
| **Guidance Tabs** | Click between *Eligibility*, *Preparation*, and *Aftercare*. | Content panel switches smoothly and updates ARIA selected states. |
| **Checklist Counter** | Uncheck 2 checkboxes in the 5-point checklist. | Counter updates to `3 of 5 Requirements Satisfied`; clicking "Check Eligibility" displays temporary deferral advice. |
| **Knowledge Quiz** | Answer all 5 questions sequentially. | Progress bar advances, instant answer explanations appear, and the final score card provides a score badge with registration CTA. |
| **Registration Form Validation** | Submit the form empty. | Inline errors highlight required fields in red; focus jumps to Full Name. |
| **Phone Masking & Storage** | Submit valid details with phone `5550199876`. | Phone is masked as `•••-•••-9876 [Demo]`; record appears at top of table with `NEW DEMO` badge; saved in `localStorage`. |
| **Search & Empty State** | Type `XYZNonExistent` in the directory search box. | Table displays friendly empty state box with "Clear Filters & View All Donors" button. |
| **Reset Demo Data** | Click `↺ Reset Demo Data` in directory header. | Local storage resets to the default 8 fictional seed donor records. |

---

## ♿ Accessibility & Standards

- **Semantic Landmarks**: Uses `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, and `<footer>`.
- **Keyboard Navigation**: All interactive elements (chips, tabs, quiz choices, myth cards, form controls) are reachable via `Tab` and activated via `Enter` or `Space`.
- **Screen Reader Announcements**: Uses `aria-live="polite"` on quiz feedback, checklist counter, and registration messages.
- **Focus Indicators**: Explicit `:focus-visible` outline rings on buttons, inputs, and links.
- **Color Contrast**: Compliant with WCAG 2.1 AA standards (Navy `#0f1d3a` on Light Gray `#f8fafc`, White text on Red `#dc2626`).

---

## ⚖️ Medical & Educational Disclaimers

- **Transfusion Medicine Disclaimer**: Blood component compatibility charts illustrate general biological principles. In actual hospital medicine, every transfusion requires laboratory typing, antibody screening, and crossmatching by certified specialists.
- **Eligibility Disclaimer**: Online questionnaires serve educational awareness only. Certified blood bank medical staff determine actual donor qualification on donation day through confidential health history and vital signs screening.
- **Demonstration Directory Disclaimer**: Donor records in this project are simulated for frontend testing and educational demonstration. No real contact details are exposed, and this tool does not perform live medical matching or dispatch.
