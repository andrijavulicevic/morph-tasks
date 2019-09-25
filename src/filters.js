import { default as format } from "date-fns/format";

export const dateFilter = date => {
  return format(new Date(date), "MMMM D, YYYY");
};