import { CLASS_URL, ENUM_URL, DATA_TYPE_URL } from "../constants";
import { assert } from "../util/assert";

export function renderCodeLink(text: string) {
	const [path, textOverride] = text.split("|");
	const pathSegments = path.split(".");

	const namespaceName = pathSegments.shift();
	if (namespaceName === "Class") {
		let isMethod = false;
		const last = pathSegments.pop();
		assert(last !== undefined);
		const [lastSegment, methodCall] = last.split(":");
		pathSegments.push(lastSegment);
		if (methodCall) {
			isMethod = true;
			assert(methodCall.endsWith("()"));
			const methodName = methodCall.endsWith("()") ? methodCall.slice(0, -2) : methodCall;
			pathSegments.push(methodName);
		}

		const className = pathSegments.shift();
		if (className) {
			const memberName = pathSegments.shift();
			if (memberName) {
				const text = textOverride ?? (isMethod ? `${className}:${memberName}()` : `${className}.${memberName}`);
				return `[\`${text}\`](${CLASS_URL}/${className}#${memberName})`;
			} else {
				const text = textOverride ?? className;
				return `[\`${text}\`](${CLASS_URL}/${className})`;
			}
		}
	} else if (namespaceName === "Enum") {
		const enumName = pathSegments.shift();
		if (enumName) {
			const displayText = textOverride ?? `Enum.${enumName}`;
			return `[\`${displayText}\`](${ENUM_URL}/${enumName})`;
		}
	} else if (namespaceName === "Datatype") {
		const dataTypeName = pathSegments.shift();
		if (dataTypeName) {
			const displayText = textOverride ?? dataTypeName;
			return `[\`${displayText}\`](${DATA_TYPE_URL}/${dataTypeName})`;
		}
	}
}
