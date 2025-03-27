import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

interface Transaction {
    id: string;
    description: string;
    amount: number;
}

interface TransactionListProps {
    transactions: Transaction[];
}

export default function TransactionList({
    transactions,
}: TransactionListProps) {
    return (
        <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.transactionItem}>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text
                        style={[
                            styles.amount,
                            { color: item.amount < 0 ? "red" : "green" },
                        ]}
                    >
                        ${item.amount.toFixed(2)}
                    </Text>
                </View>
            )}
        />
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
