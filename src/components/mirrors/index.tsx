import { useQuery } from "@tanstack/react-query";
import { miravaMirrorsListQueryOptions } from "../../lib/api";
import { MirrorSkeleton } from "./mirrorSkeleton";
import { ErrorMessage } from "../ErrorMessage";
import MirrorCard from "./mirrorCard";

const Mirrors = () => {
  const { data, isLoading, isError } = useQuery(
    miravaMirrorsListQueryOptions
  );
console.log(data)
  return (
    <section className="w-full">
      <h2 className="font-bold text-2xl text-center mb-6">
        Mirrors List
      </h2>

      {/* Loading */}
      {isLoading && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <MirrorSkeleton key={i} />
          ))}
        </div>
      )}

      {/* Error */}
      {isError && (
        <ErrorMessage message="Failed to load mirrors. Please try again later." />
      )}

      {/* Empty */}
      {data && data.mirrors.length === 0 && (
        <p className="text-center text-cyan-300/60 py-10">
          No mirrors available.
        </p>
      )}

      {/* Success */}
      {data  && (
        <MirrorCard mirrors={data.mirrors} />
      )}
    </section>
  );
};

export default Mirrors;