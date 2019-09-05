export type Member = {
  id: number | null

  name: string | null

  // eslint-disable-next-line camelcase
  machine_name: string | null

  barcode: number | null
}

export const initDefaultMember = (): Member => {
  return {
    id: null,
    name: null,
    machine_name: null,
    barcode: null
  }
}

export type RankingMember = {
  id: number | null
  name: string | null
  // eslint-disable-next-line camelcase
  machine_name: string | null
  barcode: string | null
  raptime: number | null
  // eslint-disable-next-line camelcase
  user_id: number
  // eslint-disable-next-line camelcase
  race_id: number
}

export type Ranking = {
  id: number | null
  course: number | null
  status: number
  users: Array<RankingMember> | null
}

export type Race = {
  id: number | null
  course: number | null
  status: number
  users: Array<RaceMember> | null
}

export type RaceMember = {
  id: number | null
  name: string | null
  // eslint-disable-next-line camelcase
  machine_name: string | null
  raptime: number | null
  raceStartTime: number | null
}
