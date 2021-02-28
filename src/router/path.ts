import { Params } from './params';

export enum Path {
	// User paths
	Browser = '/browser',
	BrowserFile = '/browser/file/:fileId'
}

// Change param keys to values in path
export const setPathWithParam = (path: Path, params: Params) => {
	switch (path) {
		case Path.BrowserFile: {
			if (params.fileId) {
				return path.replace(':fileId', params.fileId)
			}
			throw Error(`Specify param: ${params.fileId}!`)
		}
		default: throw Error(`Params for ${path} is not defined!`)
	}
}
