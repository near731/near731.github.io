import adlrInterpolation from '@/assets/projects/tactile-raycasting-nn/interpolation.webp'
import adlrReconstruction from '@/assets/projects/tactile-raycasting-nn/reconstruction.webp'
import rosDashboard from '@/assets/projects/autonomous-driving-ros2/dashboard.webp'
import rosMap from '@/assets/projects/autonomous-driving-ros2/trajectory-map.webp'
import rosPipeline from '@/assets/projects/autonomous-driving-ros2/pipeline.webp'
import rosStates from '@/assets/projects/autonomous-driving-ros2/state-machine.webp'
import labWristCamera from '@/assets/projects/mppi-flow-matching-franka/wrist-camera.webp'
import thesisStrip from '@/assets/projects/footstep-sound-cnn/hero-strip.webp'

// Clips and posters of the lab project (converted from the recorded GIFs, see the handoff).
const labFiles = import.meta.glob('../assets/projects/mppi-flow-matching-franka/video/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const lab = (file: string) => labFiles[`../assets/projects/mppi-flow-matching-franka/video/${file}`]
const labClip = (name: string, title: string, legend = false): ProjectVideo => ({
  src: lab(`${name}.mp4`),
  poster: lab(`${name}.webp`),
  title,
  legend,
})

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

export interface ProjectTable {
  caption: string
  columns: string[]
  rows: string[][]
  /** Highlighted last row, e.g. the average. */
  summaryRow?: string[]
  note?: string
}

export interface ProjectSection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  table?: ProjectTable
  images?: ProjectImage[]
  /** Captions of figures still to come; rendered as "Placeholder" tiles. */
  placeholderFigures?: string[]
  /** Drawn planner diagram inside the section. */
  diagram?: 'mppi-flow'
  videos?: ProjectVideo[]
  /** featured = first clip wide, rest in two columns; grid = three columns. */
  videoLayout?: 'featured' | 'grid'
}

export interface ProjectVideo {
  src: string
  poster: string
  title: string
  /** Draw the red/blue trajectory legend over the clip. */
  legend?: boolean
}

export interface Project {
  slug: string
  title: string
  tagline: string
  period: string
  context: string
  /** e.g. "Team of 5". Teammates and supervisors are deliberately not named. */
  team?: string
  status: 'In progress' | 'Completed'
  /** Short text for the overview card. */
  summary: string
  tags: string[]
  sections: ProjectSection[]
  resultsTitle?: string
  results?: { label: string; value: string; note?: string }[]
  /** Looping clip used as the hero instead of an image. */
  heroVideo?: ProjectVideo
  /** Text drawn over the hero image. */
  banner?: {
    kicker?: string
    /** overlay = banner over the bottom of the image, stacked = banner under the figure. */
    layout: 'overlay' | 'stacked'
    endLabels?: [string, string]
  }
  /** Card cover when it should differ from the hero. */
  cover?: ProjectImage
  /** Big figure at the top and card cover. Missing = generated "Placeholder" image. */
  hero?: ProjectImage
  /** Extra figures shown at the bottom. */
  images: ProjectImage[]
  linksTitle?: string
  links?: { label: string; url: string; note?: string }[]
}

