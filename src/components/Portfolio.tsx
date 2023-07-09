import React from "react";
import ReposData from "../data/Repo";
import RepoCard from "./RepoCard";
import { Flex } from "@chakra-ui/react";

// const url = "https://api.github.com/user/repos";
// const accessToken = "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";
const Portfolio = () => {
  const portfolioData = ReposData;
  //   const fetchRepo = async () => {
  //     try {
  //       const res = await fetch(url, {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });
  //       const data = await res.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchRepo();

  return (
    <>
      {portfolioData?.map((repo) => {
        return (
          <Flex
            mx={4}
            display={"inline-grid"}
            gridAutoColumns={"auto"}
            key={repo.id}
          >
            <RepoCard
              key={repo.id}
              id={repo.id}
              category={repo.category}
              image={repo.image}
              language={repo.language}
              link1={repo.link1}
              title={repo.title}
              descripition={repo.descripition}
            />
          </Flex>
        );
      })}
    </>
  );
};

export default Portfolio;
// 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
// avatar github https://avatars.githubusercontent.com/u/116143264?v=4
