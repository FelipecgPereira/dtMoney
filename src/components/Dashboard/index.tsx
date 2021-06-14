import { Summary } from "../Summary";
import {TransactionsTable} from "../TransactionsTable";
import { Container } from "./stlyed";

export function Dashboard(){
    return(
       <Container>
           <Summary />
           <TransactionsTable />
       </Container> 
    )
}