// Order = priority on the Projects page. Source code of the (private) repos is never shown.
export const projects: Project[] = [
  {
    slug: 'mppi-flow-matching-franka',
    title: 'Sampling-based MPC with a flow-matching prior',
    tagline:
      'Learning-guided model predictive control for grasping and pick-and-place with a Franka arm',
    period: 'since 05/2026',
    context: 'Research internship, Learning Systems and Robotics Lab, TU Munich',
    status: 'In progress',
    summary:
      'A sampling-based MPC planner for tabletop manipulation whose action candidates come partly from a learned flow-matching prior. Developed in Isaac Lab, now moving to a real Franka Research 3.',
    tags: ['MPC', 'Flow Matching', 'Isaac Lab', 'CRISP', 'FoundationPose', 'Franka'],
    banner: {
      kicker: 'Research internship · Learning Systems and Robotics Lab · since 05/2026',
      layout: 'stacked',
    },
    heroVideo: labClip(
      'hero-planner-view',
      'Pick and place in simulation with the planner trajectories drawn',
      true,
    ),
    cover: {
      src: lab('hero-planner-view.webp'),
      alt: 'The robot arm lowering the gripper onto a red LEGO brick, surrounded by drawn red and blue planner trajectories.',
    },
    resultsTitle: 'Results in simulation',
    results: [
      {
        label: 'Grasp and lift',
        value: '91.7%',
        note: '550 of 600 attempts over six objects, 95% CI 89.2–93.6%, ground-truth object poses',
      },
      {
        label: 'Pick and place',
        value: '92.4%',
        note: '231 of 250 attempts, 95% CI 88.4–95.1%, object pose estimated from the wrist camera',
      },
    ],
    sections: [
      {
        heading: 'The idea',
        paragraphs: [
          'Sampling-based model predictive control (MPPI) plans by simulating many candidate action sequences in parallel and favoring the cheap ones. Pure random sampling wastes most candidates. Here, a conditional flow-matching model proposes promising action sequences, so far fewer samples are needed to find a good grasp.',
          'Because the candidates are evaluated in a physics simulator, the planner can reason about contact, which is what grasping and placing are about.',
        ],
      },
      {
        heading: 'How it works',
        bullets: [
          'Sample: 500 candidate action sequences, 16 steps long. About 75% come from the learned flow-matching prior, the rest from Gaussian CEM sampling.',
          'Simulate: all candidates are rolled out in parallel in [Isaac Lab](https://github.com/isaac-sim/IsaacLab). The rollout model mimics the robot’s joint-impedance controller, including its 10 Nm torque limit.',
          'Select: the candidates are scored by cost, and the best ones (the elite set) are combined into the next plan. Planning is asynchronous: the robot keeps executing the already committed part of the previous plan while the next one is computed.',
          'Control: [CRISP](https://github.com/learnsyslab/crisp_controllers) joint-impedance control, running on ros2_control at 1 kHz, turns the planned setpoints into torques.',
          'Perception: in simulation, [FoundationPose](https://github.com/NVlabs/FoundationPose) estimates the object pose from rendered wrist-camera images before the grasp. While the object is carried, its pose follows the gripper and is corrected by FoundationPose measurements.',
        ],
      },
      {
        heading: 'The planner loop',
        diagram: 'mppi-flow',
      },
      {
        heading: 'Tasks',
        bullets: [
          'Grasp and lift: pick up one of six objects (a cube, two jars, a remote, a cylinder and a large block) and lift it to a goal.',
          'Pick and place: take a LEGO brick from a studded baseplate, carry it, place it on a goal cell, release it, retreat and return to the home pose.',
        ],
      },
      {
        heading: 'Demo: pick and place',
        paragraphs: [
          'Recordings from the simulation: the robot picks up the LEGO brick and places it on the green goal outline. Press play to watch.',
        ],
        videos: [
          labClip('pick-place-1', 'Pick and place, run 1'),
          labClip('pick-place-2', 'Pick and place, run 2'),
          labClip('pick-place-3', 'Pick and place, run 3'),
        ],
        videoLayout: 'featured',
      },
      {
        heading: 'Demo: grasp and lift',
        paragraphs: ['One recording for each of the six objects.'],
        videos: [
          labClip('grasp-cube', 'Cube'),
          labClip('grasp-jar-a', 'Jar A'),
          labClip('grasp-jar-b', 'Jar B'),
          labClip('grasp-remote', 'Remote'),
          labClip('grasp-cylinder', 'Cylinder'),
          labClip('grasp-block-large', 'Large block'),
        ],
        videoLayout: 'grid',
      },
      {
        heading: 'Setup',
        paragraphs: [
          'The simulation runs in Isaac Lab with a [Franka Research 3](https://franka.de/franka-research-3) arm, a Robotiq 2F-85 gripper and a wrist-mounted RGB-D camera. The system is built on ROS 2 Jazzy and ros2_control, with the planner running on the GPU.',
        ],
      },
      {
        heading: 'Status',
        paragraphs: [
          'The work is moving from simulation to the real Franka Research 3. Camera, gripper and arm motion are working on the hardware. All results above are from simulation.',
        ],
        images: [
          {
            src: labWristCamera,
            alt: 'View from the wrist camera of the real robot: a LEGO brick on a baseplate between the gripper jaws, outlined by the FoundationPose tracking overlay.',
            caption:
              'Real wrist-camera view: FoundationPose tracks a LEGO brick on the baseplate between the gripper jaws.',
          },
        ],
        placeholderFigures: ['Photo or clip of the real robot (coming soon)'],
      },
    ],
    linksTitle: 'Built with',
    links: [
      {
        label: 'Isaac Lab',
        url: 'https://github.com/isaac-sim/IsaacLab',
        note: 'GPU-parallel robot simulation',
      },
      {
        label: 'CRISP controllers',
        url: 'https://github.com/learnsyslab/crisp_controllers',
        note: 'compliant ros2_control controllers for learning-based manipulation',
      },
      {
        label: 'crisp_py',
        url: 'https://github.com/learnsyslab/crisp_py',
        note: 'Python interface to the robot and gripper',
      },
      {
        label: 'FoundationPose',
        url: 'https://github.com/NVlabs/FoundationPose',
        note: 'unified 6D object pose estimation and tracking (CVPR 2024)',
      },
      {
        label: 'mppi_torch',
        url: 'https://github.com/tud-amr/mppi_torch',
        note: 'open-source MPPI implementation from TU Delft, adapted for this project',
      },
      {
        label: 'Pezzato et al., RA-L 2025',
        url: 'https://doi.org/10.1109/LRA.2025.3535185',
        note: 'sampling-based MPC with parallelizable physics simulation, the planner this work builds on',
      },
    ],
    images: [],
  },
  {
    slug: 'autonomous-driving-ros2',
    title: 'Autonomous driving in ROS 2',
    tagline: 'A closed-loop driving stack in a Unity simulator',
    period: 'Summer Semester 2026',
    context: 'Introduction to ROS, TU Munich',
    team: 'Team of 5',
    status: 'Completed',
    summary:
      'A ROS 2 stack that drives a car around an urban circuit, stops at traffic lights and reacts to other vehicles. My parts: the MPC controller, the decision-making state machine and lane detection.',
    tags: ['C++', 'ROS 2', 'MPC', 'State machine', 'Lane detection'],
    banner: { kicker: 'Introduction to ROS · Summer Semester 2026', layout: 'stacked' },
    cover: {
      src: rosMap,
      alt: 'Top-down map of the driven lap, colored by speed, with the traffic lights marked.',
    },
    hero: {
      src: rosPipeline,
      alt: 'Pipeline diagram: the Unity simulation sends raw sensor data to the perception nodes, which extract an occupancy grid, car locations and traffic light status. The trajectory planner and the velocity controller process this data, and the MPC controller node turns trajectory and velocity into steering and throttle commands, which feed back into the simulation.',
      caption:
        'Pipeline overview: perception feeds planning and decision making, the MPC controller turns both into steering and throttle commands for the simulator.',
    },
    resultsTitle: 'Results in simulation',
    results: [
      { label: 'Average lap time', value: '206.9 s', note: 'best lap 205.7 s' },
      { label: 'Distance per lap', value: '752 m' },
      { label: 'Average speed', value: '3.6 m/s', note: 'top speed 8.6 m/s' },
      { label: 'Waiting at traffic lights', value: '32.5 s', note: '16% of the lap' },
    ],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Team of 5. I built the MPC controller, the decision-making state machine and lane detection; the other modules were built by teammates. The simulator and the base code were provided by the course.',
          'The stack drives a fixed urban circuit in a Unity simulator in closed loop. Perception nodes extract an occupancy grid, the positions of other cars and the traffic-light status from the raw sensor data. Planning produces a path and a speed profile, decision making limits the speed depending on traffic, and the MPC controller turns both into steering and throttle commands.',
        ],
      },
      {
        heading: 'My nodes and packages',
        table: {
          caption: 'The ROS 2 packages and nodes I wrote.',
          columns: ['Package', 'Node', 'What it does'],
          rows: [
            ['controller', 'mpc_controller_node', 'Steering, throttle and brake commands'],
            ['decision_making', 'state_machine_node', 'Behavioural state and speed limit at 20 Hz'],
            ['perception', 'lane_detection_node', 'Drivable road ahead from the semantic camera'],
          ],
          note: 'Path planning was shared work with a teammate.',
        },
      },
      {
        heading: 'MPC controller',
        paragraphs: [
          'The controller is the last stage of the stack. Rather than solving a continuous optimisation problem, it is a sampling-based MPC: every control cycle it rolls a fixed set of candidate steering commands forward over a short horizon with a calibrated vehicle model, scores each rollout against the reference path, and applies the best-scoring one.',
          'The problem is re-solved from the true pose every cycle, so model error does not accumulate. The cost penalises cross-track error, heading error, steering effort, steering rate and a terminal term.',
        ],
        table: {
          caption: 'MPC horizon and cost-weight parameters.',
          columns: ['Parameter', 'Value'],
          rows: [
            ['Control rate', '20 Hz'],
            ['Horizon length N', '25 steps'],
            ['Step length dt', '0.1 s (2.5 s horizon)'],
            ['Steering samples per cycle', '45'],
            ['Speed look-ahead distance', '18.0 m'],
            ['Trajectory timeout', '0.5 s'],
            ['Trajectory look-ahead time', '1.0 s'],
            ['Cross-track weight', '3.5'],
            ['Heading weight', '0.5'],
            ['Steering-effort weight', '0.2'],
            ['Steering-rate weight', '1.5'],
            ['Terminal weight', '1.0'],
          ],
        },
      },
      {
        heading: 'Decision-making state machine',
        paragraphs: [
          'At 20 Hz, the state machine turns the detected cars, the traffic-light go/no-go signal, the planner’s occupancy clearance and the mission progress into one decision: a behavioural state, a speed limit, and emergency-stop and reverse flags.',
        ],
        images: [
          {
            src: rosStates,
            alt: 'State diagram: IDLE and FOLLOW switch on car ahead and clear, FOLLOW and EMERGENCY_BRAKE on too close and clear, IDLE and BACK_OFF on oncoming and clear, FOLLOW and STOP_TRAFFIC_LIGHT on red and green, and EMERGENCY_BRAKE leads to GOAL_REACHED on mission complete.',
            caption: 'State transitions of the decision-making node.',
          },
        ],
        table: {
          caption: 'Behavioural states and what they do.',
          columns: ['State', 'Entry condition', 'Effect'],
          rows: [
            ['IDLE', 'no relevant car ahead', 'free-road speed limit'],
            ['FOLLOW', 'car ahead, within follow distance', 'speed limit matches lead car'],
            ['EMERGENCY_BRAKE', 'car ahead within stopping distance', 'speed limit 0, full brake'],
            ['BACK_OFF', 'oncoming car, single-lane squeeze', 'reverse at fixed speed'],
            [
              'STOP_TRAFFIC_LIGHT',
              'fresh red / no-go from perception',
              'speed limit 0, full brake',
            ],
            ['GOAL_REACHED', 'final waypoint reached (latched)', 'speed limit 0, full brake'],
          ],
        },
        bullets: [
          'The traffic-light check defaults to go until the first state message arrives, so a detector that has not started yet cannot wedge the car at the start.',
          'Once a stop has been received it stays active across detector dropouts, and only a fresh go releases it, so a detector that dies mid-stop cannot wave the car through.',
          'A separate speed cap from the planner’s occupancy clearance only lowers the speed limit and is floored above zero, so it can never stop the car by itself.',
        ],
      },
      {
        heading: 'Lane detection',
        paragraphs: [
          'The lane detection node finds the drivable road ahead using only the semantic camera. It masks road-coloured pixels in a lower region of the image and fits a polynomial through the per-row centres of that mask by weighted least squares.',
          'Rows with too few road pixels, or where the mask touches the image border, are excluded because they would bias the curve. The polynomial degree is lowered when too little of the region survives to trust a higher-order fit.',
          'The curve is then projected onto the ground plane using the camera calibration, which gives a lane centreline in the vehicle frame. Decision making and the corridor planner use it to reason about the road’s actual curvature instead of assuming a straight road ahead.',
        ],
      },
      {
        heading: 'Performance over one lap',
        images: [
          {
            src: rosDashboard,
            alt: 'Plots of the driven trajectory with traffic lights and speed, the speed profile, and the MPC cross-track error over one lap.',
            caption: 'Trajectory, speed profile and MPC cross-track error over one lap.',
          },
        ],
      },
      {
        heading: 'Limitations',
        bullets: [
          'Other vehicles are handled by following or stopping; there is no overtaking.',
          'The occupancy layer produces conservative stops rather than searching for an alternative route.',
          'Lane detection relies on the simulator’s semantic camera, which the stack uses; the optional no-semantic-camera bonus is not claimed.',
        ],
      },
    ],
    images: [],
  },
  {
    slug: 'tactile-raycasting-nn',
    title: 'A neural network instead of raycasting',
    tagline:
      'Tactile penetration modeling for robotic fine manipulation via learned directional distances',
    period: 'Winter Semester 2026',
    context: 'Advanced Deep Learning for Robotics, TU Munich',
    team: 'Pair project',
    status: 'Completed',
    summary:
      'A neural network that answers ray queries against an object, replacing mesh raycasting in tactile simulation with about 32x faster inference at 93.8% average accuracy.',
    tags: ['PyTorch', 'NVIDIA Warp', 'CUDA', 'Neural SDF'],
    banner: {
      kicker: 'Advanced Deep Learning for Robotics · Winter Semester 2026',
      layout: 'overlay',
      endLabels: ['Horse · α = 1', 'Dog · α = 0'],
    },
    hero: {
      src: adlrInterpolation,
      alt: 'Six renderings of a mesh, colored by depth, morphing step by step from a horse (top left) into a dog (bottom right).',
      caption:
        'Interpolating between a horse (top left) and a dog (bottom right) by mixing their latent vectors in six steps, from α = 1 to α = 0.',
    },
    results: [
      {
        label: 'Faster inference',
        value: '32x',
        note: 'average inference time 0.0094 s vs. 0.2993 s for raycasting, over ten objects',
      },
      {
        label: 'Average accuracy',
        value: '93.84%',
        note: 'rays predicted within 0.05 of the raycast distance',
      },
      {
        label: 'Correlation',
        value: '0.918',
        note: 'between network output and raycast values',
      },
    ],
    sections: [
      {
        heading: 'Objective',
        paragraphs: [
          'Raycasting is a computational bottleneck for fine tactile simulation in robotic manipulation. The solution: an efficient neural network that answers the same distance queries with fast inference.',
        ],
      },
      {
        heading: 'Method',
        paragraphs: [
          'A neural network replaces the raycaster. It is conditioned on a latent vector per object, so one network can represent many shapes.',
        ],
        bullets: [
          'Input: a ray (a point and a direction, 6 values) plus the 128-dimensional latent vector of the object. Output: the distance along the ray, or a miss.',
          'Architecture: an MLP with 16 layers of 512 units, ReLU activations, He initialization and skip connections every 8 layers. 3.7 million parameters in total.',
          'Every object gets its own latent vector, initialized randomly and learned during training. Because all shapes share one latent space, mixing two latent vectors morphs one shape into another.',
        ],
      },
      {
        heading: 'Data generation',
        bullets: [
          'Meshes are loaded with Trimesh, rescaled and centered.',
          'Query points are sampled randomly in a spherical shell around the mesh, and jitter is added to each point to get more samples.',
          'Every ray is expressed in a ray-aligned coordinate system in which its direction is the positive z axis.',
          'Ground-truth distances come from raycasting with NVIDIA Warp. Sparse edges and sharp corners are oversampled.',
          'Result: around 250,000 points per object.',
        ],
      },
      {
        heading: 'Training',
        bullets: [
          'L1 loss between predicted and raycast distances, plus a regularizer on the latent vectors.',
          'Dropout of 0.1, weight decay of 1e-5 and dynamic noise injected during training.',
        ],
      },
      {
        heading: 'Results',
        paragraphs: [
          'Performance stays stable across all ten objects. Raycasting (RC) is compared with the network (NN).',
        ],
        table: {
          caption: 'Inference time, accuracy and correlation per object.',
          columns: ['Object', 'RC time', 'NN time', 'Loss', 'Accuracy', 'Correlation'],
          rows: [
            ['Controller', '0.3165 s', '0.0106 s', '0.1249', '89.54 %', '0.854'],
            ['Screw', '0.2532 s', '0.0092 s', '0.0972', '93.66 %', '0.932'],
            ['Bottle', '0.2619 s', '0.0111 s', '0.0887', '95.53 %', '0.941'],
            ['Cube', '0.2889 s', '0.0120 s', '0.0883', '95.88 %', '0.948'],
            ['Dog', '0.2616 s', '0.0077 s', '0.0875', '93.80 %', '0.925'],
            ['Cat', '0.2958 s', '0.0088 s', '0.1003', '94.14 %', '0.924'],
            ['Horse', '0.3331 s', '0.0073 s', '0.0791', '94.81 %', '0.935'],
            ['Lion', '0.3092 s', '0.0089 s', '0.0808', '94.49 %', '0.931'],
            ['Wildcat', '0.3620 s', '0.0097 s', '0.0965', '93.52 %', '0.909'],
            ['Bear', '0.3202 s', '0.0086 s', '0.1206', '93.02 %', '0.883'],
          ],
          summaryRow: ['Average', '0.2993 s', '0.0094 s', '0.0954', '93.84 %', '0.918'],
          note: 'Accuracy is the share of rays predicted within 0.05 of the raycast distance.',
        },
      },
      {
        heading: 'Reconstruction',
        paragraphs: [
          'Depth images are rendered from the front view, and surfaces are rebuilt with Poisson surface reconstruction after outlier removal.',
        ],
        images: [
          {
            src: adlrReconstruction,
            alt: 'Reconstructed meshes colored by distance: a dog, a cat, a horse, another dog, a game controller and a cylindrical object.',
            caption: 'Meshes reconstructed from the network predictions.',
          },
        ],
      },
    ],
    images: [],
  },
  {
    slug: 'footstep-sound-cnn',
    title: 'Estimating anthropometric data from footstep sounds',
    tagline: 'Bachelor thesis, first place at TDK 2023',
    period: '2023',
    context: 'Bachelor thesis, Budapest University of Technology and Economics',
    status: 'Completed',
    summary:
      'Can the sound of walking reveal body mass, height and age? Footstep recordings are turned into mel-spectrograms and fed to a CNN that predicts all three values.',
    tags: ['PyTorch', 'CNN', 'Audio', 'librosa'],
    banner: { kicker: 'Bachelor thesis · TDK 2023, first place', layout: 'overlay' },
    hero: {
      src: thesisStrip,
      alt: 'Three scatter plots of estimated versus actual body mass, height and age, with points following the diagonal.',
      caption: 'Estimated versus actual body mass, height and age on the test set.',
    },
    resultsTitle: 'Test-set results',
    results: [
      { label: 'Body mass', value: '3.8 kg', note: 'mean absolute error, R² 0.79' },
      { label: 'Height', value: '1.8 cm', note: 'mean absolute error, R² 0.83' },
      { label: 'Age', value: '2.7 years', note: 'mean absolute error, R² 0.90' },
    ],
    sections: [
      {
        heading: 'The idea',
        paragraphs: [
          'Can the sound of someone walking reveal how heavy, how tall and how old they are? The thesis trains a neural network on recordings of people walking on a treadmill to estimate body mass, height and age from their footsteps alone.',
        ],
      },
      {
        heading: 'Method',
        bullets: [
          'Stereo recordings of people walking on a treadmill are split into individual steps by peak detection on the signal. Every step becomes one sample.',
          'Each step is converted into a 256-band mel-spectrogram, which the network receives as a 3-channel 256 × 256 image.',
          'The model is a self-built convolutional neural network in PyTorch with Inception-style multi-kernel blocks: parallel 1 × 1, 3 × 3 and 5 × 5 convolutions, followed by max pooling and dropout.',
          'It has three regression outputs and predicts body mass, height and age at the same time.',
        ],
      },
      {
        heading: 'Training',
        bullets: [
          'Batch size 64, learning rate 1e-4, dropout 0.2, and early stopping with a patience of 15 epochs.',
          'Training ran for 73 epochs, about 4 hours on a local GTX 1080 GPU.',
        ],
      },
      {
        heading: 'Results',
        paragraphs: ['Error and fit on the held-out test set, for each of the three targets.'],
        table: {
          caption: 'Test-set error and fit per target.',
          columns: ['Target', 'Mean absolute error', 'Mean squared error', 'R²'],
          rows: [
            ['Body mass', '3.81 kg', '59.56', '0.793'],
            ['Height', '1.80 cm', '15.53', '0.833'],
            ['Age', '2.74 years', '30.61', '0.902'],
          ],
        },
      },
      {
        heading: 'Recognition',
        bullets: [
          'First place at the Scientific Student Circle Conference (TDK), Budapest, 16 November 2023, with the paper “Estimating Anthropometric Data Based on Footstep-Sound Recordings”.',
          'The bachelor thesis was graded 5 (out of 5).',
        ],
      },
    ],
    links: [{ label: 'TDK (Scientific Student Circle)', url: 'https://www.tdk.bme.hu' }],
    images: [],
  },
]
