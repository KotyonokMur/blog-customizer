import { Select } from 'src/ui/select/Select';
import { OptionType, contentWidthArr } from 'src/constants/articleProps';

// Определяем типы пропсов для компонента
interface ContentWidthSelectorProps {
	selectedContentWidth: OptionType; // Текущая выбранная ширина контента
	onContentWidthChange: (option: OptionType) => void; // Функция для изменения ширины контента
}

export const ContentWidthSelector = ({
	selectedContentWidth,
	onContentWidthChange,
}: ContentWidthSelectorProps) => {
	// Обработчик выбора ширины контента
	const handleWidthChange = (option: OptionType) => {
		onContentWidthChange(option);
	};

	return (
		<Select
			selected={selectedContentWidth} // Текущая выбранная ширина контента
			options={contentWidthArr} // Опции выбора ширины контента
			placeholder='Выберите ширину контента' // Текст по умолчанию
			onChange={handleWidthChange} // Обработчик изменения ширины контента
			title='Ширина контента' // Название для выпадающего списка
		/>
	);
};
