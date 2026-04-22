export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    rating: number;
    sold: number;
    location: string;
    originalPrice?: number;
    discount?: number;
    isAd?: boolean;
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Automatic Pet Feeder - Smart Food Dispenser',
        price: 450000,
        originalPrice: 650000,
        discount: 31,
        image: '/products/automatic pet feeder.jpeg',
        category: 'Peralatan',
        rating: 4.8,
        sold: 1200,
        location: 'Jakarta Barat',
        isAd: true
    },
    {
        id: '2',
        name: 'Tas Kunci / Cat Bag Portable Travel',
        price: 185000,
        image: '/products/cat bag.jpeg',
        category: 'Aksesori',
        rating: 4.7,
        sold: 540,
        location: 'Bandung'
    },
    {
        id: '3',
        name: 'Mainan Kucing Elektrik - Rolling Ball',
        price: 89000,
        originalPrice: 150000,
        discount: 40,
        image: '/products/cat electric ball.jpeg',
        category: 'Mainan Kucing',
        rating: 4.9,
        sold: 2100,
        location: 'Surabaya'
    },
    {
        id: '4',
        name: 'Paket Mainan Kucing (Bola & Stick)',
        price: 45000,
        image: '/products/cat toys ball.jpeg',
        category: 'Mainan Kucing',
        rating: 4.6,
        sold: 320,
        location: 'Jakarta Selatan'
    },
    {
        id: '5',
        name: 'Mainan Kucing Interaktif',
        price: 35000,
        discount: 10,
        image: '/products/cat toys.jpeg',
        category: 'Mainan Kucing',
        rating: 4.5,
        sold: 150,
        location: 'Medan'
    },
    {
        id: '6',
        name: 'Filter Kotoran Kucing / Litter Mat',
        price: 75000,
        image: '/products/filter kotoran kucing.jpeg',
        category: 'Peralatan',
        rating: 4.8,
        sold: 890,
        location: 'Tangerang'
    },
    {
        id: '7',
        name: 'Kalung Kucing Lucu Lonceng',
        price: 15000,
        image: '/products/kalung kucing.jpeg',
        category: 'Aksesori',
        rating: 4.9,
        sold: 5000,
        location: 'Jakarta Barat'
    },
    {
        id: '8',
        name: 'Kandang Kucing Tingkat (Bulu Halus)',
        price: 1200000,
        image: '/products/kandang bulu.jpeg',
        category: 'Peralatan',
        rating: 5.0,
        sold: 45,
        location: 'Depok'
    },
    {
        id: '9',
        name: 'Kandang Kucing Besi Lipat',
        price: 350000,
        image: '/products/kandang jaring.jpeg',
        category: 'Peralatan',
        rating: 4.7,
        sold: 330,
        location: 'Bekasi'
    },
    {
        id: '10',
        name: 'Oat Choize - Susu Kucing Sehat',
        price: 55000,
        image: '/products/oat choize.jpeg',
        category: 'Makanan Kucing',
        rating: 4.9,
        sold: 1500,
        location: 'Jakarta Timur'
    },
    {
        id: '11',
        name: 'Pasir Kucing Wangi 10L',
        price: 65000,
        image: '/products/pasir kucing.jpeg',
        category: 'Peralatan',
        rating: 4.8,
        sold: 2300,
        location: 'Bogor'
    },
    {
        id: '12',
        name: 'Pasir Kucing Premium 5L',
        price: 45000,
        image: '/products/pasir kucing2 .jpeg',
        category: 'Peralatan',
        rating: 4.7,
        sold: 1100,
        location: 'Bogor'
    },
    {
        id: '13',
        name: 'Wadah Makan Kucing Anti-Semut',
        price: 25000,
        image: '/products/wadah makan .jpeg',
        category: 'Peralatan',
        rating: 4.6,
        sold: 800,
        location: 'Jakarta Pusat'
    },
    {
        id: '14',
        name: 'Whiskas Makanan Kucing Basah',
        price: 8500,
        image: '/products/whiskas.jpeg',
        category: 'Makanan Kucing',
        rating: 4.9,
        sold: 10000,
        location: 'Tangerang Selatan',
        isAd: true
    }
];
