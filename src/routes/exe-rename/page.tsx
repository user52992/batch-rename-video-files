import taskListModel from '@/models/task-list';
import { Button } from '@douyinfe/semi-ui';
import { useModel } from '@modern-js/runtime/model';
import type { FC } from 'react';

const Index: FC = () => {
	const [_, { executeAllTask }] = useModel(taskListModel);

	return <Button onClick={() => executeAllTask()}>完成重命名</Button>;
};

export default Index;
