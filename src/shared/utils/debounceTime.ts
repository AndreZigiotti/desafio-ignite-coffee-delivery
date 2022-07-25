export function debouceTime(callback: () => any, timeInMs: number) {
  let timeout: NodeJS.Timeout | undefined = undefined;

  if(timeout) clearTimeout(timeout)

  timeout = setTimeout(callback, timeInMs)

  const cancelDebounce = () => {
    clearTimeout(timeout)
  }

  return { cancelDebounce }
}