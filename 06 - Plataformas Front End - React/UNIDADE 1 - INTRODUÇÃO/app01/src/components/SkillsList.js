export function SkillsList({ skills }) {
    return (
        <ul>
            {skills.map((s) => <li>{s}</li>)}
        </ul>
    )
}