import { Action } from 'src/app/shared/models/Action';

export interface TableContentConfig {
    displayActions: Action[];
    displayCols: DisplayColsConfig;
    index: number;
    tabType: string;
    specialLabels: specialLabels[];
}

export interface DisplayColsConfig {
    DISPLAYED_COLS: string[];
    LABELS: string[];
    COLS: string[];
}

export enum specialLabels {
    Approved = 'approved',
    Reminder = 'reminder',
}
