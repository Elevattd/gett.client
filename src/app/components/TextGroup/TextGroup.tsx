import { InputSwitch } from 'primereact/inputswitch';
import {
	StyledAutoComplete,
	StyledCalendar,
	StyledChips,
	StyledContainer,
	StyledDropdown,
	StyledInputMask,
	StyledInputNumber,
	StyledInputText,
	StyledInputTextArea,
	StyledMultiSelect,
	StyledRequiredTrick,
	StyledSpanLabel,
	StyledText,
} from './styles';
import { LIGHT_GREEN, LIGHT_RED } from '../../../global/utils';

const TextGroup = ({
	value,
	label,
	options,
	isMask,
	isBig,
	isAutocomplete,
	suggestions,
	optionGroupLabel,
	completeMethod,
	field,
	isEditing,
	isTextarea,
	isDropdown,
	isCalendar,
	isMultipleSelect,
	isSwitch,
	isCheckbox,
	isDefaultValue,
	onChange,
	separator,
	style,
	optionValue,
	optionLabel,
	disabled,
	filter,
	showClear,
	filterBy,
	virtualScrollerOptions,
	className,
	placeholder,
	IdDisabled,
	keyfilter,
	maxLength,
	minLength,
	minDate,
	required,
	helperText,
	ref,
	isNumber,
	inputFontsize,
	display,
	isThin,
	hasError,
	mask,
	isChip,
	isAutocompleteChip,
	fontSize,
	alignItems,
	onKeyDown,
	mode,
	currency,
	onValueChange,
	maxDate,
	optionDisabled,
	...other
}: any) => {
	return (
		<StyledContainer style={style}>
			{!isCheckbox && (
				<StyledSpanLabel>
					{label}
					{required && <StyledRequiredTrick>*</StyledRequiredTrick>}
				</StyledSpanLabel>
			)}

			{!isEditing ? (
				isSwitch ? (
					<StyledText>
						{value ? (
							<i style={{ fontSize: '1.5em', color: LIGHT_GREEN }} className={'pi pi-check'}></i>
						) : (
							<i style={{ fontSize: '1.5em', color: LIGHT_RED }} className={'pi pi-times'}></i>
						)}
					</StyledText>
				) : (
					<StyledText>{!value || value === 'null' ? 'Sin datos' : value} </StyledText>
				)
			) : isTextarea ? (
				<StyledInputTextArea
					autoComplete='off'
					placeholder={placeholder}
					disabled={disabled}
					onChange={onChange}
					value={value}
					onKeyDown={onKeyDown}
					autoResize
					{...other}
				/>
			) : isDropdown ? (
				<StyledDropdown
					autoComplete='off'
					filter={filter}
					showClear={showClear}
					filterBy={filterBy}
					virtualScrollerOptions={virtualScrollerOptions}
					placeholder={placeholder}
					disabled={disabled || options?.length < 1}
					style={{ display: 'flex', alignItems: 'center', fontSize: inputFontsize }}
					optionValue={optionValue}
					optionLabel={optionLabel}
					onChange={onChange}
					optionGroupLabel={optionGroupLabel}
					value={value}
					{...other}
					optionDisabled={(e) => {
						if (!optionDisabled) {
							return e.Id === 0;
						}
					}}
					options={
						isDefaultValue
							? [{ [optionValue]: 0, [optionLabel]: 'Selecciona una opción' }, ...options]
							: options
					}
				/>
			) : isCalendar ? (
				<StyledCalendar
					autoComplete='off'
					dateFormat='dd/mm/yy'
					placeholder={placeholder}
					minDate={minDate}
					maxDate={maxDate}
					value={value}
					disabled={disabled}
					onChange={onChange}
					{...other}
				/>
			) : isChip ? (
				<StyledChips
					autoComplete='off'
					style={{
						...other?.style,
						height: 'min-content',
					}}
					placeholder={placeholder}
					value={value}
					disabled={disabled}
					onChange={onChange}
					separator={separator}
					{...other}
				/>
			) : isMultipleSelect ? (
				<StyledMultiSelect
					autoComplete='off'
					{...other}
					placeholder={placeholder}
					display={display}
					filter={filter}
					filterBy={filterBy}
					options={options}
					onChange={onChange}
					disabled={disabled}
					optionGroupLabel={optionGroupLabel}
					value={value}
					optionLabel={optionLabel}
					optionValue={optionValue}
					selectedItemsLabel={`{0} items seleccionados`}
					// optionDisabled={optionDisabled}
				/>
			) : isSwitch ? (
				<InputSwitch
					{...other}
					autoComplete='off'
					className={`${value ? 'switch-green' : 'switch-red'}`}
					checked={value}
					ref={ref}
					onChange={onChange}
					disabled={disabled}
				/>
			) : isMask ? (
				<StyledInputMask
					autoComplete='off'
					{...other}
					style={{
						...other?.style,
						fontSize: inputFontsize,
						// border: hasError ? `1px solid ${LIGHT_RED_QUICKTRADE}` : '',
					}}
					placeholder={placeholder}
					value={value}
					disabled={disabled}
					onChange={onChange}
					mask={mask}
					autoClear={false}
				/>
			) : isNumber ? (
				<StyledInputNumber
					{...other}
					mode={mode}
					currency={currency}
					autoComplete='off'
					placeholder={placeholder}
					value={value}
					disabled={disabled}
					onChange={onChange}
					onKeyDown={onKeyDown}
					onValueChange={onValueChange}
				/>
			) : isAutocomplete ? (
				<StyledAutoComplete
					{...other}
					autoComplete='off'
					suggestions={suggestions}
					completeMethod={completeMethod}
					field={field}
					optionGroupLabel={optionGroupLabel}
					delay={1000}
					onChange={onChange}
					value={value}
					placeholder={placeholder}
					disabled={disabled}
				/>
			) : isAutocompleteChip ? (
				<StyledAutoComplete
					{...other}
					autoComplete='off'
					style={{
						...other?.style,
						height: 'min-content',
					}}
					multiple
					suggestions={suggestions}
					completeMethod={completeMethod}
					field={field}
					optionGroupLabel={optionGroupLabel}
					delay={1000}
					onChange={onChange}
					value={value}
					placeholder={placeholder}
					disabled={disabled}
				/>
			) : (
				<StyledInputText
					autoComplete='off'
					style={{
						...other?.style,
						fontSize: inputFontsize,
						border: hasError ? `1px solid ${LIGHT_RED}` : '',
					}}
					{...other}
					keyfilter={keyfilter}
					placeholder={placeholder}
					disabled={disabled}
					value={value}
					onChange={onChange}
					ref={ref}
					onKeyDown={onKeyDown}
					maxLength={maxLength}
					minLength={minLength}
				/>
			)}
			<StyledSpanLabel style={{ color: hasError ? LIGHT_RED : '' }}>{helperText}</StyledSpanLabel>
		</StyledContainer>
	);
};

export default TextGroup;
