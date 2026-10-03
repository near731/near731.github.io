export interface Course {
  /** English title. */
  name: string
  /** German original, when the course is taught under a German title. */
  original?: string
}

// Grades are deliberately not part of the data. Only completed courses are listed.
export const coursework: { title: string; courses: Course[] }[] = [
  {
    title: 'Machine Learning',
    courses: [
      { name: 'Machine Learning (IN2064)' },
      { name: 'Introduction to Deep Learning' },
      { name: 'Hands-on Deep Learning' },
      { name: 'Physics-Informed Machine Learning' },
      { name: 'Advanced Deep Learning for Computer Vision: Visual Computing' },
    ],
  },
  {
    title: 'Control',
    courses: [
      { name: 'Adaptive and Learning-based Control' },
      { name: 'Optimal Control and Decision Making' },
      { name: 'Computer-Aided Control Design', original: 'Computergestützter Regelungsentwurf' },
      {
        name: 'Modern Methods of Control Engineering 1',
        original: 'Moderne Methoden der Regelungstechnik 1',
      },
      {
        name: 'Modern Methods of Control Engineering 2',
        original: 'Moderne Methoden der Regelungstechnik 2',
      },
    ],
  },
  {
    title: 'Robotics',
    courses: [
      { name: 'Advanced Deep Learning for Robotics' },
      { name: 'Robot Dynamics', original: 'Roboterdynamik' },
      { name: 'Introduction to ROS' },
    ],
  },
]
