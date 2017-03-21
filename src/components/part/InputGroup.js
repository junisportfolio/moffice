import React from 'react';

const InputGroup = ({children}) => {
	return (
		<span className="input-group input-group-sm">
			{children}
		</span>
	);
};

export default InputGroup;