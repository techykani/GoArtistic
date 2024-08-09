import { useWindowSize } from "@/lib/hooks"
import { MilestonesLG } from "./milestonesLG"
import { MilestonesSM } from "./milestonesSM"
import { MilestonesMD } from "./milestonesMD"

export const Timeline = (data: any) => {
  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <>
      {windowWidth >= 1366 && <MilestonesLG data={data?.timeline} />}
      {(windowWidth >= 768 && windowWidth < 1366) && <MilestonesMD data={data?.timeline} />}
      {windowWidth < 768 && <MilestonesSM data={data?.timeline} />}
    </>
  )
}