import SkillBadge from "./SkillBadge";

function ProfileCard({ name, role, skills }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "300px",
      }}
    >
      <h2>{name}</h2>
      <p>{role}</p>
      <div>
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
