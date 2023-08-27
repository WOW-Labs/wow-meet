import { type DateRange } from "react-day-picker";

export type Create = {
    title?: string;
    description?: string;
    sType?: string //
    dayList?: string[];
    dateRange?: DateRange;
    votesOpt?:string[];
    mid?: string;
  }

