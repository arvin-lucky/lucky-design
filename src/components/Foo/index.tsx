import React, { type FC } from 'react';

const Foo: FC<{ title: string }> = props => (
	<h4>
		{props.title}
		<p>hello world!</p>
	</h4>
);

export default Foo;
