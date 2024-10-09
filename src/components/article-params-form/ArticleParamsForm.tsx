import { ArrowButton } from 'src/ui/arrow-button';
import { FontFamilySelector } from 'src/ui/select/FontFamilySelector'; // Компонент выбора шрифта
import { FontColorSelector } from 'src/ui/select/FontColorSelector'; // Компонент выбора цвета шрифта
import { ContentWidthSelector } from 'src/ui/select/ContentWidthSelector'; // Компонент выбора ширины контента
import { BackgroundColorSelector } from 'src/ui/select/BackgroundColorSelector'; // Компонент выбора цвета фона
import { FontSizeSelector } from 'src/ui/radio-group/FontSizeSelector';
import { Separator } from 'src/ui/separator'; // Сепаратор
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text'; // Настройка стилей текста

import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';

// Импортируем OptionType
import { OptionType } from 'src/constants/articleProps';

// Определяем интерфейс для параметров статьи
interface ArticleParams {
	fontFamilyOption: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
	fontSizeOption: OptionType;
}

// Типизация для пропсов компонента
interface ArticleParamsFormProps {
	articleParams: ArticleParams; // Текущие параметры статьи
	onParamChange: (paramName: keyof ArticleParams, value: OptionType) => void;
	onApplyChanges: () => void; // Обработчик для применения изменений
	onResetChanges: () => void; // Обработчик для сброса
}

export const ArticleParamsForm = ({
	articleParams,
	onParamChange,
	onApplyChanges,
	onResetChanges,
}: ArticleParamsFormProps) => {
	// Состояние для открытия/закрытия формы
	const [isOpen, setIsOpen] = useState(false);

	// Обработчик клика по ArrowButton
	const toggleMenu = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleMenu} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form
					className={styles.form}
					onSubmit={(e) => {
						e.preventDefault();
					}}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					{/* Выбор шрифта */}
					<FontFamilySelector
						selectedFont={articleParams.fontFamilyOption}
						onFontChange={(value: OptionType) =>
							onParamChange('fontFamilyOption', value)
						} // Используем универсальный обработчик
					/>

					{/* Выбор размера шрифта */}
					<FontSizeSelector
						selectedFontSize={articleParams.fontSizeOption} // Передаем текущий выбранный размер шрифта
						onFontSizeChange={(value: OptionType) =>
							onParamChange('fontSizeOption', value)
						} // Используем универсальный обработчик
					/>

					{/* Выбор цвета текста */}
					<FontColorSelector
						// Добавляем обработчик для цвета шрифта
						selectedColor={articleParams.fontColor}
						onColorChange={(value: OptionType) =>
							onParamChange('fontColor', value)
						} // Используем универсальный обработчик
					/>

					{/* Разделитель */}
					<Separator />

					{/* Выбор цвета фона */}
					<BackgroundColorSelector
						selectedBackgroundColor={articleParams.backgroundColor} // Передаем текущий цвет фона
						onBackgroundColorChange={(value: OptionType) =>
							onParamChange('backgroundColor', value)
						} // Используем универсальный обработчик
					/>

					{/* Выбор ширины контента */}
					<ContentWidthSelector
						selectedContentWidth={articleParams.contentWidth} // Передаем текущую ширину контента
						onContentWidthChange={(value: OptionType) =>
							onParamChange('contentWidth', value)
						} // Используем универсальный обработчик
					/>

					<div className={styles.bottomContainer}>
						{/* Кнопка "Сбросить" */}
						<Button
							title='Сбросить'
							type='clear'
							onClick={onResetChanges} // Используем обработчик сброса
						/>

						{/* Кнопка "Применить" */}
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							onClick={onApplyChanges}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
