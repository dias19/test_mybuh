interface Data {
  year: number;
  salary: number | undefined;
  is_staff_member: boolean;
  is_staff_member_gph: boolean;
  is_resident: boolean;
  is_citizen_cis: boolean;
  has_citizen_permit: boolean;
  is_deduction_14: boolean;
  is_deduction_882: boolean;
  social_statuses: SocialStatuses[];
}

type SocialStatuses =
  | "p_by_age"
  | "p_else"
  | " d_group_1_time"
  | "d_group_1"
  | "d_group_2_time"
  | "d_group_2"
  | "d_group_3"
  | "student"
  | "multiple_children_mother"
  | "receiver_oppv"
  | "employee_of_resident";
