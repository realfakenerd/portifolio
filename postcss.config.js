import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssDeclarationSorter from 'css-declaration-sorter';

export default {
	plugins: [
		tailwindcss,
		autoprefixer,
		cssDeclarationSorter({order: 'concentric-css'})
	]
};
