import { Text, TouchableOpacity, Image } from 'react-native';
import {style} from 'nativewind';
import React from 'react';

const CategoriesCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
        {/* categoriesCard */}
        <Image source={{
          uri: imgUrl
        }} 
        className="h-20 w-20 rounded"
        />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;