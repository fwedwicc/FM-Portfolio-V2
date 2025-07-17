import React, { useEffect, useState } from 'react'
import { fetchContributionStats } from '../../utils/fetchContributionStats'

const GitHubStats = ({ username }) => {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    const loadStats = async () => {
      const data = await fetchContributionStats(username)
      setStats(data)
    }

    loadStats()
  }, [username])

  if (!stats) return <p>Loading GitHub stats...</p>

  return (
    <div className="text-white">
      <p>Total Contributions: {stats.totalContributions}</p>
      <p>Current Streak: {stats.currentStreak.length} days ({stats.currentStreak.startDate} - {stats.currentStreak.endDate})</p>
      <p>Longest Streak: {stats.longestStreak.length} days ({stats.longestStreak.startDate} - {stats.longestStreak.endDate})</p>
    </div>
  )
}

export default GitHubStats
