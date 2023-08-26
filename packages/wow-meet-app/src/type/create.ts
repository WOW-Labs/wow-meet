import { type DateRange } from "react-day-picker";

export type Create = {
    title?: string;
    description?: string;
    stype?: string //
    dayList?: string[];
    dateRange?: DateRange;
    votesOpt?:string[];
    mid?: string;
  }

