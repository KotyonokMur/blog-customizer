import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState, OptionType } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	// Состояние для примененных параметров статьи (используется в Article)
	const [articleParams, setArticleParams] =
		useState<typeof defaultArticleState>(defaultArticleState);
	// Временное состояние для параметров (до нажатия "Применить")
	const [tempArticleParams, setTempArticleParams] =
		useState<typeof defaultArticleState>(defaultArticleState);

	// Универсальный обработчик изменения любого параметра
	const handleParamChange = (
		paramName: keyof typeof defaultArticleState,
		value: OptionType
	) => {
		setTempArticleParams((prevState) => ({
			...prevState,
			[paramName]: value,
		}));
	};

	// Применение изменений (переносим временные параметры в основные)
	const applyChanges = () => {
		setArticleParams(tempArticleParams);
	};

	// Сброс временных и основных параметров на начальные значения
	const resetChanges = () => {
		setTempArticleParams(defaultArticleState); // Сбрасываем временные параметры
		setArticleParams(defaultArticleState); // Сбрасываем параметры статьи
	};

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
			<ArticleParamsForm
				articleParams={tempArticleParams} // Временно выбранные параметры
				onParamChange={handleParamChange} // Универсальный обработчик изменения параметра
				onApplyChanges={applyChanges} // Обработчик применения
				onResetChanges={resetChanges} // Обработчик сброса
			/>
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

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
