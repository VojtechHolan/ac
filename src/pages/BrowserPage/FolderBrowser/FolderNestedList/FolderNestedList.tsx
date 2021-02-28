import React, { FunctionComponent } from 'react';
import { useQuery } from '@apollo/client';
import { GET_LIST, IGetList, IGetListVariables, IListItem, ListItemType } from '../../../../graphql/query/getList';
import FolderItem from './FolderItem/FolderItem';
import FileItem from './FileItem/FileItem';
import { useStyles } from './FolderNestesListStyles';
import { CircularProgress } from '@material-ui/core';
import { ErrorSnackBar } from '../../../../components/ErrorSnackBar/ErrorSnackBar';

export interface IFolderNestedList {
	id?: string
}

const FolderNestedList: FunctionComponent<IFolderNestedList> = ({ id }): JSX.Element => {
	const classes = useStyles();
	const { loading, error, data: list } = useQuery<IGetList, IGetListVariables>(GET_LIST, {
		variables: { id }
	});

	const renderListItem = (listItem: IListItem) => {
		// RENDER FOLDER
		if(listItem.type === ListItemType.Folder) {
			return <FolderItem key={listItem.id} folderItem={listItem} />
		}

		// RENDER FILE
		if(listItem.type === ListItemType.File) {
			return <FileItem key={listItem.id} fileItem={listItem}/>
		}
	}

	return (
		<>
			{loading && <CircularProgress />}
			{/* EMPTY FOLDER */}
			{list && list.getList?.length <= 0 && <span className={classes.text}>Empty Folder</span>}
			{list?.getList.map((listItem: IListItem) => renderListItem(listItem))}
			<ErrorSnackBar error={error}/>
		</>
	)
}

export default FolderNestedList
