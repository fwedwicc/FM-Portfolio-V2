export async function fetchTopLangs(username) {
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
  }

  const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
    headers,
  })

  if (!response.ok) throw new Error("Failed to fetch repositories")

  const repos = await response.json()
  const languageBytes = {}

  const languageFetches = repos.map(async (repo) => {
    if (!repo.languages_url) return

    const res = await fetch(repo.languages_url, { headers })
    if (!res.ok) return

    const langData = await res.json()

    for (const [lang, bytes] of Object.entries(langData)) {
      languageBytes[lang] = (languageBytes[lang] || 0) + bytes
    }
  })

  await Promise.all(languageFetches)

  const totalBytes = Object.values(languageBytes).reduce((sum, bytes) => sum + bytes, 0)

  const topLanguages = Object.entries(languageBytes)
    .map(([language, bytes]) => ({
      language,
      percentage: ((bytes / totalBytes) * 100).toFixed(2)
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 8)

  return topLanguages
}
