import {
  CSHIC_MAX,
  CSHIC_RATE,
  CSHI_MAX,
  CSHI_RATE,
  IIT_RATE,
  MRP,
  OPV_MAX,
  OPV_RATE,
  SSC_MAX,
  SSC_MIN,
  SSC_RATE,
} from "../constants";

export const useCalculateTaxes = (
  data: Data,
  socialStatuses: SocialStatuses[]
) => {
  const { isPersonPaysOPV, OPV_PAID } = opvCalculation(data, socialStatuses);

  const { isCompanyPaysSSC, SSC_PAID } = sscCalculation(data, socialStatuses);

  const { isPersonPaysCSHIC, CSHIC_PAID } = cshicCalculation(
    data,
    socialStatuses
  );

  const { isCompanyPaysCSHI, CSHI_PAID } = cshiCalculation(
    data,
    socialStatuses
  );

  
  const opvPaid = isPersonPaysOPV ? OPV_PAID : 0;

  const cshicPaid = isPersonPaysCSHIC ? CSHIC_PAID : 0;

  const { isPersonPayingIIT, IIT_PAID } = iitCalculation(
    data,
    socialStatuses,
    opvPaid,
    cshicPaid
  );

  const iitPaid=isPersonPayingIIT ? IIT_PAID : 0;


  const EmployeeReceives = data.salary - opvPaid - cshicPaid - iitPaid;
  return {
    isPersonPaysOPV,
    isPersonPaysCSHIC,
    isPersonPayingIIT,
    isCompanyPaysSSC,
    isCompanyPaysCSHI,
    EmployeeReceives,
    OPV_PAID,
    CSHIC_PAID,
    SSC_PAID,
    CSHI_PAID,
    IIT_PAID,
  };
};

function opvCalculation(data: Data, socialStatuses: SocialStatuses[]) {
  const { is_foreigner, is_citizen_cis, has_citizen_permit } = data;

  const isForeignerNotPayingOPV =
    is_foreigner && !is_citizen_cis && !has_citizen_permit ? true : false;

  const socialGroupsNotPaying = [
    "p_by_age",
    "p_else",
    "d_group_1_time",
    "d_group_2_time",
  ];

  const isSociallyNotPayingOPV = socialStatuses?.some((status) =>
    socialGroupsNotPaying.includes(status)
  );

  console.log(data, socialStatuses);
  const isPersonPaysOPV = !isForeignerNotPayingOPV && !isSociallyNotPayingOPV;

  const OPV_PAID = paidOPV();

  console.log(OPV_MAX[data.year]);

  function paidOPV() {
    if (OPV_RATE * data.salary > OPV_MAX[data.year]) {
      return OPV_MAX[data.year];
    } else {
      return OPV_RATE * data.salary;
    }
  }
  return { isPersonPaysOPV, OPV_PAID };
}

function sscCalculation(data: Data, socialStatuses: SocialStatuses[]) {
  const { is_foreigner, is_citizen_cis, has_citizen_permit } = data;

  const isForeignerNotPayingSSC =
    is_foreigner && !is_citizen_cis && !has_citizen_permit ? true : false;

  const socialGroupsNotPaying = ["p_by_age"];

  const isSociallyNotPayingSSC = socialStatuses?.some((status) =>
    socialGroupsNotPaying.includes(status)
  );

  const isCompanyPaysSSC = !isForeignerNotPayingSSC && !isSociallyNotPayingSSC;

  const SSC_PAID = paysSSC();

  function paysSSC() {
    if (SSC_RATE * data.salary < SSC_MIN[data.year]) {
      return SSC_MIN[data.year];
    } else if (SSC_RATE * data.salary < SSC_MAX[data.year]) {
      return SSC_RATE * data.salary;
    } else {
      return SSC_MAX[data.year];
    }
  }
  return { isCompanyPaysSSC, SSC_PAID };
}

