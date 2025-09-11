
import { projectItems } from "../lib/projects.ts";
import ExperienceSection from "./ExperienceSection.tsx";
import Card from "../components/ui/Card.tsx"

export default function Experience() {
  const mid = Math.ceil(projectItems.length / 2);
  const column1 = projectItems.slice(0, mid);
  const column2 = projectItems.slice(mid);

  return (
    <div className="md:col-span-8 ">
      <Card className="p-3 text-xl font-bold text-center">my projects</Card>    
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ExperienceSection items={column1} />
        <ExperienceSection items={column2} />
      </div>
    </div>
  )
}
