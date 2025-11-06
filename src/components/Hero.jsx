import {
  FaGithub,
  FaYoutube,
  FaGooglePlay,
  FaCheckCircle,
  FaShieldAlt,
  FaBolt,
  FaHandshake,
  FaMoneyBillWave,
  FaInfoCircle,
} from "react-icons/fa";

export default function Hero({
  imageSrc,                 // e.g. "/assets/hero.png"
  apkUrl = "https://drive.google.com/file/d/1eiWjz3AOiZlq1NGFsQ242H-9ds73LEvq/view?usp=sharing",
  githubUrl = "https://github.com/09shir/SFU-Errands",          // mobile/app repo
  githubWebUrl = "https://github.com/sw2003/cmpt-362-webpage",   // website repo
  youtubeUrl = "https://www.youtube.com/watch?v=your-demo-id",
  pitchUrl = "https://www.youtube.com/watch?v=pys8J1maRPQ",
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
              SFU Errands — MVP
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Post a job. <span className="text-emerald-400">Students</span> get it done.
            </h1>

            <p className="mt-4 max-w-2xl text-gray-300">
              Students post errands with a pay amount. Other students pick them up. Simple, fast, and campus-friendly.
            </p>

            {/* Key points */}
            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <FaMoneyBillWave className="mt-0.5 h-4 w-4 text-emerald-400" />
                Set your price: post what you need done and how much you’ll pay.
              </li>
              <li className="flex items-start gap-2">
                <FaHandshake className="mt-0.5 h-4 w-4 text-emerald-400" />
                Other SFU students claim the job and deliver.
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" />
                Student verification (SFU auth) for trusted peer-to-peer jobs.
              </li>
              <li className="flex items-start gap-2">
                <FaShieldAlt className="mt-0.5 h-4 w-4 text-emerald-400" />
                Privacy-first design with student-friendly fees.
              </li>
              <li className="flex items-start gap-2">
                <FaBolt className="mt-0.5 h-4 w-4 text-emerald-400" />
                Core modules: authentication + errands posting/claiming.
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <FaInfoCircle className="mt-0.5 h-4 w-4" />
                Live location is <span className="mx-1 rounded bg-gray-800 px-1.5 py-0.5 text-[11px] uppercase tracking-wide text-gray-300">not</span> in our MVP.
              </li>
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* APK */}
              <a
                href={apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-emerald-700 active:scale-95"
              >
                <FaGooglePlay className="h-5 w-5" />
                App Apk Here
              </a>

              {/* GitHub (mobile/app) */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-3 font-medium text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-gray-700 active:scale-95"
              >
                <FaGithub className="h-5 w-5" />
                App GitHub
              </a>

              {/* GitHub (website) */}
              <a
                href={githubWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-blue-700 active:scale-95"
              >
                <FaGithub className="h-5 w-5" />
                Website GitHub
              </a>

              {/* Demo */}
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-medium text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-red-700 active:scale-95"
              >
                <FaYoutube className="h-5 w-5" />
                Watch Demo
              </a>

              {/* Pitch */}
              <a
                href={pitchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 font-medium text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-purple-700 active:scale-95"
              >
                <FaYoutube className="h-5 w-5" />
                Pitch Video
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
