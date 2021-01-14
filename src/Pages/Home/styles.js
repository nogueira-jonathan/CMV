import styled from 'styled-components';

export const Container = styled.div`

    background-image:url("https://ajuda.alterdata.com.br/dpbase/files/91767368/91774290/1/1579545702114/image2020-1-17_11-57-46.png");
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 2;

   
    
    
`;

export const AppBar = styled.div`
    background-color: #aa1f32;
    height: 50px;

    #btnapp{
        color: whitesmoke;
        margin-bottom: 10px;
        text-decoration: none;
        padding: 5px;
        border-radius: 2px;
        font-size: 20px;

        &:hover{
            background-color: grey;
            color: #fff;
        }

    }

    
`;

// export const HomePage = styled.div`
//         background-color: #0b2a42;
//         margin: 150px auto;
//         max-width: 300px;
//         height: 400px;
//         border-radius: 8px;
//         display: block;
//         justify-content: center;
       

//     img{
//         display: block;
//         width: 300px;
//         border-radius: 8px;
//         padding-bottom: 50px;
//     }
        
//     div{
            
//         input{
//             margin-top: 0px;
//             margin-bottom: 10px;
//             width: 200px;
//             height: 20px;
//             display: block;
//             margin-left: auto;
//             padding: 8px;
//             margin-right: auto;
//             border: 0;
//             background-color: #ffffff;
//             color: black;
//             border-bottom: 1px solid #fff;
//             border-radius: 10px;
           

//             &::placeholder{
//                 color: #555555;
//             }

            
//         }
//         button{
//             display: block;
//             width: 150px;
//             height: 35px;
//             background-color: #006faa;           
//             font-weight: bold;
//             font-size: 16px;
//             border: 0;
//             color: #fff;
//             border-radius: 6px;
//             transition: 0.2s;
//             margin-top: 50px;
//             cursor: pointer;
//             opacity: 0.9;
//             text-align: center;
//             margin-left: 75px;
//             margin-bottom: -20px;
            
            
            

//             & + button{
//                 margin-top: 25px;
//             }

//             &:hover{
//                 background-color: #5ca3e2;
//                 color: #fafafa;
//             }
//         }

//     }

// `;