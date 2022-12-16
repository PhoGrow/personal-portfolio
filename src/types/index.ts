export interface Title {
  title: string;
}

export interface Linkage extends Title {
  href: string;
}

export interface Welcome extends Linkage {
  subtitle: string;
  callToAction: string;
}

export interface Iframe extends Title {
  src: string;
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

export interface Education {
  period: string;
  location: string;
  degree: string;
  gpa: string;
  university: string;
  activities: {
    property: string;
    description: string;
    linkage?: Linkage;
  }[];
}

export interface SkillSet extends Title {
  skills: {
    property: string;
    linkage?: Linkage;
  }[];
}
