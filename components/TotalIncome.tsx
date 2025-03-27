import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TransactionContext } from "@/context/TransactionContext";

export default function TotalIncome() {
    const { transactions } = useContext(TransactionContext)!;

    // Calculate total Income (positive amounts)
    const TotalIncome = transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((total, transaction) => total + transaction.amount, 0)
        .toFixed(2);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Total Income:</Text>
            <Text style={styles.amount}>
                ${Math.abs(parseFloat(TotalIncome))}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#e6ffe6",
        borderRadius: 5,
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#00b300",
    },
    amount: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#00b300",
    },
});
