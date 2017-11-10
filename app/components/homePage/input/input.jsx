import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeholder, handleChangeMessage, handleSubmitMessage, value }) => (
	<div>
		<input
			type="text"
			onChange={handleChangeMessage}
			onKeyDown={handleSubmitMessage}
			value={value}
			placeholder={placeholder}
		/>
	</div>
);

Input.propTypes = {
	placeholder: PropTypes.string.isRequired,
	handleChangeMessage: PropTypes.func.isRequired,
	handleSubmitMessage: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
};

export default Input;
