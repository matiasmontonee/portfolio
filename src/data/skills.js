import {
  siHtml5,
  siCss,
  siTailwindcss,
  siJavascript,
  siTypescript,
  siVuedotjs,
  siReact,
  siNodedotjs,
  siExpress,
  siMongodb,
  siPhp,
  siLaravel,
  siAdonisjs,
  siMysql,
  siFirebase,
  siGit,
  siGithub,
  siPostman,
  siClickup,
} from 'simple-icons'

const iconSlack = {
  title: 'Slack',
  hex: '4A154B',
  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
}

const pick = (si) => ({
  path: si.path,
  hex: si.hex,
  title: si.title,
})

export const skillGroups = [
  {
    id: 'frontend',
    label: { es: 'Front-end', en: 'Front-end' },
    skills: [
      { name: 'HTML5', icon: pick(siHtml5) },
      { name: 'CSS3', icon: pick(siCss) },
      { name: 'Tailwind', icon: pick(siTailwindcss) },
      { name: 'JavaScript', icon: pick(siJavascript) },
      { name: 'Vue', icon: pick(siVuedotjs) },
      { name: 'React', icon: pick(siReact) },
    ],
  },
  {
    id: 'backend',
    label: { es: 'Back-end', en: 'Back-end' },
    skills: [
      { name: 'Node.js', icon: pick(siNodedotjs) },
      { name: 'TypeScript', icon: pick(siTypescript) },
      { name: 'Express', icon: pick(siExpress) },
      { name: 'MongoDB', icon: pick(siMongodb) },
      { name: 'PHP', icon: pick(siPhp) },
      { name: 'Laravel', icon: pick(siLaravel) },
      { name: 'AdonisJS', icon: pick(siAdonisjs) },
      { name: 'MySQL', icon: pick(siMysql) },
      { name: 'Firebase', icon: pick(siFirebase) },
    ],
  },
  {
    id: 'tools',
    label: { es: 'Herramientas', en: 'Tools' },
    skills: [
      { name: 'Git', icon: pick(siGit) },
      { name: 'GitHub', icon: pick(siGithub) },
      { name: 'Postman', icon: pick(siPostman) },
      { name: 'ClickUp', icon: pick(siClickup) },
      { name: 'Slack', icon: iconSlack },
    ],
  },
]
