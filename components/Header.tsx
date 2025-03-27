import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface HeaderProps {
    balance: string;
}

export default function Header({ balance }: HeaderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Budget Buddy</Text>
            <Text style={styles.balance}>Balance: ${balance}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginBottom: 20 },
    header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
    balance: { fontSize: 18 },
});
