import dayjs from "dayjs";

type DateColors = "success" | "processing" | "error" | "default" | "warning";

export const getDataColors = (args: {
  date: string,
  defaultColor?: DateColors,
}) => {

  const date = dayjs(args.date);
  const today = dayjs();

  if(date.isBefore(today)) {
    return "error";
  }

  if (date.isBefore(today.add(3, "day"))) {
    return "warning";
  }

  return args.defaultColor ?? "default";
};
