import React from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';

export const Home = () => {
    
    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db , "conversations"))
        querySnapshot.forEach((doc) => {
            console.log(doc._id , "=>" , doc.data())
        })
    } 
    
    return (
        <>
            <button onClick={fetchData}>Fetch Data</button>
        </>
    );
};

