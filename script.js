:root {
  color-scheme: light;
  --ink: #143553;
  --deep: #0f4a7b;
  --blue: #23a8e5;
  --mint: #8de6cf;
  --red: #ee4a5a;
  --gold: #ffd36b;
  --paper: rgba(255, 255, 255, 0.86);
}

* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
  font-family: "Microsoft YaHei", "PingFang SC", Arial, sans-serif;
  background: #dff7ff;
  color: var(--ink);
}

button {
  border: 0;
  font: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

#snowCanvas {
  position: fixed;
  inset: 0;
  z-index: 10;
  pointer-events: none;
}

.phone {
  position: relative;
  width: min(100vw, 430px);
  height: 100dvh;
  min-height: 640px;
  margin: 0 auto;
  overflow: hidden;
  background: #e9fbff;
  box-shadow: 0 0 40px rgba(19, 57, 91, 0.16);
}

.page {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: max(28px, env(safe-area-inset-top)) 24px max(26px, env(safe-area-inset-bottom));
  opacity: 0;
  transform: translateY(36px) scale(0.985);
  transition: opacity 520ms ease, transform 520ms ease;
  pointer-events: none;
  isolation: isolate;
}

.page::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -2;
  background-image: linear-gradient(180deg, rgba(239, 252, 255, 0.28), rgba(255, 255, 255, 0.68)), var(--bg);
  background-size: cover;
  background-position: center;
}

.page::after {
  content: "";
  position: absolute;
  left: -10%;
  right: -10%;
  bottom: -5%;
  height: 34%;
  z-index: -1;
  background: radial-gradient(70% 85% at 50% 100%, rgba(255,255,255,0.95), rgba(255,255,255,0.5) 55%, transparent 72%);
}

