import type { Element, Root } from 'hast';
import { SKIP, visit } from 'unist-util-visit';

export function rehypeUnwrapImages() {
	function containsImage(node: Element) {
		const { tagName, children } = node;
		return (
			tagName === 'p' &&
			children.some((child) => {
				if (child.type === 'element') return child.tagName === 'img';
			})
		);
	}

	return (tree: Root) => {
		visit(tree, containsImage, (node, index, parent) => {
			const { type, children } = node;
			if (type === 'element') {
				parent.children.splice(index, 1, ...children);
				return [SKIP, index];
			}
		});
	};
}

export function rehypeCopyCode() {
	function codeTitle(node: Element) {
		const { properties, tagName } = node;
		if (tagName === 'div') {
			const className = properties.className[0];
			return className === 'rehype-code-title';
		}
	}

	return (tree: Root) => {
		visit(tree, codeTitle, (node) => {
			const { type, children } = node;
			if (type !== 'element') return;

			const { type: cType, value: cValue } = children[0];
			const value = cType === 'text' ? cValue : '';

			node.children = [
				{
					type: 'element',
					tagName: 'span',
					children: [{ type: 'text', value }]
				},
				{
					type: 'element',
					tagName: 'button',
					properties: { className: ['copy'] },
					children: [{ type: 'text', value: `Copy` }]
				}
			];
		});
	};
}
