import { Select } from './Select'; // Импортируем компонент Select для выбора цвета шрифта
import { OptionType, fontColors } from 'src/constants/articleProps'; // Импортируем тип OptionType и доступные цвета шрифта

// Определяем типы пропсов для компонента
interface FontColorSelectorProps {
	selectedColor: OptionType; // Тип для выбранного цвета шрифта
	onColorChange: (option: OptionType) => void; // Функция для изменения цвета шрифта
}

// Компонент выбора цвета шрифта
export const FontColorSelector = ({
	selectedColor,
	onColorChange,
}: FontColorSelectorProps) => {
	// Обработчик выбора цвета шрифта
	const handleColorChange = (option: OptionType) => {
		onColorChange(option);
	};

	return (
		<Select
			options={fontColors} // Передаем доступные цвета шрифта
			selected={selectedColor} // Передаем текущий выбранный цвет
			onChange={handleColorChange} // Указываем обработчик изменения цвета
			placeholder='Выберите цвет шрифта' // Текст-заполнитель для селекта
			title='Цвет шрифта' // Заголовок для селекта
		/>
	);
};
