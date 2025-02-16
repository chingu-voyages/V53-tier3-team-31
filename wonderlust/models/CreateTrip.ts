import  { model, models, Schema, Types } from 'mongoose';

interface ITrip extends Document {
  tripName: string;
  budget: number;
  travellers: number;
  startDay: Date;
  endDay: Date;
  destination: string;
  user: string
}

const TripSchema = new Schema({
 tripname: {
  type: String,
  required: [true, 'Username is required'],
  minLength: [3, 'tripname must be at least 3 characters long'],
 },
 destination: {
  type: Array,
  required: [true, 'destination is required'],

  minLength: [3, 'destination must be at least 3 characters long'],
 },
 budget: {
  type: String,
  min: 3,
 },
 
 travellers: {
  type: String,
  required:true,
  min: 1,
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
 user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
 
}, {
    timestamps: true,
}
)

const Trip = models.Trip || model('Trip', TripSchema);

export default Trip

