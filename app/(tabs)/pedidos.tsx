import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Clock, CheckCircle } from 'lucide-react-native';

const PedidosScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Mis Pedidos 📋</Text>
          <Text style={styles.subtitle}>Historial de órdenes</Text>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Current Order */}
          <View style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <Clock size={24} color="#f97316" />
              <Text style={styles.orderStatus}>En preparación</Text>
            </View>
            <Text style={styles.orderTitle}>Pedido #1234</Text>
            <Text style={styles.orderItems}>• Hamburguesa Royal{'\n'}• Papas Fritas{'\n'}• Coca-Cola</Text>
            <Text style={styles.orderTotal}>Total: $19.970</Text>
            <Text style={styles.orderTime}>Tiempo estimado: 15 minutos</Text>
          </View>

          {/* Previous Orders */}
          <View style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <CheckCircle size={24} color="#22c55e" />
              <Text style={[styles.orderStatus, styles.completedStatus]}>Completado</Text>
            </View>
            <Text style={styles.orderTitle}>Pedido #1233</Text>
            <Text style={styles.orderItems}>• Hamburguesa Clásica{'\n'}• Bebida Refrescante</Text>
            <Text style={styles.orderTotal}>Total: $11.980</Text>
            <Text style={styles.orderDate}>Hace 2 días</Text>
          </View>

          {/* Empty State for new users */}
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>🛒</Text>
            <Text style={styles.emptyTitle}>¡Haz tu primer pedido!</Text>
            <Text style={styles.emptySubtitle}>Ve al menú y elige tus platos favoritos</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef2e7', // Orange-50
  },
  header: {
    backgroundColor: '#f97316', // Orange-500
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: '#fed7aa', // Orange-200
    textAlign: 'center',
    fontSize: 16,
  },
  content: {
    padding: 24,
    gap: 16,
  },
  orderCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  orderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  orderStatus: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f97316',
  },
  completedStatus: {
    color: '#22c55e',
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  orderItems: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
    lineHeight: 20,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  orderTime: {
    fontSize: 14,
    color: '#f97316',
    fontWeight: '500',
  },
  orderDate: {
    fontSize: 14,
    color: '#6b7280',
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default PedidosScreen;