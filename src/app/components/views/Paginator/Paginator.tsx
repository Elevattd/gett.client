import React from 'react';
import usePaginator from './usePaginator';
import { values } from '../../../constants/utils';
import { MenuItem, Pagination, Select } from '@mui/material';

const Paginator: React.FC<{}> = () => {
	const { page, perPage, handlePaginationChange, handlePerPageChange, maxPage } = usePaginator();
	return (
		<>
			<Select value={perPage} onChange={handlePerPageChange} autoWidth label=''>
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
				count={maxPage ?? 1}
				page={page}
				onChange={handlePaginationChange}
			/>
		</>
	);
};

export default Paginator;
