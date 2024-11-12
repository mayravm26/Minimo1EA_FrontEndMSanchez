export interface Session {
    _id: string;
    user: string;
    startTime: Date;
    endTime: Date | null;
    duration: number;
    isActive: boolean;
    activityDescription: string;
  }
  