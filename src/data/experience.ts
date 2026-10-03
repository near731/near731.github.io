import lsrLogo from '@/assets/logos/lsr-logo.svg'
import antraLogo from '@/assets/logos/antra-logo.png'

export interface Experience {
  title: string
  org: string
  place: string
  period: string
  logo: string
  bullets: string[]
  tags: string[]
}

export const experience: Experience[] = [
  {
    title: 'Research Internship',
    org: 'Learning Systems and Robotics Lab, TU Munich',
    place: 'Munich',
    period: 'since 05/2026',
    logo: lsrLogo,
    bullets: [
      'Sampling-based MPC with Conditional Flow Matching priors for grasp planning with a Franka arm across different object geometries, simulated in IsaacLab.',
      'Grasp-and-lift success of 91.7% (550 of 600 attempts, six objects) in simulation.',
      'Now transferring the approach to a real Franka Research 3 arm to close the sim-to-real gap.',
    ],
    tags: ['MPC', 'Flow Matching', 'IsaacLab', 'Franka'],
  },
  {
    title: 'Internship, Data Analysis and AI',
    org: 'Antra ID Kft.',
    place: 'Budaörs',
    period: '06/2023 – 10/2023',
    logo: antraLogo,
    bullets: [
      'Data processing and analysis with pandas and scikit-learn.',
      'Dimensionality reduction for tabular data using SVD, PCA and matrix factorization.',
    ],
    tags: ['Python', 'pandas', 'scikit-learn'],
  },
]

export const achievements = [
  {
    title: 'First Place, Scientific Student Circle Conference (TDK)',
    date: '2023/11/16',
    place: 'Budapest, Hungary',
    detail: 'Paper: "Estimating Anthropometric Data Based on Footstep-Sound Recordings".',
  },
]
