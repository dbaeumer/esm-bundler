/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Wasm } from "@vscode/wasm-wasi/v1";
import { ErrorObject, serializeError } from "serialize-error";

export async function runWasm() {
    // Load the WASM API
	const wasm: Wasm = await Wasm.load();

	const errorObject:ErrorObject = serializeError(new Error('test'));
}