import recommended from "./configs/recommended";
import { CaseBlocks, NoInstanceof } from "./rules";
import type { ESLint } from "eslint";

const rules = {
	"case-blocks": CaseBlocks,
	"no-instanceof": NoInstanceof,
};

export = {
	rules,
	configs: {
		recommended,
	},
} satisfies ESLint.Plugin;
