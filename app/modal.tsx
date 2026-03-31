import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* A nice icon placeholder */}
      <ThemedView style={styles.iconCircle}>
        <ThemedText style={{ fontSize: 40 }}>🛠️</ThemedText>
      </ThemedView>

      <ThemedText type="title">Service Details</ThemedText>
      <ThemedText style={styles.description}>
        This is where you would show more info about a specific booking or service in your app.
      </ThemedText>

      <Link href="/" dismissTo style={styles.button}>
        <ThemedText style={styles.buttonText}>Got it, thanks!</ThemedText>
      </Link>
    </ThemedView>
  );
}