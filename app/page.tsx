import Image from "next/image";

const toolHighlights = [
  {
    title: "JWT decode & encode",
    description: "Inspect tokens safely with instant signature insights and payload formatting.",
  },
  {
    title: "Base64 toolkit",
    description: "Encode or decode strings, binaries, and data URLs in a single click.",
  },
  {
    title: "UUID generator",
    description: "Generate deterministic v5 or random v4 identifiers ready for production.",
  },
  {
    title: "Tech articles",
    description: "Curated best practices, playbooks, and deep dives straight from the field.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-52 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto h-[22rem] w-[40rem] translate-y-1/2 rounded-[120px] bg-blue-500/10 blur-[140px]" />
      </div>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 lg:px-12 lg:pt-28">
        <section className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
          <div className="flex flex-col items-center gap-8 rounded-[2.5rem] border border-white/10 bg-slate-950/70 px-10 py-12 text-center shadow-2xl backdrop-blur lg:items-start lg:text-left">
            <div className="relative flex items-center justify-center rounded-3xl bg-slate-900/80 p-8 ring-1 ring-white/10">
              <Image
                src="/logo.svg"
                alt="Dev Tools Center logo"
                width={320}
                height={320}
                priority
                className="h-auto w-52 drop-shadow-xl sm:w-64 lg:w-72"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Dev Tools Center
              </h1>
              <p className="text-lg leading-relaxed text-slate-300 sm:text-xl">
                A mark crafted for builders. The cube anchors daily utility, while the flowing D·T·C strokes echo precision tooling and connected knowledge.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="mailto:hello@devtools.center"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/40 transition hover:bg-cyan-300"
              >
                Request assets
              </a>
              <a
                href="/logo.svg"
                download
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200/80 hover:text-cyan-100"
              >
                Download vector
              </a>
            </div>
          </div>

          <div className="space-y-10 rounded-[2.25rem] border border-white/10 bg-slate-950/70 p-10 shadow-2xl backdrop-blur">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-200/70">
                Built for everyday flow
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Why the mark works
              </h2>
              <p className="text-base leading-relaxed text-slate-300">
                The layered cube represents the unified workspace, while the luminous glyphs carve a D · T · C monogram that devs can instantly recognize. Rounded joins nod to collaboration, and precise edges speak to reliability.
              </p>
            </div>
            <ul className="grid gap-6">
              {toolHighlights.map((tool) => (
                <li
                  key={tool.title}
                  className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-cyan-300/40 hover:bg-slate-900/90"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-100">
                    {tool.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {tool.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/5 bg-slate-900/50 px-8 py-10 text-center backdrop-blur">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-slate-300">
            Badge usage
          </p>
          <p className="mt-4 mx-auto max-w-3xl text-lg text-slate-200">
            Use the mark on dark or blurred surfaces for maximum contrast. Maintain generous padding and pair it with modern typefaces like Geist or Inter for a cohesive developer brand.
          </p>
        </section>
      </main>
    </div>
  );
}
