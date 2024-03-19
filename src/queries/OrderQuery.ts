
const mongoose = require('mongoose');

export const getOrderQuery = (id) =>{
    const objectId = new mongoose.Types.ObjectId(id); 
    return [
        {
            $match: { '_id': objectId }
        },
        {
          $lookup: {
            from: 'baggages', 
            localField: '_id', 
            foreignField: 'orderId', 
            as: 'baggage' 
          }
        },
        {
          $lookup: {
            from: 'seats',
            localField: '_id',
            foreignField: 'orderId',
            as: 'carSeats'
          }
        },
        {
          $lookup: {
            from: 'sports',
            localField: '_id',
            foreignField: 'orderId',
            as: 'sport'
          }
        },
        {
          $lookup: {
            from: 'pets',
            localField: '_id',
            foreignField: 'orderId',
            as: 'pets'
          }
        },
        {
            $lookup: {
                from: 'orders', 
                localField: '_id',
                foreignField: 'orderId',
                as: 'returnOrder'
            }
        },
      ]
      
} 