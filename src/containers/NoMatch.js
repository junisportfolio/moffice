import React from 'react';

const NoMatch = ({location}) => {
	return (
		<section className="content">
			<h2>{location.pathname} 페이지는 존재하지 않습니다.</h2>
		</section>
	);
};

export default NoMatch;