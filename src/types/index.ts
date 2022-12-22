export interface Title {
  title: string;
}

export interface Subtitle {
  subtitle: string;
}

export interface Source {
  src: string;
}

export interface Linkage extends Title {
  href: string;
}

export interface Image extends Source {
  alt: string;
}

export interface Iframe extends Title, Source {
  caption: string;
}

export interface Welcome extends Linkage, Subtitle {
  callToAction: string;
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

export interface Field {
  label?: string;
  variant?: string;
  message?: string;
}

export interface Input {
  placeholder?: string;
  size?: string;
  isRounded?: boolean;
  hasStatusIcon?: boolean;
}

export interface Modal extends Title, Subtitle {
  icon: string;
  description?: string;
}
