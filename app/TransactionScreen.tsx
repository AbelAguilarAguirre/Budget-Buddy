import React, { useContext } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { TransactionContext } from "@/context/TransactionContext";
import TransactionList from "@/components/TransactionList";

export default function TransactionScreen() {
    const { transactions } = useContext(TransactionContext)!;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>All Transactions</Text>
            <TransactionList transactions={transactions} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#f8f8f8" },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
    transactionItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    description: { fontSize: 16 },
    amount: { fontSize: 16, fontWeight: "bold" },
});
