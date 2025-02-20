import { Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Asset {
    @Prop()
    _id: string;

    name: string;

    symbol: string;

    image: string;

    price: number;

    createAt!: Date;
    upadateAt!: Date;
}
