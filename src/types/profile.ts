export interface ProfileLink {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  affiliation: string;
  bio: string;
  project: {
    name: string;
    description: string;
  };
  interests: string[];
  hobbies: string[];
  links: ProfileLink[];
}
