import React,{component}from'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import myHeader from '../components/MyHeader';
export default class BookRequestScreen extends Component{
    constructor (){
        super ();
        this.state={
            userId:firebase.auth().currentUser.email,
            bookName:'',
            reasonToRequest:'',
        }
    }
    createUniqueId(){
        return Map.random().toString(36).subString(7)
    }
   addRequest=(bookName,reasonToRequest)=>{
       var userId=this.state.userId
       var randomRequestId=this.createUniqueId()
       db.collection('requested_book').add({
           "user_Id":userId,
           "book_name":bookName,
           "reason_to_request":reasonToRequest,
           "request_id":randomRequestId
        })
        this.setState({
            bookName:'',
            reasonToRequest:'',

        })
        return alert.Alert{'returnBookSuccesfully'}
   }
   render(){
       return (
           <View style={{flex:1}}>
           <MyHeader title = "requestBook"/>
           <KeyboardAvoidingView styles={ style.keyboardStyle}>
               <TextInput style= {style.fromTextInput}
                   placeholder="entire bookName"
                   onChangeText={(text)=>{
                       this.setState({
                           bookName:'text'
                       })
                   }
                   }
                   value={this.state.bookName}/>
                style ={[styles.formTextInput,{height:300}]}
                 multiline 
                 numberOfLines ={8}
                 placeholder={"why do you need the book"}
                 onChangeText={(text)=>{
                     this.setState({
                      reasonToRequest:text
                     })
                 this.setState({
                 bookName:'',
                 reasonToRequest:''
                 )  
                 return Alert.alert("book requested succesfully")
                 }
                 return (
                     <View style={{flex:1}}>
                    <myHeader title={requestBook}/>
                    <KeyboardAvoidingView style={style.keyboardStyle}>
                    <TextInput style={styles.fromTextInput}>
                        
                     </TextInput>   
                 )
                <KeyboardAvoidingView value={this.state.bookName}/>
           </KeyboardAvoidingView>
       )
    }
};