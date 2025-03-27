import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TransactionContext } from "@/context/TransactionContext";

export default function TotalExpenses() {
    const { transactions } = useContext(TransactionContext)!;

    // Calculate total expenses (negative amounts)
    const totalExpenses = transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((total, transaction) => total + transaction.amount, 0)
        .toFixed(2);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Total Expenses:</Text>
            <Text style={styles.amount}>${Math.abs(parseFloat(totalExpenses))}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#ffe6e6",
        borderRadius: 5,
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ff4d4d",
    },
    amount: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ff4d4d",
    },
});