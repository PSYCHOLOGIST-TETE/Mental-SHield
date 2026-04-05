import { useState } from "react";

const TESTS = {
  phq9: {
    id: "phq9",
    title: "PHQ-9",
    subtitle: "დეპრესიის სკრინინგი",
    description: "ბოლო 2 კვირის განმავლობაში, რამდენად ხშირად შეგაწუხათ შემდეგმა პრობლემებმა?",
    icon: "🌧",
    color: "#4A6FA5",
    lightColor: "#EBF0F8",
    options: [
      { label: "საერთოდ არა", value: 0 },
      { label: "რამდენიმე დღე", value: 1 },
      { label: "დღეების ნახევარზე მეტი", value: 2 },
      { label: "თითქმის ყოველდღე", value: 3 },
    ],
    questions: [
      "დაბალი განწყობა, სევდა, უიმედობა ან სიცარიელის შეგრძნება",
      "ინტერესის ან სიამოვნების დაქვეითება საქმისადმი",
      "ძილის პრობლემები (ძილის სიჭარბე ან ნაკლებობა)",
      "დაღლილობა ან ენერგიის დაქვეითება",
      "მადის ცვლილება (გაზრდა ან შემცირება)",
      "საკუთარი თავის მიმართ უარყოფითი შეგრძნება ან დანაშაულუს გრძნობა",
      "კონცენტრაციის სირთულეები",
      "სხვებისთვის შესამჩნევი აუჩქარებლობა ან სიძაბუნე",
      "აზრები იმის შესახებ, რომ სჯობს მკვდარი ყოფილიყავი ან საკუთარი თავის დაზიანების შესახებ",
    ],
    scoring: [
      { min: 0, max: 4, label: "მინიმალური", color: "#22c55e", desc: "სიმპტომები მინიმალურია. განაგრძეთ საკუთარი თავის მოვლა." },
      { min: 5, max: 9, label: "მსუბუქი", color: "#84cc16", desc: "მსუბუქი სიმპტომები. სასარგებლო იქნება ცხოვრების წესის გადახედვა." },
      { min: 10, max: 14, label: "ზომიერი", color: "#f59e0b", desc: "ზომიერი სიმპტომები. რეკომენდებულია სპეციალისტთან კონსულტაცია." },
      { min: 15, max: 19, label: "მძიმე", color: "#f97316", desc: "მძიმე სიმპტომები. მიმართეთ ფსიქოლოგს ან ფსიქიატრს." },
      { min: 20, max: 27, label: "ძალიან მძიმე", color: "#ef4444", desc: "ძალიან მძიმე სიმპტომები. გთხოვთ, დაუყოვნებლივ მიმართოთ სპეციალისტს." },
    ],
  },
  gad7: {
    id: "gad7",
    title: "GAD-7",
    subtitle: "შფოთვის სკრინინგი",
    description: "ბოლო 2 კვირის განმავლობაში, რამდენად ხშირად შეგაწუხათ შემდეგმა პრობლემებმა?",
    icon: "⚡",
    color: "#7C3AED",
    lightColor: "#F3EEFF",
    options: [
      { label: "საერთოდ არა", value: 0 },
      { label: "რამდენიმე დღე", value: 1 },
      { label: "დღეების ნახევარზე მეტი", value: 2 },
      { label: "თითქმის ყოველდღე", value: 3 },
    ],
    questions: [
      "ნერვიულობა, შფოთვა ან განაჩენის შეგრძნება",
      "უუნარობა, შეაჩერო ან გააკონტროლო წუხილი",
      "გადაჭარბებული წუხილი სხვადასხვა საკითხებზე",
      "დასვენების გაძნელება",
      "მოუსვენრობა, ისე რომ ძნელია ჯდომა",
      "გაღიზიანება ან ადვილად გაბრაზება",
      "შიში, რომ რაღაც საშინელი მოხდება",
    ],
    scoring: [
      { min: 0, max: 4, label: "მინიმალური", color: "#22c55e", desc: "შფოთვა მინიმალურია. შეინარჩუნეთ კარგი ჩვევები." },
      { min: 5, max: 9, label: "მსუბუქი", color: "#84cc16", desc: "მსუბუქი შფოთვა. სცადეთ რელაქსაციის ტექნიკები." },
      { min: 10, max: 14, label: "ზომიერი", color: "#f59e0b", desc: "ზომიერი შფოთვა. სასარგებლო იქნება სპეციალისტის დახმარება." },
      { min: 15, max: 21, label: "მძიმე", color: "#ef4444", desc: "მძიმე შფოთვა. გთხოვთ, მიმართოთ სპეციალისტს." },
    ],
  },
  pss10: {
    id: "pss10",
    title: "PSS-10",
    subtitle: "სტრესის სკრინინგი",
    description: "ბოლო 1 თვის განმავლობაში, რამდენად ხშირად:",
    icon: "🔥",
    color: "#DC2626",
    lightColor: "#FEF2F2",
    options: [
      { label: "არასოდეს", value: 0 },
      { label: "იშვიათად", value: 1 },
      { label: "ზოგჯერ", value: 2 },
      { label: "საკმაოდ ხშირად", value: 3 },
      { label: "ძალიან ხშირად", value: 4 },
    ],
    questions: [
      "განაწყენდით მოულოდნელი მოვლენის გამო",
      "გრძნობდით, რომ ვერ აკონტროლებდით ცხოვრების მნიშვნელოვან საკითხებს",
      "გრძნობდით ნერვიულობას და სტრესს",
      "წარმატებით გაუმკლავდით ყოველდღიურ სირთულეებს",
      "გრძნობდით, რომ ყველაფერი სწორედ ისე მიდის, როგორც გსურდა",
      "ვერ გაუმკლავდით ყველა საქმეს, რაც უნდა გაგეკეთებინა",
      "შეძელით გაღიზიანების კონტროლი",
      "გრძნობდით, რომ ყველაფერს თავს ართმევდით",
      "გაბრაზდით, რასაც ვერ აკონტროლებდით",
      "გრძნობდით, რომ სირთულეები ისე დაგროვდა, რომ ვეღარ გადალახავდით",
    ],
    reverseItems: [3, 4, 6, 7],
    scoring: [
      { min: 0, max: 13, label: "დაბალი სტრესი", color: "#22c55e", desc: "სტრესის დონე ნორმის ფარგლებშია." },
      { min: 14, max: 26, label: "საშუალო სტრესი", color: "#f59e0b", desc: "ზომიერი სტრესი. ყურადღება მიაქციეთ დასვენებას." },
      { min: 27, max: 40, label: "მაღალი სტრესი", color: "#ef4444", desc: "მაღალი სტრესი. რეკომენდებულია სპეციალისტის კონსულტაცია." },
    ],
  },
  who5: {
    id: "who5",
    title: "WHO-5",
    subtitle: "კეთილდღეობის ინდექსი",
    description: "ბოლო 2 კვირის განმავლობაში, რამდენად ხშირად:",
    icon: "🌱",
    color: "#059669",
    lightColor: "#ECFDF5",
    options: [
      { label: "საერთოდ არა", value: 0 },
      { label: "იშვიათად", value: 1 },
      { label: "ნაწილობრივ", value: 2 },
      { label: "ხშირად", value: 3 },
      { label: "ხშირად", value: 4 },
      { label: "მუდმივად", value: 5 },
    ],
    questions: [
      "გრძნობდით მხიარულებას და კარგ განწყობაში ყოფნას",
      "გრძნობდით სიმშვიდეს და დასვენებას",
      "გრძნობდით თავს აქტიურად და სავსე ენერგიით",
      "გაიღვიძეთ მოდუნებული და გამძიმებული",
      "ყოველდღიური ცხოვრება სავსე იყო საინტერესო საკითხებით",
    ],
    scoring: [
      { min: 0, max: 35, label: "დაბალი კეთილდღეობა", color: "#ef4444", desc: "კეთილდღეობის დაბალი დონე. განიხილეთ სპეციალისტის დახმარება." },
      { min: 36, max: 67, label: "საშუალო კეთილდღეობა", color: "#f59e0b", desc: "საშუალო კეთილდღეობა. გააუმჯობესეთ თვითმოვლის პრაქტიკა." },
      { min: 68, max: 100, label: "კარგი კეთილდღეობა", color: "#22c55e", desc: "კეთილდღეობის კარგი დონე. განაგრძეთ!" },
    ],
  },
};

