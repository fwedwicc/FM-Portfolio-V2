import React, { useEffect, useState } from 'react'
import { fetchContributionStats } from '../../utils/fetchContributionStats'
import { FaFire } from "react-icons/fa"

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
    <div className='grid grid-cols-3 pt-2 gap-3'>
      {/* Contributions */}
      <div className='flex flex-col items-center justify-center gap-1'>
        <div className='p-4 grid place-content-center'>
          <h1 className='text-4xl text-center'>{stats.totalContributions}</h1>
          <h1 className='text-lg leading-none text-center'>commits</h1>
        </div>
        <h5>contributions</h5>
        <span className='text-xs text-indigo-100/70'>Oct 29, 2023 - Present</span>
      </div>
      {/* Current Streak */}
      <div className='flex flex-col items-center gap-1'>
        <div className='relative size-34 rounded-[36px] p-[4px] bg-gradient-to-b from-[#BFADEF] to-[#4F46E5] shadow-xl shadow-indigo-500/20 mb-4'>
          <div className='p-1.5 absolute -top-[13px] bg-[#BFADEF] rounded-[10px] -translate-x-1/2 left-1/2'>
            <FaFire className='text-indigo-900 size-4.5' />
          </div>
          <div className='w-full h-full p-4 bg-[#15131C] rounded-[34px] grid place-content-center'>
            <h1 className='text-4xl text-center'>{stats.currentStreak.length}</h1>
            <h1 className='text-lg leading-none text-center'>days</h1>
          </div>
        </div>
        <h5>current streak</h5>
        <span className='text-xs text-indigo-100/70'>{formatDate(stats.currentStreak.startDate)} - {formatDate(stats.currentStreak.endDate)}</span>
      </div>
      {/* Longest Streak */}
      <div className='flex flex-col items-center justify-center gap-1'>
        <div className='p-4 grid place-content-center'>
          <h1 className='text-4xl text-center'>{stats.longestStreak.length}</h1>
          <h1 className='text-lg leading-none text-center'>days</h1>
        </div>
        <h5>longest streak</h5>
        <span className='text-xs text-indigo-100/70'>{formatDate(stats.longestStreak.startDate)} - {formatDate(stats.longestStreak.endDate)}</span>
      </div>
    </div>
  )
}

export default GitHubStats
