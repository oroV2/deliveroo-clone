import { ScrollView, Text} from 'react-native';
import React from 'react';
import {style} from 'nativewind';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    return (
        <ScrollView
        contentContainerStyle = {{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        horizontal showHorizontalScrollIndicator={false}>
            {/* CategoriesCard */}
          <CategoriesCard imgUrl="https://links.papareact.com/wru" title="Testing" />
          <CategoriesCard imgUrl="https://links.papareact.com/wru" title="Testing" />
          <CategoriesCard imgUrl="https://links.papareact.com/wru" title="Testing" />
          <CategoriesCard imgUrl="https://links.papareact.com/wru" title="Testing" />
          <CategoriesCard imgUrl="https://links.papareact.com/wru" title="Testing" />
          <CategoriesCard imgUrl="https://links.papareact.com/wru" title="Testing" />
        </ScrollView>
    );
};

export default Categories;