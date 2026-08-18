export type NavCategory = 'Personal' | 'Business' | 'Commercial' | 'Wealth' | 'About Us';

export interface ProductCardData {
  id: string;
  title: string;
  description: string;
  actionText: string;
  iconName: 'credit-card' | 'piggy-bank' | 'home' | 'store';
  category: NavCategory;
  details?: {
    badge?: string;
    rate?: string;
    features: string[];
    minDeposit?: string;
    benefits: string[];
  };
}

export interface BranchLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  distance: string;
  phone: string;
  hours: string;
  features: string[];
  hasATM: boolean;
  hasDriveThru: boolean;
}

export interface AccountApplicationForm {
  accountType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ssnLast4: string;
  initialDeposit: number;
}
