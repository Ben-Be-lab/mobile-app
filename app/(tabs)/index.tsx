import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  // Quick Stats Data
  const stats = [
    { id: '1', label: 'Projects', value: '5', icon: 'briefcase', color: '#007AFF' },
    { id: '2', label: 'Clients', value: '12', icon: 'users', color: '#34C759' },
    { id: '3', label: 'Skills', value: '18', icon: 'star', color: '#FF9500' },
  ];

  // Services Data
  const services = [
    { id: '1', title: 'Frontend Dev', icon: 'code', color: '#007AFF' },
    { id: '2', title: 'Hospitality', icon: 'smile', color: '#FF3B30' },
    { id: '3', title: 'Mentoring', icon: 'award', color: '#34C759' },
    { id: '4', title: 'Consulting', icon: 'help-circle', color: '#FF9500' },
  ];

  // Recent Activity Data
  const activities = [
    { id: '1', title: 'Completed React Project', time: '2 hours ago', icon: 'check-circle' },
    { id: '2', title: 'Mentored Junior Developer', time: '5 hours ago', icon: 'users' },
    { id: '3', title: 'Client Meeting', time: '1 day ago', icon: 'phone' },
    { id: '4', title: 'Skills Update', time: '2 days ago', icon: 'layers' },
  ];

  const renderStatCard = ({ item }) => (
    <View style={styles.statCard}>
      <View style={[styles.statIcon, { backgroundColor: item.color + '20' }]}> 
        <Feather name={item.icon} size={24} color={item.color} />
      </View>
      <Text style={styles.statValue}>{item.value}</Text>
      <Text style={styles.statLabel}>{item.label}</Text>
    </View>
  );

  const renderServiceCard = ({ item }) => (
    <TouchableOpacity style={styles.serviceCard}>
      <View style={[styles.serviceIcon, { backgroundColor: item.color + '20' }]}> 
        <Feather name={item.icon} size={28} color={item.color} />
      </View>
      <Text style={styles.serviceTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderActivityItem = ({ item }) => (
    <View style={styles.activityItem}>
      <View style={styles.activityIconContainer}>
        <Feather name={item.icon} size={18} color="#007AFF" />
      </View>
      <View style={styles.activityContent}>
        <Text style={styles.activityTitle}>{item.title}</Text>
        <Text style={styles.activityTime}>{item.time}</Text>
      </View>
      <Feather name="chevron-right" size={18} color="#ccc" />
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>Welcome back,</Text>
            <Text style={styles.name}>Ben!</Text>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <Feather name="bell" size={24} color="white" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>Full-stack Developer • Designer • Mentor</Text>
      </View>

      {/* Stats Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Stats</Text>
        <FlatList
          data={stats}
          renderItem={renderStatCard}
          keyExtractor={item => item.id}
          horizontal
          scrollEnabled={false}
          contentContainerStyle={styles.statsContainer}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Services Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>What I Offer</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={services}
          renderItem={renderServiceCard}
          keyExtractor={item => item.id}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.serviceGrid}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Quick Access Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Access</Text>
        <View style={styles.quickAccessContainer}>
          <TouchableOpacity style={styles.quickAccessCard}>
            <Feather name="folders" size={28} color="#007AFF" />
            <Text style={styles.quickAccessText}>My Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessCard}>
            <Feather name="calendar" size={28} color="#34C759" />
            <Text style={styles.quickAccessText}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessCard}>
            <Feather name="message-circle" size={28} color="#FF9500" />
            <Text style={styles.quickAccessText}>Messages</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Activity Section */}
      <View style={[styles.section, { marginBottom: 30 }]}> 
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={activities}
          renderItem={renderActivityItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  greeting: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 4,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  notificationIcon: {
    position: 'relative',
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    backgroundColor: '#FF3B30',
    borderRadius: 4,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  seeAll: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },

  // Stats Styles
  statsContainer: {
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    minWidth: 100,
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  }, 

  // Services Styles
  serviceGrid: {
    gap: 12,
    marginBottom: 8,
  },
  serviceCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  serviceIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
  }, 

  // Quick Access Styles
  quickAccessContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 8,
  },
  quickAccessCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  quickAccessText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#222',
    marginTop: 8,
    textAlign: 'center',
  },

  // Activity Styles
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  activityIconContainer: {
    width: 36,
    height: 36,
    backgroundColor: '#f0f7ff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#222',
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 12,
    color: '#999',
  },
});