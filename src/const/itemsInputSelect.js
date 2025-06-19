const typesOfActivities = [
  { key: "Estudio de prueba", label: "Estudio de prueba" },
  {
    key: "Practica de aplicación de prueba",
    label: "Practica de aplicación de prueba",
  },
  {
    key: "Aplicación de prueba a paciente",
    label: "Aplicación de prueba a paciente",
  },
  { key: "Calificar prueba", label: "Calificar prueba" },
  { key: "Otro", label: "Otro" },
];

const areasOfStudy = [
  { key: "Social", label: "Social" },
  { key: "Neuropsicológicas", label: "Neuropsicológicas" },
  { key: "Clínica", label: "Clínica" },
  { key: "Proyectivas", label: "Proyectivas" },
  { key: "Organizacional", label: "Organizacional" },
  { key: "Educativa", label: "Educativa" },
  { key: "Inteligencia", label: "Inteligencia" },
  { key: "Generales", label: "Generales" },
];

const pruebasClinicas = [
  {
    key: "CMAS-R Escala de ansiedad en niños –(evalúa la ansiedad en niños con problemas de estrés académico, ansiedad ante los exámenes, conflictos familiares, adicciones, conductas perturbadoras, problemas de personalidad)",
    label:
      "CMAS-R Escala de ansiedad en niños –(evalúa la ansiedad en niños con problemas de estrés académico, ansiedad ante los exámenes, conflictos familiares, adicciones, conductas perturbadoras, problemas de personalidad)",
  },
  {
    key: "AMAS Escala de ansiedad manifiesta en adultos –(evalúa la ansiedad en adultos mayores a partir de los 60 años de edad)",
    label:
      "AMAS Escala de ansiedad manifiesta en adultos –(evalúa la ansiedad en adultos mayores a partir de los 60 años de edad)",
  },
  {
    key: "AEPS Sistema de evaluación, valoración, y planeamiento de programa para infantes y preescolares –(medir la evolución de las habilidades funcionales y las necesidades de infantes y preescolares con discapacidad o en riesgo de presentar retrasos en el desarrollo)",
    label:
      "AEPS Sistema de evaluación, valoración, y planeamiento de programa para infantes y preescolares –(medir la evolución de las habilidades funcionales y las necesidades de infantes y preescolares con discapacidad o en riesgo de presentar retrasos en el desarrollo)",
  },
  {
    key: "MANUAL TERAPIA DE PAREJA –(evalúa cuales son las distorsiones cognitivas y creencias presentes en ambos miembros de la pareja)",
    label:
      "MANUAL TERAPIA DE PAREJA –(evalúa cuales son las distorsiones cognitivas y creencias presentes en ambos miembros de la pareja)",
  },
  {
    key: "STAI Cuestionario de ansiedad estado - rasgo –(evalúa la ansiedad como estado<<condición emocional transitoria>> y ansiedad como rasgo<<propensión ansiosa relativamente estable>>)",
    label:
      "STAI Cuestionario de ansiedad estado - rasgo –(evalúa la ansiedad como estado<<condición emocional transitoria>> y ansiedad como rasgo<<propensión ansiosa relativamente estable>>)",
  },
  {
    key: "BCSE Test breve para la evaluación del estado cognitivo –(evalúa brevemente el estado el funcionamiento del estado cognitivo general de los adultos, de los que se sospecha, déficit de memoria o trastornos neurológicos psiquiátricos o del desarrollo)",
    label:
      "BCSE Test breve para la evaluación del estado cognitivo –(evalúa brevemente el estado el funcionamiento del estado cognitivo general de los adultos, de los que se sospecha, déficit de memoria o trastornos neurológicos psiquiátricos o del desarrollo)",
  },
  {
    key: "TED – TED R Test de esperanza desesperanza –(evalúa la esperanza y la desesperanza como variable diagnostica y pronostica de la salud – enfermedad y de los componentes asociados a la calidad de vida personal, familiar y social)",
    label:
      "TED – TED R Test de esperanza desesperanza –(evalúa la esperanza y la desesperanza como variable diagnostica y pronostica de la salud – enfermedad y de los componentes asociados a la calidad de vida personal, familiar y social)",
  },
  {
    key: "BSI 18 Inventario breve de 18 síntomas -(evalúa tres dimensiones <<somatización, depresión, ansiedad>>. Proporciona información sobre el nivel de malestar psicológico y los síntomas psiquiátricos mas prevalentes de los trastornos psicológicos en población general y medica)",
    label:
      "BSI 18 Inventario breve de 18 síntomas -(evalúa tres dimensiones <<somatización, depresión, ansiedad>>. Proporciona información sobre el nivel de malestar psicológico y los síntomas psiquiátricos mas prevalentes de los trastornos psicológicos en población general y medica)",
  },
  {
    key: "SMAT -test de motivación en adolescentes –(evalúa rasgos básicos de las motivaciones)",
    label:
      "SMAT -test de motivación en adolescentes –(evalúa rasgos básicos de las motivaciones)",
  },
  {
    key: "OQ Inventario de sobre ingesta alimentaria –(evalúa hábitos pensamientos y actitudes claves relacionados con la obesidad)",
    label:
      "OQ Inventario de sobre ingesta alimentaria –(evalúa hábitos pensamientos y actitudes claves relacionados con la obesidad)",
  },
  {
    key: "EVALUACION DE LA COMPETENCIA PARENTAL –(evalúa el ejercicio de la parentalidad en familias en riesgo social, analizar la permanencia de los niños que están bajo su cuidado)",
    label:
      "EVALUACION DE LA COMPETENCIA PARENTAL –(evalúa el ejercicio de la parentalidad en familias en riesgo social, analizar la permanencia de los niños que están bajo su cuidado)",
  },
  {
    key: "INCA VISA Inventario de calidad de vida y salud –(evalúa la eficacia de las intervenciones considerando la agresividad tanto de padecimientos como de los tratamientos empleados)",
    label:
      "INCA VISA Inventario de calidad de vida y salud –(evalúa la eficacia de las intervenciones considerando la agresividad tanto de padecimientos como de los tratamientos empleados)",
  },
  {
    key: "CVI-CVIP Cuestionario de evaluación de la calidad de vida en la infancia –(permite conocer como los niños perciben su calidad de vida desde su propio punto de vista y obtener al mismo tiempo información del padre)",
    label:
      "CVI-CVIP Cuestionario de evaluación de la calidad de vida en la infancia –(permite conocer como los niños perciben su calidad de vida desde su propio punto de vista y obtener al mismo tiempo información del padre)",
  },
  {
    key: "TECA Test de empatía cognitiva y afectiva –(apreciación de la capacidad empática desde una aproximación global de empatía y 4 escalas especificas: adopción de perspectivas, comprensión emocional, estrés empático y alegría empática)",
    label:
      "TECA Test de empatía cognitiva y afectiva –(apreciación de la capacidad empática desde una aproximación global de empatía y 4 escalas especificas: adopción de perspectivas, comprensión emocional, estrés empático y alegría empática)",
  },
  {
    key: "SWS Inventario de salud mental, estrés y trabajo –(este se constituye con las escalas de estrés y apoyos correspondientes a las áreas de trabajo y personal y social)",
    label:
      "SWS Inventario de salud mental, estrés y trabajo –(este se constituye con las escalas de estrés y apoyos correspondientes a las áreas de trabajo y personal y social)",
  },
  {
    key: "BARON Inventario de inteligencia emocional de BARON: versión para jóvenes de 7-18 años –(evaluación de la inteligencia emocional y de sus diferentes componentes socioemocionales por medio de varias escalas <<intrapersonal, interpersonal, adaptabilidad, manejo de estrés y estado de ánimo general>>)",
    label:
      "BARON Inventario de inteligencia emocional de BARON: versión para jóvenes de 7-18 años –(evaluación de la inteligencia emocional y de sus diferentes componentes socioemocionales por medio de varias escalas <<intrapersonal, interpersonal, adaptabilidad, manejo de estrés y estado de ánimo general>>)",
  },
  {
    key: "ESCALA INTEGRAL Escala integral: evaluación objetiva y subjetiva de la calidad de vida de personas con discapacidad intelectual –(la escala integral es un instrumento único y original dirigido a evaluar la calidad de vida de personas con discapacidad intelectual, teniendo en cuenta aspectos objetivos y subjetivos)CAG Cuestionario de autoconcepto –(evalúa el grado de aceptación y satisfacción)",
    label:
      "ESCALA INTEGRAL Escala integral: evaluación objetiva y subjetiva de la calidad de vida de personas con discapacidad intelectual –(la escala integral es un instrumento único y original dirigido a evaluar la calidad de vida de personas con discapacidad intelectual, teniendo en cuenta aspectos objetivos y subjetivos)CAG Cuestionario de autoconcepto –(evalúa el grado de aceptación y satisfacción)",
  },
  {
    key: "CAG Cuestionario de autoconcepto –(evalúa el grado de aceptación y satisfacción)",
    label:
      "CAG Cuestionario de autoconcepto –(evalúa el grado de aceptación y satisfacción)",
  },
  {
    key: "BASC Sistema de evaluación de la conducta de niños y adolescentes –(mide numerosos aspectos del comportamiento y la personalidad incluyendo dimensiones positivas <<adaptativas>> como negativas <<clínicas>>)EMA Escala multidimensional de la asertividad –(evalúa el tipo y grado de asertividad que presenta el individuo)ESPERI Cuestionario para la detección de los trastornos del comportamiento en niños y adolescentes –(detección precoz de los trastornos del comportamiento en el aula de niños y adolescentes)PBIU Manual de psicoterapia breve intensiva y de urgencia –(mide la percepción del sujeto sobre las conductas y actitudes de sus cuidadores parar conocer la contribución parental en el apego y establecer el tipo de vinculo del sujeto)SARA Manual para la valoración del riesgo de violencia contra la pareja –(es un instrumento útil para la predicción de la violencia contra la pareja sentimental)",
    label:
      "BASC Sistema de evaluación de la conducta de niños y adolescentes –(mide numerosos aspectos del comportamiento y la personalidad incluyendo dimensiones positivas <<adaptativas>> como negativas <<clínicas>>)EMA Escala multidimensional de la asertividad –(evalúa el tipo y grado de asertividad que presenta el individuo)ESPERI Cuestionario para la detección de los trastornos del comportamiento en niños y adolescentes –(detección precoz de los trastornos del comportamiento en el aula de niños y adolescentes)PBIU Manual de psicoterapia breve intensiva y de urgencia –(mide la percepción del sujeto sobre las conductas y actitudes de sus cuidadores parar conocer la contribución parental en el apego y establecer el tipo de vinculo del sujeto)SARA Manual para la valoración del riesgo de violencia contra la pareja –(es un instrumento útil para la predicción de la violencia contra la pareja sentimental)",
  },
  {
    key: "EMA Escala multidimensional de la asertividad –(evalúa el tipo y grado de asertividad que presenta el individuo)ESPERI Cuestionario para la detección de los trastornos del comportamiento en niños y adolescentes –(detección precoz de los trastornos del comportamiento en el aula de niños y adolescentes)PBIU Manual de psicoterapia breve intensiva y de urgencia –(mide la percepción del sujeto sobre las conductas y actitudes de sus cuidadores parar conocer la contribución parental en el apego y establecer el tipo de vinculo del sujeto)SARA Manual para la valoración del riesgo de violencia contra la pareja –(es un instrumento útil para la predicción de la violencia contra la pareja sentimental)",
    label:
      "EMA Escala multidimensional de la asertividad –(evalúa el tipo y grado de asertividad que presenta el individuo)ESPERI Cuestionario para la detección de los trastornos del comportamiento en niños y adolescentes –(detección precoz de los trastornos del comportamiento en el aula de niños y adolescentes)PBIU Manual de psicoterapia breve intensiva y de urgencia –(mide la percepción del sujeto sobre las conductas y actitudes de sus cuidadores parar conocer la contribución parental en el apego y establecer el tipo de vinculo del sujeto)SARA Manual para la valoración del riesgo de violencia contra la pareja –(es un instrumento útil para la predicción de la violencia contra la pareja sentimental)",
  },
  {
    key: "ESPERI Cuestionario para la detección de los trastornos del comportamiento en niños y adolescentes –(detección precoz de los trastornos del comportamiento en el aula de niños y adolescentes)PBIU Manual de psicoterapia breve intensiva y de urgencia –(mide la percepción del sujeto sobre las conductas y actitudes de sus cuidadores parar conocer la contribución parental en el apego y establecer el tipo de vinculo del sujeto)SARA Manual para la valoración del riesgo de violencia contra la pareja –(es un instrumento útil para la predicción de la violencia contra la pareja sentimental)",
    label:
      "ESPERI Cuestionario para la detección de los trastornos del comportamiento en niños y adolescentes –(detección precoz de los trastornos del comportamiento en el aula de niños y adolescentes)PBIU Manual de psicoterapia breve intensiva y de urgencia –(mide la percepción del sujeto sobre las conductas y actitudes de sus cuidadores parar conocer la contribución parental en el apego y establecer el tipo de vinculo del sujeto)SARA Manual para la valoración del riesgo de violencia contra la pareja –(es un instrumento útil para la predicción de la violencia contra la pareja sentimental)",
  },
  {
    key: "PBIU Manual de psicoterapia breve intensiva y de urgencia –(mide la percepción del sujeto sobre las conductas y actitudes de sus cuidadores parar conocer la contribución parental en el apego y establecer el tipo de vinculo del sujeto)SARA Manual para la valoración del riesgo de violencia contra la pareja –(es un instrumento útil para la predicción de la violencia contra la pareja sentimental)",
    label:
      "PBIU Manual de psicoterapia breve intensiva y de urgencia –(mide la percepción del sujeto sobre las conductas y actitudes de sus cuidadores parar conocer la contribución parental en el apego y establecer el tipo de vinculo del sujeto)SARA Manual para la valoración del riesgo de violencia contra la pareja –(es un instrumento útil para la predicción de la violencia contra la pareja sentimental)",
  },
  {
    key: "SARA Manual para la valoración del riesgo de violencia contra la pareja –(es un instrumento útil para la predicción de la violencia contra la pareja sentimental)",
    label:
      "SARA Manual para la valoración del riesgo de violencia contra la pareja –(es un instrumento útil para la predicción de la violencia contra la pareja sentimental)",
  },
  {
    key: "SVR-20 Manual de valoración de riesgo de violencia sexual –(evalúa el riesgo de violencia sexual de delincuentes adultos a partir de 20 ítems relativos a factores de riesgo tanto estáticos como dinámicos)",
    label:
      "SVR-20 Manual de valoración de riesgo de violencia sexual –(evalúa el riesgo de violencia sexual de delincuentes adultos a partir de 20 ítems relativos a factores de riesgo tanto estáticos como dinámicos)",
  },
  {
    key: "CAS Cuestionario de ansiedad infantil –(evalúa la ansiedad infantil)",
    label:
      "CAS Cuestionario de ansiedad infantil –(evalúa la ansiedad infantil)",
  },
  {
    key: "SCL-90-R Inventario de 90 síntomas –(evalúa la presencia de signos generales de ansiedad tales como: nerviosismo, tensión, ataques de pánico, miedos, sentimientos y acciones características de la presencia de efectos negativos de enojo)",
    label:
      "SCL-90-R Inventario de 90 síntomas –(evalúa la presencia de signos generales de ansiedad tales como: nerviosismo, tensión, ataques de pánico, miedos, sentimientos y acciones características de la presencia de efectos negativos de enojo)",
  },
  {
    key: "CASIA Cuestionario de conductas antisociales en la infancia y la adolescencia –(evalúa la conducta antisocial)",
    label:
      "CASIA Cuestionario de conductas antisociales en la infancia y la adolescencia –(evalúa la conducta antisocial)",
  },
  {
    key: "A-D Cuestionario de conductas antisociales - delictivas –(evaluar dos dimensiones diferenciadas: la conducta antisocial y delictiva de la conducta desviada, recogiendo un amplio abanico de conductas sociales próximas a la delincuencia)",
    label:
      "A-D Cuestionario de conductas antisociales - delictivas –(evaluar dos dimensiones diferenciadas: la conducta antisocial y delictiva de la conducta desviada, recogiendo un amplio abanico de conductas sociales próximas a la delincuencia)",
  },
  {
    key: "MMSE Examen cognoscitivo mini- mental-(evalúa la sospecha de síntomas compatibles con demencias)",
    label:
      "MMSE Examen cognoscitivo mini- mental-(evalúa la sospecha de síntomas compatibles con demencias)",
  },
  {
    key: "MSI-R Inventario de satisfacción marital revisado –(identificar los factores de tención que originan conflictos en la pareja enfocándose en las posibilidades de implementar un trabajo de intervención)",
    label:
      "MSI-R Inventario de satisfacción marital revisado –(identificar los factores de tención que originan conflictos en la pareja enfocándose en las posibilidades de implementar un trabajo de intervención)",
  },
  {
    key: "GADS Escala Gilliam para evaluar trastornos de Asperger –(evalúa la calificación conductual cuyo propósito es ayudar a que los profesionales diagnostiquen el síndrome de asperger)",
    label:
      "GADS Escala Gilliam para evaluar trastornos de Asperger –(evalúa la calificación conductual cuyo propósito es ayudar a que los profesionales diagnostiquen el síndrome de asperger)",
  },
  {
    key: "BDI-II Inventario de depresión de Beck-II –(diseñado para evaluar la sintomatología depresiva)",
    label:
      "BDI-II Inventario de depresión de Beck-II –(diseñado para evaluar la sintomatología depresiva)",
  },
  {
    key: "CDS Cuestionario de depresión para niños –(evalúa la depresión en niños y adolescentes, tanto en los aspectos globales <<el positivo y el depresivo>> como en los específicos)",
    label:
      "CDS Cuestionario de depresión para niños –(evalúa la depresión en niños y adolescentes, tanto en los aspectos globales <<el positivo y el depresivo>> como en los específicos)",
  },
  {
    key: "BAI Inventario de ansiedad de Beck –(valorar los síntomas somáticos de ansiedad, tanto en desordenes de ansiedad como en cuadros depresivos)",
    label:
      "BAI Inventario de ansiedad de Beck –(valorar los síntomas somáticos de ansiedad, tanto en desordenes de ansiedad como en cuadros depresivos)",
  },
  {
    key: "MACI Inventario clínico para adolescentes de Millón –(evalua el funcionamiento psicológico de adolescentes a través de 3 grandes dominios presentes en el desarrollo y resolución de los desafíos en la adolescencia <<estructuración de la personalidad, reacción frente a situaciones conflictivas, presencia de cuadros psicopatológicos de alta prevalencia)CHIPS Entrevistas para síndromes psiquiátricos en niños y adolescentes –(obtener información de manera rápida y eficiente que permita sondear la presencia de 20 trastornos de niños y adolescentes)",
    label:
      "MACI Inventario clínico para adolescentes de Millón –(evalua el funcionamiento psicológico de adolescentes a través de 3 grandes dominios presentes en el desarrollo y resolución de los desafíos en la adolescencia <<estructuración de la personalidad, reacción frente a situaciones conflictivas, presencia de cuadros psicopatológicos de alta prevalencia)CHIPS Entrevistas para síndromes psiquiátricos en niños y adolescentes –(obtener información de manera rápida y eficiente que permita sondear la presencia de 20 trastornos de niños y adolescentes)",
  },
  {
    key: "CHIPS Entrevistas para síndromes psiquiátricos en niños y adolescentes –(obtener información de manera rápida y eficiente que permita sondear la presencia de 20 trastornos de niños y adolescentes)",
    label:
      "CHIPS Entrevistas para síndromes psiquiátricos en niños y adolescentes –(obtener información de manera rápida y eficiente que permita sondear la presencia de 20 trastornos de niños y adolescentes)",
  },
  {
    key: "MMPI-2 Inventario Multifasico de personalidad de Minnesota-2",
    label: "MMPI-2 Inventario Multifasico de personalidad de Minnesota-2",
  },
];

