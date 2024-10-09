import { RadioGroup } from 'src/ui/radio-group/RadioGroup';
import { OptionType, fontSizeOptions } from 'src/constants/articleProps';

// Определяем типы пропсов для компонента
interface FontSizeSelectorProps {
	selectedFontSize: OptionType; // Текущий выбранный размер шрифта
	onFontSizeChange: (option: OptionType) => void; // Функция для изменения размера шрифта
}

// Компонент выбора размера шрифта
export const FontSizeSelector = ({
	selectedFontSize,
	onFontSizeChange,
}: FontSizeSelectorProps) => {
	// Обработчик изменения выбранной опции
	const handleFontSizeChange = (option: OptionType) => {
		onFontSizeChange(option);
	};

	return (
		<div>
			<RadioGroup
				name='fontSize'
				options={fontSizeOptions} // Используем готовые опции
				selected={selectedFontSize} // Передаем текущий выбранный размер шрифта
				onChange={handleFontSizeChange} // Обработчик изменения размера шрифта
				title='Размер' // Заголовок для RadioGroup
			/>
		</div>
	);
};
