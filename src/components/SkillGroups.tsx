// The chip rows inside `.skills-card`, shared by home and about — home shows the first two
// groups, about shows all of them, and the two must not drift apart.
// The accent marks the whole first group, not one chip per row: `profile.skills` is ordered,
// so the top group is the headline, and highlighting one chip inside each row would instead
// read as a ranking within that group.
export default function SkillGroups({ groups }: { groups: [string, readonly string[]][] }) {
  return (
    <>
      {groups.map(([group, items], gi) => (
        <div key={group}>
          <h4>{group}</h4>
          <div className="row">
            {items.map(s => <span key={s} className={gi === 0 ? 'chip chip--hi' : 'chip'}>{s}</span>)}
          </div>
        </div>
      ))}
    </>
  )
}
