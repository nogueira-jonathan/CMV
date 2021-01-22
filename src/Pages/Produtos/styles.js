import styled from 'styled-components';



export const Tabela = styled.div` 
    
    position: relative;
    margin:60px;
    column-rule-width: 1px;
    border: 1px solid #ddd;
    background: whitesmoke;
    margin-top: 100px;
    
    
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
    background-color: whitesmoke;
    color: whitesmoke;
}
tr:hover {
    background-color: #ddd;
}
`;

export const ModalCMV = styled.div`
    display: flex;
    background-color: #ffffff;
    margin: 50px auto;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    max-width: 80%;
    height: 200px;
    justify-content: left;
    form {
        background-color: #ffffff;
        padding: 30px;
        border-radius: 5px;
        align-items:left;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        opacity: 0.9;
    }
    form input {
        width: 50%;
        margin: 10px;
        border: 0;
        margin-bottom: 10px;
        border-bottom: 1px solid #7c7ce0;
        padding: 2px;
        color: #303030;
    
        &:hover,
        &:focus{
            outline: none;
            background-color: #7C7CE0;
            opacity: 0.7;
            color: #FFFFFF;   
            border-radius: 8px;
        }
        &::placeholder{
            color: #cdcdcd;
        }    
    }
    form label{
        text-align: left;
        font-weight: bold;
        color: #7c7ce0;
        width: 180px;
    }
    form button{
        width: 100%;
        height: 50px;
        background-color: #3ec300;
        color: #FFFFFF;
        border: 0;
        border-radius: 2px;
        transition: 0.2s;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        text-align: center;
        margin-top: 20px;
        padding: 10px;
        font-size: 16px;
        font-weight: bold;
        &:hover{
            background-color: #46d900;
            color: #fafafa;
        }
}
  
`;


export const Container = styled.div`
    display: flex;
    flex-direction:row;
`;

export const Content = styled.div`
    display:flex;
    flex: 1;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    padding-bottom:25px;
    `;

export const Botao = styled.div`

    float: right;
    margin: 20px;
    padding: 5px;
    margin-right: 5px;
    justify-content: space-around;
    
    #btnpdf,
    #btnprod{
        color:white;
        background-color: #AA1F32;
    }
`;

export const Form = styled.div`
    
    
    input{
        width: 335px;
        border:0;
        color: black;
        padding: 10px;
        height: 40px;
        background-color: white;
        border-radius: 4px;
        font-size: 18px;
        margin-top: 20px;
        margin-right: 15px;
        margin-left: 15px;
         & + input{
            
        }
        &::placeholder{
            color: black;
        }

        
            
        }
    }
    button{
        float: right;
        width: 120px;
        height: 40px;
        margin: 15px;
        background-color: #aa1f32;
        color: #fff;
        border: 0;
        border-radius: 8px;
        transition: 0.2s;
        &:hover{
            background-color: red;
            color: #fafafa;
        }
    }
    
`;
