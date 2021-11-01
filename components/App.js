import React, { useState } from 'react';
import CounterList from './CounterList';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput} from 'react-native';
import PropTypes from 'prop-types';

const App = ({counter, handleAddCounter, handleRemoveCounter, handleIncrement, handleDecrement}) => {
    const [content, setContent] = useState('')

    const contentHandler = newContent => {
        setContent(newContent)
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <TextInput
                style={styles.textInput}
                placeholder={'Add a content'}
                placeholderTextColor={'grey'}
                onChangeText={contentHandler}
                value={content}
                autoCorrect={false}
                />
            </View>
            <View style={styles.counterAddRemoveContainer}>
                <TouchableOpacity
                    style={styles.counterAddRemoveButton}
                    onPress={() => handleAddCounter(content)}>
                    <Text>
                        Add Counter
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.counterAddRemoveButton}
                    onPress={handleRemoveCounter}>
                    <Text>
                        Remove Counter
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
                <CounterList
                    counter={counter}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                />
            </View>
        </ScrollView>
    );
};

App.propTypes = {
    counter: PropTypes.arrayOf(PropTypes.shape({
        counterNum : PropTypes.number,
    })),
    handleIncrement : PropTypes.func,
    handleDecrement : PropTypes.func,
    handleAddCounter : PropTypes.func,
    handleRemoveCounter : PropTypes.func,
};

App.defaultProps = {
    counter : [],
    handleIncrement : () => console.warn('handleIncrement not defined'),
    handleDecrement : () => console.warn('handleDecrement not defined'),
    handleAddCounter : () => console.warn('handleAddCounter not defiend'),
    handleRemoveCounter : () => console.warn('handleRemoveCounter not defiend'),
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#F6F6F6',
      paddingTop: '15%',
      paddingBottom : '15%',
    },
    textInput : {
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 10
    },
    counterAddRemoveContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    counterAddRemoveButton: {
        margin: 10,
        padding: 10,
        flex: 1,
        backgroundColor: '#8041D9',
    },
});

export default App;