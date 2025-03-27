import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

interface TransactionFormProps {
    amount: string;
    description: string;
    setAmount: (value: string) => void;
    setDescription: (value: string) => void;
    addTransaction: (type: "income" | "expense") => void;
}

export default function TransactionForm({
    amount,
    description,
    setAmount,
    setDescription,
    addTransaction,
}: TransactionFormProps) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Amount"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Add Income"
                    onPress={() => addTransaction("income")}
                />
                <Button
                    title="Add Expense"
                    color="red"
                    onPress={() => addTransaction("expense")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
});
