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
  officeLocation: string | null;
  photo: string | null;
};

export const officerProfiles: Record<string, OfficerProfile> = {
  "Dr. Maheshwari": {
    slug: "dr-maheshwari",
    name: "Dr. Maheshwari",
    designation: "Designation to be confirmed",
    biography: null,
    qualifications: [],
    experience: null,
    specialisations: [],
    email: null,
    officePhone: null,
    officeLocation: null,
    photo: null,
  },
};

export function getOfficerBySlug(slug: string): OfficerProfile | undefined {
  return Object.values(officerProfiles).find((officer) => officer.slug === slug);
}
