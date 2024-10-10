import { useState, useRef } from 'react';
import clsx from 'clsx';
import {
	defaultArticleState,
	OptionType,
	backgroundColors,
	fontColors,
	contentWidthArr,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select/Select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Button } from 'src/ui/button';
import { ArrowButton } from 'src/ui/arrow-button';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';

import styles from './ArticleParamsForm.module.scss';

interface ArticleParams {
	fontFamilyOption: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
	fontSizeOption: OptionType;
}

interface ArticleParamsFormProps {
	onApplyChanges: (params: ArticleParams) => void;
}

export const ArticleParamsForm = ({
	onApplyChanges,
}: ArticleParamsFormProps) => {
	const [articleParams, setArticleParams] =
		useState<ArticleParams>(defaultArticleState);
	const [isOpen, setIsOpen] = useState(false);
	const formRef = useRef<HTMLDivElement>(null); // Создаём реф для формы

	// Используем кастомный хук для закрытия формы при клике за её пределами
	useOutsideClickClose({
		isOpen,
		rootRef: formRef, // Передаём реф на форму
		onChange: setIsOpen,
	});

	const toggleMenu = (e: React.MouseEvent) => {
		// Убираем распространение закрытия формы по оверлею
		e.stopPropagation();
		setIsOpen((prevState) => !prevState);
	};

	const handleParamChange = (
		paramName: keyof ArticleParams,
		value: OptionType
	) => {
		setArticleParams((prevState) => ({
			...prevState,
			[paramName]: value,
		}));
	};

	const resetChanges = () => {
		setArticleParams(defaultArticleState);
	};

	const applyChanges = () => {
		onApplyChanges(articleParams);
	};

	// Убрать закрытие формы при клике внутри селектора
	const handleClickInside = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleMenu} />
			<aside
				ref={formRef}
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form
					onClick={handleClickInside}
					className={styles.form}
					onSubmit={(e) => {
						e.preventDefault();
						applyChanges();
					}}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					{/* Выбор шрифта */}
					<Select
						title='Выбор шрифта'
						options={fontFamilyOptions}
						selected={articleParams.fontFamilyOption}
						onChange={(value) => handleParamChange('fontFamilyOption', value)}
					/>

					{/* Выбор размера шрифта */}
					<RadioGroup
						name='widthSelector'
						title='Размер шрифта'
						options={fontSizeOptions}
						selected={articleParams.fontSizeOption}
						onChange={(value) => handleParamChange('fontSizeOption', value)}
					/>

					{/* Выбор цвета текста */}
					<Select
						title='Цвет текста'
						options={fontColors}
						selected={articleParams.fontColor}
						onChange={(value) => handleParamChange('fontColor', value)}
					/>

					<Separator />

					{/* Выбор цвета фона */}
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={articleParams.backgroundColor}
						onChange={(value) => handleParamChange('backgroundColor', value)}
					/>

					{/* Выбор ширины контента */}
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={articleParams.contentWidth}
						onChange={(value) => handleParamChange('contentWidth', value)}
					/>

					<div className={styles.bottomContainer}>
						{/* Кнопка "Сбросить" */}
						<Button title='Сбросить' type='clear' onClick={resetChanges} />

						{/* Кнопка "Применить" */}
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