const pruebasNeuroPsicologicas = [
  {
    key: "BANETA Batería neuropsicológica para evaluación de los trastornos del aprendizaje –(evalúa los trastornos del aprendizaje, así como a poblaciones clínicas que presentan de manera segundaria problemas de aprendizaje<<trastornos del lenguaje, discapacidad intelectual>>)",
    label:
      "BANETA Batería neuropsicológica para evaluación de los trastornos del aprendizaje –(evalúa los trastornos del aprendizaje, así como a poblaciones clínicas que presentan de manera segundaria problemas de aprendizaje<<trastornos del lenguaje, discapacidad intelectual>>)",
  },
  {
    key: "ENI Evaluación neuropsicológica infantil – (mide atención, habilidades constructivas, memoria de codificación, habilidades perceptuales, memoria de evocación, lenguaje, habilidades metalingüísticas, lectura, escritura, aritmética, habilidades espaciales.",
    label:
      "ENI Evaluación neuropsicológica infantil – (mide atención, habilidades constructivas, memoria de codificación, habilidades perceptuales, memoria de evocación, lenguaje, habilidades metalingüísticas, lectura, escritura, aritmética, habilidades espaciales.",
  },
  {
    key: "NEUROPSI Evaluación neuropsicológica breve en español -(evalúa el comportamiento cognitivo global. Incluya test de orientación, atención, memoria, lenguaje viso espacialidad, viso percepción y funciones ejecutivas.",
    label:
      "NEUROPSI Evaluación neuropsicológica breve en español -(evalúa el comportamiento cognitivo global. Incluya test de orientación, atención, memoria, lenguaje viso espacialidad, viso percepción y funciones ejecutivas.",
  },
  {
    key: "NEUROPSI Neuropsi atención y memoria –(permite evaluar en detalle tipos de atención entre los que se encuentran: la orientación, la atención selectiva, sostenida y el control atencional, así como tipos y etapas de memoria, incluyendo memorias de trabajo y memoria a corto y largo plazo para material verbal y viso espacial.",
    label:
      "NEUROPSI Neuropsi atención y memoria –(permite evaluar en detalle tipos de atención entre los que se encuentran: la orientación, la atención selectiva, sostenida y el control atencional, así como tipos y etapas de memoria, incluyendo memorias de trabajo y memoria a corto y largo plazo para material verbal y viso espacial.",
  },
  {
    key: "DCS Prueba neuropsicológica de memoria y aprendizaje visual –(evalúa la depresión en niños y adolescentes tanto en los aspectos globales <<el positivo y el depresivo>> como en los específicos.TOMAL Test de memoria y aprendizaje <<sistematizado>> -(evalúa memoria y aprendizaje en niños)BANFE- 2 Batería neuropsicológica de funciones ejecutivas y lóbulos frontales- (evalúa procesos cognitivos <<entre ellas las funciones ejecutivas>> que dependen principalmente de la corteza prefrontal.",
    label:
      "DCS Prueba neuropsicológica de memoria y aprendizaje visual –(evalúa la depresión en niños y adolescentes tanto en los aspectos globales <<el positivo y el depresivo>> como en los específicos.TOMAL Test de memoria y aprendizaje <<sistematizado>> -(evalúa memoria y aprendizaje en niños)BANFE- 2 Batería neuropsicológica de funciones ejecutivas y lóbulos frontales- (evalúa procesos cognitivos <<entre ellas las funciones ejecutivas>> que dependen principalmente de la corteza prefrontal.",
  },
  {
    key: "TOMAL Test de memoria y aprendizaje <<sistematizado>> -(evalúa memoria y aprendizaje en niños)BANFE- 2 Batería neuropsicológica de funciones ejecutivas y lóbulos frontales- (evalúa procesos cognitivos <<entre ellas las funciones ejecutivas>> que dependen principalmente de la corteza prefrontal.",
    label:
      "TOMAL Test de memoria y aprendizaje <<sistematizado>> -(evalúa memoria y aprendizaje en niños)BANFE- 2 Batería neuropsicológica de funciones ejecutivas y lóbulos frontales- (evalúa procesos cognitivos <<entre ellas las funciones ejecutivas>> que dependen principalmente de la corteza prefrontal.",
  },
  {
    key: "BANFE- 2 Batería neuropsicológica de funciones ejecutivas y lóbulos frontales- (evalúa procesos cognitivos <<entre ellas las funciones ejecutivas>> que dependen principalmente de la corteza prefrontal.",
    label:
      "BANFE- 2 Batería neuropsicológica de funciones ejecutivas y lóbulos frontales- (evalúa procesos cognitivos <<entre ellas las funciones ejecutivas>> que dependen principalmente de la corteza prefrontal.",
  },
  {
    key: "LURIA Test de luria –(evalúa el desarrollo de las funciones psicológicas superiores en la edad prescolar)",
    label:
      "LURIA Test de luria –(evalúa el desarrollo de las funciones psicológicas superiores en la edad prescolar)",
  },
];

