import React, { Component } from 'react'

export class ImagesList extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const imagesList = [1, 2, 3, 4, 5, 6, 7, 8]
        const imagesRows = []
        imagesList.forEach(image => {
            imagesRows.push(<ImageRow key={image} image={image} />)
        });
        return <div className='images-list flex wrap center'>
            {imagesRows}
        </div>
    }
}

const ImageRow = React.memo(function ({ image }) {
    return <div className='images-list-image-item'>

    </div>
})