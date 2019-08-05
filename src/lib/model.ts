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

export type RankingMember = Member & {
  raptime: number | null
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
  users: Array<RankingMember> | null
}
