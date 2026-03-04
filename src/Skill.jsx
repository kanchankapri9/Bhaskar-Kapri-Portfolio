import "./Skill.css";
import Button from "./button";

function Skill() {
  return (
    <div id="skill">
      <h1>Skills</h1>

      {/* Skill chips are intentionally simple and reusable */}
      <div className="skill-grid">
        <Button name="BI Analytics" classN="skill-btn" />
        <Button name="Data Analysis" classN="skill-btn" />
        <Button name="Excel" classN="skill-btn" />
        <Button name="SQL" classN="skill-btn" />
        <Button name="Power BI" classN="skill-btn" />
        <Button name="Tableau" classN="skill-btn" />
        <Button name="Accounting" classN="skill-btn" />
        <Button name="BI Tools" classN="skill-btn" />
        <Button name="Tally" classN="skill-btn" />
        <Button name="Automation" classN="skill-btn" />
      </div>
    </div>
  );
}

export default Skill;
