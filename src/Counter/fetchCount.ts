export const delay = async (delay = 1000, callback = () => {}) => {        

  const delayPromise = ms => new Promise(res => setTimeout(res, ms))
  await delayPromise(delay)

  callback()
}

export const fetchCount = () => {
  return 50;
}