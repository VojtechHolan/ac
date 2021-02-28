import React, { FunctionComponent } from 'react';
import { IListItem } from '../../../../../graphql/query/getList';
import TreeItem from '@material-ui/lab/TreeItem';
import DescriptionIcon from '@material-ui/icons/Description';
import { useHistory } from 'react-router-dom';
import { Path, setPathWithParam } from '../../../../../router/path';

interface IFileItem {
	fileItem: IListItem
}

const FileItem: FunctionComponent<IFileItem> = ({ fileItem }): JSX.Element => {
	let history = useHistory();

	const redirectToFile = () => {
		const pathWithParams = setPathWithParam(Path.BrowserFile, { fileId: fileItem.id })
		history.push(pathWithParams)
	}
	return (
			<TreeItem
				onClick={redirectToFile}
				icon={<DescriptionIcon />}
				key={fileItem.id}
				nodeId={fileItem.id}
				label={fileItem.name}
			/>
	)
}

export default FileItem
