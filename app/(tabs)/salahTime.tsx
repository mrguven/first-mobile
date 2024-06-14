import { Image, StyleSheet, Platform,Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios, { AxiosResponse } from 'axios';

export default function SalahTime() {

    interface Data {
        userId: number,
id: number,
title: string,
body: string
      }
      interface Data1 {
        userId: number,
id: number,
title: string,
body: string
      }
    
      const [data, setData] = useState<Data | null>(null);
      const [data1, setData1] = useState<AxiosResponse | null | void>(null);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const json = await response.json();
            setData(json);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }

          await axios('https://jsonplaceholder.typicode.com/posts/2')
          .then(data=>setData1(data))
          .catch(err=>console.log(err))

        };
    
        fetchData();
      }, []);
    
      if (loading) {
        return <ActivityIndicator />;
      }
    
     
function onPressLearnMore(){

}
    

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">Namaz Vakitleri</ThemedText> 
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Time</ThemedText>
        <ThemedText>
          Namaz Vakitleri
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
          <ThemedText type="defaultSemiBold">Hello world</ThemedText>.
        
        </ThemedText>
     
      </ThemedView>
      <View>
      {data ? <Text>{data.userId}</Text> : <Text>No data found</Text>}
      {data ? <Text>{data.title}</Text> : <Text>No data found</Text>}
      {data ? <Text>{data.body}</Text> : <Text>No data found</Text>}
    </View>

    
      <Button
  onPress={onPressLearnMore}
  title="Sehir"
  color="#841584"
  accessibilityLabel="Bir sehir secin"
/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
