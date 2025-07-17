// GitHubGrid.jsx
import React, { useEffect, useState } from 'react'
import { fetchGitHubContributions } from '../../utils/fetchGitHubContributions'

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
    <div className="flex overflow-hidden">
      <div className="flex gap-[2px]">
        {contributions.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[2px]">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                title={`${day.date}: ${day.count} contributions`}
                className={`size-3.5 rounded-sm ${levelColorMap[day.level]}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GitHubGrid