.page.active {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.ribbon,
.kicker {
  align-self: flex-start;
  padding: 7px 12px;
  border: 2px solid rgba(20, 53, 83, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.76);
  color: var(--deep);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0;
  box-shadow: 0 8px 18px rgba(34, 128, 182, 0.12);
}

h1,
h2 {
  width: 100%;
  margin: 18px 0 0;
  color: #103a62;
  text-align: left;
  letter-spacing: 0;
  line-height: 1.06;
}

h1 {
  font-size: clamp(44px, 12vw, 62px);
}

h2 {
  font-size: clamp(34px, 9.4vw, 48px);
}

.lead,
.body-copy,
.caption,
.result {
  width: 100%;
  margin: 16px 0 0;
  padding: 14px 16px;
  border: 2px solid rgba(20, 53, 83, 0.1);
  border-radius: 8px;
  background: var(--paper);
  font-size: 16px;
  line-height: 1.65;
  font-weight: 700;
  box-shadow: 0 12px 24px rgba(36, 122, 168, 0.12);
}

.emblem {
  position: absolute;
  right: 24px;
  top: 42px;
  width: 72px;
  height: 72px;
  object-fit: contain;
  border-radius: 50%;
  background: white;
  padding: 10px;
  box-shadow: 0 12px 24px rgba(21, 88, 130, 0.16);
}

.mascot {
  object-fit: contain;
  border-radius: 12px;
  filter: drop-shadow(0 18px 20px rgba(10, 75, 120, 0.2));
}

.hero-bing {
  width: min(68vw, 280px);
  margin-top: auto;
  transform-origin: 50% 90%;
  animation: popIn 720ms ease both, wobble 2.8s ease-in-out 900ms infinite;
}

.primary,
.ghost,
.nav {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  border-radius: 999px;
  font-weight: 900;
  box-shadow: 0 12px 22px rgba(18, 87, 130, 0.18);
}

.primary {
  width: min(78vw, 300px);
  margin-top: 20px;
  background: linear-gradient(135deg, var(--red), #ff8e5c);
  color: white;
}

.ghost {
  width: min(70vw, 260px);
  margin-top: 18px;
  border: 2px solid rgba(20, 53, 83, 0.12);
  background: rgba(255, 255, 255, 0.82);
  color: var(--deep);
}

.nav {
  position: absolute;
  left: 50%;
  bottom: max(18px, env(safe-area-inset-bottom));
  width: 46px;
  height: 46px;
  min-height: 46px;
  transform: translateX(-50%);
  background: #fff;
  color: var(--deep);
  font-size: 24px;
  animation: bounce 1.7s ease-in-out infinite;
}

.swipe-hint {
  margin-top: 10px;
  color: var(--deep);
  font-size: 13px;
  font-weight: 900;
}

.solar-orbit {
  position: relative;
  width: 100%;
  height: min(44vh, 330px);
  margin-top: 18px;
}

.solar-orbit article {
  position: absolute;
  width: 42%;
  min-width: 142px;
  overflow: hidden;
  border: 4px solid #fff;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 16px 26px rgba(23, 87, 126, 0.18);
  transition: transform 480ms ease;
}

.solar-orbit article:nth-child(1) {
  left: 3%;
  top: 7%;
  transform: rotate(-8deg);
}

.solar-orbit article:nth-child(2) {
  right: 2%;
  top: 28%;
  transform: rotate(7deg);
}

.solar-orbit article:nth-child(3) {
  left: 24%;
  bottom: 0;
  transform: rotate(-2deg);
}

.solar-orbit.shuffled article:nth-child(1) {
  transform: translate(22px, 18px) rotate(5deg) scale(1.04);
}

.solar-orbit.shuffled article:nth-child(2) {
  transform: translate(-18px, -10px) rotate(-9deg) scale(1.04);
}

.solar-orbit.shuffled article:nth-child(3) {
  transform: translate(4px, -22px) rotate(8deg) scale(1.04);
}

.solar-orbit img,
.photo-ticket img,
.venue-card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.solar-orbit span,
.photo-ticket span {
  display: block;
  padding: 8px 10px;
  color: var(--ink);
  font-size: 14px;
  font-weight: 900;
}

.photo-ticket {
  width: 100%;
  margin-top: 24px;
  overflow: hidden;
  border: 5px solid #fff;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 18px 30px rgba(15, 74, 123, 0.18);
  transform: rotate(-2deg);
}

.photo-ticket img {
  height: min(30vh, 230px);
}

.puzzle-board {
  position: relative;
  width: min(82vw, 330px);
  aspect-ratio: 4 / 3;
  margin-top: 20px;
  border: 6px solid #fff;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.48);
  box-shadow: inset 0 0 0 2px rgba(20, 53, 83, 0.08), 0 18px 28px rgba(24, 104, 154, 0.16);
}

.piece {
  position: absolute;
  width: 50%;
  height: 50%;
  background-image: url("./assets/rings.jpg");
  background-size: 200% 200%;
  border: 2px solid rgba(255, 255, 255, 0.88);
  box-shadow: 0 10px 18px rgba(18, 74, 115, 0.2);
  transition: transform 900ms cubic-bezier(.2,.95,.2,1), opacity 420ms ease;
}

.p1 { left: 0; top: 0; background-position: 0 0; transform: translate(-70px, -52px) rotate(-18deg); }
.p2 { right: 0; top: 0; background-position: 100% 0; transform: translate(74px, -42px) rotate(16deg); }
.p3 { left: 0; bottom: 0; background-position: 0 100%; transform: translate(-58px, 62px) rotate(14deg); }
.p4 { right: 0; bottom: 0; background-position: 100% 100%; transform: translate(66px, 58px) rotate(-14deg); }

.puzzle-board.solved .piece {
  transform: translate(0, 0) rotate(0);
}

.puzzle-board.solved::after {
  content: "完成！";
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 7px 12px;
  border-radius: 999px;
  background: var(--gold);
  color: #8b3400;
  font-weight: 900;
}

.video-shell {
  width: 100%;
  margin-top: 24px;
  padding: 8px;
  border: 3px solid #fff;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(255,255,255,.9), rgba(141,230,207,.65));
  box-shadow: 0 20px 30px rgba(18, 80, 120, 0.18);
  animation: glow 2.4s ease-in-out infinite;
}

video {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 6px;
  background: #143553;
}

.venue-stack {
  position: relative;
  width: 100%;
  height: min(42vh, 320px);
  margin-top: 18px;
}

.venue-card {
  position: absolute;
  width: 76%;
  height: 42%;
  overflow: hidden;
  border: 4px solid #fff;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 16px 26px rgba(17, 79, 123, 0.18);
  transition: transform 340ms ease, z-index 0ms linear 170ms;
}

.venue-card:nth-child(1) { left: 0; top: 0; transform: rotate(-5deg); }
.venue-card:nth-child(2) { right: 0; top: 28%; transform: rotate(5deg); }
.venue-card:nth-child(3) { left: 9%; bottom: 0; transform: rotate(-2deg); }
.venue-card.active {
  z-index: 3;
  transform: translateY(-8px) rotate(0) scale(1.04);
}

.quiz-box {
  width: 100%;
  margin-top: 24px;
  padding: 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 16px 26px rgba(17, 79, 123, 0.16);
}

.question {
  margin: 0 0 14px;
  font-size: 18px;
  font-weight: 900;
  line-height: 1.5;
}

.quiz-box button {
  width: 100%;
  min-height: 48px;
  margin-top: 10px;
  border: 2px solid rgba(20, 53, 83, 0.1);
  border-radius: 8px;
  background: #fff;
  color: var(--ink);
  font-weight: 900;
  text-align: left;
  padding: 0 16px;
}

.quiz-box button.correct {
  background: #ccffe9;
  border-color: #39c992;
}

.quiz-box button.wrong {
  background: #ffe1e6;
  border-color: #ff7d8e;
}

.final-mascots {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-top: auto;
}

.final-mascots img {
  width: min(38vw, 150px);
  background: rgba(255, 255, 255, 0.7);
}

.progress {
  position: fixed;
  left: 50%;
  bottom: 8px;
  z-index: 20;
  display: flex;
  gap: 6px;
  transform: translateX(-50%);
}

.progress span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(16, 58, 98, 0.28);
}

.progress span.active {
  width: 18px;
  border-radius: 999px;
  background: var(--red);
}

.spark {
  position: fixed;
  z-index: 30;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  pointer-events: none;
  background: var(--gold);
  box-shadow: 0 0 0 6px rgba(255, 211, 107, 0.3);
  animation: spark 700ms ease-out forwards;
}

.confetti {
  position: fixed;
  top: -14px;
  z-index: 30;
  width: 9px;
  height: 13px;
  border-radius: 2px;
  pointer-events: none;
  animation: fall 1200ms ease-in forwards;
}

.float-soft {
  animation: floatSoft 3s ease-in-out infinite;
}

.delay {
  animation-delay: 600ms;
}

.pulse {
  animation: pulse 1.8s ease-in-out infinite;
}

@keyframes popIn {
  from { opacity: 0; transform: translateY(36px) scale(.75); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes wobble {
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(3deg); }
}

@keyframes bounce {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, -8px); }
}

