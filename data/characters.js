const characters = [
  {
    id: 1,
    name: {
      spanish: "Don José María Vigil y Robles",
      english: "Don José María Vigil y Robles",
    },
    description: {
      spanish:
        "Historiador y director de la Biblioteca Nacional, soñando con el pasado y evocando la historia de la Alameda.",
      english:
        "Historian and former Director of the National Library, he serves as our symbolic guide through the history of the Alameda park depicted in this mural.",
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
        "Gobernador de la Ciudad de México durante parte del régimen de Porfirio Díaz.",
      english: "Governor of Mexico City during part of Porfirio Diaz's regime.",
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
        "Acaudalado lagunero, amigo y protector de artistas, destacando su relación especial con Julio Ruelas.",
      english:
        "A wealthy Porfirian landowner and patron of the arts, especially of the 19th-century Mexican painter, Julio Ruelas.",
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
      spanish:
        "Conquistador español que lideró la conquista del territorio mexicano.",
      english: "The Spanish conqueror of Mexican territory.",
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
        "Octavo Virrey de la Nueva España. En 1592 fundó el Paseo de la Alameda.",
      english:
        "The 8th Viceroy of Mexico, who founded the Alameda park in 1592.",
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
        "Primer obispo y arzobispo de la Nueva España. En 1539, mandó quemar vivo a un nieto de Nezahualcóyotl acusado de idolatría, convirtiéndose este en la primera víctima de la Inquisición en la Nueva España.",
      english:
        "The first Catholic archbishop of Mexico, he established the Catholic Inquisition in Mexico and ordered the first burning of a so-called heretic in 1539, a grandson of Nezahualcoyotl.",
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
        "Once part of the Convent of Saint Diego, this site is now integrated into the Alameda.",
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
      english: "Doña Mariana Violante de Carbajal",
    },
    description: {
      spanish:
        "Hermosa judía perteneciente a la famosa familia que fue juzgada y condenada a la hoguera por la Inquisición, bajo la acusación de herejía.",
      english:
        "A Jew who was unjustly accused of heresy and subsequently burned at the stake, a significant event during Mexican colonial times.",
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
        "De una sola torre, cuya construcción se concluyó en 1621, modificándose su fachada a principios del siglo XIX.",
      english:
        "Built with a single tower, its construction was completed in 1621. Its facade was modified in the first half of the 19th century.",
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
      spanish: "Sor Juana Inés de la Cruz (1651-1695)",
      english: "Sor Juana Inés de la Cruz (1651-1695)",
    },
    description: {
      spanish:
        "La más notable poetisa de la Nueva España durante la Colonia, que mereció el nombre de la Décima Musa. Declaró el derecho de la mujer a la cultura y a disentir, por lo que resulta una de las precursoras de la lucha por los derechos femeninos.",
      english:
        "Known as the Tenth Muse, she is the most renowned female poet of New Spain. A defender of women's rights to education, culture, and expression, her exceptional poetry remains a classic in Mexican literature.",
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
        "Soñando con la comida que comprará con el producto de su hurto.",
      english:
        "Fantasizing about the meal he'll purchase with his stolen goods.",
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
        "De atuendo otrora elegante, que sueña en su idilio al son de un vals, recordando a su Alteza Serenísima don Antonio López de Santa Anna.",
      english:
        "Revisiting his days of youth when he played a role in the achievements of Mexico under General Antonio López de Santa Anna.",
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
        "General y político que ocupó la presidencia de México en once ocasiones entre 1833 y 1855. A raíz de su decisión de ceder Texas a Estados Unidos en 1847, México perdió, en 1848, el 51% de su territorio debido a la invasión norteamericana.",
      english:
        "A general and politician who served as Mexico's president eleven times between 1830 and 1855. After opposing American advances in 1847, his decisions led to Mexico losing 51% of its territory to the US in 1848.",
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
        "General norteamericano cuyas tropas ocuparon la ciudad de México y acamparon en la Alameda Central durante la invasión del ejército de Estados Unidos, de 1846 a 1848.",
      english:
        "The American general who led the troops occupying Mexico City and encamped at the Alameda from 1846 to 1848.",
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
        "Militar realista que ayudó a consumar la independencia y comandó al Ejército Trigarante en su entrada a la capital de México en 1821. Durante diez meses fue emperador de México, de 1822 a 1823.",
      english:
        "Initially loyal to Spain, he later joined forces with Vicente Guerrero, leader of the insurrection, to achieve Mexico's independence. He established the short-lived First Empire between 1822 and 1823 through a series of deceptions and political maneuvers.",
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
        "Designed by architect José Ramón de Ibarrola, this structure was originally in the Central Alameda and was later relocated to the Alameda of Santa Maria la Ribera.",
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
        "Soñando con el amor vivido junto a uno de los invasores norteamericanos, con quien tuvo un hijo rubio.",
      english:
        "Daydreaming about her romance with an American invader with whom she had a blond son.",
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
      spanish: "Soñando en sus glorias cuando era chinaco liberal.",
      english:
        "Reminiscing about his glory days when he sided with the liberals in the 1860s.",
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
        "Héroe nacional y Presidente de México (1857 - 1872) durante la Guerra de Tres Años (1858-1860) y la intervención Francesa (1863 - 1867). Mereció la distinción de Benemérito de las Américas.",
      english:
        "The leader of Mexican liberals who promoted civil and democratic governance over ecclesiastical rule. As Mexico's president (1857-1872), he successfully opposed the Catholic Church, the French invasion, and Maximilian from 1863 to 1867. He was later known as the 'Glorious man of the American Continent.'",
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
        "Novelista y miembro radical del Congreso de la Unión. Alcanzó el grado de coronel durante la Intervención Francesa.",
      english:
        "A liberal under Juárez, he served as a congressman, a colonel against the French, and balanced his political duties with his writings, emerging as one of Mexico's premier rural novelists.",
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
      spanish: "Ignacio Ramírez, 'El Nigromante'",
      english: "Ignacio Ramirez, known as 'El Nigromante'",
    },
    description: {
      spanish:
        "Notable pensador liberal, quien en 1836, siendo estudiante, declaró que ‘Dios no existe’ en la Conferencia de la Academia de Letrán.",
      english:
        "A liberal thinker whose 1836 speech at the intellectual Academy of Letrán, proclaiming God's non-existence, caused a significant political stir.",
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
      spanish: "Leandro Valle (1833-1861)",
      english: "Leandro Valle (1833-1861)",
    },
    description: {
      spanish:
        "Joven soldado liberal que combatió a los norteamericanos (1847) y a los rebeldes de Puebla (1856). Participó en la Guerra de Tres Años ascendiendo a general. En 1861 fue diputado federal y comandante del Distrito Federal, combatiendo a los conservadores fue aprehendido y fusilado en el Monte de las Cruces el 23 de junio.",
      english:
        "He spent his short life opposing the American invasion and advocating for the Republic. He was executed in 1861 at the 'Monte de las Cruces'.",
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
      spanish: "Soñando con el periodo del Segundo Imperio.",
      english: "Dreaming of the era during Maximilian's Empire.",
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
      english: "Empress Carlota",
    },
    description: {
      spanish:
        "Esposa de Maximiliano de Hasburgo. Ordenó el arreglo de la Alameda debido a las malas condiciones en que se encontraba.",
      english:
        "Empress and wife to Maximilian, she beautified the Alameda during their reign.",
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
        "Notable austriaco nombrado emperador por los conservadores mexicanos y apoyado por el ejército francés, de 1864 a 1867. Fue fusilado en el Centro de las Campanas, por orden de Benito Juárez.",
      english:
        "Briefly emperor of parts of Mexico from 1864-1867, he was imposed by the French with the backing of the Catholic Church and conservatives. Deemed an usurper, he was executed in 1867 at the 'Cerro de las Campanas'.",
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
        "Oficial de la guardia personal de la emperatriz Carlota y, además, tío del artista Diego Rivera.",
      english:
        "An imperial guard in Maximilian's court and uncle to the artist, Diego Rivera.",
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
      spanish: "Colaboró con el Imperio y fue fusilado junto a Maximiliano.",
      english:
        "A staunch conservative who briefly served as Mexico's president. He was executed alongside Maximilian for betraying the Mexican nation.",
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
        "Mariscal de las tropas extranjeras durante la Intervención Francesa.",
      english: "Commander of the French invading forces.",
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
        "Militar republicano a quien Maximiliano entregó su espada tras ser derrotado en el sitio de Querétaro.",
      english:
        "Liberal Republican general who accepted Maximilian's surrender in 1867 at Querétaro.",
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
      english: "A Newspaper boy",
    },
    description: {
      spanish:
        "Vendiendo 'El Imparcial', uno de los periódicos más importantes de la época.",
      english:
        "Selling 'El Imparcial', the most significant conservative journal of that era.",
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
      english: "A Balloon-seller",
    },
    description: {
      spanish:
        "Personaje típico de los domingos ofreciendo sus globos de colores.",
      english: "A typical character seen on Sundays.",
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
        "Vendiendo dulces típicos: muégano, enjambre de nuez, pepitoria, etcétera.",
      english: "Selling traditional Mexican sweets.",
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
        "Ofreciendo su mercancía: pirulís, entre los que hay jinetes, corazones, damas, chiles verdes y rojos y la lira del poeta.",
      english: "Offering elaborate and artistic Mexican sweets",
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
        "El Duque Job, poeta precursor del modernismo en América. Fundó la revista Azul.",
      english:
        "Known as 'El Duque Job', a renowned poet and forerunner of the Modernistic school. He founded the 'Azul' magazine.",
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
      spanish: "Hija de don Porfirio y su primera esposa, Delfina Ortega.",
      english:
        "Daughter of Porfirio Diaz's first marriage with Delfina Ortega.",
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
        "Segunda esposa de Porfirio Díaz e hija de don Manuel Romero Rubio, ministro de Gobernación del porfiriato. Para representarlas Rivera tomó como modelos a sus tías Vicenta y Cesárea.",
      english:
        "Díaz's second wife and daughter of his political interior minister, Manuel Romero Rubio. Rivera used his aunts, Vicenta and Cesarea, as models to depict them.",
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
        "Destacado poeta y padre de la Independencia de Cuba, que vivió en México de febrero de 1875 a finales de diciembre de 1876. Tuvo una actividad notable de esos dos años en las letras mexicanas, relacionándose con los más renombrados literatos de la época. En 1894 hizo un viaje rápido para reunir fondos para la invasión por la independencia de su isla natal bajo el dominio español. Murió en el combate de la sabana de Dos Ríos el 19 de mayo de 1895.",
      english:
        "The father of Cuba's independence. He lived in Mexico between 1875-1876. A notable modernistic poet, he played a significant role in Mexico's cultural and literary life. Marti returned to Mexico in 1894 seeking support against Spanish rule in Cuba and died in combat on May 19, 1895.",
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
      spanish: "Diego, de niño",
      english: "Diego Rivera as a child,",
    },
    description: {
      spanish:
        "Autorretrato del pintor Diego Rivera de niño. Se representa tomado de la mano de la Muerte Catrina, soñando con su amor eterno, personificado por Frida Kahlo.",
      english:
        "A self-portrait, depicting him with a traditional Mexican symbol of death, the 'Calavera Catrina', daydreaming of his future love, Frida Kahlo.",
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
      spanish: "Frida Kahlo",
      english: "Frida Kahlo",
    },
    description: {
      spanish:
        "Renombrada pintora mexicana que estuvo casada con Rivera durante veinticinco años. En su mano, sostiene el símbolo chino del yin-yang.",
      english:
        "Diego's wife and a prominent painter influenced by surrealism and Mexican folk art. Her works encapsulate love, suffering, and salvation, often featuring events, Diego, and herself. She holds the yin-yang Oriental symbol.",
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
        "Personaje creado por el grabador José Guadalupe Posada, a quien Rivera representó con una boa de plumas que no es más que Quetzalcóatl, la serpiente emplumada de las culturas prehispánicas. Así rinde culto a ’Tonantzin’.",
      english:
        "A Mexican representation of death by Posada. Diego adorns her with a feather stole symbolizing Quetzalcoatl, the God of Prehispanic cultures.",
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
        "Editor de Regeneración, publicación liberal antiporfirista, y precursor de la Revolución Mexicana a través del Partido Liberal (fundado en 1906), cuyos organizadores, además de él, fueron su hermano Enrique, Anselmo L. Figueroa, Praxedis G. Guerrero y Librado Rivera. Anarquista indomable, perseguido por sus ideas políticas, murió en prisión en Estados Unidos.",
      english:
        "An ideologist, writer, and anarchist precursor of the Mexican Revolution. A member of the Mexican Liberal Party, he faced persecution and died in prison at Fort Leavenworth, Kansas.",
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
        "Extraordinario grabador que ilustró las publicaciones populares del México anterior a la Revolución, y a quien Diego Rivera consideró siempre como un maestro importante en su formación plástica. Una de sus más famosas creaciones fue la Calavera Catrina.",
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
        "Colaborador muy cercano de Ricardo Flores Magón, quien sufrió persecución y prisión como todos los miembros del Partido Liberal, al cual pertenecía. Amigo y seguidor fiel de las ideas anarquistas de Flores Magón, en 1918 fue sentenciado junto con él a sufrir larga condena.",
      english:
        "A Mexican Liberal Party member, he endured lengthy prison sentences alongside Flores Magón.",
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
        "Cuidando que las 'gentes decentes' puedan transitar tranquilamente sin mezclarse con gente del pueblo.",
      english:
        "A 1910 policeman, ensuring 'decent people' remain undisturbed by 'the rabble'.",
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
        "Reanudó los viajes aerostáticos en globo en la capital de la República en 1863, después de que estos fueran prohibidos en la ciudad de México en 1862 por considerarse peligrosos. Sueña ascendiendo en su globo 'República Mexicana', agitando una bandera tricolor.",
      english:
        "Mexico's primary aeronaut during the late 19th Century. He's portrayed daydreaming of his balloon, 'República Mexicana', adorned with Mexican flags.",
    },
    x: 50.19,
    y: 8.95,
    width: 5,
    height: 40,
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
        "Chiutlahua legítima, caricortada y garbosa, que enfrenta al gendarme que le cierra el paso para que no moleste a las personas ‘decentes’ que pasean en la Alameda. En esta figura Rivera rindió homenaje a uno de sus amores, una famosa tiple.",
      english:
        "A spirited figure, a real Chiutilahua and popular character, is here painted challenging the 'gendarme' and the 'decent people', Rivera's tribute to his beloved, a renowned theater singer.",
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
        "Eterno candidato a la Presidencia de la República durante el porfiriato. Sueña que el dictador le entrega la silla presidencial, la banda tricolor y la gloria.",
      english:
        "A recurring 'candidate' during Diaz's regime, whimsically depicted imagining the presidency bestowed by Diaz himself.",
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
        "General político que ocupó la Presidencia de la República durante treinta años.",
      english:
        "The Mexican dictator who held power for over thirty years until until he was ousted in 1911.",
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
        "Apodado General Medallas. Héroe del pueblo durante la Invasión Norteamericana. Se convirtió en un personaje característico del Paseo de la Alameda, de los chiquillos y bromistas que lo condecoraban con objetos brillantes.",
      english:
        "Guerrero, a popular hero during the American invasion. Having outlived his time, he became a permanent staple of the Alameda landscape. He was nicknamed General Medals.",
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
        "Con dos niños que se burlan; el niño, del General Medallas, y la niña de una pequeña indígena que llora porque la sacan con su familia de la Alameda.",
      english:
        "Mocking General Medals alongside their children, at the expense of a peasant child.",
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
        "Que impide que una familia campesina transite por la Alameda, ‘reservada para las clases acomodadas’, expulsándola por la fuerza.",
      english:
        "A policeman, driving a peasant family out of the Alameda park, an area designated for 'decent people'.",
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
      spanish: "Tocando en el kiosko de la Alamada.",
      english: "Performing at the bandstand.",
    },
    x: 65.73,
    y: 38.83,
    width: 7,
    height: 7,
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
        "Es expulsada por la fuerza. Sus miembros sueñan con la lucha reivindicatoria de sus derechos. El padre y la madre aparecen como revolucionarios y el hijo dispara sobre el represor.",
      english:
        "Dreaming of their revolutionary roles, with their child envisioning confronting the oppressor.",
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
        "Que es expulsado junto con la familia campesina. Sueña con participar en la lucha popular que derribará el feudalismo porfiriano. Los árboles con sus follajes en esta sección muestran ritmos dinámicos que enmarcan la ola de violento colorido que emana de los sueños de los personajes representados.",
      english:
        "Exiled alongside the peasant family, he shares their revolutionary dream.",
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
        "Soñando con buenas cosechas de maíz gracias a la ayuda de un arado de disco, con muchos pesos y un pellejo de pulque.",
      english:
        "Fantasizing about achieving wealth through fruitful corn yields, aided by a mechanical plow.",
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
      spanish: "Ofreciendo su mercancía.",
      english: "Offering his products.",
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
        "Escritor, periodista y revolucionario maderista, fundador del México Nuevo y del Nueva Era y colaborador del Antirreeleccionista. Está soñando con José Vasconcelos en un cambio radical para el país.",
      english:
        "A revolutionary writer for Madero and his private secretary. He founded 'México Nuevo' and 'Nueva Era' newspapers.",
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
        "Destacado político y escritor mexicano. Autor intelectual del llamado Renacimiento del muralismo mexicano; durante su gestión como rector de la Universidad y primer Secretario de Educación, invitó a varios pintores, entre ellos a Rivera, para decorar los muros de la Preparatoria (Antiguo Colegio de San Ildefonso).",
      english:
        "A prominent politician and Mexican author. As the University's rector and first Education Minister, he summoned painters like Rivera to beautify the walls of the Escuela Nacional Preparatoria.",
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
        "Que habla a mujeres y hombres jóvenes de la pequeña burguesía y del artesanado sobre las ideas revolucionarias publicadas en Regeneración, editando por Ricardo Flores Magón, donde el ideal de “Tierra y Libertad” del Partido Liberal está explicado por Lázaro Gutiérrez de Lara, uno de los ideólogos precursores de la Revolución Mexicana, que estallaría en 1910. Este personaje está representado por Manuel Martínez, quien fue ayudante personal de Diego Rivera durante años.",
      english:
        "Advocating for the revolution as inspired by Flores Magón. Rivera used his assistant, Manuel Martinez, as a model.",
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
      english: "Middle-Class Boy Eating a Mexican Torta",
    },
    description: {
      spanish:
        "Comiendo una torta. Aquí vuelve a autorretratarse Diego Rivera, soñando con la que habría sido de ser su familia: esposa, hijas y nieto, así como amigos cercanos.",
      english:
        "Rivera's self-portrait, dreaming of his wife, children, and grandchild.",
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
        "Que las expende al niño de clase media, a un estudiante de leyes y a dos alumnos de la antigua Escuela de Aspirantes de Tlalpan.",
      english:
        "Serving the middle-class boy, as well as a law student and other scholars.",
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
      spanish: "Hija de Diego y de Lupe Marín, su segunda esposa.",
      english: "Daughter of Diego and his second wife, Lupe Marin.",
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
      english: "Rosa Rolando de Covarrubias",
    },
    description: {
      spanish:
        "Gran amiga de Rivera y esposa del también pintor Miguel Covarrubias.",
      english:
        "Good friend of Rivera and wife of Miguel Covarrubias, also a painter",
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
        "Hija mayor de Diego y de Lupe Marín. Lleva en brazos a su pequeño hijo Juan Pablo.",
      english: "Diego's eldest daughter, holding her child, Juan Pablo.",
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
        "Segunda de las cuatro esposas que tuvo Rivera a lo largo de su vida y madre de Ruth y Guadalupe.",
      english: "The second of Rivera's four wives.",
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
      spanish: "Que eleva y muestra su mercancía.",
      english: "Raising and showing the toys for sale.",
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
        "Aparece como parte de la trilogía del pueblo: el campesino, el soldado y el obrero. Los tres sellan con las manos entrelazadas el compromiso del sufragio efectivo representado por la urna. Este sueño expresado por el obrero revolucionario del nivel inferior está coronado en la parte superior por la efigie de Francisco I. Madero y el lema “Sufragio Efectivo. No Reelección”, materializando el sueño de la industrialización de México.",
      english:
        "A revolutionary general dreaming, alongside a worker, soldier, and peasant, of Mexico's political democracy. They envision the realization of Madero's 'Effective suffrage. No re-election'.",
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
        "Con la avidez pintada en el rostro, simboliza al ‘fósil’ de Derecho que sueña con hacer una gran carrera política sin escrúpulos, enriqueciéndose y obteniendo un inmenso poder.",
      english:
        "A law student, he daydreams of a prosperous, corrupt political future.",
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
        "Con el uniforme del plantel militar, soñando con los traidores y asesinos Victoriano Huerta y Manuel Mondragón, y con los planes de la contrarrevolución.",
      english:
        "Fantasizing about the traitors Victoriano Huerta and Manuel Mondragon, and the assassination of President Madero.",
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
        "General que mandó asesinar a Madero y a José María Pino Suárez para usurpar la Presidencia de la República.",
      english:
        "A general and traitor responsible for the deaths of José María Pino Suárez and Francisco I. Madero.",
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
        "General cómplice de Huerta que mandó las fuerzas federales contra Madero durante la Decena Trágica. Padre de Nahui Olin.",
      english:
        "Army general, an accomplice of Huerta in the assassination of Madero. Nahui Olin's father.",
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
        "(Plutarco Elías Calles?, Miguel Alemán), despachando sobre la caja fuerte de Cinycomex, S.A. de R.I. (Sociedad Anónima de Recursos Ilimitados), manejando inmensas cantidades de dinero y acariciando a una joven rubia con anuencia de sus consejeros, uno de ellos un arzobispo (Luís Gonzaga María Martínez).",
      english:
        "Symbolizing corrupt presidencies, engaged in fiscal indulgence and dalliances, sanctioned by an archbishop.",
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
        "Según definición de Rivera (General Máximo Ávila Camacho?, Ingeniero Alberto J. Pani?, General Juan Andrew Almazán?), abraza a una joven mujer que se encuentra encaramada sobre un árbol (el jóven árbol de la burguesía), mientras con la otra mano sostiene una alta pila de billetes. Un niño pequeño le da los brazos casi oculto tras los rehiletes (símbolo de la inconstancia y versatilidad de los políticos). La dama del árbol empuja con uno de sus pies el carrizo de los rehiletes. \"Es esta dama, feliz y heredera de centenas de millones, la culminación de la familia revolucionaria y el 'pendant' de Violante de Carvajal…\".",
      english:
        "A symbolic image of corrupt poiticians making their fortune by working for the govemment.",
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
        "Donde pueden reconocerse el Teatro Nacional (después Palacio de Bellas Artes), la Plaza de Toros, el Banco de México y otros edificios de gran altura.",
      english:
        "Showcasing notable landmarks like the National Theatre, Plaza de Toros, Bank of Mexico, and towering structures.",
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
        "Jefe del movimiento que derrocó a Porfirio Díaz e iniciador de la Revolución Mexicana. Presidente de México de 1911 a 1913, asesinado durante la Decena Trágica por orden de Victoriano Huerta.",
      english:
        "Democrat and leader of Mexican Revolution that overthrew Diaz's dictatorship. President of Mexico from 1911 to 1913, when he was murdered.",
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
        "Participante de la Revolución Mexicana, seguidor de Emiliano Zapata, (líder revolucionario promotor de la reforma agraria, que proclamó el Plan de Ayala en 1911).",
      english:
        "Follower of Emiliano Zapata, peasant leader of the Mexican Revolution.",
    },
    x: 78.39,
    y: 26.89,
    width: 1,
    height: 5,
    box: null,
  },
];

module.exports = characters;