const pruebasProyectivas = [
  {
    key: "H-TPP –(se basa en la técnica básica del dibujo y muestra como somos y como nos gustaría ser, además de nuestro estado de ánimo)",
    label:
      "H-TPP –(se basa en la técnica básica del dibujo y muestra como somos y como nos gustaría ser, además de nuestro estado de ánimo)",
  },
  {
    key: "TAT -CAT- SAT –(evaluación de diversos aspectos de la personalidad <<impulsos, emociones, sentimientos, complejos conflictos etc.>> en situaciones clínicas y normales)",
    label:
      "TAT -CAT- SAT –(evaluación de diversos aspectos de la personalidad <<impulsos, emociones, sentimientos, complejos conflictos etc.>> en situaciones clínicas y normales)",
  },
  {
    key: "TEST WARTEGG –(permite conocer algunos aspectos de la personalidad del candidato, así como su posición frente al mundo, las relaciones interpersonales, estados de ánimo y preferencias)",
    label:
      "TEST WARTEGG –(permite conocer algunos aspectos de la personalidad del candidato, así como su posición frente al mundo, las relaciones interpersonales, estados de ánimo y preferencias)",
  },
  {
    key: "H-T-P Manual y guía de interpretación de la técnica de dibujo proyectiva –(evalúa los rasgos mas importantes de la personalidad)",
    label:
      "H-T-P Manual y guía de interpretación de la técnica de dibujo proyectiva –(evalúa los rasgos mas importantes de la personalidad)",
  },
  {
    key: "PROYECCION DE LA PERSONALIDAD EN EL DIBUJO DE LA FIGURA HUMANA –(evalúa la personalidad a través del dibujo de la figura humana)",
    label:
      "PROYECCION DE LA PERSONALIDAD EN EL DIBUJO DE LA FIGURA HUMANA –(evalúa la personalidad a través del dibujo de la figura humana)",
  },
  {
    key: "TEST DE LA FAMILIA –(evalúa fundamentalmente el estado emocional de un niño, con respecto a su adaptación al medio familiar)",
    label:
      "TEST DE LA FAMILIA –(evalúa fundamentalmente el estado emocional de un niño, con respecto a su adaptación al medio familiar)",
  },
  {
    key: "DIAGNOSTICO RORSCHAGH DE LA PERSONALIDAD",
    label: "DIAGNOSTICO RORSCHAGH DE LA PERSONALIDAD",
  },
];

