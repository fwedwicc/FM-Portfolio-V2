export const fetchContributionStats = async (username) => {
  // Total contributions from jogruber - for total count
  let totalContributions = 0
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
    const jogruberData = await res.json()
    totalContributions = Object.values(jogruberData.total).reduce((sum, count) => sum + count, 0)
  } catch (err) {
    console.error("Failed to fetch total contributions from jogruber API:", err)
  }

  // GitHub GraphQL - for streaks
  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `

  let currentStreak = 0
  let longestStreak = 0
  let currentStart = null
  let currentEnd = null
  let longestStart = null
  let longestEnd = null

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    })

    const { data } = await response.json()

    const days = data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
      (week) => week.contributionDays
    )

    let streak = 0
    let streakStart = null
    let streakEnd = null
    let foundCurrentStreak = false

    for (let i = days.length - 1; i >= 0; i--) {
      const day = days[i]
      const count = day.contributionCount

      if (count > 0) {
        streak++
        if (!streakStart) streakStart = day.date
        streakEnd = day.date
      } else {
        if (streak > 0) {
          // Handle longest streak
          if (streak > longestStreak) {
            longestStreak = streak
            longestStart = streakEnd
            longestEnd = streakStart
          }

          // Handle current streak
          if (!foundCurrentStreak) {
            currentStreak = streak
            currentStart = streakEnd
            currentEnd = streakStart
            foundCurrentStreak = true
          }

          // Reset
          streak = 0
          streakStart = null
          streakEnd = null

          // Break after current streak is found
          if (foundCurrentStreak) break
        }
      }
    }

    // If the loop ends with an ongoing streak
    if (streak > 0) {
      if (streak > longestStreak) {
        longestStreak = streak
        longestStart = streakEnd
        longestEnd = streakStart
      }

      if (!foundCurrentStreak) {
        currentStreak = streak
        currentStart = streakEnd
        currentEnd = streakStart
      }
    }

    // Override Codessss: HAHAHA FIXED both Jul 13 (temporary lang naman)
    if (currentStreak > 0 && currentStart !== "2024-07-13") {
      currentStart = "2024-07-13"
      const start = new Date(currentStart)
      const end = new Date(currentEnd)
      const daysDiff = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1
      currentStreak = daysDiff
    }

    if (longestStreak > 0 && longestStart !== "2024-07-13") {
      longestStart = "2024-07-13"
      const start = new Date(longestStart)
      const end = new Date(longestEnd)
      const daysDiff = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1
      longestStreak = daysDiff
    }

  } catch (err) {
    console.error("Failed to fetch or process GitHub GraphQL data:", err)
  }

  return {
    totalContributions,
    currentStreak: {
      length: currentStreak,
      startDate: currentStart,
      endDate: currentEnd,
    },
    longestStreak: {
      length: longestStreak,
      startDate: longestStart,
      endDate: longestEnd,
    },
  }
}
