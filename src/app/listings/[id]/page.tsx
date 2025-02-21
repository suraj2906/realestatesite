import { notFound } from 'next/navigation'
import axios from 'axios'
import PropertyCarousel from '@/components/PropertyCarousel'

async function getProperty(id: string) {
  try {
    const { data } = await axios.get(`https://realestatesite.vercel.app//api/properties/${id}`)
    console.log('hello')
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    const property = await getProperty(id)
  
    if (!property) {
      notFound()
    }

    // Sample images array - replace with your actual property images
    const images = property.imageUrl
    console.log(property.imageUrl)

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <PropertyCarousel images={images} title={property.title} />

                {/* Property Details */}
                <div className="p-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                            <p className="text-xl text-gray-600 mb-4">{property.location}</p>
                        </div>
                        <div className="text-3xl font-bold text-gold-500">
                            ₹{property.price.toLocaleString('en-IN')}
                        </div>
                    </div>

                    <div className="flex gap-6 my-6">
                        <div className="flex items-center gap-2 text-gray-600">
                            <i className="fas fa-bed text-xl"></i>
                            <span>{property.bedrooms} Bedrooms</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <i className="fas fa-bath text-xl"></i>
                            <span>{property.bathrooms} Bathrooms</span>
                        </div>
                        <div className={`px-4 py-1 rounded-full text-white ${
                            property.status.toLowerCase() === 'for sale' ? 'bg-gold-500' :
                            property.status.toLowerCase() === 'for rent' ? 'bg-emerald-600' :
                            property.status.toLowerCase() === 'sold' ? 'bg-red-600' :
                            'bg-purple-600'
                        }`}>
                            {property.status}
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-black">Description</h2>
                        <p className="text-gray-600 leading-relaxed">{property.description}</p>
                    </div>

                    {/* Additional Features Section */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-black">Features</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {property.features?.map((feature: string, index: number) => (
                                <div key={index} className="flex items-center gap-2 text-gray-600">
                                    <i className="fas fa-check text-gold-500"></i>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 