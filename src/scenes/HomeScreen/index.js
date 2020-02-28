import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../../components/Header';
import { fetchJsonGET, fetchJsonPOST } from '../../services/FetchData'
import BaseComponent from '../../BaseComponent';
var constants = require('../../config/Constants')
var colorConstants = require('../../config/colorConstant')

export default class HomeScreen extends BaseComponent {
    constructor(props) {
        super(props)
        this.state = {
            employeeList: [],
            showFlatList: false,
            loadingString: 'Fetching...'
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    async fetchData() {
        let responseData = await fetchJsonGET(constants.API_URL);
        if (this.isValidString(responseData)) {
            if (responseData.status === "success") {
                if (this.isValidArray(responseData.data)) {
                    this.setState({
                        employeeList: responseData.data
                    })
                }
            }
        }
        return responseData;
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title={'Home Screen'} />
                <View style={styles.viewContainer}>
                    {this.renderFlatList()}
                </View>
            </View>
        );
    }

    renderFlatList() {
        return (
            <View>
                <FlatList
                    extraData={this.state}
                    ref={ref => (this.listView = ref)}
                    renderItem={data => this.renderItem(data.item)}
                    data={this.state.employeeList}
                    ListHeaderComponent={() => this.renderHeaderView()}
                    ItemSeparatorComponent={(sectionId, rowId) => (
                        <View key={rowId} style={{
                            flex: 1,
                            height: StyleSheet.hairlineWidth,
                            backgroundColor: colorConstants.GRAY_MEDIUM_COLOR,
                        }} />
                    )}
                />
            </View>
        )
    }

    renderHeaderView() {
        return (
            <View style={{ padding: 10, flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: colorConstants.TBC_COLOR }}>{'Employee List'}</Text>
            </View>
        )
    }

    renderItem(employeeItem) {
        return (
            <View style={{ flex: 1, backgroundColor: colorConstants.WHITE_COLOR, marginBottom: 10 }}>
                <View style={{
                    flex: 1,
                    height: StyleSheet.hairlineWidth,
                    backgroundColor: colorConstants.GRAY_MEDIUM_COLOR,
                }} />
                <View style={{ flex: 1, padding: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{width: 60}}>{'Name: '}</Text>
                        <Text style={{}}>{employeeItem.employee_name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 3 }}>
                        <Text style={{width: 60}}>{'Age: '}</Text>
                        <Text style={{}}>{employeeItem.employee_age}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorConstants.GRAY_LIGHT_COLOR,
    },
    viewContainer: {
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'black',
    },
});

