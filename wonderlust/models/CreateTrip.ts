import { model, models, Schema } from 'mongoose';

interface ITrip extends Document {
  tripName: string;
  budget: number;
  travellers: number;
  startDay: Date;
  endDay: Date;
  destination: string;
}

const TripSchema = new Schema({
 tripname: {
  type: String,
  required: [true, 'Username is required'],
  trim: true,
  minLength: [3, 'tripname must be at least 3 characters long'],
 },
 destination: {
  type: String,
  required: [true, 'destination is required'],
  trim: true,
  minLength: [3, 'destination must be at least 3 characters long'],
 },
 Budget: {
  type: Number,
  min: 3,
 },
 startDay: {
  type: Date,
  required: true,
  default: Date.now
 },
 endDay: { 
    type: Date, 
    required: true, 
    validate: {
      validator: function (this: ITrip, value: Date) {
        return value > this.startDay; 
      },
      message: 'End day must be at least 1 day after start day',
    }
 },
 Travellers: {
  type: Number,
  min: 1,
 },
}
)

const CreateTrip = models.CreateTrip || model('Trip', TripSchema);

export default CreateTrip