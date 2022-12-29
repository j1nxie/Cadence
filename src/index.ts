import recommended from "./configs/recommended";
import { CaseBlocks, NoInstanceof } from "./rules";

const rules = {
	"case-blocks": CaseBlocks,
	"no-instanceof": NoInstanceof,
};

export = {
	rules,
	configs: {
		recommended,
	},
};
