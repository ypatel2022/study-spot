export function secondsToTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const remainder = seconds - hours * 3600
  const minutes = Math.floor(remainder / 60)
  const remainderSeconds = remainder - minutes * 60
  let final = hours + 'h ' + minutes + 'm ' + remainderSeconds + 's'
  return final
}

export function studyScore(seconds: number): number {
  return Math.round(seconds * 3.73)
}
