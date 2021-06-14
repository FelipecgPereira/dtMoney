import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";




export function App() {

  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);


  function handleOpenNewTransactionModal(){
    setIsNewTransactionsModalOpen(true);
    

  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionsModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionsModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle/>
    </TransactionProvider>
  );
}


