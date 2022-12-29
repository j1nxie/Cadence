import { Linter } from "@typescript-eslint/utils/dist/ts-eslint";
import eslint from "eslint";
import t from "tap";
import cadenceDefaultConfig from "../src/configs/recommended";

// All prettier source files need to end with a newline.
function addTrailingLF(code: string) {
	return `${code}\n`;
}

// Returns a non-empty block.
function b() {
	return `{
		// !
	}`;
}

// Wraps a bare statement so that no other errs trigger.
function f(code: string) {
	return `function f() {
	return ${code}
}

f();`;
}

function error(ruleId: string): Partial<Linter.LintMessage> {
	return { ruleId, severity: 2 };
}

t.test("Cadence Default Config Tests.", (t) => {
	const linter = new eslint.ESLint({ baseConfig: cadenceDefaultConfig });

	function assertValid(name: string, code: string) {
		t.test(`valid: ${name}`, async (t) => {
			const res = await linter.lintText(addTrailingLF(code));

			t.strictSame(res[0].messages, [], `Expected '${code}' to be legal.`);

			t.end();
		});
	}

	// Asserts that linting this code results in the expected returns.
	// Automatically snapshots returned messages for easy analysis and regression checking.
	function assertIs(name: string, code: string, ...expected: Partial<Linter.LintMessage>[]) {
		t.test(`invalid: ${name}`, async (t) => {
			const res = await linter.lintText(addTrailingLF(code));

			t.hasStrict(res[0].messages, expected, `Expected '${code}' to fail in this way.`);

			t.equal(
				res[0].messages.length,
				expected.length,
				`Expected ${expected.length} errors, but ended up with ${res[0].messages.length}? Printing errors...`
			);

			if (res[0].messages.length !== expected.length) {
				t.strictSame(null, res[0].messages, "Printed errors due to above failure.");
			}

			t.matchSnapshot(
				res[0].messages.map((e) => e.message),
				`MessageSnapshot: ${name}`
			);

			t.end();
		});
	}

	assertIs("unused expression", "1 === 2;", error("no-unused-expressions"));
	assertIs("== usage", f(`Math.random() == 0.5;`), error("eqeqeq"));

	t.end();
});
