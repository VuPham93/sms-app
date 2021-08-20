import React, {FC} from "react";
import {
    Button,
    Card, CardContent, FormControl, InputAdornment, InputLabel,
    makeStyles, OutlinedInput,
    Paper, Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow, Typography
} from "@material-ui/core";
import {creditData} from "../../fake-data/FakeData";

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
    id: 'id' | 'amount' | 'status' | 'time';
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
        id: 'amount',
        label: 'Amount',
        minWidth: 100,
        align: 'right',
        format: (value: number) => "$" + value.toLocaleString('en-US'),
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'time',
        label: 'Time',
        minWidth: 170,
        align: 'center',
    },
];

const CreditPage: FC = () => {
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
        <div>
            <div className={classes.flexBox}>
                <Card className={classes.boxLeft} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2" className={classes.margin}>
                            Credit left
                        </Typography>
                        <Typography variant="h3">
                            $320.000
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.boxRight} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2" className={classes.margin}>
                            Top up
                        </Typography>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <div className={classes.flexBox}>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    labelWidth={60}
                                    fullWidth
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                >
                                    Topup
                                </Button>
                            </div>
                        </FormControl>
                    </CardContent>
                </Card>
            </div>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {creditData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
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
                    count={creditData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>

    )
};

export default CreditPage;