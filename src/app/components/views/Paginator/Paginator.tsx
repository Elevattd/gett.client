import React from 'react';
import usePaginator from './usePaginator';
import { values } from '../../../constants/utils';
import { MenuItem, Pagination, Select } from '@mui/material';

const Paginator: React.FC<{}> = () => {
	const { tasks, currentPage, perPage, handlePaginationChange, handlePerPageChange } = usePaginator();
	return (
		<>
			<Select value={perPage} onChange={handlePerPageChange} autoWidth label='' sx={{ mt: 3 }}>
				{values.length ? (
					values?.map((value: number, i: any) => (
						<MenuItem id={i} value={value}>
							{value}
						</MenuItem>
					))
				) : (
					<MenuItem value={1}>1</MenuItem>
				)}
			</Select>
			<Pagination
				variant='outlined'
				color='primary'
				count={Math.ceil(tasks.length / perPage)}
				page={currentPage}
				onChange={handlePaginationChange}
				sx={{ mt: 4, ml: 2 }}
			/>
		</>
	);
};

export default Paginator;
