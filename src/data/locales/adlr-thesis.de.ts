export const adlrThesisTranslations: Record<string, string> = {
  '2023': '2023',
  'A neural network instead of raycasting': 'Ein neuronales Netz statt Raycasting',
  'Tactile penetration modeling for robotic fine manipulation via learned directional distances':
    'Modellierung von Eindringtiefen für die robotische Feinmanipulation mithilfe gelernter Richtungsdistanzen',
  'Winter Semester 2026': 'Wintersemester 2026',
  'Advanced Deep Learning for Robotics, TU Munich':
    'Advanced Deep Learning for Robotics, TU München',
  'Pair project': 'Zweierprojekt',
  Completed: 'Abgeschlossen',
  'A neural network that answers ray queries against an object, replacing mesh raycasting in tactile simulation with about 32x faster inference at 93.8% average accuracy.':
    'Ein neuronales Netz beantwortet Strahlenabfragen an Objekten und ersetzt Mesh-Raycasts in taktilen Simulationen. Die Inferenz ist etwa 32-mal schneller und erreicht eine durchschnittliche Genauigkeit von 93,8 %.',
  PyTorch: 'PyTorch',
  'NVIDIA Warp': 'NVIDIA Warp',
  CUDA: 'CUDA',
  'Directional distances': 'Richtungsdistanzen',
  'Advanced Deep Learning for Robotics · Winter Semester 2026':
    'Advanced Deep Learning for Robotics · Wintersemester 2026',
  overlay: 'overlay',
  'Horse · α = 1': 'Pferd · α = 1',
  'Dog · α = 0': 'Hund · α = 0',
  'Six renderings of a mesh, colored by depth, morphing step by step from a horse (top left) into a dog (bottom right).':
    'Sechs nach Tiefe eingefärbte Mesh-Darstellungen, die sich schrittweise von einem Pferd (oben links) zu einem Hund (unten rechts) verwandeln.',
  'Interpolating between a horse (top left) and a dog (bottom right) by mixing their latent vectors in six steps, from α = 1 to α = 0.':
    'Interpolation zwischen einem Pferd (oben links) und einem Hund (unten rechts) durch Mischen ihrer latenten Vektoren in sechs Schritten, von α = 1 bis α = 0.',
  'Faster inference': 'Schnellere Inferenz',
  '32x': '32-fach',
  'average inference time 0.0094 s vs. 0.2993 s for raycasting, over ten objects':
    'durchschnittliche Inferenzzeit: 0,0094 s gegenüber 0,2993 s beim Raycasting, über zehn Objekte',
  'Average accuracy': 'Durchschnittliche Genauigkeit',
  '93.84%': '93,84 %',
  'rays predicted within 0.05 of the raycast distance':
    'Anteil der Strahlen, deren vorhergesagte Distanz höchstens 0,05 von der Raycast-Distanz abweicht',
  Correlation: 'Korrelation',
  '0.918': '0,918',
  'between network output and raycast values': 'zwischen Netzwerkausgabe und Raycast-Werten',
  Objective: 'Zielsetzung',
  'Raycasting is a computational bottleneck for fine tactile simulation in robotic manipulation. The solution: an efficient neural network that answers the same distance queries with fast inference.':
    'Raycasting ist ein Rechenengpass bei der taktilen Simulation für robotische Feinmanipulation. Die Lösung: ein effizientes neuronales Netz, das dieselben Distanzabfragen mit hoher Inferenzgeschwindigkeit beantwortet.',
  Method: 'Methode',
  'A neural network replaces the raycaster. It is conditioned on a latent vector per object, so one network can represent many shapes.':
    'Ein neuronales Netz ersetzt den Raycaster. Es wird durch einen latenten Vektor pro Objekt konditioniert, sodass ein einziges Netz viele Formen darstellen kann.',
  'Input: a ray (a point and a direction, 6 values) plus the 128-dimensional latent vector of the object. Output: the distance along the ray, or a miss.':
    'Eingabe: ein Strahl (ein Punkt und eine Richtung, 6 Werte) sowie der 128-dimensionale latente Vektor des Objekts. Ausgabe: die Distanz entlang des Strahls oder kein Treffer.',
  'Architecture: an MLP with 16 layers of 512 units, ReLU activations, He initialization and skip connections every 8 layers. 3.7 million parameters in total.':
    'Architektur: ein MLP mit 16 Schichten zu je 512 Einheiten, ReLU-Aktivierungen, He-Initialisierung und Skip Connections alle 8 Schichten. Insgesamt 3,7 Millionen Parameter.',
  'Every object gets its own latent vector, initialized randomly and learned during training. Because all shapes share one latent space, mixing two latent vectors morphs one shape into another.':
    'Jedes Objekt erhält einen eigenen latenten Vektor, der zufällig initialisiert und während des Trainings gelernt wird. Da alle Formen denselben latenten Raum verwenden, lässt sich durch Mischen zweier latenter Vektoren eine Form in eine andere überführen.',
  'Data generation': 'Datengenerierung',
  'Meshes are loaded with Trimesh, rescaled and centered.':
    'Meshes werden mit Trimesh geladen, neu skaliert und zentriert.',
  'Query points are sampled randomly in a spherical shell around the mesh, and jitter is added to each point to get more samples.':
    'Abfragepunkte werden zufällig in einer Kugelschale um das Mesh gezogen. Jeder dieser Punkte wird zusätzlich leicht verschoben, um weitere Stichproben zu erzeugen.',
  'Every ray is expressed in a ray-aligned coordinate system in which its direction is the positive z axis.':
    'Jeder Strahl wird in einem strahlgebundenen Koordinatensystem dargestellt, in dem seine Richtung der positiven z-Achse entspricht.',
  'Ground-truth distances come from raycasting with NVIDIA Warp. Sparse edges and sharp corners are oversampled.':
    'Die Referenzdistanzen stammen aus Raycasting mit NVIDIA Warp. Spärlich abgetastete Kantenbereiche und scharfe Ecken werden überabgetastet.',
  'Result: around 250,000 points per object.': 'Ergebnis: etwa 250.000 Punkte pro Objekt.',
  Training: 'Training',
  'L1 loss between predicted and raycast distances, plus a regularizer on the latent vectors.':
    'L1-Verlust zwischen vorhergesagten Distanzen und Raycast-Distanzen sowie ein Regularisierungsterm für die latenten Vektoren.',
  'Dropout of 0.1, weight decay of 1e-5 and dynamic noise injected during training.':
    'Dropout von 0,1, Weight Decay von 1e-5 und während des Trainings eingespeistes dynamisches Rauschen.',
  Results: 'Ergebnisse',
  'Performance stays stable across all ten objects. Raycasting (RC) is compared with the network (NN).':
    'Die Leistung bleibt über alle zehn Objekte hinweg stabil. Raycasting (RC) wird mit dem neuronalen Netz (NN) verglichen.',
  'Inference time, accuracy and correlation per object.':
    'Inferenzzeit, Genauigkeit und Korrelation pro Objekt.',
  Object: 'Objekt',
  'RC time': 'RC-Zeit',
  'NN time': 'NN-Zeit',
  Loss: 'Verlust',
  Accuracy: 'Genauigkeit',
  Controller: 'Controller',
  '0.3165 s': '0,3165 s',
  '0.0106 s': '0,0106 s',
  '0.1249': '0,1249',
  '89.54%': '89,54 %',
  '0.854': '0,854',
  Screw: 'Schraube',
  '0.2532 s': '0,2532 s',
  '0.0092 s': '0,0092 s',
  '0.0972': '0,0972',
  '93.66%': '93,66 %',
  '0.932': '0,932',
  Bottle: 'Flasche',
  '0.2619 s': '0,2619 s',
  '0.0111 s': '0,0111 s',
  '0.0887': '0,0887',
  '95.53%': '95,53 %',
  '0.941': '0,941',
  Cube: 'Würfel',
  '0.2889 s': '0,2889 s',
  '0.0120 s': '0,0120 s',
  '0.0883': '0,0883',
  '95.88%': '95,88 %',
  '0.948': '0,948',
  Dog: 'Hund',
  '0.2616 s': '0,2616 s',
  '0.0077 s': '0,0077 s',
  '0.0875': '0,0875',
  '93.80%': '93,80 %',
  '0.925': '0,925',
  Cat: 'Katze',
  '0.2958 s': '0,2958 s',
  '0.0088 s': '0,0088 s',
  '0.1003': '0,1003',
  '94.14%': '94,14 %',
  '0.924': '0,924',
  Horse: 'Pferd',
  '0.3331 s': '0,3331 s',
  '0.0073 s': '0,0073 s',
  '0.0791': '0,0791',
  '94.81%': '94,81 %',
  '0.935': '0,935',
  Lion: 'Löwe',
  '0.3092 s': '0,3092 s',
  '0.0089 s': '0,0089 s',
  '0.0808': '0,0808',
  '94.49%': '94,49 %',
  '0.931': '0,931',
  Wildcat: 'Wildkatze',
  '0.3620 s': '0,3620 s',
  '0.0097 s': '0,0097 s',
  '0.0965': '0,0965',
  '93.52%': '93,52 %',
  '0.909': '0,909',
  Bear: 'Bär',
  '0.3202 s': '0,3202 s',
  '0.0086 s': '0,0086 s',
  '0.1206': '0,1206',
  '93.02%': '93,02 %',
  '0.883': '0,883',
  Average: 'Durchschnitt',
  '0.2993 s': '0,2993 s',
  '0.0094 s': '0,0094 s',
  '0.0954': '0,0954',
  'Accuracy is the share of rays predicted within 0.05 of the raycast distance.':
    'Die Genauigkeit gibt den Anteil der Strahlen an, deren vorhergesagte Distanz höchstens 0,05 von der Raycast-Distanz abweicht.',
  Reconstruction: 'Rekonstruktion',
  'Depth images are rendered from the front view, and surfaces are rebuilt with Poisson surface reconstruction after outlier removal.':
    'Tiefenbilder werden aus der Vorderansicht gerendert. Nach dem Entfernen von Ausreißern werden die Oberflächen mit Poisson-Oberflächenrekonstruktion neu aufgebaut.',
  'Reconstructed meshes colored by distance: a dog, a cat, a horse, another dog, a game controller and a cylindrical object.':
    'Nach Distanz eingefärbte rekonstruierte Meshes: ein Hund, eine Katze, ein Pferd, ein weiterer Hund, ein Gamecontroller und ein zylindrisches Objekt.',
  'Meshes reconstructed from the network predictions.':
    'Aus den Netzvorhersagen rekonstruierte Meshes.',
  'Estimating anthropometric data from footstep sounds':
    'Schätzung anthropometrischer Merkmale anhand von Schrittgeräuschen',
  'Bachelor thesis, first place at TDK 2023': 'Bachelorarbeit, 1. Platz beim TDK 2023',
  'Bachelor thesis, Budapest University of Technology and Economics':
    'Bachelorarbeit, Budapest University of Technology and Economics',
  'Can the sound of walking reveal body mass, height and age? Footstep recordings are turned into mel-spectrograms and fed to a CNN that predicts all three values.':
    'Lassen sich Körpermasse, Körpergröße und Alter aus Gehgeräuschen ableiten? Schrittaufnahmen werden in Mel-Spektrogramme umgewandelt und einem CNN zugeführt, das alle drei Werte vorhersagt.',
  CNN: 'CNN',
  Audio: 'Audio',
  librosa: 'librosa',
  'Bachelor thesis · TDK 2023, first place': 'Bachelorarbeit · TDK 2023, 1. Platz',
  'Three scatter plots of estimated versus actual body mass, height and age, with points following the diagonal.':
    'Drei Streudiagramme der geschätzten und tatsächlichen Körpermasse, Körpergröße und des Alters; die Punkte liegen nahe an der Diagonalen.',
  'Estimated versus actual body mass, height and age on the test set.':
    'Geschätzte und tatsächliche Körpermasse, Körpergröße und Alter im Testdatensatz.',
  'Test-set results': 'Ergebnisse im Testdatensatz',
  'Body mass': 'Körpermasse',
  '3.8 kg': '3,8 kg',
  'mean absolute error, R² 0.79': 'mittlerer absoluter Fehler, R² 0,79',
  Height: 'Körpergröße',
  '1.8 cm': '1,8 cm',
  'mean absolute error, R² 0.83': 'mittlerer absoluter Fehler, R² 0,83',
  Age: 'Alter',
  '2.7 years': '2,7 Jahre',
  'mean absolute error, R² 0.90': 'mittlerer absoluter Fehler, R² 0,90',
  'The idea': 'Die Idee',
  'Can the sound of someone walking reveal how heavy, how tall and how old they are? The thesis trains a neural network on recordings of people walking on a treadmill to estimate body mass, height and age from their footsteps alone.':
    'Verrät das Geräusch einer gehenden Person, wie schwer, groß und alt sie ist? In der Arbeit wird ein neuronales Netz mit Aufnahmen von Personen auf einem Laufband trainiert, um allein aus ihren Schritten Körpermasse, Körpergröße und Alter zu schätzen.',
  'Stereo recordings of people walking on a treadmill are split into individual steps by peak detection on the signal. Every step becomes one sample.':
    'Stereoaufnahmen von Personen auf einem Laufband werden mithilfe einer Peaksuche im Signal in einzelne Schritte zerlegt. Jeder Schritt bildet eine Stichprobe.',
  'Each step is converted into a 256-band mel-spectrogram, which the network receives as a 3-channel 256 × 256 image.':
    'Jeder Schritt wird in ein 256-Band-Mel-Spektrogramm umgewandelt, das dem Netz als 3-kanaliges Bild mit 256 × 256 Pixeln übergeben wird.',
  'The model is a self-built convolutional neural network in PyTorch with Inception-style multi-kernel blocks: parallel 1 × 1, 3 × 3 and 5 × 5 convolutions, followed by max pooling and dropout.':
    'Das Modell ist ein selbst entwickeltes Convolutional Neural Network (CNN) in PyTorch mit Multi-Kernel-Blöcken im Inception-Stil: parallele Faltungen mit 1 × 1-, 3 × 3- und 5 × 5-Kernen, gefolgt von Max Pooling und Dropout.',
  'It has three regression outputs and predicts body mass, height and age at the same time.':
    'Das Modell hat drei Regressionsausgaben und sagt Körpermasse, Körpergröße und Alter gleichzeitig voraus.',
  'Batch size 64, learning rate 1e-4, dropout 0.2, and early stopping with a patience of 15 epochs.':
    'Batchgröße 64, Lernrate 1e-4, Dropout 0,2 und Early Stopping nach 15 Epochen ohne Verbesserung.',
  'Training ran for 73 epochs, about 4 hours on a local GTX 1080 GPU.':
    'Das Training lief über 73 Epochen und dauerte auf einer lokalen GTX 1080-GPU etwa 4 Stunden.',
  'Results from the July 2024 model revision. Error and fit on the held-out test set, for each of the three targets.':
    'Ergebnisse der Modellüberarbeitung vom Juli 2024. Fehler und Anpassungsgüte auf dem zurückgehaltenen Testdatensatz für alle drei Zielgrößen.',
  'Test-set error and fit per target.': 'Fehler und Anpassungsgüte im Testdatensatz je Zielgröße.',
  Target: 'Zielgröße',
  'Mean absolute error': 'Mittlerer absoluter Fehler',
  'Mean squared error': 'Mittlerer quadratischer Fehler',
  'R²': 'R²',
  '3.81 kg': '3,81 kg',
  '59.56 kg²': '59,56 kg²',
  '0.793': '0,793',
  '1.80 cm': '1,80 cm',
  '15.53 cm²': '15,53 cm²',
  '0.833': '0,833',
  '2.74 years': '2,74 Jahre',
  '30.61 years²': '30,61 Jahre²',
  '0.902': '0,902',
  'First place at the Scientific Student Circle Conference (TDK), Budapest, 16 November 2023, with the paper “Estimating Anthropometric Data Based on Footstep-Sound Recordings”.':
    '1. Platz bei der Scientific Student Circle Conference (TDK) in Budapest am 16. November 2023 mit der Arbeit „Estimating Anthropometric Data Based on Footstep-Sound Recordings“.',
  'The bachelor thesis was graded 5 (out of 5).':
    'Die Bachelorarbeit wurde mit 5 (von 5) bewertet.',
  'TDK (Scientific Student Circle)': 'TDK (Scientific Student Circle)',
  Recognition: 'Auszeichnung',
}
