// src/utils/formatTime.js
import { formatDistanceToNow, parseISO } from "date-fns";

export function formatTime(isoString) {
  try {
    return formatDistanceToNow(parseISO(isoString), { addSuffix: true });
  } catch {
    return "";
  }
}