const SCREENS = { HOME: "home", TEST: "test", RESULT: "result", ALL_RESULTS: "all_results" };

function ScoreBar({ score, maxScore, color }) {
  const pct = Math.round((score / maxScore) * 100);
  return (
    <div style={{ background: "#f1f5f9", borderRadius: 999, height: 10, overflow: "hidden", margin: "8px 0" }}>
      <div style={{ width: `${pct}%`, background: color, height: "100%", borderRadius: 999, transition: "width 1s cubic-bezier(.4,0,.2,1)" }} />
    </div>
  );
}

function HomeScreen({ onStart, completedTests }) {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", color: "#fff", fontFamily: "'Georgia', serif", padding: "0 0 40px" }}>
      {/* Header */}
      <div style={{ padding: "48px 24px 24px", textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>🧠</div>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.5px", fontFamily: "'Georgia', serif" }}>ფსიქო-სკრინინგი</h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginTop: 8, lineHeight: 1.6 }}>
          ოფიციალური კლინიკური კითხვარები ქართულ ენაზე
        </p>
      </div>

      {/* Tests */}
      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        {Object.values(TESTS).map((test) => {
          const done = completedTests[test.id];
          return (
            <button
              key={test.id}
              onClick={() => onStart(test.id)}
              style={{
                background: done ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${done ? test.color : "rgba(255,255,255,0.1)"}`,
                borderRadius: 16,
                padding: "20px 20px",
                cursor: "pointer",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: 16,
                transition: "transform 0.15s",
              }}
            >
              <div style={{ fontSize: 32, lineHeight: 1 }}>{test.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: 16, fontFamily: "'Georgia', serif" }}>{test.title}</span>
                  {done && <span style={{ background: test.color, color: "#fff", fontSize: 10, padding: "2px 8px", borderRadius: 99, fontFamily: "sans-serif" }}>✓ დასრულებული</span>}
                </div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginTop: 2, fontFamily: "sans-serif" }}>{test.subtitle}</div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginTop: 4, fontFamily: "sans-serif" }}>{test.questions.length} კითხვა</div>
              </div>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 20 }}>›</div>
            </button>
          );
        })}
      </div>

      {/* Disclaimer */}
      <div style={{ margin: "24px 16px 0", background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.08)" }}>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, margin: 0, lineHeight: 1.6, fontFamily: "sans-serif" }}>
          ⚠️ <strong style={{ color: "rgba(255,255,255,0.7)" }}>მნიშვნელოვანი:</strong> ეს ტესტები სკრინინგის ინსტრუმენტებია და არ წარმოადგენს სამედიცინო დიაგნოზს. შედეგი გაუზიარეთ კვალიფიციურ სპეციალისტს.
        </p>
      </div>
    </div>
  );
}

function TestScreen({ testId, onComplete, onBack }) {
  const test = TESTS[testId];
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [animating, setAnimating] = useState(false);

  const progress = (current / test.questions.length) * 100;

  function handleSelect(val) {
    setSelected(val);
    setAnimating(true);
    setTimeout(() => {
      const newAnswers = [...answers, val];
      if (current + 1 >= test.questions.length) {
        onComplete(testId, newAnswers);
      } else {
        setCurrent(current + 1);
        setAnswers(newAnswers);
        setSelected(null);
        setAnimating(false);
      }
    }, 300);
  }

  return (
    <div style={{ minHeight: "100vh", background: test.lightColor, fontFamily: "sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ background: test.color, padding: "16px 20px 20px", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <button onClick={onBack} style={{ background: "rgba(255,255,255,0.2)", border: "none", borderRadius: 99, color: "#fff", fontSize: 18, width: 36, height: 36, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16, fontFamily: "'Georgia', serif" }}>{test.title} — {test.subtitle}</div>
            <div style={{ fontSize: 12, opacity: 0.8 }}>{current + 1} / {test.questions.length}</div>
          </div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.3)", borderRadius: 999, height: 6 }}>
          <div style={{ width: `${progress}%`, background: "#fff", height: "100%", borderRadius: 999, transition: "width 0.4s" }} />
        </div>
      </div>

      {/* Question */}
      <div style={{ flex: 1, padding: "28px 20px 20px" }}>
        <p style={{ fontSize: 13, color: "#64748b", marginBottom: 12 }}>{test.description}</p>
        <div style={{ background: "#fff", borderRadius: 16, padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", marginBottom: 24 }}>
          <p style={{ fontSize: 16, fontWeight: 600, color: "#1e293b", margin: 0, lineHeight: 1.6, fontFamily: "'Georgia', serif" }}>
            {test.questions[current]}
          </p>
        </div>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {test.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => !animating && handleSelect(opt.value)}
              style={{
                background: selected === opt.value ? test.color : "#fff",
                color: selected === opt.value ? "#fff" : "#1e293b",
                border: `2px solid ${selected === opt.value ? test.color : "#e2e8f0"}`,
                borderRadius: 12,
                padding: "14px 18px",
                cursor: "pointer",
                textAlign: "left",
                fontSize: 14,
                fontWeight: 500,
                transition: "all 0.2s",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{opt.label}</span>
              {selected === opt.value && <span>✓</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResultScreen({ testId, answers, onBack, onHome }) {
  const test = TESTS[testId];

  let rawScore = answers.reduce((sum, val, idx) => {
    if (test.reverseItems && test.reverseItems.includes(idx)) {
      const maxVal = test.options[test.options.length - 1].value;
      return sum + (maxVal - val);
    }
    return sum + val;
  }, 0);

  let score = rawScore;
  if (testId === "who5") score = Math.round((rawScore / (test.questions.length * 5)) * 100);

  const maxScore = testId === "who5" ? 100 : test.questions.length * (test.options[test.options.length - 1].value);
  const level = test.scoring.find((s) => score >= s.min && score <= s.max) || test.scoring[test.scoring.length - 1];

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "sans-serif" }}>
      {/* Header */}
      <div style={{ background: test.color, padding: "24px 20px 32px", color: "#fff", textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 8 }}>{test.icon}</div>
        <h2 style={{ margin: 0, fontFamily: "'Georgia', serif", fontSize: 22 }}>{test.title} შედეგი</h2>
        <p style={{ margin: "6px 0 0", opacity: 0.8, fontSize: 13 }}>{test.subtitle}</p>
      </div>

      <div style={{ padding: "20px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Score card */}
        <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", textAlign: "center" }}>
          <div style={{ fontSize: 56, fontWeight: 800, color: level.color, fontFamily: "'Georgia', serif", lineHeight: 1 }}>{score}</div>
          <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 4 }}>მაქსიმუმი: {maxScore}</div>
          <ScoreBar score={score} maxScore={maxScore} color={level.color} />
          <div style={{ marginTop: 12, display: "inline-block", background: level.color + "22", color: level.color, padding: "6px 16px", borderRadius: 99, fontWeight: 700, fontSize: 14 }}>
            {level.label}
          </div>
        </div>

        {/* Description */}
        <div style={{ background: "#fff", borderRadius: 16, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <h3 style={{ margin: "0 0 8px", fontSize: 15, color: "#1e293b" }}>რას ნიშნავს ეს?</h3>
          <p style={{ margin: 0, color: "#475569", fontSize: 14, lineHeight: 1.7 }}>{level.desc}</p>
        </div>

        {/* Scale */}
        <div style={{ background: "#fff", borderRadius: 16, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <h3 style={{ margin: "0 0 14px", fontSize: 15, color: "#1e293b" }}>ქულების სკალა</h3>
          {test.scoring.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, opacity: level.label === s.label ? 1 : 0.45 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: "#475569", flex: 1 }}>{s.label}</span>
              <span style={{ fontSize: 12, color: "#94a3b8" }}>{s.min}–{s.max}</span>
              {level.label === s.label && <span style={{ fontSize: 11, background: s.color, color: "#fff", padding: "2px 8px", borderRadius: 99 }}>თქვენ</span>}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 12, padding: "14px 16px" }}>
          <p style={{ margin: 0, fontSize: 12, color: "#92400e", lineHeight: 1.6 }}>
            ⚠️ ეს სკრინინგია და <strong>არა დიაგნოზი</strong>. შედეგი გაუზიარეთ კვალიფიციურ ფსიქოლოგს ან ფსიქიატრს.
          </p>
        </div>

        {/* Buttons */}
        <button onClick={onHome} style={{ background: test.color, color: "#fff", border: "none", borderRadius: 12, padding: "16px", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
          ← სახლში დაბრუნება
        </button>
        <button onClick={onBack} style={{ background: "#f1f5f9", color: "#475569", border: "none", borderRadius: 12, padding: "14px", fontSize: 14, cursor: "pointer" }}>
          ↺ ტესტი თავიდან გავიარო
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState(SCREENS.HOME);
  const [activeTest, setActiveTest] = useState(null);
  const [completedTests, setCompletedTests] = useState({});

  function handleStart(testId) {
    setActiveTest(testId);
    setScreen(SCREENS.TEST);
  }

  function handleComplete(testId, answers) {
    setCompletedTests((prev) => ({ ...prev, [testId]: answers }));
    setScreen(SCREENS.RESULT);
  }

  if (screen === SCREENS.HOME) return <HomeScreen onStart={handleStart} completedTests={completedTests} />;
  if (screen === SCREENS.TEST) return <TestScreen testId={activeTest} onComplete={handleComplete} onBack={() => setScreen(SCREENS.HOME)} />;
  if (screen === SCREENS.RESULT) return <ResultScreen testId={activeTest} answers={completedTests[activeTest]} onBack={() => handleStart(activeTest)} onHome={() => setScreen(SCREENS.HOME)} />;
}