const pruebasOrganizacionales = [
  {
    key: "NEGO Test de habilidades en la negociación –(evaluación de diferentes aspectos implicados en la negociación <<ascendencia, sumisión, argumentos, respuestas vulgares>>)",
    label:
      "NEGO Test de habilidades en la negociación –(evaluación de diferentes aspectos implicados en la negociación <<ascendencia, sumisión, argumentos, respuestas vulgares>>)",
  },
  {
    key: "PERFIL DE ESTRÉS –( evalúa los factores asociados con el estrés en general, incluyendo los hábitos de salud, los estilos de afrontamiento y bienestar psicológico)",
    label:
      "PERFIL DE ESTRÉS –( evalúa los factores asociados con el estrés en general, incluyendo los hábitos de salud, los estilos de afrontamiento y bienestar psicológico)",
  },
  {
    key: "EAE Escala de apreciación del estrés –(Evalúa situaciones que potencialmente generan estrés, la incidencia y la intensidad con que afectan en la vida del sujeto)",
    label:
      "EAE Escala de apreciación del estrés –(Evalúa situaciones que potencialmente generan estrés, la incidencia y la intensidad con que afectan en la vida del sujeto)",
  },
  {
    key: "IMPIL Evaluación psicológica del estrés por inestabilidad laboral –( tiene como finalidad evaluar y prevenir uno de los principales factores estresores de la sociedad actual: la inestabilidad laboral)",
    label:
      "IMPIL Evaluación psicológica del estrés por inestabilidad laboral –( tiene como finalidad evaluar y prevenir uno de los principales factores estresores de la sociedad actual: la inestabilidad laboral)",
  },
  {
    key: "FIGS Prueba de frases incompletas con aplicación a la industria –(mide 4 áreas: responsabilidad, relaciones interpersonales, motivación y concepto de sí mismo)",
    label:
      "FIGS Prueba de frases incompletas con aplicación a la industria –(mide 4 áreas: responsabilidad, relaciones interpersonales, motivación y concepto de sí mismo)",
  },
  {
    key: "EDO Escala mexicana de desgastes ocupacional –(mide el desgaste ocupacional de adultos dentro de su vida laboral)",
    label:
      "EDO Escala mexicana de desgastes ocupacional –(mide el desgaste ocupacional de adultos dentro de su vida laboral)",
  },
  {
    key: "EVT Escala de violencia en el trabajo Mobbing –(evalúa acoso psicológico en el trabajo)",
    label:
      "EVT Escala de violencia en el trabajo Mobbing –(evalúa acoso psicológico en el trabajo)",
  },
  {
    key: "IPV - INVENTARIO DE PERSONALIDAD PARA BENDEDORES",
    label: "IPV - INVENTARIO DE PERSONALIDAD PARA BENDEDORES",
  },
  {
    key: "ECO- EVALUACIÓN DE COMPETENCIAS ORGANIZACIONALES",
    label: "ECO- EVALUACIÓN DE COMPETENCIAS ORGANIZACIONALES",
  },
  { key: "FB-360°", label: "FB-360°" },
];

