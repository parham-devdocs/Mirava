import type { Contributor } from "../../lib/api/types";

const ContributorCard = ({ contributers }: { contributers: Contributor[] }) => {
    return (
      <>
        {contributers.map((c) => (
          <a
            key={c.id}
            href={`https://github.com/${c.login}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${c.login}'s GitHub profile`}
            className="group p-3 rounded-xl border border-cyan-700/30 hover:border-cyan-400/50 hover:bg-cyan-800/30 flex flex-col gap-2 items-center hover:scale-110 transition-all duration-200"
          >
            <div className="rounded-full overflow-hidden relative w-16 h-16 sm:w-20 sm:h-20">
              <div className="absolute inset-0 bg-cyan-500/20 z-10" />
  
              <img
                src={`${c.avatar_url}&s=80`}
                alt={`${c.login}'s avatar`}
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
  
            <p className="text-xs text-cyan-200/70">{c.login.toLowerCase()}</p>
          </a>
        ))}
      </>
    );
  };
  
  export default ContributorCard
  