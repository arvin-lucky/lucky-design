import React from 'react';

type IProps = {
	title: string;
};

const Button = (props: IProps) => {
	return <button type="button">{props.title}</button>;
};

export default Button;
