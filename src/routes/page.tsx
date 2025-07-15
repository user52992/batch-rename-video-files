import fileListModel from '@/models/file-list';
import taskListModel from '@/models/task-list';
import { Banner, Button, Space, Typography, Upload } from '@douyinfe/semi-ui';
import { useModel } from '@modern-js/runtime/model';
import { useNavigate } from '@modern-js/runtime/router';
import { type FC, useEffect } from 'react';
import Style from './index.module.scss';

const Index: FC = () => {
	const navigate = useNavigate();
	const [{ fileList }, { setFileList }] = useModel(fileListModel);
	const [_, { resetTaskList }] = useModel(taskListModel);

	useEffect(() => {
		setFileList([]);
		resetTaskList();
	}, [setFileList, resetTaskList]);

	const handleFileChange = (fileList: File[]) => {
		setFileList(fileList);
	};

	return (
		<Space className={Style.page} vertical align="start">
			<Banner type="info" description="纯前端实现，可断网使用" />
			<Banner type="info" description="建议使用语音输入法，如讯飞输入法" />
			<Upload
				action=""
				accept="video/*"
				multiple
				draggable
				showClear={false}
				uploadTrigger="custom"
				dragMainText="点击或拖拽以选择文件"
				dragSubText="仅支持视频文件"
				onFileChange={handleFileChange}
				className={Style.upload}
			/>
			{fileList.length > 0 && (
				<Typography.Text>{`共 ${fileList.length} 个`}</Typography.Text>
			)}
			<Button
				block
				disabled={fileList.length === 0}
				onClick={() => navigate('/rename')}
			>
				开始重命名
			</Button>
		</Space>
	);
};

export default Index;