const pruebasEducativas = [
  {
    key: "BENDER test gestáltico visomotor de Bender - (Evalúa la función gestáltica visomotora, tanto en niños como en adultos. Además de ello, se puede detectar retraso en la madurez para el aprendizaje, lesión cerebral y retraso mental)",
    label:
      "BENDER test gestáltico visomotor de Bender - (Evalúa la función gestáltica visomotora, tanto en niños como en adultos. Además de ello, se puede detectar retraso en la madurez para el aprendizaje, lesión cerebral y retraso mental)",
  },
  {
    key: "P-IPG Inventario de personalidad de Gordon - (Este perfil mide 4 rasgos de la personalidad que son significativos en el funcionamiento diario del individuo <<ascendencia, responsabilidad, responsabilidad emocional, sociabilidad>>)IPP-R Intereses y preferencias profesionales  - (Evalua los intereses y preferencias profesionales, como por ejempl, orientar la dirección de los estudios y seleccion de la carrera profesional.)",
    label:
      "P-IPG Inventario de personalidad de Gordon - (Este perfil mide 4 rasgos de la personalidad que son significativos en el funcionamiento diario del individuo <<ascendencia, responsabilidad, responsabilidad emocional, sociabilidad>>)IPP-R Intereses y preferencias profesionales  - (Evalua los intereses y preferencias profesionales, como por ejempl, orientar la dirección de los estudios y seleccion de la carrera profesional.)",
  },
  {
    key: "IPP-R Intereses y preferencias profesionales  - (Evalua los intereses y preferencias profesionales, como por ejempl, orientar la dirección de los estudios y seleccion de la carrera profesional.)",
    label:
      "IPP-R Intereses y preferencias profesionales  - (Evalua los intereses y preferencias profesionales, como por ejempl, orientar la dirección de los estudios y seleccion de la carrera profesional.)",
  },
  {
    key: "IPP Intereses y preferencias profesionales - (Se evalúan las preferencias respecto a los 17 campos profesionales)",
    label:
      "IPP Intereses y preferencias profesionales - (Se evalúan las preferencias respecto a los 17 campos profesionales)",
  },
  {
    key: "IRT Inventario de rasgos temperamentales -(Evalúa los rasgos que son estables en cada persona, excluyendo aquellos que reflejan influencias sociales recientes, nuevas experiencias perturbadoras, o las que resultan del dominio de la propaganda)",
    label:
      "IRT Inventario de rasgos temperamentales -(Evalúa los rasgos que son estables en cada persona, excluyendo aquellos que reflejan influencias sociales recientes, nuevas experiencias perturbadoras, o las que resultan del dominio de la propaganda)",
  },
  {
    key: "ISSP-2 Informe de evaluación socio-psicopedagógico -(Mide factores de inteligencia)",
    label:
      "ISSP-2 Informe de evaluación socio-psicopedagógico -(Mide factores de inteligencia)",
  },
  {
    key: "KUDER C Registros de preferencias vocacionales -(Mide los intereses, gustos y preferencias de una persona)",
    label:
      "KUDER C Registros de preferencias vocacionales -(Mide los intereses, gustos y preferencias de una persona)",
  },
  {
    key: "TECO Test de evaluación de la conciencia fonológica -(Evalúa el niveel de la conciencia fonológica a partir de tareas de identificación, adición, omisión de sílabas y fonemas)",
    label:
      "TECO Test de evaluación de la conciencia fonológica -(Evalúa el niveel de la conciencia fonológica a partir de tareas de identificación, adición, omisión de sílabas y fonemas)",
  },
  {
    key: "TPL Tamiz de problemas del lenguaje -(evalúa problemas morfosintácticos)",
    label:
      "TPL Tamiz de problemas del lenguaje -(evalúa problemas morfosintácticos)",
  },
  {
    key: "PEFF Prueba de evaluación fonética fonológica -(Evalúa la fonética -fonología)",
    label:
      "PEFF Prueba de evaluación fonética fonológica -(Evalúa la fonética -fonología)",
  },
  {
    key: "16-PF-5 Cuestionario factorial de personalidad -(Esta prueba evalúa: afectividad, razonamiento, estabilidad, dominancia, impulsividad, conformidad grupal, atrevimiento, sensibilidad, suspicacia, astucia, culpabilidad, rebeldía, autosuficiencia, autocontrol, tención.)",
    label:
      "16-PF-5 Cuestionario factorial de personalidad -(Esta prueba evalúa: afectividad, razonamiento, estabilidad, dominancia, impulsividad, conformidad grupal, atrevimiento, sensibilidad, suspicacia, astucia, culpabilidad, rebeldía, autosuficiencia, autocontrol, tención.)",
  },
  {
    key: "MIPS Inventario Millon de estilos de personalidad -(mide la responsabilidad de individuos adultos que funcionan normalmente y cuya edad están comprendidas entre los 18 y 65 años de edad)",
    label:
      "MIPS Inventario Millon de estilos de personalidad -(mide la responsabilidad de individuos adultos que funcionan normalmente y cuya edad están comprendidas entre los 18 y 65 años de edad)",
  },
  {
    key: "ERAVE Escala Reynolds de acoso victimización para escolares -(test de acoso victimización, para niños y adolescentes. evalúa el impacto de victimización por intimidación bullying o acoso escolar)",
    label:
      "ERAVE Escala Reynolds de acoso victimización para escolares -(test de acoso victimización, para niños y adolescentes. evalúa el impacto de victimización por intimidación bullying o acoso escolar)",
  },
  {
    key: "BEI Batería de evaluación infantil -(evaluación del nivel de estrés en los niños)",
    label:
      "BEI Batería de evaluación infantil -(evaluación del nivel de estrés en los niños)",
  },
  {
    key: "DISLEXIA Dislexia -(evalúa dificultades disléxicos <<problemas en el lenguaje - problemas cognitivos>> )",
    label:
      "DISLEXIA Dislexia -(evalúa dificultades disléxicos <<problemas en el lenguaje - problemas cognitivos>> )",
  },
  {
    key: "FACILITO Evaluación de precurrentes instrumentales para la adquisición de la lectoescritura -(evalúa 7 precurrentes básicos para el aprendizaje de la lectoescritura <<articulación de palabras, imitación vocal, discriminación visual, expresión oral, expresión gráfica, trazo de líneas e imitación gráfica de secuencias de líneas>>)",
    label:
      "FACILITO Evaluación de precurrentes instrumentales para la adquisición de la lectoescritura -(evalúa 7 precurrentes básicos para el aprendizaje de la lectoescritura <<articulación de palabras, imitación vocal, discriminación visual, expresión oral, expresión gráfica, trazo de líneas e imitación gráfica de secuencias de líneas>>)",
  },
  {
    key: "VMI Prueba Beery- Buktenica del desarrollo de la integración visomotriz -(la prueba VMI permite identificar las dificultades significativas que pueden presentar los niños en la integración de las habilidades visuales y motrices)",
    label:
      "VMI Prueba Beery- Buktenica del desarrollo de la integración visomotriz -(la prueba VMI permite identificar las dificultades significativas que pueden presentar los niños en la integración de las habilidades visuales y motrices)",
  },
  {
    key: "TAMAI- TEST AUTOEVALUATIVO MULTIFACTORIAL DE ADAPTACIÓN INFANTIL",
    label: "TAMAI- TEST AUTOEVALUATIVO MULTIFACTORIAL DE ADAPTACIÓN INFANTIL",
  },
  { key: "ACOSO ENTRE IGUALES", label: "ACOSO ENTRE IGUALES" },
];

