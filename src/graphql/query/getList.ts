import { gql } from '@apollo/client';

export const GET_LIST = gql`
	query GetList($id: String) {
		getList(id: $id) {
			id
			name
			type
		}
	}
`;

export interface IGetListVariables {
	id?: string | null
}

export interface IGetList {
	getList: IListItem[]
}

export interface IListItem {
	id: string,
	name: string,
	type: ListItemType
}

export enum ListItemType {
	Folder = 'FOLDER',
	File = 'FILE'
}


