import { TableContentConfig, specialLabels } from 'src/app/shared/components/table/models/table-content-config';
import { Action } from 'src/app/shared/models/Action';
import { tabsConfig } from 'src/config/config';

export const tableConfig: TableContentConfig = {
  displayActions: [],
  index: tabsConfig.ALL_TAB_INDEX,
  tabType: tabsConfig.ALL_TYPE,
  displayCols: {
    DISPLAYED_COLS: [ 'nickname', 'firstName', 'lastName', 'companyName', 'vat'],
    LABELS: [ 'nick', 'Name', 'Cognome', 'Azienda', 'Piva', 'Cod fiscale', 'Email', 'Telefono',
    'pagamento preferito', 'marca mezzo', 'Registrato il', 'Richieste ricevute', 'Richieste approvate'],
    COLS: [ 'nickname', 'firstName', 'lastName', 'companyName', 'vat', 'fiscalCode', 'email', 'telephone',
    'preferredPayment', 'carBrand', 'createdAt', 'requests_received', 'requests_approved'],
  },
  specialLabels: [specialLabels.Approved],
};
