export interface Skill {
  name: string
  /** Shown in the short summary on the home page. */
  featured?: boolean
}

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Robotics & Simulation',
    skills: [
      { name: 'ROS 2', featured: true },
      { name: 'Isaac Lab / Isaac Sim', featured: true },
      { name: 'Franka (FCI / libfranka)', featured: true },
      { name: 'RViz' },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'PyTorch', featured: true },
      { name: 'Generative models (flow matching, diffusion)', featured: true },
      { name: 'Computer vision & 3D (TRELLIS, MVDream)' },
      { name: 'scikit-learn' },
      { name: 'pandas' },
      { name: 'NumPy' },
    ],
  },
  {
    title: 'Control',
    skills: [
      { name: 'MPC / MPPI', featured: true },
      { name: 'Adaptive & optimal control', featured: true },
      { name: 'Classical & modern control' },
      { name: 'MATLAB' },
    ],
  },
  {
    title: 'Programming',
    skills: [
      { name: 'Python', featured: true },
      { name: 'C++', featured: true },
      { name: 'C' },
      { name: 'CUDA' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Linux' },
      { name: 'LaTeX' },
      { name: 'Microsoft Office' },
    ],
  },
]

export const languages = [
  { name: 'Hungarian', level: 'C2 (native)' },
  { name: 'English', level: 'C1' },
  { name: 'German', level: 'C1' },
]

export const personalInterests = ['Travel', 'Video Games', 'Anime']
