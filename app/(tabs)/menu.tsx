import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChefHat } from 'lucide-react-native';

const MenuScreen = () => {
  const especialidades = [
    { 
      name: "La Antioqueña", 
      price: "$32.000", 
      emoji: "🥔",
      description: "Papas doraditas con chicharrón crocante, plátano maduro, mayonesa de chimichurri, queso rallado, guacamole y pico de gallo. ¡Explosión de sabor paisa!"
    },
    { 
      name: "La Callejera", 
      price: "$25.000", 
      emoji: "🍗",
      description: "Papas crocantes con salsa rosada americana, crispetas de pollo en salsa sweet honey, queso rallado y tocineta crocante. Perfecta para antojos nocturnos."
    },
    { 
      name: "La Cremosa Urbana", 
      price: "$28.000", 
      emoji: "🧈",
      description: "Papas crocantes con pollo desmechado en salsa cremosa y cilantro, tocineta, guacamole fresco y queso rallado. Comfort food urbano."
    },
    { 
      name: "La Argentina Callejera", 
      price: "$27.000", 
      emoji: "🥩",
      description: "Fusión porteña: papas con chorizo de chicharrón, cebolla caramelizada, mayonesa de chimichurri casera y queso mozzarella. ¡Directo desde Buenos Aires!"
    },
    { 
      name: "La Pecadora", 
      price: "$28.000", 
      emoji: "🔥",
      description: "Pecado crujiente: papas con pulled pork en salsa BBQ de tamarindo, queso crema, cebolla crispy y cebollín. Atrevida, jugosa y adictiva."
    },
    { 
      name: "Posta Cartagenera", 
      price: "$32.000", 
      emoji: "🌴",
      description: "Posta glaseada en BBQ de tamarindo con papas crocantes, salsa de ajo de la casa y queso rallado. Viaje urbano a los sabores costeños."
    }
  ];

  const otrasOpciones = [
    { 
      name: "La Diablo", 
      price: "$30.000", 
      emoji: "😈",
      description: "Papas crocantes, chorizo en melado de panela y ron, queso rallado, tocineta crocante y pico de gallo. ¡Calle con estilo!"
    },
    { 
      name: "Las Alitas Urbanas x6", 
      price: "$19.000", 
      emoji: "🍗",
      description: "Alitas crocantes apanadas bañadas en la salsa de tu elección, acompañadas con papas a la francesa y salsa americana."
    },
    { 
      name: "Arma tu Cono", 
      price: "$18.000", 
      emoji: "🍟",
      description: "Papas crocantes + elige tu topping, proteína y salsa. ¡Crea tu combinación perfecta!"
    }
  ];

  const bebidas = [
    { 
      name: "Jugos Naturales", 
      price: "Desde $8.000", 
      emoji: "🥤",
      description: "En agua o leche - Frescos del día"
    },
    { 
      name: "Gaseosas", 
      price: "Desde $3.000", 
      emoji: "🥤",
      description: "Coca-Cola, Sprite, Quatro - 250ml y 400ml disponibles"
    },
    { 
      name: "Aguas Saborizadas", 
      price: "$4.000", 
      emoji: "💧",
      description: "Limón y maracuyá disponibles"
    }
  ];

  const MenuItem = ({ item, sectionStyle }: { item: any, sectionStyle?: any }) => (
    <View style={[styles.menuItem, sectionStyle]}>
      <View style={styles.itemInfo}>
        <Text style={styles.emoji}>{item.emoji}</Text>
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={[styles.itemPrice, sectionStyle?.priceColor]}>{item.price}</Text>
        </View>
      </View>
    </View>
  );

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
            <View style={styles.titleContainer}>
              <ChefHat size={24} color="white" />
              <Text style={styles.title}>Nuestro Menú 🍽️</Text>
            </View>
          </View>
          <Text style={styles.subtitle}>Sabores auténticos de la calle</Text>
        </View>

        <View style={styles.content}>
          {/* Especialidades */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🔥 Especialidades de la Casa</Text>
            {especialidades.map((item, index) => (
              <MenuItem 
                key={index} 
                item={item} 
                sectionStyle={{ 
                  priceColor: { color: '#16a34a' } // Green-600
                }}
              />
            ))}
          </View>

          {/* Otras Opciones */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🍗 Otras Opciones</Text>
            {otrasOpciones.map((item, index) => (
              <MenuItem 
                key={index} 
                item={item}
                sectionStyle={{ 
                  priceColor: { color: '#16a34a' } // Green-600
                }}
              />
            ))}
          </View>

          {/* Bebidas */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🥤 Bebidas</Text>
            {bebidas.map((item, index) => (
              <MenuItem 
                key={index} 
                item={item}
                sectionStyle={{ 
                  backgroundColor: '#eff6ff', // Blue-50
                  priceColor: { color: '#2563eb' } // Blue-600
                }}
              />
            ))}
          </View>

          {/* Call to Action */}
          <View style={styles.callToAction}>
            <Text style={styles.ctaTitle}>¿Listo para ordenar? 📱</Text>
            <Text style={styles.ctaSubtitle}>¡Ven y disfruta de nuestros sabores únicos!</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef2e7', // Orange-50 to Red-50 gradient equivalent
  },
  header: {
    backgroundColor: '#f97316', // Orange-500 to Red-500 gradient
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerContent: {
    alignItems: 'center',
    marginBottom: 8,
  },
  logo: {
    height: 64,
    width: 96,
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    color: '#fed7aa', // Orange-200
    textAlign: 'center',
    fontSize: 16,
  },
  content: {
    padding: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937', // Gray-800
    textAlign: 'center',
    marginBottom: 16,
  },
  menuItem: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  emoji: {
    fontSize: 32,
    marginTop: 4,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937', // Gray-800
    marginBottom: 8,
  },
  itemDescription: {
    fontSize: 14,
    color: '#6b7280', // Gray-600
    lineHeight: 20,
    marginBottom: 12,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  callToAction: {
    backgroundColor: '#f97316', // Orange-500 to Red-500 gradient
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginTop: 8,
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  ctaSubtitle: {
    color: '#fed7aa', // Orange-200
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MenuScreen;