import React from "react";

const Portfolio = () => {
  const url = "https://api.github.com/user/repos";
  const accessToken = "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";

  const fetchRepo = async () => {
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchRepo();

  return <div>Portfolio</div>;
};

export default Portfolio;
// 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
// avatar github https://avatars.githubusercontent.com/u/116143264?v=4
