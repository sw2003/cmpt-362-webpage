import { FaGithub, FaYoutube, FaGooglePlay, FaCheckCircle, FaMapMarkedAlt, FaShieldAlt, FaBolt } from "react-icons/fa";

export default function Hero({
  imageSrc,                 // e.g. "/assets/hero.png"
  apkUrl = "/path/to/app.apk",
  githubUrl = "https://github.com/yourname/your-repo",
  youtubeUrl = "https://www.youtube.com/watch?v=your-video-id",
}) {
  return (
    <section className="relative overflow-hidden">
      {/* backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-3 py-1 text-xs text-gray-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              SFU Errands — Peer-to-Peer for Students
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Get errands done <span className="text-emerald-400">faster</span> by fellow SFU students
            </h1>

            <p className="mt-4 max-w-2xl text-gray-300">
              Clients post tasks, runners nearby pick them up. Matching is based on proximity and quick response.
              Live map like Uber, privacy-forward, and potentially lower fees—usable across all SFU campuses.
            </p>

            {/* Key points */}
            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" />
                Student verification (SFU auth) for trusted peer-to-peer jobs.
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkedAlt className="mt-0.5 h-4 w-4 text-emerald-400" />
                Live map tracking for pickups & deliveries—campus to campus.
              </li>
              <li className="flex items-start gap-2">
                <FaShieldAlt className="mt-0.5 h-4 w-4 text-emerald-400" />
                Privacy-first design with lean, student-friendly fees.
              </li>
              <li className="flex items-start gap-2">
                <FaBolt className="mt-0.5 h-4 w-4 text-emerald-400" />
                Core modules: authentication (student verification) + errands (Firestore) + friendly UI.
              </li>
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-emerald-700 active:scale-95"
              >
                <FaGooglePlay className="h-5 w-5" />
                Download APK
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-3 font-medium text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-gray-700 active:scale-95"
              >
                <FaGithub className="h-5 w-5" />
                View on GitHub
              </a>

              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-medium text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-red-700 active:scale-95"
              >
                <FaYoutube className="h-5 w-5" />
                Watch Demo
              </a>
            </div>

            {/* tiny meta */}
            <p className="mt-3 text-xs text-gray-500">
              For SFU students at Burnaby • Surrey • Vancouver campuses
            </p>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[24px] bg-emerald-500/10 blur-3xl" />
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="App preview"
                className="mx-auto w-full max-w-md rounded-2xl border border-gray-800 shadow-2xl"
              />
            ) : (
              <div className="mx-auto flex h-72 w-full max-w-md items-center justify-center rounded-2xl border border-dashed border-gray-700 text-gray-400">
                <img src="/hero.png" alt="Hero" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
