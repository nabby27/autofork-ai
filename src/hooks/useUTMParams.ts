"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = 'autofork.utm_params'

export interface SourceUTMs {
    utm_source: string
    utm_medium: string
    utm_campaign: string
}

export interface ContextUTMs {
    utm_content: string
    utm_term: string
}

export interface UTMs extends SourceUTMs, ContextUTMs { }

export function useUTMParams(contextUTMs: ContextUTMs): Partial<UTMs> {
    const urlSourceUTMs = getSourceUTMsFromURL()
    if (urlSourceUTMs) {
        saveSourceUTMsToStorage(urlSourceUTMs)
        return mixUTMs(urlSourceUTMs, contextUTMs)
    }

    const storedSourceUTMs = getStoredSourceUTMs()
    if (storedSourceUTMs) {
        return mixUTMs(storedSourceUTMs, contextUTMs)
    }

    return contextUTMs
}

function getSourceUTMsFromURL(): SourceUTMs | null {
    if (typeof window === "undefined") return null

    const urlParams = new URLSearchParams(window.location.search)
    
    const sourceUTMs: SourceUTMs = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
    }
    
    const hasSourceUTM = Object.values(sourceUTMs).some(value => value !== '')
    if (!hasSourceUTM) {
        return null
    }
    
    return sourceUTMs
}

function getStoredSourceUTMs(): SourceUTMs | null {
    if (typeof window === "undefined") return null

    try {
        const stored = sessionStorage.getItem(STORAGE_KEY)
        return stored ? JSON.parse(stored) : null
    } catch {
        return null
    }
}

function saveSourceUTMsToStorage(sourceUTMs: SourceUTMs): void {
    if (typeof window === "undefined") return

    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(sourceUTMs))
    } catch {
        console.error('Error saving source UTM params to session storage')
    }
}

function mixUTMs(sourceUTMs: SourceUTMs, contextUTMs: ContextUTMs): UTMs {
    return {
        ...sourceUTMs,
        ...contextUTMs
    }
}