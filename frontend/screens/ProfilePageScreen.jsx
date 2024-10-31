// frontend/screens/ProfilePageScreen.jsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfilePageScreen = () => {
  const [isHelpModalVisible, setHelpModalVisible] = useState(false);
  const [isQRModalVisible, setQRModalVisible] = useState(false); // State for QR modal
  const navigation = useNavigation();

  const toggleHelpModal = () => {
    setHelpModalVisible(!isHelpModalVisible);
  };

  const toggleQRModal = () => {
    setQRModalVisible(!isQRModalVisible); // Toggle QR modal visibility
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="#2E7D32" />
      </TouchableOpacity>

      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://example.com/profile-pic.jpg" }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Sam Pieris</Text>
          <Text style={styles.phoneNumber}>+94 77 888 1234</Text>
        </View>
        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="pencil-outline" size={20} color="green" />
        </TouchableOpacity>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="globe-outline" size={22} color="black" />
          <Text style={styles.optionText}>Language Settings</Text>
          <Ionicons name="chevron-down" size={22} color="gray" />
        </TouchableOpacity>

        {/* View QR Code */}
        <TouchableOpacity style={styles.option} onPress={toggleQRModal}>
          <Ionicons name="qr-code-outline" size={22} color="black" />
          <Text style={styles.optionText}>View my QR Code</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={toggleHelpModal}>
          <Ionicons name="help-circle-outline" size={22} color="black" />
          <Text style={styles.optionText}>Plant Care Help</Text>
        </TouchableOpacity>
      </View>

      {/* Help Modal */}
      <Modal
        transparent={true}
        visible={isHelpModalVisible}
        animationType="fade"
        onRequestClose={toggleHelpModal}
      >
        <TouchableOpacity style={styles.modalBackground} onPress={toggleHelpModal}>
          <View style={styles.modalContainer}>
            <Ionicons
              name="call-outline"
              size={40}
              color="#4CAF50"
              style={styles.modalIcon}
            />
            <Text style={styles.modalTitle}>Need Help?</Text>
            <Text style={styles.modalMessage}>
              Need PlantCare help? Tap Call for instant support from our Help
              Center.
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={toggleHelpModal}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.callButton}>
                <Text style={styles.callText}>Call</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* QR Code Modal */}
      <Modal
        transparent={true}
        visible={isQRModalVisible}
        animationType="fade"
        onRequestClose={toggleQRModal}
      >
        <TouchableOpacity style={styles.modalBackground} onPress={toggleQRModal}>
          <View style={styles.qrModalContainer}>
            <Text style={styles.modalTitle}>My QR Code</Text>
            <Image
              source={{ uri: "https://example.com/qr-code.png" }} // Replace with actual QR code URL
              style={styles.qrCodeImage}
            />
            <View style={styles.qrButtons}>
              <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.buttonText}>Download</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shareButton}>
                <Text style={styles.buttonText}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <MaterialIcons name="logout" size={22} color="#D32F2F" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

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
  // Add your styles here, including for qrModalContainer, qrCodeImage, qrButtons, downloadButton, and shareButton.
  qrModalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  qrCodeImage: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  qrButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  downloadButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
  },
  shareButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F9F9F9",
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#E8F5E9",
    borderRadius: 10,
    marginBottom: 24,
    paddingHorizontal: 10,
    marginTop: 40, // Space for back arrow
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  phoneNumber: {
    fontSize: 14,
    color: "#757575",
  },
  editIcon: {
    padding: 6,
  },
  optionsContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 8,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  optionText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: "#424242",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 24,
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 2,
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#D32F2F",
    fontWeight: "600",
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
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalIcon: {
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 8,
  },
  modalMessage: {
    textAlign: "center",
    color: "#424242",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
  },
  callButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  },
  cancelText: {
    color: "#424242",
    fontWeight: "600",
  },
  callText: {
    color: "white",
    fontWeight: "600",
  },
});

export default ProfilePageScreen;
