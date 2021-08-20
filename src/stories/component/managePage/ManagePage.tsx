import React, {FC} from "react";
import {
    Button,
    makeStyles,
    Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow,
} from "@material-ui/core";
import TopUpDialog from "../topUpDialog/TopUpDialog";
import {userData} from "../../fake-data/FakeData";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: "78vh",
    },
    flexBox: {
        display: 'flex',
        width: '100%',
    },
    boxLeft: {
        width: "50%",
        marginBottom: "25px",
        marginRight: "25px",
    },
    boxRight: {
        width: "50%",
        marginBottom: "25px",
    },
    margin: {
        marginBottom: "10px"
    }
});

interface Column {
    id: 'id' | 'name' | 'credit' | 'detail' | 'topUp';
    label: string;
    minWidth?: number;
    align?: 'right' | 'left' | 'center';
    format?: (value: number) => string;
}

const columns: Column[] = [
    {
        id: 'id',
        label: 'Id',
        minWidth: 50
    },
    {
        id: 'name',
        label: 'Name',
        minWidth: 100,
        align: 'left',
    },
    {
        id: 'credit',
        label: 'Credit',
        minWidth: 100,
        align: 'right',
    },
    {
        id: 'detail',
        label: 'Detail',
        minWidth: 100,
        align: 'center',
    },
    {
        id: 'topUp',
        label: 'Top up',
        minWidth: 100,
        align: 'center',
    },
];

const ManagePage: FC = () => {
    const classes = useStyles();
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
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        const user = row["name"];

                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {value === "detail" ?
                                                    <Button
                                                        variant="outlined" color="primary" href="#outlined-buttons"
                                                    >Detail</Button> :
                                                    value === "topUp" ?
                                                        <TopUpDialog user={user}/> : value
                                                }
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
                count={userData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
};

export default ManagePage;