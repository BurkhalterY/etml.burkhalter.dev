export const getWeekNumber = (d) => {
  /*
   * Source: http://www.merlyn.demon.co.uk/weekcalc.htm#WNR
   */
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  const weekNumber = Math.ceil(((d - yearStart) / 86400000 + 1) / 7)
  return { year: d.getFullYear(), number: weekNumber }
}

export const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
]
export const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
]
export const types = {
  homework: { emoji: "" },
  test: { emoji: "📝" },
  info: { emoji: "📢" },
}

const typesOrder = ["info", "test", "homework"]
// TODO: move that somewhere else
const mattersOrder = [
  [],
  ["etml", "tib", "hispol", "ecdr", "fran", "mathfon", "angl"],
  [],
  [],
  [],
  ["etml", "tib", "fran", "mathfon", "hispol", "phys", "alle"],
  [],
]
export const tasksSorter = (a, b) => {
  const typeA = typesOrder.indexOf(a.type)
  const typeB = typesOrder.indexOf(b.type)

  if (typeA < typeB) return -1
  if (typeA > typeB) return 1

  const matterA = mattersOrder[new Date(a.date).getDay()].indexOf(a.matter.abbr)
  const matterB = mattersOrder[new Date(b.date).getDay()].indexOf(b.matter.abbr)

  if (matterA < matterB) return -1
  if (matterA > matterB) return 1

  return 0
}
