export function presentageCalculator(a: number, b: number) {
  const presentage = a / b * 100;
  return presentage;
}

export function formatTimeForPlayer(totalMinutes: number | undefined ): string | null {
  if (totalMinutes === undefined) {
    return null;
  }
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const seconds = Math.floor((totalMinutes % 1) * 60);
  const paddedHours = hours.toString().padStart(2);
  const paddedMinutes = minutes.toString().padStart(2, '0');
  const paddedSeconds = seconds.toString().padStart(2, '0');
  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

export function formatTimeForFilmDetails(totalMinutes: number ): string | null {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
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
