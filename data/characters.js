const characters = [
  {
    id: 1,
    name: {
      spanish: "Don José María Vigil y Robles",
      english: "Don José María Vigil y Robles",
    },
    description: {
      spanish:
        "historiador y director de la Biblioteca Nacional, soñando con el pasado y evocando la historia de la Alameda.",
      english:
        "historian, former Director of the National Library, serves as our symbolic guide through the history of the Alameda park, depicted in this mural",
    },
    x: 2.73, // x-coordinate of the face position in the mural image
    y: 57.38, // y-coordinate of the face position in the mural image
    width: 1,
    height: 5,
    box: null, // Reference to the highlight box element
  },
  {
    id: 2,
    name: {
      spanish: "Don Guillermo W. de Landa y Escandón",
      english: "Don Guillermo W. de Landa y Escandón",
    },
    description: {
      spanish:
        "gobernador de la ciudad de México, en parte del régimen de Porfirio Diaz.",
      english: "governor of Mexico City during part of Porfirio Diaz's regime.",
    },
    x: 5.57,
    y: 55.54,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 3,
    name: {
      spanish: "Don Jesús Luján",
      english: "Don Jesús Luján",
    },
    description: {
      spanish:
        "lagunero acaudalado, amigo y protector de aristas, en especial de Julio Ruelas.",
      english:
        "a wealthy Porfirian landowner, patron of the arts, specially of the Mexican nineteenth century painter Julio Ruelas.",
    },
    x: 7.38,
    y: 57.56,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 4,
    name: {
      spanish: "Hernán Cortés",
      english: "Hernán Cortés",
    },
    description: {
      spanish: "conquistador del territorio mexicano, de origen español.",
      english: "Spanish conqueror of the Mexican teritory.",
    },
    x: 0.47,
    y: 43.17,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 5,
    name: {
      spanish: "Luis de Velasco II",
      english: "Luis de Velasco II",
    },
    description: {
      spanish:
        "octavo Virrey de la Nueva España. En 1592 fundó el Paseo de la Alameda.",
      english: "8th Viceroy of Mexico, who in 1592 founded the Alameda park.",
    },
    x: 3.9,
    y: 49.95,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 6,
    name: {
      spanish: "Fray Juan de Zumárraga",
      english: "Fray Juan de Zumárraga",
    },
    description: {
      spanish:
        "primer obispo y primer arzobispo de la Nueva España. En 1539 mandó quemar vivo por idolatría a un nieto de Nezahualcóyotl, quien se convirtió así en la primera víctima de la Inquisición en la Nueva España.",
      english:
        "first Catholic archbishop of Mexico, who established the Catholic inquisition in Mexico and ordered in 1509 the first burning of a so-called heretic, who was grandson of Nezahualcoyot.",
    },
    x: 2.82,
    y: 41.63,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 7,
    name: {
      spanish: "Quemadero de la Santa Inquisición",
      english: "Burning grounds of the Catholic Inquisition",
    },
    description: {
      spanish:
        "Fue instalado en los terrenos pertenecientes al Convento de los Dieguinos (siglo XVI), que luego se convirtieron en la parte de la Alameda Central.",
      english:
        "belonged to the Convent of Saint Diego, and is now part of the Alameda.",
    },
    x: 4.23,
    y: 14.34,
    width: 5,
    height: 8,
    box: null,
  },
  {
    id: 8,
    name: {
      spanish: "Doña Mariana Violante de Carbajal",
      english: "Doña Mariana Violantte de Carbajal",
    },
    description: {
      spanish:
        "hermosa judía perteneciente a la famosa familia que fue juzgada y condenada a la hoguera por la Inquisición, bajo la acusación de herejía.",
      english:
        "a jew, was burned at the stake having been unjustly accused of heresy. A historical issue in Mexican colonial times.",
    },
    x: 4.31,
    y: 26.82,
    width: 3,
    height: 8,
    box: null,
  },
  {
    id: 9,
    name: {
      spanish: "Iglesia de San Diego",
      english: "Church of Saint Diego",
    },
    description: {
      spanish:
        "de una sola torre, cuya construcción se concluyó en 1621, modificándose su fachada a principios del siglo XIX.",
      english:
        "with only one tower, its construction was finished In 1621. Its front was modified in the first halt of the 19th Century.",
    },
    x: 9.08,
    y: 18.64,
    width: 4,
    height: 8,
    box: null,
  },
  {
    id: 10,
    name: {
      spanish: "Sor Juana Inés de la Cruz",
      english: "Sor Juana Inés de la Cruz (1651-1695)",
    },
    description: {
      spanish:
        "la más notable poetisa de la Nueva España durante la Colonia, que mereció el nombre de la Décima Musa. Declaró el derecho de la mujer a la cultura y a disentir, por lo que resulta una de las precursoras de la lucha por los derechos femeninos.",
      english:
        "the most famous woman poet of New Spain. She has been called the Tenth Muse. In a sense, she was a forerunner in the struggle for equality of women. In her exquisite poetry -a living classic in Mexican Ilterature- she defended women's right to education and culture, and to freely express their most Innermost feelings; a stand unheard and unacceptable at that time.",
    },
    x: 9.48,
    y: 39.16,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 11,
    name: {
      spanish: "Raterillo",
      english: "A small-time thief",
    },
    description: {
      spanish:
        "soñando con la comida que comprará con el producto de su hurto.",
      english: "already dreaming of the food he will buy with his loot.",
    },
    x: 11,
    y: 68.43,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 12,
    name: {
      spanish: "Anciano dormido",
      english: "Old man asleep",
    },
    description: {
      spanish:
        "de atuendo otrora elegante, que sueña en su idilio al son de un vals, recordando a su Alteza Serenísima don Antonio López de Santa Anna.",
      english:
        "reliving his past fimes when he paricipated in the glories of Mexico during the govemment ol the General Antonio López de Santa Anna.",
    },
    x: 9.72,
    y: 69.03,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 13,
    name: {
      spanish: "Antonio López de Santa Anna",
      english: "Antonio López de Santa Anna",
    },
    description: {
      spanish:
        "general y político que ocupó once veces la presidencia de México, entre 1833 y 1855. Como resultado de la oposición a que Santa Anna cediera Texas a Estados Unidos en 1847, México, en 1848, perdió el 51% de su territorio a causa de la invasión Norteamericana.",
      english:
        "a general and poitician, who was President df Mexico eleven fimes between 1830 and 1855. As a resut of the Mexican oppostion in 1847, when Sarta Anna ceded Texas to the United Slates, Mexico lost the 51% of is territory in 1848, because di the American invasion.",
    },
    x: 11.9,
    y: 47.16,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 14,
    name: {
      spanish: "Winfield Scott",
      english: "Winfield Scott",
    },
    description: {
      spanish:
        "general norteamericano cuyas tropas ocuparon la ciudad de México y acamparon en la Alameda Central durante la invasión del ejército de Estados Unidos, de 1846 a 1848.",
      english:
        "American general, head of the troops that occupied Mexico City, camping at the Alameda from 1846 to 1848.",
    },
    x: 13.46,
    y: 46.68,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 15,
    name: {
      spanish: "Agustín de Iturbide",
      english: "Agustin de Iturbide",
    },
    description: {
      spanish:
        "militar realista que ayudó a consumar la independencia y comandó al Ejército Trigarante en su entrada a la capital de México en 1821. Durante diez meses fue emperador de México, de 1822 a 1823.",
      english:
        "Initially a Spanish loyalist. He joined his troops to those of Vicente Guerrero, then leader of the insurrection, and both consummated the Independence of Mexico. Through treacheries, politicking and assassination, he founded the so-called First Empire that lasted only ten months, between 1822 and 1823.",
    },
    x: 11.31,
    y: 39.79,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 16,
    name: {
      spanish: "Pabellón Morisco",
      english: "Moorish Pavilion",
    },
    description: {
      spanish:
        "Proyecto del ingeniero y arquitecto José Ramón de Ibarrola. Estuvo en la Alameda Central y más tarde fue trasladado a la Alameda de Santa María la Ribera para ceder su lugar al Hemiciclo a Juárez.",
      english:
        "Designed by the architect José Ramón de /barrola. It was installed at the Central Alameda and years later was moved to the Alameda of Santa Maria la Ribera.",
    },
    x: 12.45,
    y: 22.03,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 17,
    name: {
      spanish: "Anciana viuda",
      english: "Old woman",
    },
    description: {
      spanish:
        "soñando con el amor que tuvo con uno de los invasores norteamericanos, de quien procreó un hijo rubio.",
      english:
        "dreaming of her affair with an American invader with whom she had a blond son.",
    },
    x: 13.42,
    y: 70.84,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 18,
    name: {
      spanish: "Pelado borracho",
      english: "Drunken old soldier",
    },
    description: {
      spanish: "soñando en sus glorias cuando era chinaco liberal.",
      english:
        "dreaming about his glories when he fought on the liberal side in the 1860's.",
    },
    x: 17.5,
    y: 64.92,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 19,
    name: {
      spanish: "Don Benito Juárez",
      english: "Don Benito Juárez",
    },
    description: {
      spanish:
        "héroe nacional y Presidente de México (1857 - 1872) durante la Guerra de Tres Años (1858-1860) y la intervención Francesa (1863 - 1887). Mereció la distinción de Benemérito de las Américas.",
      english:
        "Isader of Mexico ls liberals who upheld the rule of civil and democratic law, as opposed to Catholic ecclesiastical and economic prifiges:. As President of Mexico (1857-1872) he fought successfully against the Catholic Church, the French invasion and Maximilian from 1563 to 1867. He was named the Giorous man of the American Continent.",
    },
    x: 16.08,
    y: 29.23,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 20,
    name: {
      spanish: "Ignacio Manuel Altamirano",
      english: "Ignacio Manuel Altamirano",
    },
    description: {
      spanish:
        "novelista y miembro radical del Congreso de la Unión. Alcanzó el grado de coronel durante la Intervención Francesa.",
      english:
        "a Juérez liberal, fought with him as a radical reformist. He was a congressman, a colonel in the ammy that fought the French, and combined his poitical career with his talent as one of the first and finest rural novelists of Maxico.",
    },
    x: 14.33,
    y: 40.92,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 21,
    name: {
      spanish: "Ignacio Ramírez",
      english: "Ignacio Ramirez",
    },
    description: {
      spanish:
        "‘El Nigromante’, notable pensador liberal, quien en 1836, siendo estudiante, declaró que ‘Dios no existe’ en la Conferencia de la Academia de Letrán.",
      english:
        "el Nigromante, a liberal thinker and politician. His speech at the intellectual Academy of Letan in 1836 caused a great poitical upheaval by declaring God to be 'ron-existent.",
    },
    x: 17.5,
    y: 41.24,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 22,
    name: {
      spanish: "Leandro Valle",
      english: "Leandro Valle",
    },
    description: {
      spanish:
        "joven soldado liberal que combatió a los norteamericanos (1847) y a los rebeldes de Puebla (1856). Participó en la Guerra de Tres Años ascendiendo a general. En 1861 fue diputado federal y comandante del Distrito Federal, combatiendo a los conservadores fue aprehendido y fusilado en el Monte de las Cruces el 23 de junio.",
      english:
        "whose short life-span (1833-1861) was spent fighting against the American Invasion, the corservatives and in favour of the Republic. Was executed in 1861 at the 'Monte de las Cruces'",
    },
    x: 18.78,
    y: 40.28,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 23,
    name: {
      spanish: "Viejo ex militar conservador",
      english: "A former conservative military man",
    },
    description: {
      spanish: "soñando con el Segundo Imperio.",
      english: "dreaming of Maximilan's Empire.",
    },
    x: 19.93,
    y: 67.32,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 24,
    name: {
      spanish: "Emperatriz Carlota",
      english: "Carlota",
    },
    description: {
      spanish:
        "esposa de Maximiliano de Hasburgo. Ordenó el arreglo de la Alameda debido a las malas condiciones en que se encontraba.",
      english:
        "wife of the so-called emperor Maximilian. She ordered to beautity the Alameda during the Empire.",
    },
    x: 18.23,
    y: 50.36,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 25,
    name: {
      spanish: "Maximiliano de Hasburgo",
      english: "Maximilian of Habsburg",
    },
    description: {
      spanish:
        "notable austriaco nombrado emperador por los conservadores mexicanos y apoyado por el ejército francés, de 1864 a 1867. Fue fusilado en el Centro de las Campanas, por orden de Benito Juárez.",
      english:
        "for a while (1864-1867) emperor of some parts of the Mexican territory, imposed by the French with full support from the Catholic Church and the conservatives. He was tried as an usurper and found guilty, was executed in 1867 at the 'Cerro de las Campanas'.",
    },
    x: 19.88,
    y: 49.72,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 26,
    name: {
      spanish: "General Mariano Rodríguez",
      english: "General Mariano Rodríguez",
    },
    description: {
      spanish:
        "oficial de la guardia de la emperatriz Carlota y tío de Diego Rivera.",
      english:
        "was an imperial guard In Maximlian's court and an uncle of the artist Diego Rivera.",
    },
    x: 18.97,
    y: 47.8,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 27,
    name: {
      spanish: "General Miguel Miramón",
      english: "General Miguel Miramón",
    },
    description: {
      spanish: "colaboró con el Imperio y fue fusilado junto con Maximiliano.",
      english:
        "an extreme conservative politician, was President of Mexico for a short time and was shot alongside Maximilian, as being guilty of treason to the Mexican nation.",
    },
    x: 20.89,
    y: 49.56,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 28,
    name: {
      spanish: "François Achillie Bazaine",
      english: "Marshall Françols Achille Bazaine",
    },
    description: {
      spanish:
        "mariscal de las tropas extranjeras durante la Intervención Francesa.",
      english: "leader of the French invaders.",
    },
    x: 21.4,
    y: 54.2,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 29,
    name: {
      spanish: "General Mariano Escobedo",
      english: "General Mariano Escobedo",
    },
    description: {
      spanish:
        "militar republicano a quien Maximiliano rindió su espada en el sitio de Querétaro.",
      english:
        "liberal republican general who accepted Maximilian's surrender in1867 at Querétaro.",
    },
    x: 22.31,
    y: 47.16,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 30,
    name: {
      spanish: "Papelerito",
      english: "A news-paper boy",
    },
    description: {
      spanish:
        "vendiendo El Imparcial, uno de los periódicos más importantes de la época.",
      english:
        "selling El Imparcial, the most important conservative journal at that time.",
    },
    x: 25.2,
    y: 64.92,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 31,
    name: {
      spanish: "Globero",
      english: "A balloon-seller",
    },
    description: {
      spanish:
        "personaje típico de los domingos ofreciendo sus globos de colores.",
      english: "a Sunday typical character.",
    },
    x: 24.42,
    y: 55.16,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 32,
    name: {
      spanish: "Dulcero",
      english: "Candy vendor",
    },
    description: {
      spanish:
        "vendiendo dulces típicos: muégano, enjambre de nuez, pepitoria, etcétera.",
      english: "selling Mexican sweets.",
    },
    x: 26.95,
    y: 63.8,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 33,
    name: {
      spanish: "Caramelero",
      english: "Another vendor",
    },
    description: {
      spanish:
        "ofreciendo su mercancía: pirulís, entre los que hay jinetes, corazones, damas, chiles verdes y rojos y la lira del poeta.",
      english: "with samples of more elaborate and artistic Mexican sweets.",
    },
    x: 26.67,
    y: 54.68,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 34,
    name: {
      spanish: "Manuel Gutiérrez Nájera",
      english: "Manuel Gutiérrez Nájera",
    },
    description: {
      spanish:
        "el Duque Job, poeta precursor del modernismo en América. Fundó la revista Azul.",
      english:
        "el Duque Job, a distinguished poet, forerunner of the Modernistic school. He founded Azul magazine.",
    },
    x: 27.59,
    y: 53.24,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 35,
    name: {
      spanish: "Lucecita Díaz",
      english: "Lucecita Díaz",
    },
    description: {
      spanish: "hija de don Porfirio y su primera esposa, Delfina Ortega.",
      english:
        "daughter of Porfirio Diaz's first marriage with Delfina Ortega.",
    },
    x: 32.68,
    y: 54.68,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 36,
    name: {
      spanish: "Carmen Romuro Rubio de Díaz",
      english: "Carmen Romero Rublo de Diaz",
    },
    description: {
      spanish:
        "segunda esposa de Porfirio Díaz e hija de don Manuel Romero Rubio, ministro de Gobernación del porfiriato. Para representarlas Rivera tomó como modelos a sus tías Vicenta y Cesárea.",
      english:
        "Díaz's second wife, daughter of his political interior minister, Manuel Romero Rubio. To represent them, Rivera used his aunts Vicenta and Cesarea as models.",
    },
    x: 34.93,
    y: 56.44,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 37,
    name: {
      spanish: "José Martí",
      english: "José Marti",
    },
    description: {
      spanish:
        "destacado poeta y padre de la Independencia de Cuba, que vivió en México de febrero de 1875 a finales de diciembre de 1876. Tuvo una actividad notable de esos dos años en las letras mexicanas, relacionándose con los más renombrados literatos de la época. En 1894 hizo un viaje rápido para reunir fondos para la invasión por la independencia de su isla natal bajo el dominio español. Murió en el combate de la sabana de Dos Ríos el 19 de mayo de 1895.",
      english:
        "father of Cuba's independence. He lived in Mexico from 1875 to 1876. An outstanding modernistic poet, was part of the mainstream of our country's cultural and literary life. He returned to Mexico in 1894 in search of support for his struggle against Spain's domination at his country. Marti died in combat in Cuba on May 19, 1895.",
    },
    x: 37.68,
    y: 53.56,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 38,
    name: {
      spanish: "Diego niño",
      english: "Diego Rivera as a child,",
    },
    description: {
      spanish:
        "autorretrato del pintor, quién se representó de la mano de la Muerte Catrina y soñando con el amor por excelencia, que está personalizado por Frida Kahlo.",
      english:
        "a selfportrait. We see him hand in hand with a typical Mexican image of a skull, the 'Calavera Catrina'; day-dreaming of his ideal love, his future wite: Frida Kahlo.",
    },
    x: 38.92,
    y: 60.15,
    width: 1,
    height: 5,
    box: null, // Reference to the highlight box element
  },
  {
    id: 39,
    name: {
      spanish: "Frida Khalo",
      english: "Frida Khalo",
    },
    description: {
      spanish:
        "pintora mexicana que estuvo casada con Rivera durante veinticinco años. Lleva en su mano el símbolo chino del ying-yang.",
      english:
        "Diego's wife, an outstanding painter influenced by surrealism and mexican folk art. She was inspired by popular events and people, Diego and herself, and with love, suffering, and deliverance. She is holding the ying-yang oriantal symbol.",
    },
    x: 39.86,
    y: 54.8,
    width: 1,
    height: 5,
    box: null, // Reference to the highlight box element
  },
  {
    id: 40,
    name: {
      spanish: "La Calavera Catrina",
      english: "La Calavera Catrina",
    },
    description: {
      spanish:
        "personaje creado por el grabador José Guadalupe Posada, a quien Rivera representó con una boa de plumas que no es más que Quetzalcóatl, la serpiente emplumada de las culturas prehispánicas. Así rinde culto a ’Tonantzin’.",
      english:
        "a Mexican representation of death created by Posada. Diego uses the feather stole around her shoulders to simbolize Quetzalcoatl, God of Prehispanic cultures.",
    },
    x: 42.57,
    y: 51.99,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 41,
    name: {
      spanish: "Ricardo Flores Magón",
      english: "Ricardo Flores Magón",
    },
    description: {
      spanish:
        "editor de Regeneración, publicación liberal antiporfirista, y precursor de la Revolución Mexicana a través del Partido Liberal (fundado en 1906), cuyos organizadores, además de él, fueron su hermano Enrique, Anselmo L. Figueroa, Praxedis G. Guerrero y Librado Rivera. Anarquista indomable, perseguido por sus ideas políticas, murió en prisión en Estados Unidos.",
      english:
        "ideologist, writer, anarchistforerunner of the Mexican Revolution. Member of the Mexican Liberal Party as his brother Enrique, Anselmo L. Figueroa, Praxedis G. Guerrero and Librado Rivera (founded in Saint Louis, Mo., USA, on June the first, 1906). Persecuted for his political ideals, he died in prison at Fort Leavenworth, Kansas.",
    },
    x: 45.46,
    y: 53.45,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 42,
    name: {
      spanish: "José Guadalupe Posada",
      english: "José Guadalupe Posada",
    },
    description: {
      spanish:
        "extraordinario grabador que ilustró las publicaciones populares del México anterior a la Revolución, y a quien Diego Rivera consideró siempre como un maestro importante en su formación plástica. Una de sus más famosas creaciones fue la Calavera Catrina.",
      english:
        "Mexico's foremost pre-revolutionary engraver. His style and his choice of folk subjects, such as festivities and everyday events, used to illustrate popular publications, with skeletons like the Calavera Catrina, served as an inspiration and model for Rivera and many others.",
    },
    x: 46.8,
    y: 53.89,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 43,
    name: {
      spanish: "Librado Rivera",
      english: "Librado Rivera",
    },
    description: {
      spanish:
        "colaborador muy cercano de Ricardo Flores Magón, quien sufrió persecución y prisión como todos los miembros del Partido Liberal, al cual pertenecía. Amigo y seguidor fiel de las ideas anarquistas de Flores Magón, en 1918 fue sentenciado junto con él a sufrir larga condena.",
      english:
        "member of the Mexican Liberal Party, a militant with Flores Magón, he shared with him long prison sentences.",
    },
    x: 48.09,
    y: 54.47,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 44,
    name: {
      spanish: "Gendarme",
      english: "Gendarme",
    },
    description: {
      spanish:
        "cuidando que las 'gentes decentes' puedan transitar tranquilamente sin mezclarse con gente del pueblo.",
      english:
        "a 1910 'cop', looking over to ensure 'decent people' are not disturbed by 'the rabble'",
    },
    x: 49.72,
    y: 54.03,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 45,
    name: {
      spanish: "Joaquín de la Cantolla y Rico",
      english: "Joaquín de la Cantolla y Rico",
    },
    description: {
      spanish:
        "reanudó los viajes aerostáticos en globo en la capital de la República en 1963 (se iniciaron en 1784 y por peligrosos se prohibieron en la ciudad de México en 1862). Sueña en su globo República Mexicana, en el cual asciende agitando una bandera tricolor.",
      english:
        "Mexico's foremost aeronaut of the second half of the 19th Century. A very popular personage, he is shown here dreaming of a balloon of his own creation, República Mexicana, decorated with Mexican flags.",
    },
    x: 50.19,
    y: 8.95,
    width: 5,
    height: 10,
    box: null,
  },
  {
    id: 46,
    name: {
      spanish: "La Revoltosa",
      english: "La Revoltosa",
    },
    description: {
      spanish:
        "chiutlahua legítima, caricortada y garbosa, que enfrenta al gendarme que le cierra el paso para que no moleste a las personas ‘decentes’ que pasean en la Alameda. En esta figura Rivera rindió homenaje a uno de sus amores, una famosa tiple.",
      english:
        "a real chiutilahua and popular character is here painted challenging the 'gendarme' and the 'decent people', Rivera thus paid hommage to are his loves, a famous singer of popular theatre.",
    },
    x: 51.68,
    y: 58.54,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 47,
    name: {
      spanish: "Nicolás Zúñiga y Miranda",
      english: "Nicolás Zúniga y Miranda",
    },
    description: {
      spanish:
        "eterno candidato a la Presidencia de la República durante el porfiriato. Sueña que el dictador le entrega la silla presidencial, la banda tricolor y la gloria.",
      english:
        "was a permanent 'candidate' for President during Porfirio Diaz's time. A harmless popular personage is shown here dreaming of receiving the Presidency from the dictator himself.",
    },
    x: 53.62,
    y: 52.21,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 48,
    name: {
      spanish: "Don Porfirio Díaz",
      english: "Porfirio Diaz",
    },
    description: {
      spanish:
        "general político que ocupó la Presidencia de la República durante treinta años.",
      english:
        "dictator of Mexico, who ruled for more than thirty years until 1911 when overthrown by the Revolution.",
    },
    x: 56.37,
    y: 35.46,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 49,
    name: {
      spanish: "Alférez Luis Lobo Guerrero",
      english: "Second lieutenant Luis Lobo",
    },
    description: {
      spanish:
        "apodado General Medallas. Héroe del pueblo durante la Invasión Norteamericana. Se convirtió en un personaje característico del Paseo de la Alameda, de los chiquillos y bromistas que lo condecoraban con objetos brillantes.",
      english:
        "Guerrero, a popular hero during the American invasion. Having outlived his time, he became a permanent fodure of the Alameda landscape. He was nicknamed General Medals.",
    },
    x: 56.51,
    y: 55.26,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 50,
    name: {
      spanish: "Matrimonio extranjero",
      english: "Foreign couple",
    },
    description: {
      spanish:
        "con dos niños que se burlan; el niño, del General Medallas, y la niña de una pequeña indígena que llora porque la sacan con su familia de la Alameda.",
      english:
        "and two children making fun of General Medals and a poor peasant child.",
    },
    x: 60.59,
    y: 53.33,
    width: 5,
    height: 6,
    box: null,
  },
  {
    id: 51,
    name: {
      spanish: "Gendarme",
      english: "Gendarme",
    },
    description: {
      spanish:
        "que impide que una familia campesina transite por la Alameda, ‘reservada para las clases acomodadas’, expulsándola por la fuerza.",
      english:
        "policeman, who is expelling a peasant family from the Alameda park, reserved for 'decent people'",
    },
    x: 68.72,
    y: 54.61,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 52,
    name: {
      spanish: "Banda de Policía",
      english: "A police band",
    },
    description: {
      spanish: "tocando en el kiosko de la Alamada.",
      english: "playing at the band stand.",
    },
    x: 68.8,
    y: 26.89,
    width: 4,
    height: 8,
    box: null,
  },
  {
    id: 53,
    name: {
      spanish: "Familia pobre",
      english: "Poor famlly being expelled by brute force",
    },
    description: {
      spanish:
        "que es expulsada por la fuerza. Sus miembros sueñan con la lucha reivindicatoria de sus derechos. El padre y la madre aparecen como revolucionarios y el hijo dispara sobre el represor.",
      english:
        "They dream of themselves as fighters and revolutionaries and their son dreams himsel shooting at the oppressor.",
    },
    x: 74.42,
    y: 56.12,
    width: 5,
    height: 10,
    box: null,
  },
  {
    id: 54,
    name: {
      spanish: "Joven obrero",
      english: "Young worker",
    },
    description: {
      spanish:
        "que es expulsado junto con la familia campesina. Sueña con participar en la lucha popular que derribará el feudalismo porfiriano. Los árboles de la follajes, en esta sección cobran ritmos dinámicos que enmarcan la ola de violento colorido que emana de los sueños de los personajes representados.",
      english:
        "also expelled with the poor family. He shares the same dream as the peasant family.",
    },
    x: 81.89,
    y: 60.93,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 55,
    name: {
      spanish: "Charro dormido",
      english: "Sleeping 'Charro'",
    },
    description: {
      spanish:
        "soñando con buenas cosechas de maíz gracias a la ayuda de un arado de disco, con muchos pesos y un pellejo de pulque.",
      english:
        "dreaming of money and good corn harvests with the help of a mechanical plough.",
    },
    x: 84.92,
    y: 65.6,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 56,
    name: {
      spanish: "Vendedor de fruta",
      english: "Fruit vendor",
    },
    description: {
      spanish: "ofreciendo su mercancía.",
      english: "offering his products.",
    },
    x: 86.89,
    y: 64.77,
    width: 4,
    height: 7,
    box: null,
  },
  {
    id: 57,
    name: {
      spanish: "Juan Sánchez Azcona",
      english: "Juan Sánchez Azcona",
    },
    description: {
      spanish:
        "escritor, periodista y revolucionario maderista, fundador del México Nuevo y del Nueva Era y colaborador del Antirreeleccionista. Está soñando con José Vasconcelos en un cambio radical para el país.",
      english:
        "revolutionary writer and journalist under Madero. He was his private secretary. He created the newspapers México Nuevo and Nueva Era.",
    },
    x: 89.72,
    y: 66.83,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 58,
    name: {
      spanish: "José Vasconcelos",
      english: "José Vasconcelos",
    },
    description: {
      spanish:
        "destacado político y escritor mexicano. Autor intelectual del llamado Renacimiento del muralismo mexicano; durante su gestión como rector de la Universidad y primer Secretario de Educación, invitó a varios pintores, entre ellos a Rivera, para decorar los muros de la Preparatoria (Antiguo Colegio de San Ildefonso).",
      english:
        "an outstanding politician and mexican writer. Intellectual author of the Mexican Muralist Renaissance. While he was the rector of the University and first Minister of Education, he invited many painters as Rivera to decorate the walls of the Escuela Nacional Preparatoria.",
    },
    x: 89.29,
    y: 55.44,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 59,
    name: {
      spanish: "Obrero revolucionario",
      english: "Revolutionary worker",
    },
    description: {
      spanish:
        "que habla a mujeres y hombres jóvenes de la pequeña burguesía y del artesanado sobre las ideas revolucionarias publicadas en Regeneración, editando por Ricardo Flores Magón, donde el ideal de “Tierra y Libertad” del Partido Liberal está explicado por Lázaro Gutiérrez de Lara, uno de los ideólogos precursores de la Revolución Mexicana, que estallaría en 1910. Este personaje está representado por Manuel Martínez, quien fue ayudante personal de Diego Rivera durante años.",
      english:
        "who is speaking to the people about the Revolution advocated by Florens Magón. Rivera used model his own assistant Manuel Martinez.",
    },
    x: 92.71,
    y: 54.34,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 60,
    name: {
      spanish: "Chamaco de clase media",
      english: "Middle class boy eating a Mexican torta",
    },
    description: {
      spanish:
        "comiendo una torta. Aquí vuelve a autorretratarse Diego Rivera, soñando con la que habría sido de ser su familia: esposa, hijas y nieto, así como amigos cercanos.",
      english:
        "It is also a selfportrait of Rivera dreaming of his wife, daughters and grandson.",
    },
    x: 94.8,
    y: 64.79,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 61,
    name: {
      spanish: "Vendedora de tortas compuestas",
      english: "Mexican 'Tortas' vendor",
    },
    description: {
      spanish:
        "que las expende al niño de clase media, a un estudiante de leyes y a dos alumnos de la antigua Escuela de Aspirantes de Tlalpan.",
      english:
        "selling to the middle class boy, a law student and other students.",
    },
    x: 95.43,
    y: 70.25,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 62,
    name: {
      spanish: "Ruth Rivera Marín",
      english: "Ruth Rivera Marin",
    },
    description: {
      spanish: "hija de Diego y de Lupe Marín, su segunda esposa.",
      english: "daughter of Diego and his second wife Lupe Marin.",
    },
    x: 91.33,
    y: 54.12,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 63,
    name: {
      spanish: "Rosa Rolando de Covarrubias",
      english: "",
    },
    description: {
      spanish:
        "gran amiga de Rivera y esposa del también pintor Miguel Covarrubias.",
      english: "",
    },
    x: 94.13,
    y: 54.51,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 64,
    name: {
      spanish: "Guadalupe Rivera Marín",
      english: "Guadalupe Rivera Marin",
    },
    description: {
      spanish:
        "hija mayor de Diego y de Lupe Marín. Lleva en brazos a su pequeño hijo Juan Pablo.",
      english: "Diego's oldest daughter, hoiding her chlld Juan Pablo.",
    },
    x: 95.17,
    y: 55.81,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 65,
    name: {
      spanish: "Guadalupe Marín",
      english: "Guadalupe Marin",
    },
    description: {
      spanish:
        "segunda de las cuatro esposas que tuvo Rivera a la largo de su vida y madre de Ruth y Guadalupe.",
      english: "the second of Rivera's four wives.",
    },
    x: 96.62,
    y: 53.34,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 66,
    name: {
      spanish: "Vendedor de rehiletes",
      english: "Pinwheels-seller",
    },
    description: {
      spanish: "que eleva su mercancía.",
      english: "raising and showing the toys.",
    },
    x: 93.73,
    y: 25.4,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 67,
    name: {
      spanish: "General Francisco J. Mújica",
      english: "General Francisco J. Mújica",
    },
    description: {
      spanish:
        "aparece como parte de la trilogía del pueblo: el campesino, el soldado y el obrero. Los tres sellan con las manos entrelazadas el compromiso del sufragio efectivo representado por la urna. Este sueño expresado por el obrero revolucionario del nivel inferior está coronado en la parte superior por la efigie de Francisco I. Madero y el lema “Sufragio Efectivo. No Reelección”, materializando el sueño de la industrialización de México.",
      english:
        "revolutionary general and member of the Constitutional Convention (1916-1917). He dreams along with three people, simbolized by a worker, a soldier and a peasant, about full political democracy in Mexico. They dream of the fulfillment of Madero's ideals of 'Effective sufrage. No re-election'.",
    },
    x: 91.51,
    y: 36.3,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 68,
    name: {
      spanish: "‘Lic. Izo’ (estudiante de leyes)",
      english: "Lic. Izo",
    },
    description: {
      spanish:
        "con la avidez pintada en el rostro, simboliza al ‘fósil’ de Derecho que sueña con hacer una gran carrera política sin escrúpulos, enriqueciéndose y obteniendo un inmenso poder.",
      english: "a law student dreams of becoming a corrupt and rich poitician.",
    },
    x: 97.93,
    y: 58.22,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 69,
    name: {
      spanish: "Estudiante de la Escuela de Aspirantes de Tlalpan",
      english: "Students of the 'Escuela de Aspirates de Taipan'",
    },
    description: {
      spanish:
        "con el uniforme del plantel militar, soñando con los traidores y asesinos Victoriano Huerta y Manuel Mondragón, y con los planes de la contrarrevolución.",
      english:
        "dream with the traitors Victoriano Huerta and Manuel Mondragon, and the assassination of President Madero.",
    },
    x: 97.62,
    y: 54.95,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 70,
    name: {
      spanish: "Victoriano Huerta",
      english: "Victoriano Huerta",
    },
    description: {
      spanish:
        "general que mandó asesinar a Madero y a José María Pino Suárez para usurpar la Presidencia de la República.",
      english:
        "army general, traitor and assassin of José María Pino Suárez and Francisco I. Madero, he became his succesor.",
    },
    x: 96.62,
    y: 46.47,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 71,
    name: {
      spanish: "Manuel Mondragón",
      english: "Manuel Mondragón",
    },
    description: {
      spanish:
        "general cómplice de Huerta que mandó las fuerzas federales contra Madero durante la Decena Trágica. Padre de Nahui Olin.",
      english:
        "army general, an accomplice of Huerta in the assassination of Madero. Nahui Olin's father.",
    },
    x: 97.9,
    y: 46.23,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 72,
    name: {
      spanish: "Presidente de la República",
      english: "President of the Republic",
    },
    description: {
      spanish:
        "(Plutarco Elías Calles?, Miguel Alemán), despachando sobre la caja fuerte de Cinycomex, S.A. de R.I. (Sociedad Anónima de Recursos Ilimitados), manejando inmensas cantidades de dinero y acariciando a una joven rubia con anuencia de sus consejeros, uno de ellos un arzobispo (Luís Gonzaga María Martīnez).",
      english:
        "a symbolic image of corrupt presidents. Handling an enormous amount of  money and fondling a blonde woman by consent of an archbishop.",
    },
    x: 95.64,
    y: 17.76,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 73,
    name: {
      spanish: "El hombre de los cientos de millones",
      english: "The multimillionaire",
    },
    description: {
      spanish:
        "según definición de Rivera (General Máximo Ávila Camacho?, Ingeniero Alberto J. Pani?, General Juan Andrew Almazán?), abraza a una joven mujer que se encuentra encaramada sobre un árbol (el jóven árbol de la burguesía), mientras con la otra mano sostiene una alta pila de billetes. Un niño pequeño le da los brazos casi oculto tras los rehiletes (símbolo de la inconstancia y versatilidad de los políticos). La dama del árbol empuja con uno de sus pies el carrizo de los rehiletes. “Es esta dama, feliz y heredara de centenas de millones, la culminación de la familia revolucionaria y el 'pendant' de Violante de Carvajal…'.",
      english:
        "a symbolic image of corrupt poiticians making their fortune by working for the govemment.",
    },
    x: 97.25,
    y: 31.9,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 74,
    name: {
      spanish: "El México moderno",
      english: "Modern Mexico",
    },
    description: {
      spanish:
        "donde pueden reconocerse el Teatro Nacional (después Palacio de Bellas Artes), la Plaza de Toros, el Banco de México y otros edificios de gran altura.",
      english:
        "depicting severai monuments of Mexico City, as the National Theatre (Palacio de Bellas Artes), the Plaza de Toros, the Bank of Mexico and modern high buildings.",
    },
    x: 94.68,
    y: 0.4,
    width: 6,
    height: 7,
    box: null,
  },
  {
    id: 75,
    name: {
      spanish: "Francisco I. Madero",
      english: "Francisco I. Madero",
    },
    description: {
      spanish:
        "jefe del movimiento que derrocó a Porfirio Díaz e iniciador de la Revolución Mexicana. Presidente de México de 1911 a 1913, asesinado durante la Decena Trágica por orden de Victoriano Huerta.",
      english:
        "democrat, leader of Mexican Revolution that overthrew Diaz's dictatorship. President of Mexico from 1911 to 1913, when he was murdered.",
    },
    x: 90.63,
    y: 17.99,
    width: 1,
    height: 5,
    box: null,
  },
  {
    id: 76,
    name: {
      spanish: "Zapatista",
      english: "Zapatista",
    },
    description: {
      spanish:
        "participante de la Revolución Mexicana, seguidor de Emiliano Zapata, (líder revolucionario promotor de la reforma agraria, que proclamó el Plan de Ayala en 1911).",
      english:
        "follower ol Emiliano Zapata (peasant lander of the Nevican Rievoutom)",
    },
    x: 78.39,
    y: 26.89,
    width: 1,
    height: 5,
    box: null,
  },
];

module.exports = characters;
