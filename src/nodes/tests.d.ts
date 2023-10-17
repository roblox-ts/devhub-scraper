import md from ".";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Assert<_ extends true> = true;
type Extends<A, B> = A extends B ? true : false;
type Equals<A, B> = Extends<A, B> extends true ? (Extends<B, A> extends true ? true : false) : false;
type KeysEqualValues<T> = { [K in keyof T]: T[K] extends string ? Equals<K, `${T[K]}`> : false }[keyof T];
type KeysEqualProps<T, PropName extends string> = {
	[K in keyof T]: K extends string
		? T[K] extends { [K in PropName]: string }
			? `${K}` extends `${T[K][PropName]}`
				? true
				: false
			: false
		: false;
}[keyof T];

export interface TestSuite {
	NodeType: {
		doAllKeysEqualValues: Assert<KeysEqualValues<typeof md.NodeType>>;
	};
	ElementTag: {
		doAllKeysEqualValues: Assert<KeysEqualValues<typeof md.ElementTag>>;
	};
	NodesByType: {
		doAllKeysEqualValueTypeProps: Assert<KeysEqualProps<md.NodesByType, "type">>;
	};
	ElementNodesByTag: {
		doAllKeysEqualValueTagNameProps: Assert<KeysEqualProps<md.ElementNodesByTag, "tagName">>;
	};
}
