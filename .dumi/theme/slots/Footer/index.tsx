import { DumiSiteProvider, Footer as ThemeFooter } from 'dumi-theme-antd-style';

import React from 'react';
const Footer = () => {
	return (
		<footer style={{ gridArea: 'footer' }}>
			<DumiSiteProvider>
				<ThemeFooter
					bottom={'Copyright © 2024-present | Made with ❤ by Arvin'}
					columns={undefined}
					// columns={[
					//   {
					//     title: '帮助',
					//     items: [
					//       {
					//         icon: <GithubOutlined />,
					//         title: 'GitHub',
					//         url: 'https://github.com/hello-arvin/',
					//         openExternal: true,
					//       },
					//       {
					//         icon: <HistoryOutlined />,
					//         title: '更新日志',
					//         url: '/changelog',
					//       },

					//       {
					//         icon: <IssuesCloseOutlined />,
					//         title: '讨论',
					//         url: 'https://github.com/hello-arvin/',
					//         openExternal: true,
					//       },
					//     ],
					//   },
					// ]}
				/>
			</DumiSiteProvider>
		</footer>
	);
};

export default Footer;