const pruebasSociales = [
  {
    key: "EMA Escala Magallanes de adaptación –(permite detectar alumnos con problemas en algunos de estos ámbitos: familiar, escolar o personal)",
    label:
      "EMA Escala Magallanes de adaptación –(permite detectar alumnos con problemas en algunos de estos ámbitos: familiar, escolar o personal)",
  },
  {
    key: "EHS Escala de habilidades sociales –(evalúa la capacidad de aserción y de las habilidades sociales en adolescentes y adultos)",
    label:
      "EHS Escala de habilidades sociales –(evalúa la capacidad de aserción y de las habilidades sociales en adolescentes y adultos)",
  },
  {
    key: "ESRENI Test de resiliencia –(mide la actitud reciente en niños de 9 a 11 años de las instituciones o centros educativos públicas de la ciudad de Sincelejo)",
    label:
      "ESRENI Test de resiliencia –(mide la actitud reciente en niños de 9 a 11 años de las instituciones o centros educativos públicas de la ciudad de Sincelejo)",
  },
  {
    key: "EEHSA Escala de evaluación de habilidades sociales para adolescentes (evalúa 6 factores de habilidades sociales: factor 1. Habilidades iniciales básicas <<HIB>> con 8 ítems; factor 2 Habilidades sociales para la comunicación <<HSC>> con 7 ítems; factor 3)",
    label:
      "EEHSA Escala de evaluación de habilidades sociales para adolescentes (evalúa 6 factores de habilidades sociales: factor 1. Habilidades iniciales básicas <<HIB>> con 8 ítems; factor 2 Habilidades sociales para la comunicación <<HSC>> con 7 ítems; factor 3)",
  },
];

