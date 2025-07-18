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
    <div className='grid grid-cols-3'>
      <div>
        <p>Total Contributions: {stats.totalContributions}</p>
        <p>
          Longest Streak: {stats.longestStreak.length} days (
          {formatDate(stats.longestStreak.startDate)} - {formatDate(stats.longestStreak.endDate)})
        </p>
      </div>
      {/* Current Streak */}
      <div className='flex flex-col items-center gap-1 border'>
        <div className='size-34 rounded-4xl p-[2px] bg-gradient-to-b from-[#BFADEF] to-[#4F46E5] shadow-xl shadow-indigo-500/20 mb-5'>
          <div className='w-full h-full p-4 bg-[#15131C] rounded-[31px] grid place-content-center'>
            <h1 className='text-4xl'>{stats.currentStreak.length}</h1>
          </div>
        </div>
        <h5>Current Streak</h5>
        <span className='text-xs text-indigo-100/90'>{formatDate(stats.currentStreak.startDate)} - {formatDate(stats.currentStreak.endDate)}</span>
      </div>
      <div className='border'>
        3
      </div>
    </div>
  )
}

export default GitHubStats
