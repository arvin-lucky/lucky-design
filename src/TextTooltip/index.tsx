import { Tooltip, type TooltipProps } from 'antd';
import React, { FC, ReactNode } from 'react';

export type TextTooltipProps = {
	/**
	 * @description 文字内容
	 */
	title: string;
	/**
	 * @description 限制长度，超出后省略号代替，并且展示ToolTip
	 */
	limitLength?: number;
	/**
	 * @description 文字内容包裹函数
	 */
	titleWrapperFunc?: (title: ReactNode) => ReactNode;
} & TooltipProps;

const TextTooltip: FC<TextTooltipProps> = props => {
	const { titleWrapperFunc, title, limitLength, ...restTooltipProps } = props;
	const tooltipTitle = title?.toString?.();
	const length = Number(limitLength) || 0;

	if (length === 0 || tooltipTitle.length <= length) {
		if (titleWrapperFunc) {
			return titleWrapperFunc(tooltipTitle);
		}
		return <span>{tooltipTitle}</span>;
	}

	const sliceText = tooltipTitle.slice(0, length) + '...';

	const addTooltipWrapper = (children: ReactNode) => {
		return (
			<Tooltip
				overlayInnerStyle={{
					maxWidth: 800,
					display: 'block',
				}}
				{...restTooltipProps}
				title={tooltipTitle}
			>
				{children}
			</Tooltip>
		);
	};

	if (titleWrapperFunc) {
		return addTooltipWrapper(titleWrapperFunc(sliceText));
	}

	return addTooltipWrapper(<span>{sliceText}</span>);
};

export default TextTooltip;