@keyframes floatSoft {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 20px 30px rgba(18, 80, 120, 0.18); }
  50% { box-shadow: 0 20px 36px rgba(238, 74, 90, 0.2); }
}

@keyframes spark {
  to { opacity: 0; transform: translateY(-34px) scale(2.8); }
}

@keyframes fall {
  to { transform: translateY(110vh) rotate(520deg); opacity: 0; }
}

@media (max-height: 700px) {
  .page {
    padding-top: 18px;
    padding-bottom: 16px;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 31px;
  }

  .lead,
  .body-copy,
  .caption,
  .result {
    font-size: 14px;
    line-height: 1.5;
    padding: 10px 12px;
  }

  .hero-bing {
    width: min(58vw, 220px);
  }

  .nav {
    width: 40px;
    height: 40px;
    min-height: 40px;
  }
}


/* 新增第8-9页：不改变原有页面内容，只扩展互动体验 */
.torch-stage {
  position: relative;
  width: min(80vw, 330px);
  height: min(39vh, 315px);
  margin-top: 18px;
  display: grid;
  place-items: center;
  border: 5px solid #fff;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(160deg, rgba(255,255,255,.9), rgba(141,230,207,.42));
  box-shadow: 0 18px 30px rgba(15, 74, 123, 0.18);
}
.torch-stage::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("./assets/snowflake.gif");
  background-size: cover;
  background-position: center;
  opacity: .22;
}
.torch-mascot {
  position: relative;
  z-index: 2;
  width: min(52vw, 210px);
  max-height: 245px;
  object-fit: contain;
  border-radius: 12px;
  background: rgba(255,255,255,.7);
}
.torch-flame {
  position: absolute;
  z-index: 4;
  top: 24px;
  right: 52px;
  width: 42px;
  height: 70px;
  border-radius: 55% 45% 58% 42% / 66% 64% 36% 34%;
  background: radial-gradient(circle at 50% 72%, #fff8b6 0 20%, #ffd36b 21% 46%, #ff7c4a 47% 68%, rgba(238,74,90,.45) 69% 100%);
  box-shadow: 0 0 18px rgba(255, 126, 64, .7), 0 0 42px rgba(255, 211, 107, .55);
  opacity: .28;
  transform: scale(.72);
  transform-origin: 50% 100%;
  transition: opacity 420ms ease, transform 420ms ease;
  animation: flameWave 1.25s ease-in-out infinite;
}
.torch-glow {
  position: absolute;
  z-index: 3;
  width: 160px;
  height: 160px;
  top: -36px;
  right: -16px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,211,107,.75), rgba(255,126,64,.22) 45%, transparent 72%);
  opacity: 0;
  transform: scale(.6);
  transition: opacity 420ms ease, transform 420ms ease;
}
.torch-stage.lit .torch-flame { opacity: 1; transform: scale(1.18); }
.torch-stage.lit .torch-glow { opacity: 1; transform: scale(1); }
.wish-card {
  position: relative;
  width: 100%;
  min-height: min(46vh, 350px);
  margin-top: 18px;
  padding: 18px;
  border: 5px solid #fff;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(255,255,255,.96), rgba(225,249,255,.86));
  box-shadow: 0 18px 30px rgba(15, 74, 123, 0.18);
}
.wish-card::before {
  content: "";
  position: absolute;
  right: -42px;
  top: -42px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: rgba(255, 211, 107, .55);
}
.wish-card::after {
  content: "";
  position: absolute;
  left: -30px;
  bottom: -26px;
  width: 190px;
  height: 120px;
  background: url("./assets/rings.jpg") center/cover no-repeat;
  opacity: .18;
  transform: rotate(-8deg);
}
.wish-card-img {
  position: relative;
  z-index: 1;
  display: block;
  width: min(46vw, 185px);
  height: min(46vw, 185px);
  margin: 0 auto 12px;
  object-fit: contain;
  border-radius: 12px;
  filter: drop-shadow(0 12px 16px rgba(10, 75, 120, 0.18));
}
.wish-card-tag,
.wish-card-text {
  position: relative;
  z-index: 1;
  margin: 0;
  text-align: center;
}
.wish-card-tag {
  color: var(--red);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 900;
}
.wish-card-text {
  margin-top: 10px;
  color: var(--ink);
  font-size: 16px;
  line-height: 1.65;
  font-weight: 800;
}
.card-options {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: 14px;
}
.card-options button {
  min-height: 38px;
  padding: 0 13px;
  border-radius: 999px;
  border: 2px solid rgba(20, 53, 83, 0.1);
  background: rgba(255,255,255,.86);
  color: var(--deep);
  font-size: 13px;
  font-weight: 900;
  box-shadow: 0 8px 14px rgba(18, 87, 130, 0.1);
}
.card-options button.active {
  background: var(--gold);
  color: #8b3400;
}
@keyframes flameWave {
  0%, 100% { border-radius: 55% 45% 58% 42% / 66% 64% 36% 34%; }
  50% { border-radius: 43% 57% 50% 50% / 72% 55% 45% 28%; }
}
@media (max-height: 700px) {
  .torch-stage { height: 230px; }
  .wish-card { min-height: 285px; }
  .wish-card-img { width: 130px; height: 130px; }
}
