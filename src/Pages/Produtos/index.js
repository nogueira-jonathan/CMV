import React, { useState, useEffect } from 'react';
import api from '../../Services/api';
import {Tabela} from '../Produtos/styles';


import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.red,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
 

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Produtos = () => {
    const classes = useStyles();
    const [produtos, setProdutos] = useState([]);

    const loadProdutos = async () => {
        try {
            const response = await api.get('/produto');
            setProdutos(response.data)

        } catch (error) {
            console.log("erro ao obter produtos", error)
        }
    };

    useEffect(() => {
        loadProdutos();
    }, []);

    return (

        <Tabela>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Produto</StyledTableCell>
            <StyledTableCell align="right">Custo&nbsp;(R$)</StyledTableCell>
            <StyledTableCell align="right">Venda&nbsp;(R$)</StyledTableCell>
            <StyledTableCell align="right">Estoque&nbsp;(qtd)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produtos.map((produtos) => (
            <StyledTableRow key={produtos.id}>
              <StyledTableCell component="th" scope="row">
                {produtos.id}
              </StyledTableCell>
              <StyledTableCell align="right">{produtos.nome}</StyledTableCell>
              <StyledTableCell align="right">{produtos.valorCompra}</StyledTableCell>
              <StyledTableCell align="right">{produtos.valorVenda}</StyledTableCell>
              <StyledTableCell align="right">{produtos.estoque}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Tabela>
    );
 }


export default Produtos;