const pruebasInteligencia = [
  {
    key: "WPPSI-IV Escala Wechsler de inteligencia para primaria y preescolar –(evalúa la inteligencia de los niños de 2años y 6 meses a 7 años y 7 meses)",
    label:
      "WPPSI-IV Escala Wechsler de inteligencia para primaria y preescolar –(evalúa la inteligencia de los niños de 2años y 6 meses a 7 años y 7 meses)",
  },
  {
    key: "WAIS -IV Escala de inteligencia de Wechsler para adultos –(evalúa la inteligencia de adultos de 16 a 89 años)",
    label:
      "WAIS -IV Escala de inteligencia de Wechsler para adultos –(evalúa la inteligencia de adultos de 16 a 89 años)",
  },
  {
    key: "WISC-VI Escala de inteligencia de Wechsler para niños –(mide habilidades de rapidez asociativa aprendizaje, percepción visual, coordinación viso-manual, atención motivación, y resistencia frente a tareas repetitivas)",
    label:
      "WISC-VI Escala de inteligencia de Wechsler para niños –(mide habilidades de rapidez asociativa aprendizaje, percepción visual, coordinación viso-manual, atención motivación, y resistencia frente a tareas repetitivas)",
  },
  {
    key: "NAIPES Test de inteligencia general –(mide la inteligencia a través de una medición estimativa del coeficiente intelectual)",
    label:
      "NAIPES Test de inteligencia general –(mide la inteligencia a través de una medición estimativa del coeficiente intelectual)",
  },
  {
    key: "OTIS Test de inteligencia general –(mide la capacidad intelectual de sujetos con un nivel cultural bajo o medio)",
    label:
      "OTIS Test de inteligencia general –(mide la capacidad intelectual de sujetos con un nivel cultural bajo o medio)",
  },
  {
    key: "RAVEN Test de Raven- inteligencia no verbal –(Raven es una prueba no verbal que evalúa la habilidad intelectual y el razonamiento basado en figuras)",
    label:
      "RAVEN Test de Raven- inteligencia no verbal –(Raven es una prueba no verbal que evalúa la habilidad intelectual y el razonamiento basado en figuras)",
  },
  {
    key: "TIG Test de inteligencia general 1 y 2 –(mide la capacidad para resolver problemas con figuras abstractas, exenta de la influencia del lenguaje)",
    label:
      "TIG Test de inteligencia general 1 y 2 –(mide la capacidad para resolver problemas con figuras abstractas, exenta de la influencia del lenguaje)",
  },
  {
    key: "INVE Inteligencia verbal –(evalúa aptitudes en el ámbito escolar. Se aplica de manera individual y colectiva)",
    label:
      "INVE Inteligencia verbal –(evalúa aptitudes en el ámbito escolar. Se aplica de manera individual y colectiva)",
  },
  {
    key: "TONI 2 Test de inteligencia no verbal Toni 2 –(evalúa la capacidad para resolver problemas abstractos de tipo gráfico, eliminando la influencia del lenguaje y de la habilidad motriz)",
    label:
      "TONI 2 Test de inteligencia no verbal Toni 2 –(evalúa la capacidad para resolver problemas abstractos de tipo gráfico, eliminando la influencia del lenguaje y de la habilidad motriz)",
  },
  {
    key: "K-BIT Test breve de inteligencia de Kaufman –(evalúa la capacidad para resolver problemas de razonamiento a través de estímulos visuales, tanto figuras como abstractos)",
    label:
      "K-BIT Test breve de inteligencia de Kaufman –(evalúa la capacidad para resolver problemas de razonamiento a través de estímulos visuales, tanto figuras como abstractos)",
  },
];

