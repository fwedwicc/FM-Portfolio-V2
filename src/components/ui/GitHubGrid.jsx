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
    0: 'bg-indigo-100',
    1: 'bg-indigo-300/80',
    2: 'bg-indigo-500/80',
    3: 'bg-indigo-700/50',
    4: 'bg-indigo-700/50',
  }

  return (
    <div className="p-4 bg-black text-white rounded-md overflow-auto">
      <h2 className="text-lg font-semibold mb-4">GitHub Contributions</h2>
      <div className="flex gap-[2px]">
        {contributions.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[2px]">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                title={`${day.date}: ${day.count} contributions`}
                className={`w-3.5 h-3.5 rounded-sm ${levelColorMap[day.level]}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GitHubGrid
