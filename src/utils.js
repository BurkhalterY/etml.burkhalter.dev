export const getWeekNumber = (d) => {
  /*
   * Source: http://www.merlyn.demon.co.uk/weekcalc.htm#WNR
   */
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7)
  return { year: d.getFullYear(), week: weekNo }
}