import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Transaction {
    id: string;
    description: string;
    amount: number;
}

interface TransactionContextProps {
    transactions: Transaction[];
    addTransaction: (transaction: Transaction) => void;
    resetTransactions: () => void; // Add this method
    loadTransactions: () => Promise<void>;
}

export const TransactionContext = createContext<TransactionContextProps | null>(
    null
);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        loadTransactions();
    }, []);

    const loadTransactions = async () => {
        const data = await AsyncStorage.getItem("transactions");
        if (data) setTransactions(JSON.parse(data));
    };

    const saveTransactions = async (newTransactions: Transaction[]) => {
        await AsyncStorage.setItem(
            "transactions",
            JSON.stringify(newTransactions)
        );
    };

    const addTransaction = (transaction: Transaction) => {
        const updatedTransactions = [transaction, ...transactions];
        setTransactions(updatedTransactions);
        saveTransactions(updatedTransactions);
    };

    const resetTransactions = async () => {
        setTransactions([]); // Clear the transactions state
        await AsyncStorage.removeItem("transactions"); // Clear AsyncStorage
    };

    return (
        <TransactionContext.Provider
            value={{
                transactions,
                addTransaction,
                resetTransactions,
                loadTransactions,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};
