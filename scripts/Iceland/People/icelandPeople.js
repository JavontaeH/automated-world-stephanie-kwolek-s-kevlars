const notableCitizens = [
  {
    name: "Hafþór Júlíus Björnsson",
    occupation: "Stongman",
    description:
      "Hafþór Júlíus Björnsson is an Icelandic professional strongman and actor. He is the first person to have won the Arnold Strongman Classic, Europe's Strongest Man and World's Strongest Man in the same calendar year.",
    website: "https://www.imdb.com/name/nm5485781/",
    image: "/images/iceland-images/thor-image.jfif",
  },
  {
    name: "Halldór Laxness",
    occupation: "Writer",
    description:
      "Halldór Kiljan Laxness was an Icelandic writer and winner of the 1955 Nobel Prize in Literature. He wrote novels, poetry, newspaper articles, essays, plays, travelogues and short stories.",
    website:
      "https://www.nobelprize.org/prizes/literature/1955/laxness/biographical/",
    image: "/images/iceland-images/halldor-image.jfif",
  },
  {
    name: "Kolbeinn Sigþórsson",
    occupation: "Soccer Player",
    description:
      "Kolbeinn Sigþórsson is an Icelandic professional footballer who plays as a striker. Currently a free agent, he most recently played for Allsvenskan club IFK Göteborg. Before being signed by Ajax for a fee of €4.5 million in the summer of 2011.",
    website: "https://us.soccerway.com/players/kolbeinn-sigthorsson/9605/",
    image: "/images/iceland-images/kolb-image.jfif",
  },
];

export const getPeople = () => {
  return notableCitizens;
};
