import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styled";

interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable(){
    const {transactions} = useTransactions();


    return(
        <Container>
            <table>
                <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                    {transactions.map(t=>(
                             <tr key={t.id}>
                             <td>{t.title}</td>
                             <td className={t.type}>
                                 {new Intl.NumberFormat('pt-BR',{
                                 style: 'currency',
                                 currency: 'BRL'
                                 }).format(t.amount)}
                                </td>
                             <td>{t.category}</td>
                             <td>
                             {new Intl.DateTimeFormat('pt-BR')
                             .format(new Date(t.createdAt))}
                             </td>
                         </tr>
                      
                    ))}
                </tbody>
                

            </table>
        </Container>
    )
}