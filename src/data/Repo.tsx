import Pokemon from "../assets/repos/pokemon.jpeg";

export interface repoIntf {
  id: number;
  category: string;
  image: any;
  language: string[];
  link1: string;
  title: string;
  descripition: string;
}

const ReposData: repoIntf[] = [
  {
    id: 1,
    category: "Frontend",
    image: Pokemon,
    language: ["Typescript", "React.js"],
    link1: "https://github.com/tarunkundal/pokemon_api",
    title: "Pokemon Api",
    descripition:
      "A Pokemon single page application, by leveraging the PokeAPI and integrating it with a React frontend,where users can easily access and retrieve information about their favorite Pokémon, fostering a fun and educational experience.",
  },
];

export default ReposData;
