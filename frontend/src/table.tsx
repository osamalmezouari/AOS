import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';

interface Column {
    id: 'code' | 'Status' | 'date' | 'SousActivitie';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: any) => string;
}

const columns: readonly Column[] = [
    { id: 'code', label: 'Code', minWidth: 100 },
    {
        id: 'Status',
        label: 'Status',
        minWidth: 40,
        align: 'right',
    },
    {
        id: 'date',
        label: 'Date',
        minWidth: 170,
        align: 'right',
        format: (value: string) => new Date(value).toLocaleDateString('en-US'),
    },
    {
        id: 'SousActivitie',
        label: 'Sous Activitie',
        minWidth: 170,
        align: 'right',
    },
];

interface Data {
    code: string;
    Status: string;
    date: string;
    SousActivitie: string;
}

function createData(
    code: string,
    Status: string,
    date: string,
    SousActivitie: string
): Data {
    return { code, Status, date, SousActivitie };
}

const rows = [
    createData('IN', 'Active', '2024-06-01', 'Activity 1'),
    createData('CN', 'Inactive', '2024-06-01', 'Activity 2'),
    createData('IT', 'Pending', '2024-06-01', 'Activity 3'),
    createData('US', 'Active', '2024-06-01', 'Activity 4'),
];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 220 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    sx={{ backgroundColor: '#f0f0f0', color: 'black' }}
                                    className='font-main uppercase font-bold h-16'
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    className={`${column.id === 'Status' && 'font-main font-bold flex items-center w-max gap-2'}`}
                                                >
                                                    {column.format && typeof value === 'string'
                                                        ? column.format(value)
                                                        : value}
    
                                                    {column.id === 'Status' && (
                                                        <Box className={'w-2 h-2 rounded-full bg-green-300'}></Box>
                                                    )}
                                                    
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
