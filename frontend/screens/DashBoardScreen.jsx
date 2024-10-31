import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

const newsData = [
  {
    id: "1",
    date: "📅 July 2024",
    text: "The lemon market is currently experiencing...",
    imageUrl: "news-image-url-1",
  },
];

const marketData = [
  {
    id: "1",
    date: "📅 July 2024",
    text: "Carrot 1kg Price changes Rs. 250",
    imageUrl: "market-image-url-1",
  },
];

const Dashboard = () => {
  const navigation = useNavigation(); // Get the navigation prop

  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const [activeMarketIndex, setActiveMarketIndex] = useState(0);

  const renderNewsCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
      <View style={styles.cardOverlay}>
        <Text style={styles.cardDate}>{item.date}</Text>
        <Text style={styles.cardText}>{item.text}</Text>
      </View>
    </View>
  );

  const renderMarketCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
      <View style={styles.cardOverlay}>
        <Text style={styles.cardDate}>{item.date}</Text>
        <Text style={styles.cardText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
            {" "}
            {/* Navigate to ProfilePage */}
            <Image
              source={{ uri: "profile-image-url" }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.greeting}>Hi, Sam 👋</Text>
            <Text style={styles.lastSeen}>Last seen 11:23PM</Text>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <Text>🔔</Text>
          </TouchableOpacity>
        </View>
        {/* News Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>News</Text>
          <View style={styles.newsContainer}>
            <FlatList
              data={newsData}
              renderItem={renderNewsCard}
              keyExtractor={(item) => item.id}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              pagingEnabled
              snapToAlignment="center"
              snapToInterval={styles.card.width + 12}
              decelerationRate="fast"
              onMomentumScrollEnd={(event) => {
                const index = Math.floor(
                  event.nativeEvent.contentOffset.x /
                    event.nativeEvent.layoutMeasurement.width
                );
                setActiveNewsIndex(index);
              }}
            />
            {/* Dots Indicator */}
            <View style={styles.dotsContainer}>
              {newsData.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    { opacity: activeNewsIndex === index ? 1 : 0.5 },
                  ]}
                />
              ))}
            </View>
          </View>
        </View>
        {/* Market Price Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Market Price</Text>
          <View style={styles.marketContainer}>
            <FlatList
              data={marketData}
              renderItem={renderMarketCard}
              keyExtractor={(item) => item.id}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              pagingEnabled
              snapToAlignment="center"
              snapToInterval={styles.card.width + 12}
              decelerationRate="fast"
              onMomentumScrollEnd={(event) => {
                const index = Math.floor(
                  event.nativeEvent.contentOffset.x /
                    event.nativeEvent.layoutMeasurement.width
                );
                setActiveMarketIndex(index);
              }}
            />
            {/* Dots Indicator */}
            <View style={styles.dotsContainer}>
              {marketData.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    { opacity: activeMarketIndex === index ? 1 : 0.5 },
                  ]}
                />
              ))}
            </View>
          </View>
        </View>
        {/* Buttons Section */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>My Assets</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Weather</Text>
          </TouchableOpacity>
        </View>
        {/* Add extra content for testing scrolling */}
        <View style={{ height: 1000 }} />{" "}
        {/* Temporary content to enable scrolling */}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home" size={24} color="#4CAF50" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="add-circle-outline" size={24} color="#4CAF50" />
          <Text style={styles.navText}>New Crop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="leaf-outline" size={24} color="#4CAF50" />
          <Text style={styles.navText}>My Cultivation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  container: {
    flex: 1,
    height: "100%",
  },
  scrollContent: {
    paddingBottom: 100, // Add padding at the bottom for space
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#DFF2E4",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
  },
  lastSeen: {
    fontSize: 12,
    color: "gray",
  },
  notificationIcon: {
    marginLeft: "auto",
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  newsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  marketContainer: {
    flexDirection: "row",
    gap: 10,
  },
  card: {
    borderRadius: 8,
    overflow: "hidden",
    marginRight: 12,
    width: "100%", // Adjusted width for horizontal layout
  },
  cardImage: {
    width: "100%", // Use full width of the card
    height: 150,
  },
  cardOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 8,
  },
  cardDate: {
    color: "#fff",
    fontSize: 12,
  },
  cardText: {
    color: "#fff",
    fontSize: 14,
  },
  dotsContainer: {
    flexDirection: "column", // Set to row to align dots horizontally
    gap: 5,
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#000",
    marginHorizontal: 4,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#00C853",
    padding: 16,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
  navButton: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#4CAF50",
    marginTop: 4,
  },
});

export default Dashboard;
