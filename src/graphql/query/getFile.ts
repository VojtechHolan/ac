import { gql } from '@apollo/client';

export const GET_FILE = gql`
	query GetFile($id: String!) {
		getFile(id: $id) {
			id
			name
			text
		}
	}
`;

export interface IGetFileVariables {
	id: string
}

export interface IGetFile {
	getFile: IFile
}

export interface IFile {
	id: string,
	name: string,
	text: string
}


