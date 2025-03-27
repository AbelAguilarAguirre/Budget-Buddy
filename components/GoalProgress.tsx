import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { TransactionContext } from "@/context/TransactionContext";
import { ProgressBar } from "react-native-paper";

export default function GoalProgress() {
    const { transactions } = useContext(TransactionContext)!;
    const [goal, setGoal] = useState<number | null>(null);
    const [inputGoal, setInputGoal] = useState("");

    // Calculate total progress (sum of income and expenses)
    const totalProgress = transactions
        .reduce((total, transaction) => total + transaction.amount, 0)
        .toFixed(2);

    // Calculate progress percentage
    const progressPercentage =
        goal && goal > 0 ? Math.min(parseFloat(totalProgress) / goal, 1) : 0;

    const handleSetGoal = () => {
        const parsedGoal = parseFloat(inputGoal);
        if (!isNaN(parsedGoal) && parsedGoal > 0) {
            setGoal(parsedGoal);
            setInputGoal("");
        }
    };

    return (
        <View style={styles.container}>
            {goal && (
                <View style={styles.progressContainer}>
                    <Text style={styles.progressText}>
                        Progress: ${totalProgress} / ${goal}
                    </Text>
                    <ProgressBar
                        progress={progressPercentage}
                        color="#4caf50"
                        style={styles.progressBar}
                    />
                </View>
            )}
            <Text style={styles.title}>Set Your Financial Goal</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your goal amount"
                keyboardType="numeric"
                value={inputGoal}
                onChangeText={setInputGoal}
            />
            <Button title="Set Goal" onPress={handleSetGoal} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginVertical: 10,
        backgroundColor: "#f0f8ff",
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    progressContainer: {
        marginTop: 10,
    },
    progressText: {
        fontSize: 16,
        marginBottom: 10,
    },
    progressBar: {
        height: 10,
        borderRadius: 5,
    },
});
