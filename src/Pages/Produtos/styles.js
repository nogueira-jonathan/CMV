import styled from 'styled-components';




export const Tabela = styled.div` 
    
    position: absolute;
    margin:60px;
    column-rule-width: 1px;
    border: 1px solid #ddd;
    background: #5d5d5c;
    
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
th{
padding: 18px;
text-align: center;
background-color: #aa1f32;
color: whitesmoke;
border-radius: 5px;
}
td {
    
    text-align: center;
    padding:5px;
    width: 500px;  
    color: #5d5d5c;
    border-radius: 5px;
}
tr{
    transition: 0.2s;
}
tr:nth-child(even) {
    background-color: #999999;
    color: whitesmoke;
}
tr:hover {
    background-color: #ddd;
}
`;