"use client";

import { useState, useEffect } from 'react';

import { CreatePost } from '@/components/modals/create-post';
import { CreateGroup } from '@/components/modals/create-group';

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null;
    
    return (
        <>
            <CreatePost />
            <CreateGroup />
        </>
    )
}