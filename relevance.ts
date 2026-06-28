:root {
  --bg: #f5f7fb;
  --paper: #ffffff;
  --ink: #121826;
  --muted: #5f6b7a;
  --line: #dfe5ee;
  --primary: #176b4d;
  --primary-dark: #0f4e38;
  --primary-soft: #e9f7f0;
  --warning: #a95d00;
  --warning-soft: #fff4df;
  --danger: #aa2d2d;
  --danger-soft: #fff0f0;
  --shadow: 0 20px 70px rgba(38, 50, 71, 0.10);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  background:
    radial-gradient(circle at 0 0, rgba(23, 107, 77, 0.10), transparent 28rem),
    var(--bg);
  color: var(--ink);
  font-family: Arial, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
}

button, input, select { font: inherit; }
button { cursor: pointer; }

a { color: inherit; }

.shell {
  width: min(1160px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 0;
}

.brand {
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.logo {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  color: white;
  background: linear-gradient(145deg, var(--primary), #22a276);
}

.pill {
  border: 1px solid #cfe5db;
  background: rgba(255, 255, 255, 0.72);
  color: var(--primary-dark);
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
}

.hero {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 38px;
  align-items: center;
  padding: 54px 0 70px;
}

.eyebrow {
  color: var(--primary);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
}

h1 {
  margin: 0;
  font-size: clamp(43px, 6vw, 72px);
  line-height: 1.02;
  letter-spacing: -0.065em;
}

.hero p {
  color: var(--muted);
  font-size: 19px;
  line-height: 1.75;
  margin: 24px 0 28px;
  max-width: 660px;
}

.ctaRow {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.primaryButton, .secondaryButton {
  min-height: 50px;
  border-radius: 13px;
  padding: 0 19px;
  font-weight: 800;
}

.primaryButton {
  color: white;
  background: var(--primary);
  border: 1px solid var(--primary);
}

.primaryButton:hover { background: var(--primary-dark); }

.secondaryButton {
  color: var(--ink);
  border: 1px solid var(--line);
  background: white;
}

.heroPanel {
  background: rgba(255,255,255,.9);
  border: 1px solid rgba(214,224,235,.95);
  border-radius: 24px;
  padding: 22px;
  box-shadow: var(--shadow);
}

.heroPanelHeader {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  margin-bottom: 18px;
}

.miniLabel {
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.heroPanel h3 { margin: 6px 0 0; font-size: 20px; }

.changeItem {
  border-top: 1px solid var(--line);
  padding: 17px 0 4px;
}

.changeItem strong { display: block; margin-bottom: 7px; }
.changeItem p { margin: 0; font-size: 14px; line-height: 1.55; }

.section {
  padding: 72px 0;
}

.sectionTitle {
  max-width: 760px;
  margin-bottom: 32px;
}

.sectionTitle h2 {
  font-size: clamp(30px, 4vw, 46px);
  letter-spacing: -0.05em;
  margin: 0 0 12px;
}

.sectionTitle p {
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
}

.grid3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.featureCard {
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 24px;
  border-radius: 18px;
}

.featureCard span {
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--primary-soft);
  color: var(--primary);
  font-weight: 900;
}

.featureCard h3 { margin: 18px 0 9px; }
.featureCard p { color: var(--muted); line-height: 1.65; margin: 0; }

.workspace {
  background: #101923;
  color: white;
  border-radius: 28px;
  padding: clamp(22px, 4vw, 40px);
  box-shadow: var(--shadow);
}

.workspaceHeader {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 28px;
}

.workspace h2 { margin: 0; letter-spacing: -.04em; }
.workspaceHeader p { color: #aeb8c4; margin: 9px 0 0; }

.formGrid {
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  gap: 20px;
}

.profileForm {
  background: white;
  color: var(--ink);
  border-radius: 20px;
  padding: 22px;
  align-self: start;
}

.field {
  display: grid;
  gap: 8px;
  margin-bottom: 17px;
}

.field label {
  font-weight: 800;
  font-size: 14px;
}

.field small { color: var(--muted); }

.field input, .field select {
  min-height: 44px;
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 11px;
  padding: 0 12px;
  background: white;
  color: var(--ink);
}

.checkboxGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
  margin-bottom: 18px;
}

.checkbox {
  display: flex;
  gap: 8px;
  align-items: center;
  border: 1px solid var(--line);
  padding: 11px;
  border-radius: 11px;
  font-size: 14px;
}

.cards {
  display: grid;
  gap: 14px;
}

.empty {
  border: 1px dashed #586574;
  border-radius: 18px;
  padding: 34px;
  text-align: center;
  color: #b9c1cb;
}

.actionCard {
  background: white;
  color: var(--ink);
  border-radius: 18px;
  padding: 21px;
  border-left: 5px solid var(--primary);
}

.actionCard.high { border-left-color: var(--danger); }
.actionCard.medium { border-left-color: var(--warning); }

.cardTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 12px;
}

.badge {
  display: inline-flex;
  border-radius: 999px;
  padding: 5px 9px;
  font-size: 12px;
  font-weight: 900;
}

.badge.high { color: var(--danger); background: var(--danger-soft); }
.badge.medium { color: var(--warning); background: var(--warning-soft); }
.badge.low { color: var(--primary); background: var(--primary-soft); }

.actionCard h3 {
  margin: 0 0 10px;
  letter-spacing: -.025em;
}

.cardDescription {
  color: var(--muted);
  line-height: 1.6;
  margin: 0 0 16px;
}

.meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
  margin-bottom: 15px;
}

.meta div {
  background: #f6f8fb;
  border-radius: 10px;
  padding: 11px;
}

.meta span {
  display: block;
  color: var(--muted);
  font-size: 11px;
  margin-bottom: 4px;
}

.actions {
  margin: 0;
  padding-left: 20px;
  line-height: 1.7;
}

.source {
  display: inline-block;
  margin-top: 14px;
  color: var(--primary);
  font-weight: 800;
  font-size: 13px;
}

.footer {
  padding: 40px 0 70px;
  color: var(--muted);
  font-size: 13px;
}

.note {
  margin-top: 16px;
  color: #9da8b5;
  font-size: 12px;
  line-height: 1.5;
}

@media (max-width: 860px) {
  .hero, .formGrid { grid-template-columns: 1fr; }
  .grid3 { grid-template-columns: 1fr; }
  .hero { padding-top: 34px; }
}

@media (max-width: 560px) {
  .shell { width: min(100% - 22px, 1160px); }
  .topbar .pill { display: none; }
  .checkboxGrid, .meta { grid-template-columns: 1fr; }
  .workspaceHeader { align-items: start; flex-direction: column; }
}
