import React, { useState, useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import { arrayOf, string, func, objectOf } from 'prop-types';
import { connect } from 'react-redux';
import { validateArray } from 'utils';
import setSelection from '../../redux/selections/actions';

const DropdownSelect = ({ options, placeholder, selectType, setSelectionData, selectedData }) => {
	const [placeholderText, setPlaceholderText] = useState(placeholder);
	const [selected, setSelected] = useState('');

	useEffect(() => {
		setSelectionData({ ...selectedData, [selectType]: selected });
	}, [selected]);

	const handleChange = event => {
		setSelected(event.target.value);
	};

	useEffect(() => {
		if (!placeholder) setPlaceholderText(options[0]);
	}, [placeholder]);

	const renderOptions =
		validateArray(options) &&
		options.map((opt, idx) => (
			<option key={idx.toString()} value={opt}>
				{opt}
			</option>
		));

	return (
		<Select
			variant={selected ? 'filled' : 'outline'}
			placeholder={placeholderText}
			size="lg"
			value={selected}
			onChange={e => handleChange(e)}
			mt={2}
			mb={2}
		>
			{renderOptions}
		</Select>
	);
};

DropdownSelect.propTypes = {
	options: arrayOf(string),
	placeholder: string,
	selectType: string,
	setSelectionData: func,
	selectedData: objectOf(string),
};

DropdownSelect.defaultProps = {
	options: [],
	placeholder: '',
	selectType: '',
	setSelectionData: () => {},
	selectedData: {},
};

const mapStateToProps = ({ selections }) => ({
	selectedData: selections.selectionsData,
});

const mapDispatchToProps = dispatch => ({
	setSelectionData(selectType) {
		dispatch(setSelection(selectType));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownSelect);
