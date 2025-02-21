import mongoose, { Schema, model, models } from 'mongoose';

export interface IProperty {
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  status: 'For Sale' | 'For Rent' | 'Sold' | 'Rented';
  imageUrl: string[];
  createdAt: Date;
}

const PropertySchema = new Schema<IProperty>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['For Sale', 'For Rent', 'Sold', 'Rented'],
    default: 'For Sale'
  },
  imageUrl: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Property = models.Property || model<IProperty>('Property', PropertySchema);

export default Property; 