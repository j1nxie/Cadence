import type { Rule } from "eslint";

// foo
export const CaseBlocks: Rule.RuleModule = {
	create(context) {
		return {
			SwitchCase(node) {
				if (node.consequent.length === 0) {
					return;
				}

				const maybeBlockStatement = node.consequent[0];

				if (
					maybeBlockStatement.type === "BlockStatement" &&
					maybeBlockStatement.body.length === 1
				) {
					context.report({
						node,
						message: `Single-line case statements must not use code blocks.`,

						// autofixing this is hard, so we're just not going to.
					});
				}

				if (maybeBlockStatement.type !== "BlockStatement" && node.consequent.length > 1) {
					context.report({
						node,
						message: `Multi-line case statements must be followed by a code block.`,
						*fix(fixer) {
							yield fixer.insertTextBefore(node.consequent[0], "{");

							yield fixer.insertTextAfter(
								node.consequent[node.consequent.length - 1],
								"}"
							);
						},
					});
				}
			},
		};
	},
	meta: {
		fixable: "code",
	},
};
