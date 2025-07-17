export const fetchGitHubContributions = async (username) => {
  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                contributionCount
                date
                weekday
              }
            }
          }
        }
      }
    }
  `

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  })

  const { data } = await response.json()
  const weeks = data.user.contributionsCollection.contributionCalendar.weeks

  return weeks.map(week =>
    week.contributionDays.map(day => {
      const count = day.contributionCount
      let level = 0
      if (count > 0) level = 1
      if (count >= 4) level = 2
      if (count >= 8) level = 3
      if (count >= 11) level = 4

      return {
        date: day.date,
        count,
        level,
        weekday: day.weekday,
      }
    })
  )
}
