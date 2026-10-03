import avatar from '@/assets/avatar-placeholder.jpg'

export const profile = {
  name: 'Áron Imre Németh',
  photo: avatar,
  photoAlt: 'Placeholder avatar',
  role: "Master's student in Robotics",
  tagline: 'Robotics + Deep Learning',
  location: 'Munich, Germany',
  intro:
    'I build learning-based methods for physical systems. My interests are deep learning and control theory, particularly optimal and adaptive control and reinforcement learning.',
  summary: [
    "I'm pursuing my Master's in Mechatronics, Robotics and Biomechanical Engineering at the Technical University of Munich, focusing on machine learning, robotics and control theory. I hold a Bachelor's degree in Mechatronics from the Budapest University of Technology and Economics.",
    'My practical experience includes deep learning, ROS 2 and sampling-based control for robotic manipulation.',
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