const pruebasGenerales = [
  {
    key: "VALANTI Cuestionario de valores y antivalores –(mide los 5 valores humanos básicos: verdad, rectitud, paz, amor y no violencia)",
    label:
      "VALANTI Cuestionario de valores y antivalores –(mide los 5 valores humanos básicos: verdad, rectitud, paz, amor y no violencia)",
  },
  {
    key: "MSCA Escala Mc carthy y psicomotricidad para niños –(evalúa la aptitud del niño para entender y procesar estímulos verbales y expresar verbalmente sus pensamientos)",
    label:
      "MSCA Escala Mc carthy y psicomotricidad para niños –(evalúa la aptitud del niño para entender y procesar estímulos verbales y expresar verbalmente sus pensamientos)",
  },
  {
    key: "BAD Y G Batería de aptitudes diferenciales y generales –(evalúa el factor G de inteligencia, distinguiendo inteligencia verbal y no verbal, así como los factores diferenciales numérico, lógico, espacial y comprensión verbal)",
    label:
      "BAD Y G Batería de aptitudes diferenciales y generales –(evalúa el factor G de inteligencia, distinguiendo inteligencia verbal y no verbal, así como los factores diferenciales numérico, lógico, espacial y comprensión verbal)",
  },
  {
    key: "DTVP-2 Método de evaluación de la percepción visual de Frostig –(evalúa as áreas de la percepción visual)",
    label:
      "DTVP-2 Método de evaluación de la percepción visual de Frostig –(evalúa as áreas de la percepción visual)",
  },
  {
    key: "INACVIDIAM Inventario de actividades de la vida diaria del adulto mayor –(utiliza dibujos que hacen alusión a actividades de la vida diaria del adulto mayor, donde cada reactivo presenta un dibujo representativo de la actividad en cuestión)",
    label:
      "INACVIDIAM Inventario de actividades de la vida diaria del adulto mayor –(utiliza dibujos que hacen alusión a actividades de la vida diaria del adulto mayor, donde cada reactivo presenta un dibujo representativo de la actividad en cuestión)",
  },
  {
    key: "IADA Inventario autodescriptivo del adolescente –(permite evaluar de manera confiable 5 dimensiones o áreas de la vida del adolescente: familiar, social, personal, salud y escolar)",
    label:
      "IADA Inventario autodescriptivo del adolescente –(permite evaluar de manera confiable 5 dimensiones o áreas de la vida del adolescente: familiar, social, personal, salud y escolar)",
  },
  {
    key: "SIV Cuestionario de valores interpersonales –(permite apreciar y comparar la importancia que una persona da a los siguientes valores, actitudes o aspectos de sus relaciones con los demás)",
    label:
      "SIV Cuestionario de valores interpersonales –(permite apreciar y comparar la importancia que una persona da a los siguientes valores, actitudes o aspectos de sus relaciones con los demás)",
  },
  {
    key: "TLC Test leer para comprender –(permite analizar la comprensión lectora a partir de 11 componentes, cada uno de ellos fundamentales para la adecuada lectura de materiales educativos)",
    label:
      "TLC Test leer para comprender –(permite analizar la comprensión lectora a partir de 11 componentes, cada uno de ellos fundamentales para la adecuada lectura de materiales educativos)",
  },
  {
    key: "DAT-5 Test de aptitudes diferenciales –(evalúa 7 aptitudes básicas: razonamiento verbal, razonamiento numérico, razonamiento abstracto, razonamiento mecánico, relaciones espaciales, ortografía, rapidez y exactitud perceptiva)SNIFF Libros enfoque conductual Sniff –(mediante este programa de simulación se pueden realizar realizar experimentos con ratas sobre diferentes fenómenos relacionados con el condicionamiento clásico o pavloviano y con el condicionamiento instrumental respectivamente; los cuales desempeñan un papel muy importante a la hora de entender el comportamiento humano y material)",
    label:
      "DAT-5 Test de aptitudes diferenciales –(evalúa 7 aptitudes básicas: razonamiento verbal, razonamiento numérico, razonamiento abstracto, razonamiento mecánico, relaciones espaciales, ortografía, rapidez y exactitud perceptiva)SNIFF Libros enfoque conductual Sniff –(mediante este programa de simulación se pueden realizar realizar experimentos con ratas sobre diferentes fenómenos relacionados con el condicionamiento clásico o pavloviano y con el condicionamiento instrumental respectivamente; los cuales desempeñan un papel muy importante a la hora de entender el comportamiento humano y material)",
  },
  {
    key: "SNIFF Libros enfoque conductual Sniff –(mediante este programa de simulación se pueden realizar realizar experimentos con ratas sobre diferentes fenómenos relacionados con el condicionamiento clásico o pavloviano y con el condicionamiento instrumental respectivamente; los cuales desempeñan un papel muy importante a la hora de entender el comportamiento humano y material)",
    label:
      "SNIFF Libros enfoque conductual Sniff –(mediante este programa de simulación se pueden realizar realizar experimentos con ratas sobre diferentes fenómenos relacionados con el condicionamiento clásico o pavloviano y con el condicionamiento instrumental respectivamente; los cuales desempeñan un papel muy importante a la hora de entender el comportamiento humano y material)",
  },
  {
    key: "SPV Cuestionario de valores personales –(mide el grado o intensidad relativa de cada uno de los 6 valores personales)",
    label:
      "SPV Cuestionario de valores personales –(mide el grado o intensidad relativa de cada uno de los 6 valores personales)",
  },
  {
    key: "TEST DE TEMPERAMENTO –(mide posibles habilidades, defectos, características emocionales y de humor de las personas)",
    label:
      "TEST DE TEMPERAMENTO –(mide posibles habilidades, defectos, características emocionales y de humor de las personas)",
  },
  {
    key: "MABC-2 Batería de evaluación del movimiento para niños- 2 –(evalúa el movimiento para niños y su desarrollo psicomotor)",
    label:
      "MABC-2 Batería de evaluación del movimiento para niños- 2 –(evalúa el movimiento para niños y su desarrollo psicomotor)",
  },
  { key: "", label: "BC. BATERIA PARA CONDCUTORES" },
];

const pruebasPorArea = {
  Social: pruebasSociales,
  Inteligencia: pruebasInteligencia,
  Generales: pruebasGenerales,
  Clínica: pruebasClinicas,
  Neuropsicológicas: pruebasNeuroPsicologicas,
  Proyectivas: pruebasProyectivas,
  Organizacional: pruebasOrganizacionales,
  Educativa: pruebasEducativas,
};

const tiposDeDocumentos = [
  { key: "CC", label: "Cédula de ciudadanía" },
  { key: "TI", label: "Tarjeta de identidad" },
];
export { typesOfActivities, areasOfStudy, pruebasPorArea, tiposDeDocumentos };
