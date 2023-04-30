import React from 'react';
import { Pagination } from '@mui/material';
import { IPaginator } from '../../../constants/interfaces.interfaces';

const Paginator: React.FC<IPaginator> = ({ count, perPage }: IPaginator) => {
	console.log('🚀 👍 ~ count:', count);
	const [page, setPage] = React.useState(1);

	const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	return (
		<>
			<Pagination count={count / perPage} page={page} onChange={handlePaginationChange} />
		</>
	);
};

export default Paginator;
