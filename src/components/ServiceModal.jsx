import { X } from "lucide-react";

export default function ServiceModal({ service, onClose, theme }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div
        className={`max-w-3xl w-full rounded-2xl p-8 relative overflow-y-auto max-h-[90vh]
          ${
            theme === "night"
              ? "bg-slate-900 text-white"
              : "bg-white text-slate-800"
          }
        `}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-indigo-500 cursor-pointer"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4 text-indigo-500">
          {service.title}
        </h2>

        {/* Overview */}
        <p className="mb-6 leading-relaxed">
          {service.overview}
        </p>

        {/* Sections */}
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-2">What we offer</h4>
            <ul className="list-disc pl-6 space-y-1">
              {service.offerings.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Technologies</h4>
            <p>{service.technologies}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Business Benefits</h4>
            <ul className="list-disc pl-6 space-y-1">
              {service.benefits.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
