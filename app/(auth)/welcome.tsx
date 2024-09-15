import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import Swiper from 'react-native-swiper';
import { onboarding } from '@/constants';
import CustomButton from '@/components/CustomButton';

export default function Onboarding() {
    const swiperRef = useRef<Swiper>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const isLastSlide = activeIndex === onboarding.length - 1
    return (
        <SafeAreaView className='bg-white flex justify-between items-center h-full'>
            <TouchableOpacity
                onPress={() => router.replace('/sign-up')}
                className='flex w-full justify-end items-end p-5'
            >
                <Text className='text-black  font-JakartaBold'>Skip</Text>
            </TouchableOpacity>

            <Swiper
                ref={swiperRef}
                loop={false}
                dot={<View className='w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full' />}
                activeDot={<View className='w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full' />}
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {onboarding.map((item) => (
                    <View key={item.id} className='flex justify-center items-center p-5  ' >
                        <Image
                            source={item.image}
                            className='w-full h-[300px]'
                            resizeMode='contain'
                        />
                        <View className='mt-5'>
                            <Text className='text-3xl text-center font-JakartaBold'>{item.title}</Text>
                        </View>
                        <View className='mt-5'>
                            <Text className='text-gray-500 text-lg text-center'>{item.description}</Text>
                        </View>
                    </View>
                ))
                }
            </Swiper>
            <View className='w-full p-5'>
                <CustomButton
                    onPress={() => isLastSlide ? router.replace('/sign-up')
                        : swiperRef.current?.scrollBy(1)
                    }
                    title={isLastSlide ? 'Get Started' : 'Next'} className='w-full p-4' />
            </View>
        </SafeAreaView>
    )
}