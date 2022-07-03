import type { Linter } from "eslint";

const config: Linter.Config = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	plugins: ["@typescript-eslint", "import", "cadence"],
	overrides: [
		{
			files: ["*.ts", "*.test.ts"],
			parserOptions: {
				project: ["./tsconfig.json"],
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		project: ["./tsconfig.json"],
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",

		"plugin:import/typescript",
		"plugin:import/warnings",
		"plugin:import/errors",
	],
	rules: {
		"cadence/case-blocks": "error",
		"prettier/prettier": [
			"error",
			{
				printWidth: 100,
				tabWidth: 4,
				semi: true,
				singleQuote: false,
				trailingComma: "es5",
				bracketSpacing: true,
				endOfLine: "lf",
				useTabs: true,
			},
		],

		"array-callback-return": "error",
		"no-await-in-loop": "warn",

		// not supported in latest versions of eslint.
		// "no-constant-binary-expression": "error",
		"no-constructor-return": "error",

		// it's not that bad.
		"no-constant-condition": ["error", { checkLoops: false }],
		"no-promise-executor-return": "error",
		"no-self-compare": "error",
		"no-template-curly-in-string": "error",
		"no-unmodified-loop-condition": "error",
		"no-unreachable-loop": "error",
		"no-unused-private-class-members": "error",

		// If TS allows it, it's legal. Functions are hoisted and attempting to
		// resolve circularity like this just sucks. Who cares.
		"no-use-before-define": "off",

		"require-atomic-updates": "warn",

		camelcase: [
			"error",
			{
				// this is fine -- if you're interacting with stuff like this it's likely you're
				// working with another languages data structures, only bare variables are important
				// for this stuff.
				properties: "never",
			},
		],

		// Note: we enforce let/const, so this rule is redundant. mayaswell turn it on.
		"block-scoped-var": "error",

		// Can't say this really bothers me. Maybe this can be changed.
		"capitalized-comments": "off",

		// warns for a lot of redundant stuff i don't care about.
		complexity: "off",

		// Typescript does a better job of warning about this.
		"consistent-return": "off",

		// Don't care. Don't do this pattern.
		"consistent-this": "off",

		curly: "error",

		// Not that important, TS does better.
		"default-case": "off",

		// I didn't even know this was legal in JS, so yes. Disabled.
		"default-case-last": "error",

		"default-param-last": "error",

		// Enforce dot notation. Although snake_case is legal as an object property,
		// the above camelCase rule rejects it. As such, we enforce that all snake
		// case variables end up in ["square_brackets"].
		"dot-notation": ["error", { allowPattern: "^[a-z]+(_[a-z]+)+$" }],

		// == and != are harmful. Ban them.
		eqeqeq: "error",

		// Note that our restricted syntax rules makes this assignment illegal, so
		// this does nothing.
		"func-name-matching": "error",

		// Doesn't matter, we restrict function assignments like this.
		"func-names": "error",

		// Enforce function foo(){} instead of const foo = function() {};
		// Arrow functions are legal for this, though.
		"func-style": ["error", "declaration", { allowArrowFunctions: true }],

		// honestly don't care.
		"grouped-accessor-pairs": "error",

		// We ban for-in statements, so this has no effect.
		"guard-for-in": "off",

		"id-denylist": "off",

		// Single letter variable names such as t for tap or p for prudence is fine.
		// This would just enforce that people arbitrarily extend or reduce their
		// var names.
		"id-length": "off",

		// We just use camelCase. Don't need anything fancy.
		"id-match": "off",

		// This is a typescript concern.
		"init-declarations": "off",

		// Don't care
		"max-classes-per-file": "off",

		// experimental
		"max-depth": ["error", 4],

		// Nothing wrong with large files, counterintuitively.
		"max-lines": "off",
		"max-lines-per-function": "off",

		// experimental
		"max-nested-callbacks": ["error", { max: 3 }],

		// meh, maybe
		"max-params": "off",
		"max-statements": "off",

		// This is how we do comments. /** is for jsdocery.
		"multiline-comment-style": ["error", "separate-lines"],

		"new-cap": ["error", { capIsNew: false }],

		"no-alert": "error",
		"no-array-constructor": "error",

		// Controversial!!! People might actually want to use bitwise operators for
		// something, but bitwise ops in JS are *deeply* flawed, due to numbers
		// being simultaneously i32s and doubles.
		"no-bitwise": "error",

		// ?
		"no-caller": "error",

		"no-case-declarations": "error",

		// it has confusing in the name...
		"no-confusing-arrow": "error",

		// use the logger
		"no-console": "error",

		// Continue meshes nice with guard patterns.
		"no-continue": "off",

		"no-delete-var": "error",

		// meh, it looks ugly, i agree.
		"no-div-regex": "error",

		"no-else-return": "error",

		"no-empty": "error",

		// superceded by ts rule
		// "no-empty-function": "error",

		// redundant, since we ban == and !=
		"no-eq-null": "error",

		// lol
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-label": "error",

		// prettier concern
		// "no-extra-semi": "error",

		"no-floating-decimal": "error",
		"no-global-assign": "error",
		"no-implicit-coercion": ["error", { allow: ["!!"] }],

		// superceded by ts rule
		// "no-implied-eval": "error",

		// Inline comments are not preferred, but there are certain scenarios where they're just
		// straight up nicer.
		// Especially since we require spacing around comments and there are bugs when this comes
		// to interface handling or function inline comments.
		"no-inline-comments": "off",

		// superceded by ts rule
		// "no-invalid-this": "error",
		"no-iterator": "error",

		// labels are disabled, so this is redundant.
		"no-label-var": "error",
		"no-labels": "error",

		"no-lone-blocks": "error",
		"no-lonely-if": "error",

		// This is just too aggressive. Not nice to work with.
		"no-magic-numbers": "off",

		"no-mixed-operators": [
			"error",
			{
				groups: [
					// We do **not** bother with arithmetic mixing
					// as prettier has its own opinions on it.
					// ["+", "-", "*", "/", "%", "**"],
					["&", "|", "^", "~", "<<", ">>", ">>>"],
					["==", "!=", "===", "!==", ">", ">=", "<", "<="],
					["&&", "||"],
					["in", "instanceof"],
				],
				allowSamePrecedence: true,
			},
		],
		"no-multi-assign": "error",
		"no-multi-str": "error",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-wrappers": "error",
		"no-nonoctal-decimal-escape": "error",
		"no-octal": "error",
		"no-octal-escape": "error",

		// maybe.
		"no-param-reassign": "error",

		"no-proto": "error",

		// redundant, since we force let/const.
		// also, causes issues with typescript overloading syntax.
		// "no-redeclare": "error",

		"no-regex-spaces": "error",

		// Can't think of anything I care about for this.
		"no-restricted-exports": "off",
		"no-restricted-globals": [
			"error",
			{
				name: "parseInt",
				message: `Use Number() to convert strings to numbers. parseInt is very liberal with what it considers a number.
Number("4f") // NaN
parseInt("4helloworld") // 4`,
			},
			{
				name: "isNaN",
				message: `Use Number.isNaN instead. isNaN does not check the input is of type number, and instead coerces input into a number.
isNaN("foo"); // true
Number.isNaN("foo"); // false`,
			},
			{
				name: "Boolean",
				message: `Use !!variable instead of Boolean(variable).`,
			},
		],
		"no-restricted-imports": "off",

		// Array.forEach is harmful -- don't use it.
		"no-restricted-properties": [
			"error",
			{
				property: "forEach",
				message: "Use a for-of loop instead of Array.forEach.",
			},
			{
				object: "Number",
				property: "parseInt",
				message: `Use Number() to convert strings to numbers. parseInt is very liberal with what it considers a number.
Number("4f") // NaN
parseInt("4helloworld") // 4`,
			},
		],

		"no-restricted-syntax": [
			"error",
			{
				selector: "ForInStatement",
				message:
					"The use of 'for key in object' is potentially harmful, and can retrieve keys in prototypes. Use 'for key of Object.keys(object)' instead.",
			},
		],
		"no-return-assign": "error",
		"no-return-await": "error",

		// ???
		"no-script-url": "error",

		// shadowing is fine.
		"no-shadow": "off",

		"no-shadow-restricted-names": "error",

		// superceded by ts rule
		// "no-throw-literal": "error",
		"no-undef-init": "error",

		// ?? its just a thing that exists.
		"no-undefined": "off",

		// it's fine. used for indicating deliberately unused vars.
		"no-underscore-dangle": "off",

		"no-unneeded-ternary": "error",

		// superceded by ts rule
		// "no-unused-expressions": "error",

		// redundant
		"no-unused-labels": "error",

		"no-useless-call": "error",

		"no-useless-catch": "error",

		"no-useless-computed-key": "error",

		"no-useless-concat": "error",

		"no-useless-escape": "error",

		"no-useless-return": "error",

		"no-var": "error",

		// useful for indicating discarded promises
		"no-void": "off",

		// TODO: Think of something good for this (hehe)
		"no-warning-comments": "off",

		// yeah this one sucks.
		"no-with": "error",

		"object-shorthand": ["error", "always"],

		"one-var": ["error", "never"],

		// handled by prettier.
		"one-var-declaration-per-line": "off",

		// might not like this.
		"operator-assignment": ["error", "never"],

		"prefer-arrow-callback": "error",

		"prefer-const": "error",

		// this gets frustrating
		"prefer-destructuring": "off",

		"prefer-exponentiation-operator": "error",

		"prefer-named-capture-group": "off",

		"prefer-numeric-literals": "error",

		// this rule is really good! but ES2022 isn't really everywhere yet.
		// "prefer-object-has-own": "error",

		"prefer-object-spread": "error",

		"prefer-promise-reject-errors": "error",

		"prefer-regex-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",

		// prettier concern
		"quote-props": "off",

		// parseInt is banned.
		radix: "off",

		// superceded by ts rule.
		// "require-await": "error",

		"require-unicode-regexp": "error",

		"require-yield": "error",

		// handled by separate import plugin.
		// "sort-imports": "error",
		// I'd like to use this, but it's hilariously inconvenient.
		// "sort-keys": "error",
		"sort-vars": "error",
		"spaced-comment": "error",

		strict: "off",
		"symbol-description": "error",
		"vars-on-top": "off",

		yoda: "error",

		"lines-around-comment": [
			"error",
			{
				beforeBlockComment: true,
				beforeLineComment: true,
				allowArrayStart: true,
				allowObjectStart: true,
				allowClassStart: true,
				allowBlockStart: true,
			},
		],

		"newline-after-var": "error",

		"no-debugger": "error",

		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": ["error", { default: "generic" }],
		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/ban-ts-comment": [
			"error",
			{
				"ts-expect-error": "allow-with-description",
				minimumDescriptionLength: 3,
			},
		],

		// We don't use tslint.
		"@typescript-eslint/ban-tslint-comment": "off",
		"@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
		"@typescript-eslint/consistent-type-assertions": [
			"error",
			{ assertionStyle: "as", objectLiteralTypeAssertions: "never" },
		],
		"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
		"@typescript-eslint/consistent-type-exports": "error",
		"@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
		"@typescript-eslint/default-param-last": "error",
		"@typescript-eslint/dot-notation": "error",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/member-delimiter-style": "error",
		"@typescript-eslint/no-base-to-string": "error",
		"@typescript-eslint/no-confusing-non-null-assertion": "error",
		"@typescript-eslint/no-confusing-void-expression": "error",

		"no-dupe-class-members": "off",
		"@typescript-eslint/no-dupe-class-members": "error",

		// "@typescript-eslint/no-duplicate-enum-values": "error",
		"@typescript-eslint/no-dynamic-delete": "error",

		"@typescript-eslint/no-empty-interface": "error",
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/no-extra-non-null-assertion": "error",

		"no-empty-function": "off",
		"@typescript-eslint/no-empty-function": "error",

		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-for-in-array": "error",

		"no-implied-eval": "off",
		"@typescript-eslint/no-implied-eval": "error",

		"@typescript-eslint/no-inferrable-types": "error",

		"no-invalid-this": "off",
		"@typescript-eslint/no-invalid-this": "error",

		"@typescript-eslint/no-invalid-void-type": "error",

		"no-loop-func": "off",
		"@typescript-eslint/no-loop-func": "error",

		"no-loss-of-precision": "off",
		"@typescript-eslint/no-loss-of-precision": "error",

		"@typescript-eslint/no-magic-numbers": "off",

		"@typescript-eslint/no-meaningless-void-operator": "error",
		"@typescript-eslint/no-misused-new": "error",

		"@typescript-eslint/no-misused-promises": [
			"error",
			{
				checksVoidReturn: false,
			},
		],

		"@typescript-eslint/no-namespace": "error",

		"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
		"@typescript-eslint/no-non-null-asserted-optional-chain": "error",

		"no-redeclare": "off",
		"@typescript-eslint/no-redeclare": "error",

		"@typescript-eslint/no-redundant-type-constituents": "error",

		"@typescript-eslint/no-require-imports": "error",

		"@typescript-eslint/no-restricted-imports": "off",
		"@typescript-eslint/no-shadow": "off",

		"@typescript-eslint/no-this-alias": "error",

		"no-throw-literal": "off",
		"@typescript-eslint/no-throw-literal": [
			"error",
			{
				allowThrowingAny: true,
				allowThrowingUnknown: true,
			},
		],

		// think more abt this
		"@typescript-eslint/no-type-alias": "off",

		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

		"@typescript-eslint/no-unnecessary-condition": [
			"error",
			{
				allowConstantLoopConditions: true,
			},
		],
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-unnecessary-type-arguments": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/no-unnecessary-type-constraint": "error",
		"@typescript-eslint/no-unsafe-argument": "error",
		"@typescript-eslint/no-unsafe-assignment": "error",
		"@typescript-eslint/no-unsafe-call": "error",
		"@typescript-eslint/no-unsafe-member-access": "error",
		"@typescript-eslint/no-unsafe-return": "error",

		"no-unused-expressions": "off",
		"@typescript-eslint/no-unused-expressions": "error",

		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				varsIgnorePattern: "^_",
				argsIgnorePattern: "^_",
				destructuredArrayIgnorePattern: "^_",
				caughtErrorsIgnorePattern: "^_",
				caughtErrors: "all",
			},
		],

		"@typescript-eslint/no-use-before-define": "off",

		"@typescript-eslint/no-useless-constructor": "error",
		"@typescript-eslint/no-useless-empty-export": "error",
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/non-nullable-type-assertion-style": "error",

		"@typescript-eslint/padding-line-between-statements": [
			"error",
			{
				blankLine: "always",
				prev: "block-like",
				next: "*",
			},
		],

		// TEMPORARY: NOT SURE WHAT THIS DOES?? TBH
		"@typescript-eslint/parameter-properties": "warn",

		"@typescript-eslint/prefer-as-const": "error",

		// not sure about this one
		"@typescript-eslint/prefer-enum-initializers": "warn",

		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",

		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/prefer-literal-enum-member": "error",

		// not sure
		"@typescript-eslint/prefer-namespace-keyword": "warn",

		// not sure either
		"@typescript-eslint/prefer-nullish-coalescing": "error",

		"@typescript-eslint/prefer-optional-chain": "error",
		"@typescript-eslint/prefer-readonly": "error",

		// this causes breakage
		"@typescript-eslint/prefer-readonly-parameter-types": "off",

		"@typescript-eslint/prefer-reduce-type-parameter": "error",
		"@typescript-eslint/prefer-regexp-exec": "error",

		// class stuff i dont understand
		"@typescript-eslint/prefer-return-this-type": "error",

		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		"@typescript-eslint/prefer-ts-expect-error": "error",

		// This is convoluted, unnecessary and not good.
		"@typescript-eslint/promise-function-async": "off",

		// this is prettier's concern
		"@typescript-eslint/quotes": "off",

		"@typescript-eslint/require-array-sort-compare": "error",

		"require-await": "off",
		"@typescript-eslint/require-await": "error",

		"@typescript-eslint/restrict-plus-operands": ["error", { checkCompoundAssignments: true }],

		// this rule proved *really* frustrating. Not really sure if I care enough about it?
		"@typescript-eslint/restrict-template-expressions": [
			"off",

			// {
			// 	allowNumber: true,
			// 	allowBoolean: true,
			// 	allowAny: false,
			// 	allowNullish: true,
			// 	allowRegExp: false,
			// },
		],

		"@typescript-eslint/sort-type-union-intersection-members": "error",

		"@typescript-eslint/strict-boolean-expressions": [
			"error",
			{
				allowString: true,
				allowNumber: true,
				allowNullableObject: true,
				allowNullableBoolean: false,
				allowNullableString: true,
				allowNullableNumber: false,
				allowAny: false,
			},
		],

		"@typescript-eslint/switch-exhaustiveness-check": "error",

		"@typescript-eslint/triple-slash-reference": ["error", { types: "prefer-import" }],

		"@typescript-eslint/unbound-method": "error",

		"@typescript-eslint/unified-signatures": "error",

		// Causes issues with tsconfig's baseUrl. TS knows when you're importing from
		// somewhere that doesn't exist anyway.
		"import/no-unresolved": "off",
		"import/first": "error",
		"import/no-duplicates": "error",
		"import/order": [
			"error",
			{
				groups: [
					"index",
					"sibling",
					"parent",
					"internal",
					"external",
					"builtin",
					"object",
					"type",
				],
				"newlines-between": "never",
				alphabetize: {
					order: "asc",
					caseInsensitive: false,
				},
			},
		],
		"import/no-extraneous-dependencies": "error",

		// Import cycles are never good, but sometimes they're inevitable or just a *major pain*
		// to refactor. This is kept as a warning so that you know when you've messed up,
		// but sometimes just has to be acknowledged.
		"import/no-cycle": "warn",
		"import/no-self-import": "error",
		"import/no-relative-packages": "error",
		"import/default": "error",
		"import/no-absolute-path": "error",
		"import/newline-after-import": [
			"error",
			{
				count: 1,

				// isn't supported yet
				// considerComments: true,
			},
		],
		"import/no-unused-modules": "error",
	},
};

export default config;
