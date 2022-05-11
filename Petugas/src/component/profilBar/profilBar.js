import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import styles from './styleProfilBar';
import { Avatar } from "@react-native-material/core";
import { useSelector, useDispatch } from 'react-redux';
import { getDataUser, getUserBanget } from '../../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfilBar = () => {

    const { userBanget } = useSelector(state => state.userReducer);
    const [id, setId] = useState('')
    const [isStop, setIsStope] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        getData()
        getDataUSER()
    }, [])

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
                        // setId(user.id)
                        dispatch(getUserBanget(user.id))
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
                <Avatar size={60} image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
            </View>
            <View style={styles.textViewAvatar}>
                <Text style={styles.textAvatar}>{userBanget.nama}</Text>
                <Text style={styles.textAvatar}>{userBanget.role}</Text>
            </View>

        </View>
    )
}

export default ProfilBar;