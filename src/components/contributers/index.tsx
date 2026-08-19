import { useQuery } from "@tanstack/react-query";
import ContributorCard from "./contributorCard";

import { ContributorSkeleton } from "./contributorSkeleton";
import { githubContributorsListQueryOptions } from "../../lib/api";
import { useMemo } from "react";
import { ErrorMessage } from "../ErrorMessage";

const Contributors = () => {
    const {
        data: contributorsData,
        isLoading: contributorsLoading,
        isError: contributorsError,
      } = useQuery(githubContributorsListQueryOptions);
      const sortedContributors = useMemo(
        () =>
          contributorsData
            ?.slice()
            .sort((a, b) => b.contributions - a.contributions),
        [contributorsData],
      );
  return (
<section className="w-full">
<h2 className="font-bold text-2xl text-center mb-2">
  Contributors
</h2>

<p className="text-center text-sm text-cyan-200/60 mb-8">
  Special thanks to our contributors!
</p>

{/* Contributors loading */}
{contributorsLoading && (
  <div className="w-full flex flex-wrap justify-center gap-4">
    {Array.from({ length: 8 }).map((_, i) => (
      <ContributorSkeleton key={i} />
    ))}
  </div>
)}

{/* Contributors error */}
{contributorsError && (
  <ErrorMessage message="Failed to load contributors." />
)}

{/* Contributors */}
{sortedContributors && sortedContributors.length > 0 && (
  <div className="w-full flex flex-wrap justify-center gap-4">
    <ContributorCard  contributers={sortedContributors}/>
    </div>)}
</section>
  )
}

export default Contributors