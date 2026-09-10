import profileData from "../../data/profile.json";
import type { Profile } from "@/types/profile";

const profile = profileData as Profile;

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-16">
      <div className="max-w-2xl w-full space-y-12">
        <section className="text-center space-y-3 border-b-4 border-red-600 pb-8">
          <p className="text-red-600 font-bold tracking-[0.3em] text-sm uppercase">
            Fighter Profile
          </p>
          <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tight">
            {profile.name}
          </h1>
          <p className="text-gray-400 uppercase tracking-widest text-sm">
            {profile.affiliation}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm border-l-4 border-red-600 pl-3">
            Bio
          </h2>
          <p className="text-gray-200 leading-relaxed">{profile.bio}</p>
          <p className="text-gray-200 leading-relaxed">
            <span className="text-white font-bold">{profile.project.name}</span>{" "}
            — {profile.project.description}
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm border-l-4 border-red-600 pl-3">
              관심사
            </h2>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="border border-red-600 text-white uppercase text-xs font-bold tracking-wide px-3 py-1"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm border-l-4 border-red-600 pl-3">
              취미
            </h2>
            <div className="flex flex-wrap gap-2">
              {profile.hobbies.map((hobby) => (
                <span
                  key={hobby}
                  className="border border-red-600 text-white uppercase text-xs font-bold tracking-wide px-3 py-1"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm border-l-4 border-red-600 pl-3">
            링크
          </h2>
          <div className="flex flex-col sm:flex-row gap-3">
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-center uppercase font-bold tracking-widest px-6 py-3 transition-colors hover:bg-red-600 hover:border-red-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
