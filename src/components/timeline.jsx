import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const milestones = [
    {
      title: "Project Setup",
      desc: "Initial environment configuration and design.",
      details: [
        "Repositories, environment, and structure setup.",
        "Figma designs and database schema creation.",
        "Tech stack selection: React/Tailwind (Web) & Kotlin (Android)."
      ]
    },
    {
      title: "Authentication & User Management",
      desc: "Secure access and user profiles.",
      details: [
        "Integrated Firebase Authentication (Sign-up, Login, Logout, MFA).",
        "Implemented @sfu.ca email verification to ensure trusted peer-to-peer jobs.",
        "Added support for user profile pictures."
      ]
    },
    {
      title: "Errand Creation & Management",
      desc: "Core features for posting and managing jobs.",
      details: [
        "Built UI for posting jobs (Title, Description, Campus, Price).",
        "Connected creation form to Firestore with schema validation and default values.",
        "Implemented 'Requests' tab for users to view their created errands.",
        "Added Edit/Delete functionality for unclaimed errands."
      ]
    },
    {
      title: "Errand Discovery & Execution",
      desc: "Marketplace for runners to find and complete tasks.",
      details: [
        "Filtered Home page to show only eligible 'open' errands.",
        "Implemented logic for runners to 'Claim' tasks and update database status.",
        "Created 'Tasks' tab for runners to manage claimed jobs, mark as complete, or unclaim."
      ]
    },
    {
      title: "Infrastructure & Features",
      desc: "Real-time updates and media support.",
      details: [
        "Implemented real-time listeners to auto-refresh the UI on database changes.",
        "Integrated Firebase Storage for handling images in profiles, chats, and errands.",
        "Established CRUD operations for backend data persistence."
      ]
    },
    {
      title: "Final Deployment",
      desc: "MVP Polish and Release.",
      details: [
        "Final bug fixes and UI polishing.",
        "Landing page deployment.",
        "APK preparation and release."
      ]
    },
  ];

  return (
    <section id="timeline" className="bg-gray-950 text-gray-100 py-16 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Project <span className="text-emerald-400">Timeline</span>
        </h2>

        <div className="relative border-l-2 border-gray-800 pl-8 space-y-8">
          {milestones.map((item, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <span
                className={`absolute -left-[41px] top-6 w-5 h-5 rounded-full border-2 ${
                  i <= 4 // Highlights completed/in-progress milestones
                    ? "bg-emerald-500 border-emerald-400"
                    : "bg-gray-900 border-gray-700"
                }`}
              ></span>

              {/* Card */}
              <div 
                className={`bg-gray-900/50 border rounded-xl p-5 transition-all duration-300 cursor-pointer ${
                  expandedIndex === i ? "border-emerald-500/50 bg-gray-900" : "border-gray-800 hover:border-emerald-500/30"
                }`}
                onClick={() => toggleExpand(i)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-emerald-400 font-medium">
                      {item.desc}
                    </p>
                  </div>
                  <button 
                    className="text-gray-400 hover:text-white transition-colors ml-4"
                    aria-label={expandedIndex === i ? "Collapse" : "Expand"}
                  >
                    {expandedIndex === i ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>

                {/* Expanded Details */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedIndex === i ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 border-t border-gray-800 pt-4">
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 marker:text-emerald-500">
                      {item.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}