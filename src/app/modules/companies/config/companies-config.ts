import { TableContentConfig, specialLabels } from 'src/app/shared/components/table/models/table-content-config';
import { Action } from 'src/app/shared/models/Action';
import { tabsConfig } from 'src/config/config';

export const tableConfig: TableContentConfig = {
  displayActions: [Action.Activate, Action.Deactivate],
  index: tabsConfig.ALL_TAB_INDEX,
  tabType: tabsConfig.ALL_TYPE,
  displayCols: {
    DISPLAYED_COLS: [ 'name', 'vat', 'email', 'telephone', 'language', 'carBrand'],
    LABELS: [ 'Azienda', 'Piva', 'Email', 'Telefono', 'Lingua parlate', 'Marche trattate', 'Tipologia',
    'Registrato il', 'Via', 'N', 'Cap', 'requests_received', 'requests_approved'],
    COLS: ['name', 'vat', 'email', 'telephone', 'language', 'carBrand', 'serviceType',
    'createdAt', 'street', 'number', 'cap', 'requests_received', 'requests_approved'],
  },
  specialLabels: [specialLabels.Approved],
};
