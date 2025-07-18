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

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A'
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(dateStr))
  }

  if (!stats) return <p>Loading GitHub stats...</p>

  return (
    <div className="text-white">
      <p>Total Contributions: {stats.totalContributions}</p>
      <p>
        Current Streak: {stats.currentStreak.length} days (
        {formatDate(stats.currentStreak.startDate)} – {formatDate(stats.currentStreak.endDate)})
      </p>

      <p>
        Longest Streak: {stats.longestStreak.length} days (
        {formatDate(stats.longestStreak.startDate)} – {formatDate(stats.longestStreak.endDate)})
      </p>
    </div>
  )
}

export default GitHubStats
