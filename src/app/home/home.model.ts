export interface CreditPoint {
  total: number;
  expiry: string | null;
  color: string | null;
}

export interface Organization {
  name: string;
  img: string;
}

// Live / Upcoming / Cardiology Webinars
export interface Webinar {
  img: string;
  title: string;
  creditPoint: CreditPoint;
  highlights?: string;
  guidlines?: string;
  guidlineImg?: string;
  org: Organization;
  liveOn?: string | null;
  sponsoredBy?: string;
  followers?: number;
  lastActive?: string;
  likes?: number;
  comment?: number;
  views?: number;
}

export interface PrevViewedVideo {
  img: string;
  title: string;
  duration: string;
  org: string;
  timeLeft: string;
}


export interface Speaker {
  img: string;
  name: string;
  occupation: string;
  org?: string;
  isLive: boolean;
}

export interface Topic {
  topic: string;
  count: number;
}


