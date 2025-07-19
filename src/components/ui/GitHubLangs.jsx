import { useEffect, useState } from 'react'
import { fetchTopLangs } from '../../utils/fetchTopLangs'
import { Tooltip } from './index'

export default function GitHubLangs() {
  const [languages, setLanguages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const langs = await fetchTopLangs('fwedwicc')
        setLanguages(langs)
      } catch (err) {
        console.error('Failed to fetch languages:', err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  if (loading) return <p>Loading language stats...</p>

  return (
    <div>
      <div className="w-full h-2 bg-[#1e1e2e] rounded-full mb-4">
        <div className="h-full flex gap-[1px] relative">
          {languages.map((lang, index) => (
            <div
              key={index}
              style={{ width: `${lang.percentage}%` }}
              className={`relative group h-full shadow-lg rounded-[3px] ${getShadow(lang.language)} ${getColor(lang.language)}`}
            >
              <Tooltip position='top-4 -translate-x-1/2 left-1/2' label={`${lang.language}: ${lang.percentage}%`} />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-white/80">
        {languages.map((lang, index) => (
          <div key={index} className="flex items-center gap-2.5">
            <span
              className={`inline-block size-2.5 rounded-sm ${getColor(lang.language)}`}
            />
            {lang.language} <span className='text-xs text-indigo-200/90 px-[5px] py-[1px] border border-indigo-300/5 bg-indigo-400/5 rounded-lg'>{lang.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Define fixed colors per language
function getColor(language) {
  const colors = {
    JavaScript: 'bg-[#facc15]',
    PHP: 'bg-[#647acb]',
    CSS: 'bg-[#a78bfa]',
    HTML: 'bg-[#f87171]',
    Hack: 'bg-[#a1a1aa]',
    'ASP.NET': 'bg-[#e879f9]',
    'Visual Basic .NET': 'bg-[#a855f7]',
    'C#': 'bg-[#22c55e]'
  }
  return colors[language] || 'bg-[#888]'
}

function getShadow(language) {
  const shadows = {
    JavaScript: 'shadow-yellow-300/20',
    PHP: 'shadow-indigo-400/20',
    CSS: 'shadow-purple-300/20',
    HTML: 'shadow-red-300/20',
    Hack: 'shadow-zinc-400/20',
    'ASP.NET': 'shadow-pink-300/20',
    'Visual Basic .NET': 'shadow-violet-400/20',
    'C#': 'shadow-green-400/20',
  }
  return `shadow-md ${shadows[language] || 'shadow-neutral-400/20'}`
}
