import { IconGithubLogo } from '@douyinfe/semi-icons';
import { Typography } from '@douyinfe/semi-ui';
import { useNavigate } from '@modern-js/runtime/router';
import type { FC } from 'react';
import Style from './index.module.scss';

const Header: FC = () => {
	const navigate = useNavigate();

	return (
		<header className={Style.header}>
			<Typography.Title className={Style.title} onClick={() => navigate('/')}>
				视频文件批量重命名
			</Typography.Title>
			<a
				href="https://github.com/user52992/batch-rename-video-files"
				target="_blank"
				rel="noreferrer"
			>
				<IconGithubLogo size="extra-large" />
			</a>
		</header>
	);
};

export { Header };
