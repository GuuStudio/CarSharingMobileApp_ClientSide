import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants'

export default function SignUp() {
    return (
        <ScrollView className='flex-1 bg-white'>
            <View className='flex-1 bg-white'>
                <View className='relative w-full h-[250px]'>
                    <Image
                        source={images.signUpCar}
                        className='z-0 w-full h-[250px]'
                    />
                    <Text className='text-2xl font-JakartaBold absolute bottom-5 left-5'>Create Your Account</Text>
                </View>
            </View>

        </ScrollView>
    )
}