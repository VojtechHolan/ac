import { FunctionComponent } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import FolderIcon from '@material-ui/icons/Folder';
import FolderNestedList from './FolderNestedList/FolderNestedList';

const FolderBrowser: FunctionComponent = (): JSX.Element => {
	return (
		<>
			<TreeView
				defaultCollapseIcon={<FolderOpenIcon />}
				defaultExpandIcon={<FolderIcon/>}
			>
				<FolderNestedList />
			</TreeView>
		</>
	)
}

export default FolderBrowser
