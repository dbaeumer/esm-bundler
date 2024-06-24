/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Wasm } from '@vscode/wasm-wasi/v1';
import { serializeError, type ErrorObject } from 'serialize-error';
import { ExtensionContext } from 'vscode';

export async function activate(context: ExtensionContext) {

	// Load the WASM API
	const wasm: Wasm = await Wasm.load();

	const errorObject:ErrorObject = serializeError(new Error('test'));

	const x: string = foo();
}
export function deactivate() {
}

function foo(): any {
	return undefined;
}