import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import photo1 from "../../../images/grid/photo1.jpeg";
import photo2 from "../../../images/grid/photo2.jpeg";
import photo4 from "../../../images/grid/photo4.jpeg";
import photo6 from "../../../images/grid/photo6.jpeg";
import photo7 from "../../../images/grid/photo7.jpeg";
import photo8 from "../../../images/grid/photo8.jpeg";
import photo9 from "../../../images/grid/photo9.jpeg";
import photo10 from "../../../images/grid/photo10.jpeg";
import photo11 from "../../../images/grid/photo11.jpeg";
import photo12 from "../../../images/grid/photo12.jpeg";
import myGallery from "../../../images/grid/cocosign.png";

interface GalleryItem {
    id: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imageUrl: any;
}

const galleryItems: GalleryItem[] = [
    { id: 1, imageUrl: photo9 },
    { id: 2, imageUrl: photo8 },
    { id: 3, imageUrl: photo4 },
    { id: 4, imageUrl: photo7 },
    { id: 5, imageUrl: photo1 },
    { id: 6, imageUrl: photo11 },
    { id: 9, imageUrl: photo2 },
    { id: 10, imageUrl: photo12 },
    { id: 8, imageUrl: photo10 },
    { id: 7, imageUrl: photo6 },
];

const Gallery: React.FC<{ items: GalleryItem[] }> = ({ items }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            className="columns-1 sm:columns-2 md:columns-3 gap-3 space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {items.map((item) => (
                <motion.div
                    key={item.id}
                    className="break-inside-avoid rounded-lg overflow-hidden shadow-sm mb-3 relative"
                    whileHover={{ scale: 1.02 }}
                >
                    {loading && (
                        <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg" />
                    )}
                    <Image
                        src={item.imageUrl}
                        alt={`Gallery item ${item.id}`}
                        className="h-auto object-cover rounded-lg"
                        loading="lazy"
                    />
                </motion.div>
            ))}
        </motion.div>
    );
};

const PhotosGrid: React.FC = () => {
    return (
        <section>
            <Image draggable={false} width={170} height={170} src={myGallery} alt='my-gal' />
            <motion.div className="pb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <motion.div className="max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <Gallery items={galleryItems} />
                </motion.div>
            </motion.div>
        </section>

    );
};

export default PhotosGrid;