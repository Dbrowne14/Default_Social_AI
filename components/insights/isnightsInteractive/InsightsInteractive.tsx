'use client'
import InsightsFilter from "./InsightsFilter"
import InsightsBlogPosts from "./InsightsBlogPosts"
import { useState } from "react"

const InsightsInteractive = () => {
 const [isActive, setIsActive] = useState("All");
  return (
    <div>
      <InsightsFilter isActive={isActive} setIsActive={setIsActive}/>
      <InsightsBlogPosts isActive={isActive}/>
    </div>
  )
}

export default InsightsInteractive
