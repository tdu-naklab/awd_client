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