function cshicCalculation(data: Data, socialStatuses: SocialStatuses[]) {
  const { is_foreigner, is_citizen_cis, has_citizen_permit } = data;

  const isForeignerNotPayingCSHIC =
    is_foreigner && !is_citizen_cis && !has_citizen_permit ? true : false;

  const socialGroupsNotPaying = [
    "p_by_age",
    "p_else",
    "student",
    "d_group_1_time",
    "d_group_1_time",
    "d_group_1",
    "d_group_2_time",
    "d_group_2",
    "d_group_3",
    "multiple_children_mother",
  ];

  const isSociallyNotPayingCSHIC = socialStatuses?.some((status) =>
    socialGroupsNotPaying.includes(status)
  );
  const isPersonPaysCSHIC =
    !isForeignerNotPayingCSHIC && !isSociallyNotPayingCSHIC;

  const CSHIC_PAID = paysCSHIC();

  function paysCSHIC() {
    if (CSHIC_RATE * data.salary < CSHIC_MAX[data.year]) {
      return CSHIC_RATE * data.salary;
    } else {
      return CSHIC_MAX[data.year];
    }
  }
  return { isPersonPaysCSHIC, CSHIC_PAID };
}

function cshiCalculation(data: Data, socialStatuses: SocialStatuses[]) {
  const { is_foreigner, is_citizen_cis, has_citizen_permit } = data;

  const isForeignerNotPayingCSHI =
    is_foreigner && !is_citizen_cis && !has_citizen_permit ? true : false;

  const socialGroupsNotPaying = [
    "p_by_age",
    "p_else",
    "student",
    "d_group_1_time",
    "d_group_1_time",
    "d_group_1",
    "d_group_2_time",
    "d_group_2",
    "d_group_3",
    "multiple_children_mother",
  ];

  const isSociallyNotPayingCSHI = socialStatuses?.some((status) =>
    socialGroupsNotPaying.includes(status)
  );
  const isCompanyPaysCSHI =
    !isForeignerNotPayingCSHI && !isSociallyNotPayingCSHI;

  const CSHI_PAID = paysCSHI();

  function paysCSHI() {
    if (CSHI_RATE * data.salary < CSHI_MAX[data.year]) {
      return CSHI_RATE * data.salary;
    } else {
      return CSHI_MAX[data.year];
    }
  }
  return { isCompanyPaysCSHI, CSHI_PAID };
}

function iitCalculation(
  data: Data,
  socialStatuses: SocialStatuses[],
  OPV_PAID: number,
  CSHIC_PAID: number
) {
  const { is_deduction_14, is_deduction_882 } = data;

  const socialGroupsNotPaying = ["employee_of_resident"];

  const isAstanaHubEmployeeNotPayingIIT = socialStatuses?.some((status) =>
    socialGroupsNotPaying.includes(status)
  );

  const IIT_PAID = paidIIT();

  const isPersonPayingIIT = !isAstanaHubEmployeeNotPayingIIT;

  function paidIIT() {
    if (!is_deduction_14 && !is_deduction_882) {
      return (data.salary - OPV_PAID - CSHIC_PAID) * IIT_RATE;
    } else if (is_deduction_14 && !is_deduction_882) {
      return (
        (data.salary - OPV_PAID - CSHIC_PAID - 14 * MRP[data.year]) * IIT_RATE
      );
    } else if (is_deduction_882 && !is_deduction_14) {
      if (data.salary < 882 * MRP[data.year]) {
        return 0;
      } else {
        return (
          (data.salary - OPV_PAID - CSHIC_PAID - 882 * MRP[data.year]) *
          IIT_RATE
        );
      }
    } else {
      if (data.salary < 882 * MRP[data.year]) {
        return 0;
      } else {
        return (
          (data.salary -
            OPV_PAID -
            CSHIC_PAID -
            14 * MRP[data.year] -
            882 * MRP[data.year]) *
          IIT_RATE
        );
      }
    }
  }

  return { isPersonPayingIIT, IIT_PAID };
}
