const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    geo: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            default: 'Point',
        },
        coordinates: [
            { type: Number },
        ],
    },
}, { timestamps: true });

productSchema.index({ geo: '2dsphere', name: 'text' });
