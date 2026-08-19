import type { Contributor } from "./types";

export const githubContributorsListQueryOptions = {
  queryKey: ["github", "contributors-list"],
  staleTime: 60_000,
  queryFn: async () => {
    const response = await fetch(
      "https://api.github.com/repos/miravaorg/mirava/contributors"
    );
    const data = await response.json();

    return data as Array<Contributor>;
  },
};
