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

    for (let i = days.length - 1; i >= 0; i--) {
      const day = days[i]
      const count = day.contributionCount

      if (count > 0) {
        streak++
        if (!streakStart) streakStart = day.date

        if (i === 0 || days[i - 1].contributionCount === 0) {
          if (streak > longestStreak) {
            longestStreak = streak
            longestStart = day.date
            longestEnd = streakStart
          }

          if (!currentStreak) {
            currentStreak = streak
            currentStart = day.date
            currentEnd = streakStart
          }

          streak = 0
          streakStart = null
        }
      } else {
        if (!currentStreak) break // streak broken
      }
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
