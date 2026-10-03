import avatar from '@/assets/avatar-placeholder.jpg'

export const profile = {
  name: 'Áron Imre Németh',
  photo: avatar,
  photoAlt: 'Placeholder avatar',
  role: "Master's student in Robotics",
  tagline: 'Robotics + Deep Learning',
  location: 'Munich, Germany',
  intro:
    'I build learning-based methods for physical systems. My interests are Deep Learning and Control Theory, particularly Optimal/Adaptive Control and Reinforcement Learning.',
  summary: [
    "I'm pursuing my Master's in Mechatronics, Robotics and Biomechanical Engineering at the Technical University of Munich, focusing on Machine Learning, Robotics and Control Theory. I hold a Bachelor's degree in Mechatronics from the Budapest University of Technology and Economics.",
    'I have a passion for challenges and in-depth analysis. My goal is to develop not only functional but also efficient solutions, with practical experience in Deep Learning and ROS2.',
  ],
  interests: [
    'Deep Learning',
    'Reinforcement Learning',
    'Optimal & Adaptive Control',
    'Sampling-based MPC',
    'Robot Manipulation',
  ],
  links: {
    github: 'https://github.com/near731',
    linkedin: 'https://www.linkedin.com/in/aron-imre-nemeth/',
    email: 'aron_imre.nemeth@tum.de',
    // TODO(owner): set to 'cv/<file>.pdf' (file in public/cv/) to show the CV buttons.
    cv: null as string | null,
  },
} as const
