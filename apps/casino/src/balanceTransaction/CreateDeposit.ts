import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class CreateDeposit {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    playerId!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    cashierId!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    productId!: string;
}

export { CreateDeposit as CreateDeposit };