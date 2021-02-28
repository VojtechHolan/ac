import React, { FunctionComponent } from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import { IListItem } from '../../../../../graphql/query/getList';
import FolderNestedList from '../FolderNestedList';

interface IFolderItem {
	folderItem: IListItem
}

const FolderItem: FunctionComponent<IFolderItem> = ({ folderItem }): JSX.Element => {
	return (
		<TreeItem key={folderItem.id} nodeId={folderItem.id} label={folderItem.name}>
			<FolderNestedList id={folderItem.id} />
		</TreeItem>
	)
}

export default FolderItem
