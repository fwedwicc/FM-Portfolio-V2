import React, { useEffect, useState } from 'react'
import { fetchGitHubContributions } from '../../utils/fetchGitHubContributions'
import { Tooltip } from './index'

const GitHubGrid = ({ username }) => {
  const [contributions, setContributions] = useState([])

  useEffect(() => {
    const loadContributions = async () => {
      try {
        const data = await fetchGitHubContributions(username)
        setContributions(data)
      } catch (error) {
        console.error('Failed to load contributions:', error)
      }
    }

    loadContributions()
  }, [username])

  const levelColorMap = {
    0: 'bg-gray-500/10',
    1: 'bg-indigo-900/70',
    2: 'bg-indigo-700/90',
    3: 'bg-indigo-500',
    4: 'bg-indigo-300',
  }

  return (
    <div className="flex gap-[2px]">
      {contributions.map((week, weekIndex) => (
        <div key={weekIndex} className="flex flex-col gap-[2px]">
          {week.map((day, dayIndex) => (
            <div className='group relative transition-smooth' key={dayIndex}>
              <div
                className={`size-3.5 rounded-sm ${levelColorMap[day.level]}`}
              />
              <Tooltip position='-translate-x-1/2 left-1/2 top-4 z-50 absolute' label={`${day.date}: ${day.count} contributions`} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default GitHubGrid
