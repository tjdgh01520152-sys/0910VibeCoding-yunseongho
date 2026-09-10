import profileData from "../../data/profile.json";
import type { Profile } from "@/types/profile";

const profile = profileData as Profile;

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-xl w-full space-y-10">
        <section className="space-y-3">
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="text-gray-600">{profile.affiliation}</p>
          <p className="text-base leading-relaxed">{profile.bio}</p>
          <p className="text-base leading-relaxed">
            <span className="font-semibold">{profile.project.name}</span> —{" "}
            {profile.project.description}
          </p>
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
              관심사
            </h2>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
              취미
            </h2>
            <div className="flex flex-wrap gap-2">
              {profile.hobbies.map((hobby) => (
                <span
                  key={hobby}
                  className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
            링크
          </h2>
          <ul className="space-y-1">
            {profile.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  className="underline hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
