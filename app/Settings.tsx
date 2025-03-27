import React, { useContext } from "react";
import { View, StyleSheet, Button } from "react-native";
import { TransactionContext } from "@/context/TransactionContext";
import TransactionList from "@/components/TransactionList";

export default function TransactionScreen() {
    const { resetTransactions } = useContext(TransactionContext)!;

    return (
        <View style={styles.container}>
            <Button
                title="Reset Transactions"
                onPress={resetTransactions}
                color="red"
            />
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
