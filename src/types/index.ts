export interface Cake {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  photoUrl: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
}

export interface Milestone {
  id: string;
  year: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}