import { DescriptionMoney } from '../models/DescriptionMoney';
import { data } from '../models/userDonator';

// eslint-disable-next-line
export const handleDonations = (
  values: data,
  globalState: DescriptionMoney,
  setInitialSate: (p: DescriptionMoney) => void,
) => {
  if (values.age < 18) {
    const newState: DescriptionMoney = {
      ...globalState,
      moneyTotal: Number(values.amount) + Number(globalState.moneyTotal),
      kids: Number(globalState.kids) + Number(values.amount),
      donors: [...globalState.donors, values],
    };
    setInitialSate(newState);
  } else {
    const newState: DescriptionMoney = {
      moneyTotal: Number(values.amount) + Number(globalState.moneyTotal),
      charity: Number(globalState.charity) + Number(values.amount * 0.4),
      kids: Number(globalState.kids) + Number(values.amount * 0.4),
      building: Number(globalState.building) + Number(values.amount * 0.2),
      donors: [...globalState.donors, values],
    };
    setInitialSate(newState);
  }
};
