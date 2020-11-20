import React, { useContext } from "react"
import Image from "../components/Image"
import { myContext } from "../customContext"

function Photos() {
    //get all photos array from context - destructure an obj!!
    const {allPhotos} = useContext(myContext)

    //map over it, creating <Image /> elements of the component
    const photos = allPhotos.map(photo => <Image key={photo.id} photo={photo} />)
    // const photos = allPhotos.map(photo => console.log({photo}))
    
    return (
        <main className="photos">
            
            {photos}
        </main>
    )
}

export default Photos