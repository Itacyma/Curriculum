import "../style/SkillsSection.css";

import { useMemo } from "react";
import { skillGroups } from "../data/skills.mjs";
import { NoTranslate } from "../components/NoTranslate.jsx";

const clampScore = (score) => {
  const n = Number(score);
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(10, n));
};

function formatScore(score) {
  const safe = clampScore(score);
  const isInt = Math.abs(safe - Math.round(safe)) < Number.EPSILON;
  return isInt ? `${Math.round(safe)}/10` : `${safe.toFixed(1)}/10`;
}

function SkillMeter({ score }) {
  const safe = clampScore(score);
  const percent = (safe / 10) * 100;

  return (
    <div className="skill-meter" aria-label={`Skill score ${formatScore(safe)}`}>
      <div className="skill-meter-track" aria-hidden="true">
        <div className="skill-meter-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function SkillsSection({ language = "it" }) {
  const groups = useMemo(() => {
    const normalized = (language || "it").toLowerCase();
    return skillGroups[normalized] ?? skillGroups.it;
  }, [language]);

  const disclaimerText = language === 'en'
    ? 'Scores are self-assigned based on the number of exams taken on each topic, their grades, and the depth with which each subject was covered.'
    : 'Le valutazioni sono auto-assegnate sulla base del numero di esami sostenuti in merito, sulla loro valutazione e sulla completezza con cui sono state fatte quelle discipline.';

  return (
    <section className="skills-section" id="skills">
      <div className="skills-grid">
        {groups.map((group) => (
          <div className="skills-card" key={group.key}>
            <div className="skills-card-header">
              <div className="skills-card-title">
                {group.iconClass ? (
                  <i className={`skills-icon ${group.iconClass}`} aria-hidden="true" />
                ) : null}
                <span><NoTranslate>{group.title}</NoTranslate></span>
              </div>
              <div className="skills-info-wrapper">
                <i className="bi bi-info-circle skills-info-btn" aria-hidden="true"></i>
                <div className="skills-info-tooltip">{disclaimerText}</div>
              </div>
            </div>

            <div className="skills-card-body">
              {group.skills.map((skill) => (
                <div className="skill-row" key={skill.name}>
                  <div className="skill-left">
                    <div className="skill-name"><NoTranslate>{skill.name}</NoTranslate></div>
                    {skill.detail ? (
                      <div className="skill-detail">(<NoTranslate>{skill.detail}</NoTranslate>)</div>
                    ) : null}
                  </div>
                  <SkillMeter score={skill.score} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export { SkillsSection };