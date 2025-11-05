import { FaGithub, FaYoutube, FaGooglePlay } from "react-icons/fa";

export default function LinkButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {/* APK Link */}
      <a
        href="/path/to/your-app.apk"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium shadow-md transition-transform transform hover:scale-105 active:scale-95"
      >
        <FaGooglePlay className="w-5 h-5" />
        <span>Download APK</span>
      </a>

      {/* GitHub Link */}
      <a
        href="https://github.com/yourusername/yourrepo"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium shadow-md transition-transform transform hover:scale-105 active:scale-95"
      >
        <FaGithub className="w-5 h-5" />
        <span>View on GitHub</span>
      </a>

      {/* YouTube Link */}
      <a
        href="https://www.youtube.com/watch?v=your-video-id"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium shadow-md transition-transform transform hover:scale-105 active:scale-95"
      >
        <FaYoutube className="w-5 h-5" />
        <span>Watch on YouTube</span>
      </a>
    </div>
  );
}
