export const labRosTranslations: Record<string, string> = {
  '45': '45',
  'Sampling-based MPC with a flow-matching prior': 'Samplingbasiertes MPC mit Flow-Matching-Prior',
  'Learning-guided model predictive control for grasping and pick-and-place with a Franka arm':
    'Lernbasierte modellprädiktive Regelung für Greif- und Pick-and-Place-Aufgaben mit einem Franka-Arm',
  'since 05/2026': 'seit 05/2026',
  'Research internship, Learning Systems and Robotics Lab, TU Munich':
    'Forschungspraktikum, Learning Systems and Robotics Lab, Technische Universität München',
  'In progress': 'In Arbeit',
  'A sampling-based MPC planner for tabletop manipulation whose action candidates come partly from a learned flow-matching prior. Developed in Isaac Lab, now moving to a real Franka Research 3.':
    'Ein samplingbasierter MPC-Planer für Manipulationsaufgaben auf einer Tischfläche, dessen Aktionskandidaten teilweise von einem trainierten Flow-Matching-Prior stammen. In Isaac Lab entwickelt; der Übergang auf einen realen Franka Research 3 läuft.',
  MPC: 'MPC',
  'Flow Matching': 'Flow Matching',
  'Isaac Lab': 'Isaac Lab',
  CRISP: 'CRISP',
  FoundationPose: 'FoundationPose',
  Franka: 'Franka',
  'Research internship · Learning Systems and Robotics Lab · since 05/2026':
    'Forschungspraktikum · Learning Systems and Robotics Lab · seit 05/2026',
  'Pick and place in simulation with the planner trajectories drawn':
    'Pick and Place in der Simulation mit eingezeichneten Planer-Trajektorien',
  'The robot arm lowering the gripper onto a red LEGO brick, surrounded by drawn red and blue planner trajectories.':
    'Der Roboter senkt den Greifer auf einen roten LEGO-Stein; eingezeichnete rote und blaue Planer-Trajektorien umgeben die Bewegung.',
  'Results in simulation': 'Simulationsergebnisse',
  'Grasp and lift': 'Greifen und Anheben',
  '550 of 600 attempts over six objects, 95% CI 89.2–93.6%, ground-truth object poses':
    '550 von 600 Versuchen mit sechs Objekten; 95-%-Konfidenzintervall: 89,2–93,6 %; bekannte Objektposen (Ground Truth)',
  'Pick and place': 'Aufnehmen und Platzieren',
  '231 of 250 attempts, 95% CI 88.4–95.1%, object pose estimated from the wrist camera':
    '231 von 250 Versuchen; 95-%-Konfidenzintervall: 88,4–95,1 %; Objektpose aus dem Handgelenk-Kamerabild geschätzt',
  'The idea': 'Grundidee',
  'Sampling-based model predictive control (MPPI) simulates many candidate action sequences in parallel and favors those with lower cost. A conditional flow-matching model proposes promising sequences alongside Gaussian CEM samples, guiding the search toward useful manipulation actions.':
    'Samplingbasierte modellprädiktive Regelung (MPPI) simuliert viele mögliche Aktionssequenzen parallel und bevorzugt diejenigen mit geringeren Kosten. Ein bedingtes Flow-Matching-Modell schlägt aussichtsreiche Sequenzen vor und ergänzt die Gauß-verteilten CEM-Stichproben. So wird die Suche auf nützliche Manipulationsaktionen gelenkt.',
  'Because the candidates are evaluated in a physics simulator, the planner can reason about contact, which is what grasping and placing are about.':
    'Da die Kandidaten in einem Physiksimulator bewertet werden, kann der Planer Kontakt berücksichtigen – entscheidend für Greif- und Platzieraufgaben.',
  'How it works': 'Ablauf',
  'Sample: 500 candidate action sequences, 16 steps long. About 75% come from the learned flow-matching prior, the rest from Gaussian CEM sampling.':
    'Stichproben: 500 mögliche Aktionssequenzen mit jeweils 16 Schritten. Etwa 75 % stammen aus dem trainierten Flow-Matching-Prior, die übrigen aus Gauß-Stichproben des CEM-Verfahrens.',
  'Simulate: all candidates are rolled out in parallel in [Isaac Lab](https://github.com/isaac-sim/IsaacLab). The rollout model mimics the robot’s joint-impedance controller, including its 10 Nm torque limit.':
    'Simulation: Alle Kandidaten werden parallel in [Isaac Lab](https://github.com/isaac-sim/IsaacLab) simuliert. Das Rollout-Modell bildet die Gelenkimpedanzregelung des Roboters einschließlich der Drehmomentbegrenzung auf 10 Nm nach.',
  'Select: the candidates are scored by cost, and the best ones (the elite set) are combined into the next plan. Planning is asynchronous: the robot keeps executing the already committed part of the previous plan while the next one is computed.':
    'Auswahl: Die Kandidaten werden anhand ihrer Kosten bewertet. Die besten Kandidaten (Elite-Set) fließen in den nächsten Plan ein. Die Planung läuft asynchron: Während der nächste Plan berechnet wird, führt der Roboter den bereits festgelegten Abschnitt des vorherigen Plans weiter aus.',
  'Control: [CRISP](https://github.com/learnsyslab/crisp_controllers) joint-impedance control, running on ros2_control at 1 kHz, turns the planned setpoints into torques.':
    'Regelung: Die Gelenkimpedanzregelung von [CRISP](https://github.com/learnsyslab/crisp_controllers) läuft mit ros2_control bei 1 kHz und setzt die geplanten Sollwerte in Drehmomente um.',
  'Perception: in simulation, [FoundationPose](https://github.com/NVlabs/FoundationPose) estimates the object pose from rendered wrist-camera images before the grasp. While the object is carried, its pose follows the gripper and is corrected by FoundationPose measurements.':
    'Wahrnehmung: In der Simulation schätzt [FoundationPose](https://github.com/NVlabs/FoundationPose) vor dem Greifen die Objektpose aus gerenderten Bildern der Handgelenk-Kamera. Während des Transports folgt die geschätzte Pose dem Greifer und wird anhand von FoundationPose-Messungen korrigiert.',
  'The planner loop': 'Planungsschleife',
  Tasks: 'Aufgaben',
  'Grasp and lift: pick up one of six objects (a cube, two jars, a remote, a cylinder and a large block) and lift it to a goal.':
    'Greifen und Anheben: Eines von sechs Objekten (Würfel, zwei Gläser, Fernbedienung, Zylinder oder großer Block) aufnehmen und zum Ziel anheben.',
  'Pick and place: take a LEGO brick from a studded baseplate, carry it, place it on a goal cell, release it, retreat and return to the home pose.':
    'Aufnehmen und Platzieren: Einen LEGO-Stein von einer Grundplatte mit Noppen aufnehmen, zum Zielfeld transportieren, dort absetzen und loslassen, den Greifer zurückziehen und zur Ausgangsposition fahren.',
  'Demo: pick and place': 'Demo: Aufnehmen und Platzieren',
  'Recordings from the simulation: the robot picks up the LEGO brick and places it on the green goal outline. Press play to watch.':
    'Aufnahmen aus der Simulation: Der Roboter hebt den LEGO-Stein auf und setzt ihn auf der grün markierten Zielfläche ab. Wiedergabe starten, um den Ablauf anzusehen.',
  'Pick and place, run 1': 'Aufnehmen und Platzieren, Durchlauf 1',
  'Pick and place, run 2': 'Aufnehmen und Platzieren, Durchlauf 2',
  'Pick and place, run 3': 'Aufnehmen und Platzieren, Durchlauf 3',
  'Demo: grasp and lift': 'Demo: Greifen und Anheben',
  'One recording for each of the six objects.': 'Je eine Aufnahme für jedes der sechs Objekte.',
  Cube: 'Würfel',
  'Jar A': 'Glas A',
  'Jar B': 'Glas B',
  Remote: 'Fernbedienung',
  Cylinder: 'Zylinder',
  'Large block': 'Großer Block',
  Setup: 'Aufbau',
  'The simulation runs in Isaac Lab with a [Franka Research 3](https://franka.de/franka-research-3) arm, a Robotiq 2F-85 gripper and a wrist-mounted RGB-D camera. The system is built on ROS 2 Jazzy and ros2_control, with the planner running on the GPU.':
    'Die Simulation läuft in Isaac Lab mit einem Franka-Research-3-Arm von [Franka](https://franka.de/franka-research-3), einem Robotiq-2F-85-Greifer und einer RGB-D-Kamera am Handgelenk. Das System basiert auf ROS 2 Jazzy und ros2_control; der Planer läuft auf der GPU.',
  Status: 'Status',
  'The work is moving from simulation to the real Franka Research 3. Camera, gripper and arm motion are working on the hardware. All results above are from simulation.':
    'Das System wird derzeit von der Simulation auf den realen Franka Research 3 übertragen. Kamera, Greifer und Armbewegung funktionieren bereits an der Hardware. Alle oben gezeigten Ergebnisse stammen aus der Simulation.',
  'View from the wrist camera of the real robot: a LEGO brick on a baseplate between the gripper jaws, outlined by the FoundationPose tracking overlay.':
    'Ansicht der Handgelenk-Kamera des realen Roboters: Ein LEGO-Stein liegt auf einer Grundplatte zwischen den Greiferbacken; die FoundationPose-Tracking-Überlagerung markiert ihn.',
  'Real wrist-camera view: FoundationPose tracks a LEGO brick on the baseplate between the gripper jaws.':
    'Ansicht der Handgelenk-Kamera: FoundationPose verfolgt einen LEGO-Stein auf der Grundplatte zwischen den Greiferbacken.',
  'Photo or clip of the real robot (coming soon)': 'Foto oder Clip des realen Roboters (folgt)',
  'Built with': 'Grundlagen und Werkzeuge',
  'GPU-parallel robot simulation': 'GPU-parallele Robotersimulation',
  'compliant ros2_control controllers for learning-based manipulation':
    'Nachgiebige ros2_control-Regler für lernbasierte Manipulation',
  'Python interface to the robot and gripper': 'Python-Schnittstelle für Roboter und Greifer',
  'unified 6D object pose estimation and tracking (CVPR 2024)':
    'Einheitliche Schätzung und Verfolgung von 6D-Objektposen (CVPR 2024)',
  'open-source MPPI implementation from TU Delft, adapted for this project':
    'Open-Source-MPPI-Implementierung der TU Delft, für dieses Projekt angepasst',
  'sampling-based MPC with parallelizable physics simulation, the planner this work builds on':
    'Samplingbasiertes MPC mit parallelisierbarer Physiksimulation; Grundlage des hier verwendeten Planers',
  'CRISP controllers': 'CRISP controllers',
  crisp_py: 'crisp_py',
  mppi_torch: 'mppi_torch',
  'Pezzato et al., RA-L 2025': 'Pezzato et al., RA-L 2025',
  'Autonomous driving in ROS 2': 'Autonomes Fahren mit ROS 2',
  'A closed-loop driving stack in a Unity simulator':
    'Ein Fahr-Stack mit geschlossenem Regelkreis in einem Unity-Simulator',
  'Summer Semester 2026': 'Sommersemester 2026',
  'Introduction to ROS, TU Munich': 'Introduction to ROS, Technische Universität München',
  'Team of 5': 'Team aus 5 Personen',
  Completed: 'Abgeschlossen',
  'A ROS 2 stack that drives a car around an urban circuit, stops at traffic lights and reacts to other vehicles. My parts: the MPC controller, the decision-making state machine and lane detection.':
    'Ein ROS-2-Stack, der ein Fahrzeug über einen Stadtkurs steuert, an Ampeln anhält und auf andere Fahrzeuge reagiert. Meine Beiträge: MPC-Regler, Zustandsautomat für die Fahrentscheidungen und Fahrspurerkennung.',
  'State machine': 'Zustandsautomat',
  'Lane detection': 'Fahrspurerkennung',
  'Introduction to ROS · Summer Semester 2026': 'Introduction to ROS · Sommersemester 2026',
  'Top-down map of the driven lap, colored by speed, with the traffic lights marked.':
    'Draufsicht auf die gefahrene Runde, nach Geschwindigkeit eingefärbt und mit markierten Ampeln.',
  'Pipeline diagram: the Unity simulation sends raw sensor data to the perception nodes, which extract an occupancy grid, car locations and traffic light status. The trajectory planner and the velocity controller process this data, and the MPC controller node turns trajectory and velocity into steering and throttle commands, which feed back into the simulation.':
    'Ablaufdiagramm: Der Unity-Simulator sendet Rohdaten der Sensoren an die Wahrnehmungsknoten. Diese ermitteln ein Belegungsraster, Fahrzeugpositionen und Ampelzustände. Trajektorienplaner und Geschwindigkeitsregler verarbeiten diese Daten; der MPC-Regler wandelt Trajektorie und Geschwindigkeit in Lenk- und Gaspedalbefehle um, die an den Simulator zurückgegeben werden.',
  'Pipeline overview: perception feeds planning and decision making, the MPC controller turns both into steering and throttle commands for the simulator.':
    'Übersicht des Datenflusses: Die Wahrnehmung versorgt Planung und Entscheidungslogik mit Daten. Der MPC-Regler wandelt deren Vorgaben in Lenk- und Gaspedalbefehle für den Simulator um.',
  'Average lap time': 'Mittlere Rundenzeit',
  'best lap 205.7 s': 'schnellste Runde: 205,7 s',
  'Distance per lap': 'Strecke pro Runde',
  'Average speed': 'Durchschnittsgeschwindigkeit',
  'top speed 8.6 m/s': 'Höchstgeschwindigkeit: 8,6 m/s',
  'Waiting at traffic lights': 'Wartezeit an Ampeln',
  Overview: 'Überblick',
  'Team of 5. I built the MPC controller, the decision-making state machine and lane detection; the other modules were built by teammates. The simulator and the base code were provided by the course.':
    'Das Team bestand aus fünf Personen. Ich entwickelte den MPC-Regler, den Zustandsautomaten für die Fahrentscheidungen und die Fahrspurerkennung; die anderen Module entwickelten Teammitglieder. Simulator und Grundgerüst wurden im Kurs bereitgestellt.',
  'The stack drives a fixed urban circuit in a Unity simulator in closed loop. Perception nodes extract an occupancy grid, the positions of other cars and the traffic-light status from the raw sensor data. Planning produces a path and a speed profile, decision making limits the speed depending on traffic, and the MPC controller turns both into steering and throttle commands.':
    'Der Stack fährt in einem Unity-Simulator im geschlossenen Regelkreis über einen festgelegten Stadtkurs. Wahrnehmungsknoten gewinnen aus den Sensordaten ein Belegungsraster, die Positionen anderer Fahrzeuge und den Ampelzustand. Die Planung erzeugt einen Pfad und ein Geschwindigkeitsprofil; die Entscheidungslogik passt die Geschwindigkeit an den Verkehr an. Der MPC-Regler setzt beides in Lenk- und Gaspedalbefehle um.',
  'My nodes and packages': 'Meine Knoten und Pakete',
  'The ROS 2 packages and nodes I wrote.': 'Die ROS-2-Pakete und -Knoten, die ich entwickelt habe.',
  Package: 'Paket',
  Node: 'Knoten',
  'What it does': 'Funktion',
  'Steering, throttle and brake commands': 'Lenk-, Gas- und Bremsbefehle',
  'Behavioral state and speed limit at 20 Hz':
    'Fahrzustand und Geschwindigkeitsbegrenzung mit 20 Hz',
  'Drivable road ahead from the semantic camera':
    'Befahrbarer Straßenbereich vor dem Fahrzeug aus der Semantikkamera',
  'Path planning was shared work with a teammate.':
    'Die Pfadplanung entstand gemeinsam mit einem Teammitglied.',
  'MPC controller': 'MPC-Regler',
  'The controller is the last stage of the stack. Rather than solving a continuous optimization problem, it is a sampling-based MPC: every control cycle it rolls a fixed set of candidate steering commands forward over a short horizon with a calibrated vehicle model, scores each rollout against the reference path, and applies the best-scoring one.':
    'Der Regler bildet die letzte Stufe des Stacks. Statt ein kontinuierliches Optimierungsproblem zu lösen, verwendet er samplingbasiertes MPC: In jedem Regelzyklus simuliert er mit einem kalibrierten Fahrzeugmodell eine feste Anzahl möglicher Lenkbefehle über einen kurzen Vorhersagehorizont, bewertet jeden Simulationsdurchlauf anhand des Referenzpfads und setzt den bestbewerteten Befehl um.',
  'The controller replans from the latest simulator pose each cycle, limiting the effect of model error across successive plans. The cost penalizes cross-track error, heading error, steering effort, steering rate and a terminal term.':
    'Der Regler plant in jedem Zyklus ausgehend von der aktuellen Simulatorpose neu. Dadurch wirken sich Modellfehler weniger auf nachfolgende Pläne aus. Die Kostenfunktion berücksichtigt Querabweichung, Richtungsfehler, Lenkeinsatz, Änderungsrate der Lenkung und einen Endterm.',
  'MPC horizon and cost-weight parameters.':
    'MPC-Vorhersagehorizont und Gewichtungsparameter der Kostenfunktion.',
  Parameter: 'Parameter',
  Value: 'Wert',
  'Control rate': 'Regelfrequenz',
  'Horizon length N': 'Horizontlänge N',
  'Step length dt': 'Schrittdauer dt',
  'Steering samples per cycle': 'Lenkstichproben pro Zyklus',
  'Speed look-ahead distance': 'Vorausschauweite für die Geschwindigkeit',
  'Trajectory timeout': 'Zeitlimit für Trajektorien',
  'Trajectory look-ahead time': 'Zeitliche Vorausschau der Trajektorie',
  'Cross-track weight': 'Gewicht der Querabweichung',
  'Heading weight': 'Gewicht des Richtungsfehlers',
  'Steering-effort weight': 'Gewicht des Lenkeinsatzes',
  'Steering-rate weight': 'Gewicht der Lenkänderungsrate',
  'Terminal weight': 'Gewicht des Endterms',
  'Decision-making state machine': 'Zustandsautomat für die Fahrentscheidungen',
  'At 20 Hz, the state machine turns the detected cars, the traffic-light go/no-go signal, the planner’s occupancy clearance and the mission progress into one decision: a behavioral state, a speed limit, and emergency-stop and reverse flags.':
    'Mit 20 Hz verarbeitet der Zustandsautomat erkannte Fahrzeuge, das Go/No-Go-Signal der Ampel, den vom Planer gemeldeten freien Abstand im Belegungsraster und den Missionsfortschritt. Daraus erzeugt er einen Fahrzustand, eine Geschwindigkeitsbegrenzung sowie Flags für Notbremsung und Rückwärtsfahrt.',
  'State diagram: IDLE and FOLLOW switch on car ahead and clear, FOLLOW and EMERGENCY_BRAKE on too close and clear, IDLE and BACK_OFF on oncoming and clear, FOLLOW and STOP_TRAFFIC_LIGHT on red and green, and EMERGENCY_BRAKE leads to GOAL_REACHED on mission complete.':
    'Zustandsdiagramm: Bei einem vorausfahrenden Fahrzeug und freier Strecke wechselt IDLE zu FOLLOW und zurück. Bei zu geringem Abstand wechselt FOLLOW zu EMERGENCY_BRAKE, bei freier Strecke zurück zu FOLLOW. Bei Gegenverkehr wechselt IDLE zu BACK_OFF und bei freier Strecke zurück zu IDLE. Bei Rot wechselt FOLLOW zu STOP_TRAFFIC_LIGHT; bei Grün zurück zu FOLLOW. Nach Missionsabschluss führt EMERGENCY_BRAKE zu GOAL_REACHED.',
  'State transitions of the decision-making node.': 'Zustandsübergänge des Entscheidungs-Knotens.',
  'Behavioral states and what they do.': 'Fahrzustände und ihre Wirkung.',
  State: 'Zustand',
  'Entry condition': 'Eintrittsbedingung',
  Effect: 'Wirkung',
  'no relevant car ahead': 'Kein relevantes Fahrzeug voraus',
  'free-road speed limit': 'Geschwindigkeitsbegrenzung für freie Strecke',
  'car ahead, within follow distance': 'Fahrzeug voraus, innerhalb des Folgeabstands',
  'speed limit matches lead car': 'Geschwindigkeit an das vorausfahrende Fahrzeug angepasst',
  'car ahead within stopping distance': 'Fahrzeug voraus innerhalb des Bremswegs',
  'speed limit 0, full brake': 'Geschwindigkeitslimit 0, volle Bremsung',
  'oncoming car, single-lane squeeze': 'Gegenverkehr in einer Engstelle mit nur einer Spur',
  'reverse at fixed speed': 'Rückwärtsfahrt mit fester Geschwindigkeit',
  'fresh red / no-go from perception': 'Aktuelles Rot-/No-Go-Signal der Wahrnehmung',
  'final waypoint reached (latched)': 'Letzten Wegpunkt erreicht (Zustand bleibt gesetzt)',
  'The traffic-light check defaults to go until the first state message arrives, so a detector that has not started yet cannot wedge the car at the start.':
    'Bis die erste Zustandsmeldung eintrifft, gilt die Ampelprüfung standardmäßig als Go. So blockiert ein noch nicht gestarteter Detektor das Fahrzeug nicht am Start.',
  'Once a stop has been received it stays active across detector dropouts, and only a fresh go releases it, so a detector that dies mid-stop cannot wave the car through.':
    'Ein empfangener Stopp bleibt auch bei Aussetzern des Detektors aktiv. Erst ein aktuelles Go-Signal hebt ihn auf; ein während des Halts ausgefallener Detektor kann das Fahrzeug daher nicht irrtümlich weiterfahren lassen.',
  'A separate speed cap from the planner’s occupancy clearance only lowers the speed limit and is floored above zero, so it can never stop the car by itself.':
    'Eine zusätzliche, aus dem freien Abstand im Belegungsraster abgeleitete Geschwindigkeitsbegrenzung kann das Tempo nur verringern. Sie hat einen Mindestwert über null und kann das Fahrzeug daher nicht allein zum Stillstand bringen.',
  'The lane detection node finds the drivable road ahead using only the semantic camera. It masks road-colored pixels in a lower region of the image and fits a polynomial through the per-row centers of that mask by weighted least squares.':
    'Der Fahrspurerkennungs-Knoten bestimmt den befahrbaren Straßenbereich vor dem Fahrzeug ausschließlich anhand der Semantikkamera. Er maskiert Pixel der Straßenklasse im unteren Bildbereich und passt mittels gewichteter kleinster Quadrate ein Polynom durch die zeilenweisen Mittelpunkte der Maske an.',
  'Rows with too few road pixels, or where the mask touches the image border, are excluded because they would bias the curve. The polynomial degree is lowered when too little of the region survives to trust a higher-order fit.':
    'Bildzeilen mit zu wenigen Straßenpixeln oder einer Maske, die den Bildrand berührt, werden ausgeschlossen, da sie die Kurve verzerren könnten. Wenn zu wenig vom Bereich übrig bleibt, um einer Anpassung höherer Ordnung zu vertrauen, wird der Polynomgrad reduziert.',
  'The curve is then projected onto the ground plane using the camera calibration, which gives a lane centerline in the vehicle frame. Decision making and the corridor planner use it to reason about the road’s actual curvature instead of assuming a straight road ahead.':
    'Anschließend wird die Kurve mithilfe der Kamerakalibrierung auf die Bodenebene projiziert. So ergibt sich eine Fahrspurmittellinie im Fahrzeugkoordinatensystem. Die Entscheidungslogik und der Korridorplaner verwenden sie, um die tatsächliche Straßenkrümmung zu berücksichtigen, statt von einer geraden Strecke auszugehen.',
  'Performance over one lap': 'Messwerte einer Runde',
  'Plots of the driven trajectory with traffic lights and speed, the speed profile, and the MPC cross-track error over one lap.':
    'Diagramme der gefahrenen Trajektorie mit Ampeln und Geschwindigkeit, des Geschwindigkeitsprofils und der MPC-Querabweichung über eine Runde.',
  'Trajectory, speed profile and MPC cross-track error over one lap.':
    'Trajektorie, Geschwindigkeitsprofil und MPC-Querabweichung über eine Runde.',
  Limitations: 'Einschränkungen',
  'Other vehicles are handled by following or stopping; there is no overtaking.':
    'Auf andere Fahrzeuge wird durch Folgen oder Anhalten reagiert; Überholen ist nicht vorgesehen.',
  'The occupancy layer produces conservative stops rather than searching for an alternative route.':
    'Die Belegungsebene löst vorsichtshalber einen Halt aus, statt nach einer Ausweichroute zu suchen.',
  'Lane detection relies on the simulator’s semantic camera, which the stack uses; the optional no-semantic-camera bonus is not claimed.':
    'Die Fahrspurerkennung benötigt die Semantikkamera des Simulators, die im Stack verwendet wird. Der optionale Bonus für einen Betrieb ohne Semantikkamera wird nicht beansprucht.',
  'Franka Research 3': 'Franka Research 3',
  'Robotiq 2F-85': 'Robotiq 2F-85',
  'ROS 2 Jazzy': 'ROS 2 Jazzy',
  ros2_control: 'ros2_control',
  'TU Munich': 'TU Munich',
  'C++': 'C++',
  'ROS 2': 'ROS 2',
  controller: 'controller',
  mpc_controller_node: 'mpc_controller_node',
  decision_making: 'decision_making',
  state_machine_node: 'state_machine_node',
  perception: 'perception',
  lane_detection_node: 'lane_detection_node',
  IDLE: 'IDLE',
  FOLLOW: 'FOLLOW',
  EMERGENCY_BRAKE: 'EMERGENCY_BRAKE',
  BACK_OFF: 'BACK_OFF',
  STOP_TRAFFIC_LIGHT: 'STOP_TRAFFIC_LIGHT',
  GOAL_REACHED: 'GOAL_REACHED',
  '20 Hz': '20 Hz',
  '25 steps': '25 steps',
  '0.1 s (2.5 s horizon)': '0,1 s (2,5 s Horizont)',
  '18.0 m': '18,0 m',
  '0.5 s': '0,5 s',
  '1.0 s': '1,0 s',
  '3.5': '3,5',
  '0.5': '0,5',
  '0.2': '0,2',
  '1.5': '1,5',
  '1.0': '1,0',
  '206.9 s': '206,9 s',
  '752 m': '752 m',
  '3.6 m/s': '3,6 m/s',
  '32.5 s': '32,5 s',
  '16% of the lap': '16 % der Runde',
  '91.7%': '91,7 %',
  '92.4%': '92,4 %',
  '10 Nm': '10 Nm',
  '1 kHz': '1 kHz',
}
