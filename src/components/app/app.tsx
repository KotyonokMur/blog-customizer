import clsx from 'clsx';
import { CSSProperties, useState } from 'react';

import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';
import { defaultArticleState } from '../../constants/articleProps';

import styles from '../../styles/index.module.scss';

export const App = () => {
	// Состояние для изменения настроек страницы
	const [articleParams, setArticleParams] =
		useState<typeof defaultArticleState>(defaultArticleState);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleParams.fontFamilyOption.value,
					'--font-size': articleParams.fontSizeOption.value,
					'--font-color': articleParams.fontColor.value,
					'--container-width': articleParams.contentWidth.value,
					'--bg-color': articleParams.backgroundColor.value,
				} as CSSProperties
			}>
			{/*Стандартные настройки страницы*/}
			<ArticleParamsForm onApplyChanges={setArticleParams} />
			<Article
				selectedFont={articleParams.fontFamilyOption}
				selectedFontSize={articleParams.fontSizeOption}
				selectedFontColor={articleParams.fontColor}
				selectedContentWidth={articleParams.contentWidth}
				selectedBackgroundColor={articleParams.backgroundColor}
			/>
		</main>
	);
};
