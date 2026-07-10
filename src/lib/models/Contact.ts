import mongoose, { Schema, models } from "mongoose";

export interface IContact {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    service: { type: String, required: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export const Contact =
  models.Contact || mongoose.model<IContact>("Contact", ContactSchema);
