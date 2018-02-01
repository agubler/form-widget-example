import { v, w } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import Select from '@dojo/widgets/select/Select';

export class HelloWorld extends WidgetBase {

	private _onSubmit(event: Event) {
		event.preventDefault();
		alert('submitted!');
	}

	private _selectedOption: any;

	private _selectOptions = [
		{
			value: 'seattle',
			label: 'Seattle'
		},
		{
			value: 'los-angeles',
			label: 'Los Angeles'
		},
		{
			value: 'austin',
			label: 'Austin'
		},
		{
			value: 'boston',
			label: 'Boston'
		}
	];

	protected render() {
		return [
			v('form', { onsubmit: this._onSubmit }, [
				w(Select, {
					key: 'select1',
					getOptionDisabled: (option: any) => option.disabled,
					getOptionLabel: (option: any) => option.label,
					getOptionValue: (option: any) => option.value,
					getOptionSelected: (option: any) => !!this._selectedOption && option.value === this._selectedOption,
					label: 'Call form submit listener! ',
					options: this._selectOptions,
					value: this._selectedOption,
					onChange: (option: any) => {
						this._selectedOption = option.value;
						this.invalidate();
					}
				})
			]),
			v('form', {}, [
				w(Select, {
					key: 'select1',
					getOptionDisabled: (option: any) => option.disabled,
					getOptionLabel: (option: any) => option.label,
					getOptionValue: (option: any) => option.value,
					getOptionSelected: (option: any) => !!this._selectedOption && option.value === this._selectedOption,
					label: 'No submit listener so submits page! ',
					options: this._selectOptions,
					value: this._selectedOption,
					onChange: (option: any) => {
						this._selectedOption = option.value;
						this.invalidate();
					}
				})
			]),
			w(Select, {
				key: 'select1',
				getOptionDisabled: (option: any) => option.disabled,
				getOptionLabel: (option: any) => option.label,
				getOptionValue: (option: any) => option.value,
				getOptionSelected: (option: any) => !!this._selectedOption && option.value === this._selectedOption,
				label: 'Not in a form so no submit ',
				options: this._selectOptions,
				value: this._selectedOption,
				onChange: (option: any) => {
					this._selectedOption = option.value;
				this.invalidate();
				}
			})
		];
	}
}

export default HelloWorld;
