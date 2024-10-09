import { Select } from './Select';
import { OptionType, backgroundColors } from 'src/constants/articleProps';

// Определяем типы пропсов для компонента
interface BackgroundColorSelectorProps {
	selectedBackgroundColor: OptionType; // Тип для выбранного цвета фона
	onBackgroundColorChange: (option: OptionType) => void; // Функция для изменения цвета фона
}

export const BackgroundColorSelector = ({
	selectedBackgroundColor,
	onBackgroundColorChange,
}: BackgroundColorSelectorProps) => {
	// Обработчик выбора цвета фона
	const handleBackgroundColorChange = (option: OptionType) => {
		onBackgroundColorChange(option);
	};

	return (
		<Select
			selected={selectedBackgroundColor} // Текущий выбранный цвет фона
			options={backgroundColors} // Опции выбора цвета фона
			placeholder='Выберите цвет фона' // Текст по умолчанию
			onChange={handleBackgroundColorChange} // Обработчик изменения цвета фона
			title='Цвет фона' // Название для выпадающего списка
		/>
	);
};
