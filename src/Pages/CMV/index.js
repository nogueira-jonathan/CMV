import React, { useState, useEffect } from 'react';
import api from '../../Services/api';
import DrawerComponent from '../../Components/Drawer'
import {Container, Content, Css } from './styles';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';




const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    }));

const CMV = () => {
const [produtos, setProdutos] = useState([]);
const [produto, setProduto]= useState('');

const loadProdutos = async () => {
    try {
        const response = await api.get('/produtos');
        setProdutos(response.data)

    } catch (error) {
        console.log("erro ao obter produtos", error)
    }
};

useEffect(() => {
    loadProdutos();
}, []);
console.log(produtos)

const classes = useStyles();

    return(
        
<Container>
  <DrawerComponent/>
  <Content>

       
    <Css>
    <form className={classes.root} noValidate autoComplete="off">
    <InputLabel htmlFor="age-native-simple">Selecione o Produto:</InputLabel>
    <Select
        native
        value={produto}
        onChange={e => setProduto(produtos[e.target.value-1])}
        
    >
        {produtos.map((produto) => {
                return (     
                                        
                    <option value={produto.id}>{produto.nome}</option>
                    )
                })}
        
    </Select>
        
    <TextField style={{display:"flex", flexDirection:"column", width:"500px", paddingTop: "20px"}} label="Produto" color="secondary" value={produto.nome}/>
    <TextField style={{display:"flex", flexDirection:"column", width:"500px", paddingTop: "5px"}} label="Valor" color="secondary" value={produto.valorCompra === undefined ? "": (produto.valorCompra).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}/>
    <TextField style={{display:"flex", flexDirection:"column", width:"500px", paddingTop: "10px"}} label="Valor de Compra" color="secondary" value={produto.valorCompraFinal === undefined ? "": (produto.valorCompraFinal).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}/>
    <TextField style={{display:"flex", flexDirection:"column", width:"500px", paddingTop: "20px"}} label="Estoque" color="secondary" value={produto.estoqueInicial}/>
    <TextField style={{display:"flex", flexDirection:"column", width:"500px", paddingTop: "20px"}} label="Quantidade Comprada" color="secondary" value={produto.estoqueFinal}/>
    <TextField style={{display:"flex", flexDirection:"column", width:"500px", paddingTop: "20px"}} label="Quantidade Vendida" color="secondary" value={produto.vendas}/>
    <TextField style={{display:"flex", flexDirection:"column", width:"500px", paddingTop: "20px"}} label="CMV" color="secondary" value={produto.valorCompraFinal === undefined ? "":((produto.valorCompra + produto.valorCompraFinal)/(produto.estoqueInicial + produto.estoqueFinal)*produto.vendas).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}/>
    </form>
      </Css>
      

      </Content>
</Container>
    )
}

export default CMV;

