import {View, Text, FlatList, Image, useWindowDimensions, ViewabilityConfig, ViewToken} from 'react-native';
import React, { useRef, useState } from 'react';
import colors from '../theme/colors';
import DoublePress from './DoublePress';

interface ICarousel {
  images: string[];
  onDoublePress?:()=>void;
  
}

const ImageCarousel = ({images,onDoublePress}: ICarousel) => {
  // console.log(images)
  const {width} = useWindowDimensions();
  const [activeImageIndex,setActiveImageIndex] =useState(0);
const viewabilityConfig: ViewabilityConfig={
    itemVisiblePercentThreshold:51,
}
const onViewableItemsChanged= useRef(({viewableItems}:{viewableItems:Array<ViewToken>})=>{
    if(viewableItems.length > 0){
        setActiveImageIndex(viewableItems[0].index ||0);
    }
})

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePress onDoublePress={onDoublePress}>
          <Image source={{uri: item}} style={{width, aspectRatio: 1/1}} />
          </DoublePress>
        
        )}
        horizontal={true}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        {images?.map((_, index) => (
          <View
            key={index}
            style={{
              aspectRatio: 1,
              width: '3%',
              borderRadius: 10,
              backgroundColor: activeImageIndex===index?colors.primary :'white',
              margin: '2%',
              marginHorizontal: '1.5%',
            }}></View>
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
