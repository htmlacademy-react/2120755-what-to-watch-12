import { SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from './const';

export function presentageCalculator(a: number, b: number) {
  const presentage = a / b * 100;
  return presentage;
}

export function formatTimeForPlayer(totalSeconds: number | undefined): string | null {
  if (totalSeconds === undefined) {
    return null;
  }
  const hours = Math.floor(totalSeconds / SECONDS_IN_HOUR);
  const minutes = Math.floor((totalSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
  const seconds = totalSeconds % SECONDS_IN_MINUTE;
  const paddedHours = hours.toString().padStart(2, '0');
  const paddedMinutes = minutes.toString().padStart(2, '0');
  const paddedSeconds = seconds.toString().padStart(2, '0');
  if (hours <= 0) {
    return `-${paddedMinutes}:${paddedSeconds}`;
  } else {
    return `-${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }
}

export function formatTimeForFilmDetails(totalMinutes: number ): string | null {
  const hours = Math.floor(totalMinutes / SECONDS_IN_MINUTE);
  const minutes = totalMinutes % SECONDS_IN_MINUTE;
  const paddedHours = hours > 0 ? `${hours}h ` : '';
  const paddedMinutes = `${minutes.toString().padStart(2, '0') }m`;
  return `${paddedHours}${paddedMinutes}`;
}

export function formatDateForFilmReviews(reviewDate: string) {
  const date = new Date(reviewDate);
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    day: 'numeric',
    month: 'long',
  });
  return formatter.format(date);
}
