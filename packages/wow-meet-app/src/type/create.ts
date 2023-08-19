export type Create = {
    title: string;
    description: string;
    schedule?: {
      type: string;
      dateRange?: Date[];
      dayList?: string[];
      timeRange: Date[];
      isPriorityOption: boolean;
    };
    votes?: {
      title: string;
      type: string;
      options: string[];
    }[];
  }


//   const createInfo = api.meeting.create.useMutation();
//   createInfo.mutate({ title: titleInput, description: "" });