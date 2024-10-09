import { Select } from './Select';
import { fontFamilyOptions, OptionType } from 'src/constants/articleProps';

// Определяем типы пропсов для компонента
interface FontFamilySelectorProps {
	selectedFont: OptionType; // Тип для выбранного шрифта

	onFontChange: (option: OptionType) => void; // Функция для изменения шрифта
}

export const FontFamilySelector = ({
	selectedFont,
	onFontChange,
}: FontFamilySelectorProps) => {
	// Обработчик выбора шрифта
	const handleFontChange = (option: OptionType) => {
		onFontChange(option);
	};

	return (
		<Select
			selected={selectedFont} // Текущий выбранный шрифт
			options={fontFamilyOptions} // Опции выбора шрифтов
			placeholder='Выберите шрифт' // Текст по умолчанию
			onChange={handleFontChange} // Обработчик изменения шрифта
			title='Шрифты' // Название для выпадающего списка
		/>
	);
};
