import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import styled from 'styled-components';
import { LIGHT_BLUE, LIGHT_GREEN, LIGHT_RED } from '../../../global/utils';

export const StyledInputNumber = styled(InputNumber)`
	height: 30px;
	margin: 0;
	font-size: 0.95em;
	width: 100%;
	&::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}
	> * &::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}
	${(props: any) => props.theme.breakpoints.down('lg')} {
		font-size: 0.85em;
		& > * {
			font-size: 0.85em;
		}
	}
`;

export const StyledInputTextArea = styled(InputTextarea)`
	height: 100%;
	width: 100%;
	font-size: 1em;
	overflow-y: auto !important;
	resize: none;
	&::placeholder {
		color: rgba(0, 0, 0, 0.35);
	}
`;

export const StyledDropdown = styled(Dropdown)`
	height: 30px;
	margin: 0;
	font-size: 0.95em;
	width: 100%;

	&::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}

	> * &::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}

	${(props) => props.theme.breakpoints.down('lg')} {
		font-size: 0.85em;
	}

	& > * {
		${(props) => props.theme.breakpoints.down('lg')} {
			font-size: 0.85em;
		}
	}
`;

export const StyledCalendar = styled(Calendar)`
	height: 30px;
	margin: 0;
	font-size: 0.95em;
	width: 100%;

	&::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}

	> * &::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}

	${(props) => props.theme.breakpoints.down('lg')} {
		font-size: 0.85em;
	}

	& > * {
		${(props) => props.theme.breakpoints.down('lg')} {
			font-size: 0.85em;
		}
	}
`;

export const StyledChips = styled(Chips)`
	height: 30px;
	margin: 0;
	font-size: 0.95em;
	width: 100%;

	&::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}

	> * &::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}

	${(props) => props.theme.breakpoints.down('lg')} {
		font-size: 0.85em;
	}

	& > * {
		${(props) => props.theme.breakpoints.down('lg')} {
			font-size: 0.85em;
		}
	}
`;

export const StyledMultiSelect = styled(MultiSelect)`
	height: 30px;
	margin: 0;
	font-size: 0.95em;
	width: 100%;

	&::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}

	> * &::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}

	${(props) => props.theme.breakpoints.down('lg')} {
		font-size: 0.85em;
	}

	& > * {
		${(props) => props.theme.breakpoints.down('lg')} {
			font-size: 0.85em;
		}
	}
`;

export const StyledInputMask = styled(InputMask)`
	height: 30px;
	margin: 0;
	font-size: 0.95em;
	width: 100%;

	&::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}

	> * &::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}

	${(props) => props.theme.breakpoints.down('lg')} {
		font-size: 0.85em;
	}

	& > * {
		${(props) => props.theme.breakpoints.down('lg')} {
			font-size: 0.85em;
		}
	}
`;

export const StyledAutoComplete = styled(AutoComplete)`
	height: 30px;
	margin: 0;
	font-size: 0.95em;
	width: 100%;

	&::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}

	> * &::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}

	${(props) => props.theme.breakpoints.down('lg')} {
		font-size: 0.85em;
	}

	& > * {
		${(props) => props.theme.breakpoints.down('lg')} {
			font-size: 0.85em;
		}
	}
`;

export const StyledInputText = styled(InputText)`
	height: 30px;
	margin: 0;
	font-size: 0.95em;
	width: 100%;

	&::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}

	> * &::placeholder {
		color: rgba(0, 0, 0, 0.25);
	}

	@media screen and (max-width: ${(props) => props.theme.breakpoints.lg}px) {
		font-size: 0.85em;
	}

	& > * {
		@media screen and (max-width: ${(props) => props.theme.breakpoints.lg}px) {
			font-size: 0.85em;
		}
	}
`;

export const StyledSpanLabel = styled.span`
	font-size: 0.8em;
	width: fit-content;
	color: rgba(0, 0, 0, 0.45);
	margin: 0px 0px 5px 0px;

	@media (max-height: 726px) {
		margin: 0;
		font-size: 0.7em;
	}
`;

export const StyledRequiredTrick = styled.span`
	color: ${LIGHT_RED};
	font-size: 1em;
	font-weight: bold;
`;

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: ${({ isTextarea }: any) => (isTextarea ? '15px 0px' : '10px 0px')};
	width: 100%;

	${({ isTextarea }: any) =>
		isTextarea &&
		`
  height: 100%;
  max-height: 100%;

  @media (max-height: 726px) {
    margin: 0px 0px 20px 0px;
  }
`}

	@media (max-height: 726px) {
		position: relative;
	}
`;

export const StyledText = styled.span`
	font-size: ${({ isBig }: any) => (isBig ? '1.2em' : '1em')};
	font-weight: ${({ isBig }: any) => (isBig ? 'bold' : 'medium')};
	color: ${({ value }: any) => (value ? LIGHT_GREEN : LIGHT_RED)};
	@media (max-height: 726px) {
		font-size: ${({ isBig }: any) => (isBig ? '1em' : '0.8em')};
	}
	&::-webkit-scrollbar {
		width: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background: ${LIGHT_BLUE};
		border-radius: 10px;
	}
`;

export const Icons = styled.i`
	font-size: 1.5em;
	color: ${({ value }: any) => (value ? LIGHT_GREEN : LIGHT_RED)};
`;
