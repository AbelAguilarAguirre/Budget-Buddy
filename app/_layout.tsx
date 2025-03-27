import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { TransactionProvider } from "@/context/TransactionContext";

export default function RootLayout() {
    return (
        <TransactionProvider>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "blue",
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color }) => (
                            <FontAwesome size={28} name="home" color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="TransactionScreen"
                    options={{
                        title: "Transactions",
                        tabBarIcon: ({ color }) => (
                            <FontAwesome size={28} name="list" color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="Settings"
                    options={{
                        title: "Settings",
                        tabBarIcon: ({ color }) => (
                            <FontAwesome size={28} name="cog" color={color} />
                        ),
                    }}
                />
            </Tabs>
        </TransactionProvider>
    );
}
