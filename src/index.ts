import { CaseBlocks } from "./rules";
import recommended from "./configs/recommended";

const rules = {
	"case-blocks": CaseBlocks,
};

export = {
	rules,
	configs: {
		recommended,
	},
};
