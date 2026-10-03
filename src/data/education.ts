import tumLogo from '@/assets/logos/tum-logo.png'
import bmeLogo from '@/assets/logos/bme-logo.png'

export interface Education {
  degree: string
  school: string
  period: string
  logo?: string
  details: string[]
}

export const education: Education[] = [
  {
    degree: 'M.Sc. Mechatronics, Robotics and Biomechanical Engineering',
    school: 'Technical University of Munich',
    period: 'since 04/2025',
    logo: tumLogo,
    details: [
      'Focus: Machine Learning, Robotics and Control Theory',
      'Status (April 2026): 74/120 ECTS completed',
      'Current GPA: 1.9',
    ],
  },
  {
    degree: 'M.Sc. Mechanical Engineering (Erasmus)',
    school: 'Technical University of Munich',
    period: '04/2024 – 09/2024',
    logo: tumLogo,
    details: ['Focus: master modules in Control Theory and Machine Learning', 'Grade: 2.0'],
  },
  {
    degree: 'M.Sc. Mechatronics',
    school: 'Budapest University of Technology and Economics',
    period: '02/2024 – 03/2025',
    logo: bmeLogo,
    details: ['Includes exchange semester and subsequent transfer to TU Munich'],
  },
  {
    degree: 'B.Sc. Mechatronics',
    school: 'Budapest University of Technology and Economics',
    period: '09/2020 – 01/2024',
    logo: bmeLogo,
    details: [
      'Specialization: Biomechatronics, GPA: 4.62/5.00',
      'Thesis: CNN-based Sound Processing (Grade: 5)',
    ],
  },
]
