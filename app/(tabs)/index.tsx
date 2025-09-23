import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Flame, Star, MapPin } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image 
              source={require('@/assets/images/pura-calle-logo.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>¡Bienvenido! 🍔🔥</Text>
            <Text style={styles.subtitle}>La mejor comida callejera de la ciudad</Text>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Featured Section */}
          <View style={styles.featuredCard}>
            <View style={styles.cardHeader}>
              <Flame size={32} color="#ef4444" />
              <Text style={styles.cardTitle}>¡Especialidad del día!</Text>
            </View>
            <Text style={styles.cardText}>
              Prueba nuestras hamburguesas artesanales con ingredientes frescos y sabor único
            </Text>
            <View style={styles.specialOffer}>
              <Text style={styles.offerText}>🍟 Combo Especial - $12.990</Text>
            </View>
          </View>

          {/* Location Card */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <MapPin size={24} color="#ef4444" />
              <Text style={styles.cardSubtitle}>¿Dónde nos encontramos?</Text>
            </View>
            <Text style={styles.cardText}>
              📍 Parque Central - Lunes a Domingo
            </Text>
            <Text style={styles.cardText}>
              🕐 11:00 AM - 10:00 PM
            </Text>
          </View>

          {/* Rating Card */}
          <View style={styles.ratingCard}>
            <View style={styles.ratingHeader}>
              <Star size={24} color="#eab308" fill="#eab308" />
              <Text style={styles.ratingScore}>4.9/5</Text>
            </View>
            <Text style={styles.ratingText}>⭐⭐⭐⭐⭐ "La mejor comida callejera que he probado!"</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef2e7', // Orange-50 equivalent
  },
  header: {
    backgroundColor: '#f97316', // Orange-500
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerContent: {
    alignItems: 'center',
  },
  logo: {
    height: 80,
    width: 120,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    color: '#fed7aa', // Orange-200
    textAlign: 'center',
    fontSize: 16,
  },
  content: {
    padding: 24,
    gap: 24,
  },
  featuredCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#f97316',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  ratingCard: {
    backgroundColor: '#fef3c7', // Yellow-100
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937', // Gray-800
    flex: 1,
  },
  cardSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937', // Gray-800
    flex: 1,
  },
  cardText: {
    color: '#6b7280', // Gray-600
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 22,
  },
  specialOffer: {
    backgroundColor: '#fef2e7', // Orange-50
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  offerText: {
    fontWeight: '600',
    color: '#c2410c', // Orange-700
    fontSize: 16,
  },
  ratingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  ratingScore: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937', // Gray-800
  },
  ratingText: {
    color: '#374151', // Gray-700
    fontSize: 16,
    lineHeight: 22,
  },
});
