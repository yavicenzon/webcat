import React from 'react';
import { Star, MapPin } from 'lucide-react';

interface ProductCardProps {
    id: string;
    image: string;
    title: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    sold: number; // e.g., 750 (count)
    location: string;
    storeName?: string;
    isAd?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    price,
    originalPrice,
    discount,
    rating,
    sold,
    location,
    storeName,
    isAd
}) => {
    const formatPrice = (p: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(p);
    };

    const formatSold = (num: number) => {
        if (num >= 1000) return `${(num / 1000).toFixed(1)}rb+`;
        return `${num}+`;
    };

    return (
        <div className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {isAd && (
                    <span className="absolute top-2 right-2 bg-black/20 text-white text-[10px] px-1 rounded backdrop-blur-sm">
                        Ad
                    </span>
                )}
                {discount && (
                    <span className="absolute top-2 left-2 bg-red-100 text-red-600 font-bold text-xs px-1.5 py-0.5 rounded">
                        {discount}%
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-3 flex flex-col flex-grow">
                <h3 className="text-sm text-gray-700 line-clamp-2 mb-1 leading-snug min-h-[40px]" title={title}>
                    {title}
                </h3>

                <div className="mt-auto">
                    <div className="font-bold text-base text-gray-900">
                        {formatPrice(price)}
                    </div>

                    {originalPrice && (
                        <div className="flex items-center gap-1 mt-0.5">
                            <span className="text-xs text-gray-400 line-through decoration-gray-400">
                                {formatPrice(originalPrice)}
                            </span>
                            {discount && (
                                <span className="text-xs font-bold text-red-500">
                                    {discount}%
                                </span>
                            )}
                        </div>
                    )}

                    {storeName && (
                        <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                            {isAd && <span className="bg-purple-100 text-purple-700 px-1 rounded-[2px] font-bold text-[10px]">Mall</span>}
                            <span className="truncate max-w-[120px]">{storeName}</span>
                        </div>
                    )}

                    <div className="flex items-center gap-1 mt-1.5 text-xs text-gray-500">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-gray-700">{rating}</span>
                        <span className="text-gray-300">•</span>
                        <span>{formatSold(sold)} terjual</span>
                    </div>

                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
