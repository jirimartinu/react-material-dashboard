export const toArray = (data: any) => Object.entries(data).map(([key, value]) => ({key,value}));
