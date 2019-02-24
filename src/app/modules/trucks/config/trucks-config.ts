import { TableContentConfig, specialLabels } from 'src/app/shared/components/table/models/table-content-config';
import { Action } from 'src/app/shared/models/Action';
import { tabsConfig } from 'src/config/config';

export const tableConfig: TableContentConfig = {
  displayActions: [Action.Delete, Action.ResetPassword],
  index: tabsConfig.ALL_TAB_INDEX,
  tabType: tabsConfig.ALL_TYPE,
  displayCols: {
    DISPLAYED_COLS: ['nickname', 'firstName', 'lastName', 'companyName', 'vat'],
    LABELS: ['nick', 'Name', 'Cognome', 'Azienda', 'Piva', 'Cod fiscale', 'Email', 'Telefono',
      'pagamento preferito', 'marca mezzo', 'Registrato il', 'interventi richiesti', 'interventi approvati'],
    COLS: ['nickname', 'firstName', 'lastName', 'companyName', 'vat', 'fiscalCode', 'email', 'telephone',
      'preferredPayment', 'carBrand', 'createdAt', 'interventi richiesti', 'interventi approvati'],
  },
  specialLabels: [specialLabels.Approved, specialLabels.photo],
};
