import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';

import { SearchBar } from 'react-native-elements';

const SearchingBar = () => {

    const [search, setSearch] = React.useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <SearchBar
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
            lightTheme
            containerStyle={{
                width: "100%",
                borderColor: 'none',
                backgroundColor: '#ECECEC',
                border: 'none',
                height: 50,
                borderRadius: 10,
            }}
            inputContainerStyle={{
                height: 0,
                backgroundColor: 'none',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',

            }}
        />
    )
}

export default SearchingBar;