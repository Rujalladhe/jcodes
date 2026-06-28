import { cn } from "@/lib/utils";
import { DoubleDotsIcon, ArrowDiagonalIcon } from "@/components/icons";

interface BlogPost {
  date: string;
  title: string;
  author: string;
}

const POSTS: BlogPost[] = [
  {
    date: "JUNE 24, 2026",
    title:
      "What Is Interview as a Service? The Complete Guide to Outsourcing Interviews",
    author: "INCRUITER TEAM",
  },
  {
    date: "MAY 27, 2026",
    title: "One-Way vs Two-Way AI Interviews: Which One Should You Use?",
    author: "INCRUITER TEAM",
  },
  {
    date: "MAY 20, 2026",
    title: "How AI Interview Software Fast-Tracks Candidate Screening by 75%",
    author: "INCRUITER TEAM",
  },
  {
    date: "MAY 7, 2026",
    title: "Deepfake Detection in Interviews: Stopping Hiring Fraud Before It Starts",
    author: "INCRUITER TEAM",
  },
  {
    date: "APRIL 29, 2026",
    title: "How to Cut Time-to-Hire From 42 Days to 6 Days",
    author: "INCRUITER TEAM",
  },
  {
    date: "APRIL 21, 2026",
    title: "InCruiter vs Zoom, Google Meet & MS Teams for Technical Interviews",
    author: "INCRUITER TEAM",
  },
  {
    date: "APRIL 7, 2026",
    title: "Building a Structured, Data-Driven Hiring Process That Scales",
    author: "INCRUITER TEAM",
  },
  {
    date: "MARCH 24, 2026",
    title:
      "How White-Labelled Interview Reports Strengthen Your Employer Brand",
    author: "INCRUITER TEAM",
  },
  {
    date: "MARCH 12, 2026",
    title: "Eliminating Interview Fatigue With an External Expert Panel",
    author: "INCRUITER TEAM",
  },
  {
    date: "MARCH 10, 2026",
    title:
      "How Conversational AI Removes Bias From the Interview Process",
    author: "INCRUITER TEAM",
  },
];

function CornerBrackets() {
  return (
    <>
      <span className="pointer-events-none absolute left-2 top-2 h-3 w-3 rounded-tl-[2px] border-l border-t border-white/30" />
      <span className="pointer-events-none absolute right-2 top-2 h-3 w-3 rounded-tr-[2px] border-r border-t border-white/30" />
      <span className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 rounded-bl-[2px] border-b border-l border-white/30" />
      <span className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 rounded-br-[2px] border-b border-r border-white/30" />
    </>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a
      href="#blog"
      className={cn(
        "group flex w-[82vw] shrink-0 snap-start flex-col overflow-hidden rounded-md",
        "border border-cgpt-line bg-cgpt-card/40 p-3 transition-all duration-300",
        "hover:-translate-y-1 hover:border-white/30",
        "sm:w-[58vw] md:w-[42vw] lg:w-[calc((100%-2.5rem)/3.2)]",
      )}
    >
      {/* Image placeholder */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-cgpt-card-2">
        <div
          className="absolute inset-0 opacity-[0.18] transition-opacity duration-300 group-hover:opacity-30"
          style={{ background: "var(--cgpt-gradient)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cgpt-bg/60 to-transparent" />
        <CornerBrackets />
        <span className="absolute bottom-3 right-3 text-cgpt-fg/40">
          <DoubleDotsIcon />
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col pt-4">
        <span className="font-mono text-[11px] uppercase tracking-wide text-cgpt-muted">
          {post.date}
        </span>
        <h3 className="font-sans mt-2 line-clamp-3 text-[18px] leading-snug text-cgpt-fg transition-colors group-hover:text-cgpt-fg-bright">
          {post.title}
        </h3>
        <span className="font-mono mt-auto pt-4 text-[11px] uppercase tracking-wide text-cgpt-muted">
          By {post.author}
        </span>
      </div>
    </a>
  );
}

export function BlogSection() {
  return (
    <section id="blog" className="bg-cgpt-bg">
      <div className="mx-auto max-w-[1320px] px-5 py-24 lg:px-8">
        {/* Heading block */}
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="font-mono mb-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-cgpt-muted">
              <DoubleDotsIcon className="text-cgpt-fg" />
              ..
            </span>
            <h2 className="font-sans text-[clamp(2.5rem,6vw,64px)] leading-[1.02] text-cgpt-fg">
              Explore our <span className="cgpt-gradient-text">blog</span>
            </h2>
          </div>

          <div className="flex items-center gap-5">
            <span className="font-mono flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] text-cgpt-muted">
              Read more
              <span className="text-cgpt-violet-light">&#9656;</span>
            </span>
            <a
              href="#blog"
              className="cgpt-gradient-border cgpt-glass font-mono inline-flex items-center gap-2 rounded-md px-5 py-3 text-[12px] uppercase tracking-[0.12em] text-cgpt-fg transition-colors hover:text-cgpt-fg-bright"
            >
              Visit blog page
              <ArrowDiagonalIcon />
            </a>
          </div>
        </div>

        {/* Cards row */}
        <div className="hide-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:-mx-8 lg:px-8">
          {POSTS.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-10">
          <a
            href="#blog"
            className="font-mono inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-cgpt-muted transition-colors hover:text-cgpt-fg"
          >
            Much more posts on our blog page
            <ArrowDiagonalIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
