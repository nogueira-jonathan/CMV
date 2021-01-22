import styled from 'styled-components';

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

export const Css = styled.div`
    
    margin-top: 80px;
    

    select{
        margin-left: 5px;
        width: 200px;
        height: 30px;
    }

    #input{
    width: 2000px;
    height: 30px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    text-align: right;

    }

`;
