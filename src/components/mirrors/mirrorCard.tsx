import { ExternalLink } from "lucide-react";
import type { Mirror } from "../../lib/api/types";



const MirrorCard = ({ mirrors }: {mirrors:Mirror[]}) => {
    console.log(mirrors)
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {mirrors.map((mirror) => (
        <article
          key={mirror.url}
          className="bg-cyan-900/40 h-[280px] hover:bg-cyan-800/50 backdrop-blur-sm border border-cyan-700/30 hover:border-cyan-500/40 transition-all duration-200 p-5 rounded-xl shadow-lg flex flex-col gap-3"
        >
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-base text-white leading-snug">
              {mirror.name}
            </h3>

            <a
              href={mirror.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${mirror.name}`}
              className="shrink-0 text-cyan-400 hover:text-cyan-200 transition-colors mt-0.5"
            >
              <ExternalLink size={15} />
            </a>
          </div>

          <p className="text-sm text-cyan-200/65 line-clamp-3 leading-relaxed flex-1">
            {mirror.description}
          </p>

          <div className="flex flex-wrap gap-1.5 overflow-y-auto">
            {mirror.packages.map((pkg) => (
              <span
                key={pkg}
                className="bg-cyan-700/40 text-cyan-100 text-xs font-medium px-2.5 py-0.5 rounded-full border border-cyan-600/30"
              >
                {pkg}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default MirrorCard;