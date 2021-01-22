import React, { useState, useEffect } from 'react';
import api from '../../Services/api';
import {Tabela, Botao, Form, Container, Content } from './styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DrawerComponent from '../../Components/Drawer'
import { FiTrash2 } from 'react-icons/fi'
import jsPDF from 'jspdf'
import 'jspdf-autotable'


const Produtos = () => {
    const [modalStyle] = React.useState(getModalStyle);
    const [produtos, setProdutos] = useState([]);
    const [newNome, setNewNome] = useState('');
    const [newValorCompra, setNewValorCompra] = useState('');
    const [newValorCompraFinal, setNewValorCompraFinal] = useState();
    const [newEstoqueInicial, setNewEstoqueInicial] = useState('');
    const [newEstoqueFinal, setNewEstoqueFinal] = useState('');
    const [newVendas, setNewVendas] = useState('');
    const [open, setOpen] = React.useState(false);
    
    
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
    
    function rand() {
      return Math.round(Math.random() * 20) - 10;
    }
    
    function getModalStyle() {
      const top = 50 + rand();
      const left = 50 + rand();
    
      return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
      };
    }
    
    const useStyles = makeStyles((theme) => ({
      paper: {
        position: 'absolute',
        width: 800,
        height: 300,
        
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }));
    
    
      const classes = useStyles();
      
    
    
      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  async function inserirProduto(e) {
    e.preventDefault();

    const params = {
        nome: newNome,
        valorCompra: newValorCompra,
        valorCompraFinal: newValorCompraFinal,
        estoqueInicial: newEstoqueInicial,
        estoqueFinal: newEstoqueFinal,
        vendas: newVendas
    };

    try {
        await api.post(`/produtos`, params);
        loadProdutos();
        setNewNome('');
        setNewValorCompra('');
        setNewValorCompraFinal('');
        setNewEstoqueInicial('');
        setNewEstoqueFinal('');
        setNewVendas('');
        handleClose();
    } catch (error) {
        console.log('error ao incluir Produto', error);
    }
}

const removerProduto = async (produto) => {
  await api.delete(`produtos/produto/${produto.id}`)
  loadProdutos();
}

function criadorPDF() {
  const doc = new jsPDF();
  
  doc.autoTable({html: '#simple_table', theme: 'grid', Color: '#AA1F32'});
  doc.save('table.pdf');
}

const body = (
  <div style={modalStyle, {backgroundColor:"grey", margin: "290px", }} className={classes.paper}  >
    <form onSubmit={inserirProduto} >
                    
        <input type="text" value={newNome} onChange={e => setNewNome(e.target.value)} placeholder="Digite o Produto" required/>
        <input type="text" value={newValorCompra} onChange={e => setNewValorCompra(e.target.value)} placeholder="Digite o valor do produto em estoque" required/>
        <input type="text" value={newValorCompraFinal} onChange={e => setNewValorCompraFinal(e.target.value)} placeholder="Digite o valor do produto comprado" required/>
        <input type="text" value={newEstoqueInicial} onChange={e => setNewEstoqueInicial(e.target.value)} placeholder="Digite a qtd inicial no estoque" required/>
        <input type="text" value={newEstoqueFinal} onChange={e => setNewEstoqueFinal(e.target.value)} placeholder="Digite a qtd atual no estoque" required/>
        <input type="text" value={newVendas} onChange={e => setNewVendas(e.target.value)} placeholder="Digite a quantidade vendida" required/>
        <button type="submit">Cadastrar</button>
    </form>
  </div>
);

return (
  <Container>
  <DrawerComponent/>
  <Content>
    <Tabela>
      
      <Table >     
            <table id="simple_table">
                  <tr >
                      <th style={{textAlign:"left"}}>ID</th>
                      <th>Produto</th>
                      <th>Valor</th>
                      <th>Valor de Compra</th>
                      <th>Estoque</th>
                      <th>Qtd. Comprada</th>
                      <th>Qtd. Vendida</th>
                      <th>Remover</th>
                      
                  </tr>
                  {produtos.map((produto) => {
                    return (                       
                      <tr key={produto.id}  >                       
                          <td style={{width:"10px"}}>{produto.id}</td> 
                          <td >{produto.nome}</td>
                          <td>{(produto.valorCompra).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                          <td>{(produto.valorCompraFinal).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                          <td>{produto.estoqueInicial}</td>
                          <td>{produto.estoqueFinal}</td>
                          <td>{produto.vendas}</td>
                          <td><button><FiTrash2 size={22} onClick={() => removerProduto(produto)} style={{ opacity: 0.7 }} /></button></td>
                          
                                              
                      </tr>                        
                      )
                      })}  
            </table>         
      </Table>
          
      <Botao>

        <Button id="btnprod" onClick={handleOpen} style={{marginRight: "15px"}} variant="outlined" color="primary">
          Novo Produto
        </Button>

        <Button id="btnpdf" variant="contained" color="primary" onClick={()=>criadorPDF()}>
          Gerar PDF
        </Button>

      </Botao>
      
      <Modal
          
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description">
          
              <Form>
                
                  {body}

              </Form>
  
      </Modal>

    </Tabela>
    </Content>
</Container>
    
  );
}


export default Produtos;

