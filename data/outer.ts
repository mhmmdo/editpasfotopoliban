import { Outer } from "types"

export const OUTER_Y_AXIS_MIN: number = 0
export const OUTER_Y_AXIS_MAX: number = 300
export const OUTER_Y_AXIS_STEP: number = 0.05
export const OUTER_Y_AXIS_DEFAULT: number = 175

export const OUTER_X_AXIS_MIN: number = -100
export const OUTER_X_AXIS_MAX: number = 100
export const OUTER_X_AXIS_STEP: number = 0.05
export const OUTER_X_AXIS_DEFAULT: number = 0

export const OUTER_SCALE_MIN: number = 0
export const OUTER_SCALE_MAX: number = 3
export const OUTER_SCALE_STEP: number = 0.05
export const OUTER_SCALE_DEFAULT: number = 1

const OUTER_PATH_BASE: string = "/img/outer"
const OUTER_FILE_TYPE: string = "png"

export const OUTER_OPTIONS: Outer[] = [
  {
    id: 1,
    value: "Formal 1",
    src: `${OUTER_PATH_BASE}/formal/1.${OUTER_FILE_TYPE}`,
  },
  {
    id: 2,
    value: "Formal 2",
    src: `${OUTER_PATH_BASE}/formal/2.${OUTER_FILE_TYPE}`,
  },
  {
    id: 3,
    value: "Formal 3",
    src: `${OUTER_PATH_BASE}/formal/3.${OUTER_FILE_TYPE}`,
  },
  {
    id: 4,
    value: "Formal 4",
    src: `${OUTER_PATH_BASE}/formal/4.${OUTER_FILE_TYPE}`,
  },
  {
    id: 5,
    value: "UGM 1",
    src: `${OUTER_PATH_BASE}/ugm/1.${OUTER_FILE_TYPE}`,
  },
  {
    id: 6,
    value: "UGM 2",
    src: `${OUTER_PATH_BASE}/ugm/2.${OUTER_FILE_TYPE}`,
  },
  {
    id: 7,
    value: "Poliban Jas Hitam",
    src: `${OUTER_PATH_BASE}/poliban/1.${OUTER_FILE_TYPE}`,
  },
  {
    id: 8,
    value: "Poliban Jas Biru Perempuan",
    src: `${OUTER_PATH_BASE}/poliban/2.${OUTER_FILE_TYPE}`,
  },
]
