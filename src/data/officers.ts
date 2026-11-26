/**
 * Officer profile content.
 *
 * Only add factual biography, qualifications, appointments, photographs and
 * official contact details after they have been confirmed by CFSL Hyderabad.
 */
export type OfficerProfile = {
  slug: string;
  name: string;
  designation: string;
  biography: string | null;
  qualifications: string[];
  experience: string | null;
  specialisations: string[];
  email: string | null;
  officePhone: string | null;
  photo: string | null;
};

export const officerProfiles: Record<string, OfficerProfile> = {
  "Dr. M. Maheshwari": {
    slug: "dr-maheshwari",
    name: "Dr. M. Maheshwari",
    designation: "Head of Physics, Ballistics, Psychological & Digital Forensics Divisions",
    biography: null,
    qualifications: [],
    experience: null,
    specialisations: [],
    email: null,
    officePhone: null,
    photo: null,
  },
  "Mr. S. Sudhakar": {
    slug: "mr-sudhakar",
    name: "Mr. S. Sudhakar",
    designation: "Head of Toxicology",
    biography: null,
    qualifications: [],
    experience: null,
    specialisations: [],
    email: null,
    officePhone: null,
    photo: null,
  },
  "Dr. Cijo John": {
    slug: "dr-cijo-john",
    name: "Dr. Cijo John",
    designation: "Head of Narcotics",
    biography: null,
    qualifications: [],
    experience: null,
    specialisations: [],
    email: null,
    officePhone: null,
    photo: null,
  },
  "Mr. Trilochan Joshi": {
    slug: "mr-trilochan",
    name: "Mr. Trilochan Joshi",
    designation: "Head of Questioned Documents",
    biography: null,
    qualifications: [],
    experience: null,
    specialisations: [],
    email: null,
    officePhone: null,
    photo: null,
  },
  "Dr. Deepak Midha": {
    slug: "dr-deepak",
    name: "Dr. Deepak Midha",
    designation: "Head of Biology",
    biography: null,
    qualifications: [],
    experience: null,
    specialisations: [],
    email: null,
    officePhone: null,
    photo: null,
  },
  "Dr. Niranjan Baliarsingh": {
    slug: "dr-niranjan",
    name: "Dr. Niranjan Baliarsingh",
    designation: "Head of Explosives",
    biography: null,
    qualifications: [],
    experience: null,
    specialisations: [],
    email: null,
    officePhone: null,
    photo: null,
  },
};

export function getOfficerBySlug(slug: string): OfficerProfile | undefined {
  return Object.values(officerProfiles).find((officer) => officer.slug === slug);
}
