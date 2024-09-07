export interface TermsAndConditionsProps {
  opened: boolean;
  close: () => void;
}

export interface FooterProps {
  year: string;
  name: string;
  studentId: string;
}

export interface ReviewProps {
  id: number;
  name: string;
  rating: number;
  comment: string;
}