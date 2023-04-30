import React from 'react';
import { IPaginator } from '../../../constants/interfaces.interfaces';
import { useSelector } from 'react-redux';
import { SelectChangeEvent } from '@mui/material';

const usePaginator: () => IPaginator = (): IPaginator => {
	const {
		tasks: { value: tasks },
	} = useSelector((state: any) => state);

	const [page, setPage] = React.useState(1);
	const [perPage, setPerPage] = React.useState(5);
	const totalPages = Math.ceil(tasks.length / perPage);
	const maxPage = totalPages > 0 ? totalPages : 1;

	const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	const handlePerPageChange = (event: SelectChangeEvent<number>) => {
		event.preventDefault();
		setPerPage(event.target.value as number);
		setPage(1);
	};

	return { page, perPage, handlePaginationChange, handlePerPageChange, maxPage };
};

export default usePaginator;
