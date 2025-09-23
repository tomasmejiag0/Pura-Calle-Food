import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Percent, Calendar, Clock } from 'lucide-react-native';

const PromosScreen = () => {
  const promos = [
    {
      id: 1,
      title: "Combo Martes",
      discount: "30% OFF",
      description: "Hamburguesa + Papas + Bebida",
      validUntil: "Todos los martes",
      emoji: "🌮"
    },
    {
      id: 2,
      title: "Happy Hour",
      discount: "2x1",
      description: "En todas las bebidas",
      validUntil: "Lun-Vie 4-6 PM",
      emoji: "🥤"
    },
    {
      id: 3,
      title: "Fin de Semana",
      discount: "15% OFF",
      description: "En pedidos sobre $15.000",
      validUntil: "Sáb-Dom",
      emoji: "🎉"
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Promociones 🎉</Text>
          <Text style={styles.subtitle}>¡Ahorra con nuestras ofertas especiales!</Text>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {promos.map((promo) => (
            <View key={promo.id} style={styles.promoCard}>
              <View style={styles.promoHeader}>
                <Text style={styles.promoEmoji}>{promo.emoji}</Text>
                <View style={styles.discountBadge}>
                  <Percent size={16} color="white" />
                  <Text style={styles.discountText}>{promo.discount}</Text>
                </View>
              </View>
              
              <Text style={styles.promoTitle}>{promo.title}</Text>
              <Text style={styles.promoDescription}>{promo.description}</Text>
              
              <View style={styles.validityContainer}>
                <Calendar size={16} color="#6b7280" />
                <Text style={styles.validityText}>{promo.validUntil}</Text>
              </View>
            </View>
          ))}

          {/* Special Notice */}
          <View style={styles.noticeCard}>
            <View style={styles.noticeHeader}>
              <Clock size={24} color="#f97316" />
              <Text style={styles.noticeTitle}>¡No te pierdas!</Text>
            </View>
            <Text style={styles.noticeText}>
              Todas las promociones están sujetas a disponibilidad. 
              Pregunta por nuestras ofertas especiales del día.
            </Text>
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
  promoCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#f97316',
  },
  promoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  promoEmoji: {
    fontSize: 32,
  },
  discountBadge: {
    backgroundColor: '#dc2626', // Red-600
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
  },
  discountText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  promoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937', // Gray-800
    marginBottom: 8,
  },
  promoDescription: {
    fontSize: 16,
    color: '#6b7280', // Gray-600
    marginBottom: 12,
    lineHeight: 22,
  },
  validityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  validityText: {
    fontSize: 14,
    color: '#6b7280', // Gray-600
    fontWeight: '500',
  },
  noticeCard: {
    backgroundColor: '#fef3c7', // Yellow-100
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  noticeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  noticeText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
});

export default PromosScreen;