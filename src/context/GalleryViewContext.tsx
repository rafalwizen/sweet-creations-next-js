"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type MobileColumns = 1 | 2;

type GalleryViewContextValue = {
    mobileColumns: MobileColumns;
    toggleMobileColumns: () => void;
};

const GalleryViewContext = createContext<GalleryViewContextValue | undefined>(undefined);

export const GalleryViewProvider = ({ children }: { children: ReactNode }) => {
    // Default to 2 columns on mobile. Kept session-only (no localStorage) so the
    // server and client render identically -> no hydration mismatch.
    const [mobileColumns, setMobileColumns] = useState<MobileColumns>(2);

    const toggleMobileColumns = () =>
        setMobileColumns((prev) => (prev === 2 ? 1 : 2));

    return (
        <GalleryViewContext.Provider value={{ mobileColumns, toggleMobileColumns }}>
            {children}
        </GalleryViewContext.Provider>
    );
};

export const useGalleryView = () => {
    const ctx = useContext(GalleryViewContext);
    if (!ctx) {
        throw new Error("useGalleryView must be used within GalleryViewProvider");
    }
    return ctx;
};
