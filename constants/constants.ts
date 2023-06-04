import * as yup from 'yup'

export const YEARS=['2023', '2022', '2021']

export const MONTH=['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export const CalculationSchema=yup.object().shape({
    year: yup.number().oneOf([2023, 2022, 2021]).required(),
    salary: yup.number().required(),
    is_staff_member: yup.boolean().required(),
    is_staff_member_gph:yup.boolean().required(),
    is_resident: yup.boolean().required(),
    is_foreigner: yup.boolean().required(),
    is_citizen_cis: yup.boolean(),
    has_citizen_permit: yup.boolean(),
    is_deduction_14: yup.boolean(),
    is_deduction_882: yup.boolean(),
})

export const DEFAULT_VALUE={
    year: 2023,
    salary: undefined,
    is_staff_member: true,
    is_staff_member_gph: false,
    is_resident: true,
    is_foreigner: false,
    is_citizen_cis: false,
    has_citizen_permit: false,
    is_deduction_14: false,
    is_deduction_882:false,
    social_statuses: [],
}