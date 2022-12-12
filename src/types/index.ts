export interface Welcome {
  title: string;
  subtitle: string;
  callToAction: string;
  href: string;
}

export interface Iframe {
  src: string;
  title: string;
  caption: string;
}

export interface PersonalInfo {
  address: string;
  emailAddress: string;
  mobileNumber: string;
  languages: string;
  website: string;
  linkedIn: string;
}

export interface Linkage {
  title: string;
  href: string;
}

export interface Education {
  period: string;
  location: string;
  degree: string;
  gpa: string;
  university: string;
  activities: {
    property: string;
    description: string;
  }[];
}
