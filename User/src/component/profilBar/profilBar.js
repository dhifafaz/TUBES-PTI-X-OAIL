import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import styles from './styleProfilBar';
import { Avatar } from "@react-native-material/core";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDataUser } from '../../redux/action';
import { useSelector, useDispatch } from 'react-redux';

const ProfilBar = () => {
    const { data_user } = useSelector(state => state.userReducer);
    const [id, setId] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        getData()
        getDataUSER()

    })

    const getDataUSER = async () => {
        let ip = 'http://192.168.43.140:8000/sirius_api/lihat_users/' + id + '/'
        //console.log(ip)
        const result = await fetch(ip, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        //const json = await result.json()
        dispatch(getDataUser(await result.json()))
        //console.log(data_user)
        //console.log(data_user.profil_pic)
    }

    const getData = () => {
        try {
            AsyncStorage.getItem('token')
                .then(value => {
                    if (value != null) {
                        let user = JSON.parse(value)
                        setId(user.id)
                        //console.log(id)
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.viewAvatar}>
            <View>
                <Avatar size={60} image={{ uri: data_user.profile_pic }} />
            </View>
            <View style={styles.textViewAvatar}>
                <Text style={styles.textAvatar}>{data_user.nama}</Text>
                <Text style={styles.textAvatar}>{data_user.role}</Text>
            </View>

        </View>
    )
}

export default ProfilBar;