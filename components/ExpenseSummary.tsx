import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TransactionContext } from "@/context/TransactionContext";

interface ExpenseGroup {
    description: string;
    count: number;
    total: number;
}

export default function ExpenseSummary() {
    const { transactions } = useContext(TransactionContext)!;

    // Filter only expenses (negative amounts)
    const expenses = transactions.filter(
        (transaction) => transaction.amount < 0
    );

    // Group expenses by description
    const groupedExpenses: ExpenseGroup[] = Object.values(
        expenses.reduce((acc, expense) => {
            if (!acc[expense.description]) {
                acc[expense.description] = {
                    description: expense.description,
                    count: 0,
                    total: 0,
                };
            }
            acc[expense.description].count += 1;
            acc[expense.description].total += expense.amount;
            return acc;
        }, {} as Record<string, ExpenseGroup>)
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Expense Summary</Text>
            <FlatList
                data={groupedExpenses}
                keyExtractor={(item) => item.description}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.description}>
                            {item.description} ({item.count} times)
                        </Text>
                        <Text style={styles.total}>
                            Total: ${Math.abs(item.total).toFixed(2)}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#f8f8f8",
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    description: {
        fontSize: 16,
    },
    total: {
        fontSize: 16,
        fontWeight: "bold",
        color: "red",
    },
});
