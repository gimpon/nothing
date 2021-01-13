import { OwnerRef } from './document-types';
import { FormListFilter, FormListOrder } from './user.settings';

export interface ColumnDef {
    field: string;
    type: string;
    label: string;
    hidden: boolean;
    order: number;
    style: string | {[key: string]: any};
    headerStyle: string | {[key: string]: any};
    required: boolean;
    readOnly: boolean;
    owner?: OwnerRef[];
    totals?: number;
    onChange?: Function;
    onChangeServer?: boolean;
    sort?: FormListOrder;
    filter?: FormListFilter;
    value: any;
    control?: any; // FormControlInfo;
}