import { useState } from 'react'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch
    ('search', {
      query: 'React developer',
      num_pages: 1
    })

  const [selectedJob, setSelectedJob] = useState([])

  // Function to handle the card press
  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data} // Replace with the data from the API
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob} // Deals with the selected job highlight
                handleCardPress={handleCardPress} // Deals with handle press function
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs