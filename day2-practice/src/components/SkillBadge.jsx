function SkillBadge({ skill }) {
  return (
    <span
      style={{
        background: "#e0e0e0",
        padding: "4px 10px",
        borderRadius: "12px",
        marginRight: "6px",
        fontSize: "14px",
        display: "inline-block",
      }}
    >
      {skill}
    </span>
  );
}

export default SkillBadge;
