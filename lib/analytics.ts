export const analyticsEvent = (eventName: string, eventParams: Record<string, any>) => {
    console.log(`Analytics Event: ${eventName}`, eventParams);
  };