import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import { useCallback, useState } from "react";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";

import { COLORS, icons, SIZES } from "../../constants";

import useFetch from "../../hook/useFetch";

import React from 'react'

const JobDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
      options={{
        headerStyle: {backgroundColor: COLORS.lightWhite},
        // headerShadowVisible: false, // Removes the header shadow
        // headerBackVisible: false, // Removes the back button

      }}>

      </Stack.Screen>
    </SafeAreaView> 
  ) 
};

export default JobDetails
