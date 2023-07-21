interface SkillLevelProp {
  skillLevel: string;
}

export const SkillLevel = ({ skillLevel }: SkillLevelProp) => {
  return (
    <div className="flex flex-row">
      <span className="flex w-3 h-3 bg-sky-700 rounded-full"></span>
      <span className={`flex w-3 h-3 ${skillLevel !== 'Beginner' ? 'bg-sky-700' : 'bg-gray-400'} rounded-full`}></span>
      <span className={`flex w-3 h-3 ${skillLevel === 'Advanced' ? 'bg-sky-700' : 'bg-gray-400'} rounded-full`}></span>
      <span className={`flex w-3 h-3 ${skillLevel === 'Expert' ? 'bg-sky-700' : 'bg-gray-400'} rounded-full`}></span>
    </div>
  )
}
