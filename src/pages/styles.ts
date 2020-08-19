import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
  
    display: flex;
    justify-content: center;

    
`

export const Form = styled(Unform)`
    input {
        margin-top: 3rem;
        margin-right: 2rem;

        border: solid 0.05rem #c4c4c4;
        border-radius: 0.4rem;
        padding: 0.4rem;
        height: 1rem;

        @media (min-width: 1100px){
            width: 25rem;
            height: 2rem;
        }
    }

    button{
        height: 1.8rem;
        background: #2D9CDB;
        border: 0;
        border-radius: 0.4rem;
        color: #fff;

        @media (min-width: 1100px){
           width: 5.2rem;
           height: 2.8rem;
       }

    }
`;

export const List = styled.div`
    margin-top: 2rem;

    .item-todo{
        display: flex;
        justify-content: space-between;
        align-items: center;

        border: solid 0.05rem #6FCF97;
        border-radius: 0.4rem;
        padding: 0.4rem;
        height: 2rem;

        @media (min-width: 1100px){
           width: 32.5rem;
           height: 2.8rem;
       }

        button{
            margin-right: 0.5rem;

            height: 1.8rem;
          
            border: 0;
            border-radius: 0.4rem;
            color: #fff;

            @media (min-width: 1100px){
                width: 4.2rem;
                height: 1.8rem;
         }
        }

         #btn-remove{
            background: #EB5757;
        }

        #btn-edit{
            background: #6FCF97;
        }

        span{
            margin-right: 2rem;
        }
    }
`;





