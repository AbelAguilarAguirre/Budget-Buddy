import React, { useState, useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "@/components/Header";
import TransactionForm from "@/components/TransactionForm";
import { TransactionContext } from "@/context/TransactionContext";
import TotalExpenses from "@/components/TotalExpenses";
import TotalIncome from "@/components/TotalIncome";
import GoalProgress from "@/components/GoalProgress";
import ExpenseSummary from "@/components/ExpenseSummary";

export default function App() {
    const { transactions, addTransaction, resetTransactions } =
        useContext(TransactionContext)!;
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTransaction = (type: "income" | "expense") => {
        if (!amount || !description) return;
        const newTransaction = {
            id: Date.now().toString(),
            description,
            amount: parseFloat(amount) * (type === "expense" ? -1 : 1),
        };
        addTransaction(newTransaction);
        setAmount("");
        setDescription("");
    };

    const getBalance = () => {
        return transactions
            .reduce((total, item) => total + item.amount, 0)
            .toFixed(2);
    };

    const components = [
        <Header key="header" balance={getBalance()} />,
        <TransactionForm
            key="form"
            amount={amount}
            description={description}
            setAmount={setAmount}
            setDescription={setDescription}
            addTransaction={handleAddTransaction}
        />,
        <TotalIncome key="income" />,
        <TotalExpenses key="expenses" />,
        <ExpenseSummary key="summary" />,
        <GoalProgress key="goal" />,
    ];
    return (
        <FlatList
            data={components}
            renderItem={({ item }) => <View>{item}</View>}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: "#f8f8f8" },
});
