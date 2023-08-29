import { Static, Type } from "@sinclair/typebox";


export const ImageUploadPayload = Type.Object({
    sno:Type.Object({
        value:Type.String()
    }),
    name:Type.Object({
        value:Type.String()
    }),
    url:Type.Object({
        value:Type.String()
    }),
    image:Type.Object({
        filename : Type.Any(),
        _buf: Type.Any(),
    })
    
})

export type ImageUploadPayloadType = Static<typeof ImageUploadPayload>