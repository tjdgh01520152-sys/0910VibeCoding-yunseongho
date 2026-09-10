import profileData from "../../data/profile.json";
import type { Profile } from "@/types/profile";

const profile = profileData as Profile;

export default function Home() {
  return (
    <main className="forest-gradient relative min-h-screen overflow-hidden">
      <div className="forest-stripes-1 pointer-events-none absolute inset-0" />
      <div className="forest-stripes-2 pointer-events-none absolute inset-0" />
      <div className="forest-glow pointer-events-none absolute inset-0" />
      <div className="forest-vignette pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[820px] px-8 pb-24 pt-[120px]">
        <div className="mb-6 text-xs uppercase tracking-[0.42em] text-[#8fb37e]">
          Profile
        </div>

        <h1 className="mb-4 text-balance font-serif text-[clamp(52px,11vw,108px)] font-normal leading-[0.95] tracking-[-0.01em] text-[#f2f7ef]">
          {profile.name}
        </h1>

        <div className="text-[13px] uppercase tracking-[0.28em] text-[#7d9070]">
          {profile.affiliation}
        </div>

        <div className="forest-divider mt-11 h-px" />

        <section className="mt-14 flex max-w-[620px] flex-col gap-5">
          <div className="text-[11px] uppercase tracking-[0.34em] text-[#8fb37e]">
            Bio
          </div>
          <p className="text-pretty text-[17px] font-light leading-[1.85] text-[#c6d3bf]">
            {profile.bio}
          </p>
          <p className="text-pretty text-[17px] font-light leading-[1.85] text-[#9fb097]">
            진행한 프로젝트{" "}
            <em className="font-serif text-[19px] italic text-[#dce7d6]">
              {profile.project.name}
            </em>{" "}
            에 대한 소개 — {profile.project.description}
          </p>
        </section>

        <div className="mt-16 grid gap-12 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          <section className="flex flex-col gap-[18px]">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#8fb37e]">
              Interests
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="forest-tag rounded-full px-[14px] py-[7px] text-[13px]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-[18px]">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#8fb37e]">
              Hobbies
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.hobbies.map((hobby) => (
                <span
                  key={hobby}
                  className="forest-tag rounded-full px-[14px] py-[7px] text-[13px]"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-[72px] flex flex-col gap-[18px]">
          <div className="text-[11px] uppercase tracking-[0.34em] text-[#8fb37e]">
            Links
          </div>
          <div className="flex flex-wrap gap-3">
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="forest-link rounded-sm px-[26px] py-[13px] text-[13px] uppercase tracking-[0.16em]"
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
