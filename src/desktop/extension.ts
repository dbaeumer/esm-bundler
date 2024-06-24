/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { runWasm } from '../common/wasm';
import { ExtensionContext } from 'vscode';

export async function activate(context: ExtensionContext) {
	runWasm();

	const x: string = foo();
	console.log(x);
}
export function deactivate() {
}

function foo(): any {
	return undefined;
}