import React from 'react';
import '../../SASS/styles.scss';
import Gallery from 'react-grid-gallery';
import img1 from '../../assets/img_project_gallery_1.png';
import img2 from '../../assets/img_project_gallery_2.png';
import img3 from '../../assets/img_project_gallery_3.png';
import img4 from '../../assets/img_project_gallery_4.png';
import img5 from '../../assets/img_project_gallery_5.png';
import img6 from '../../assets/img_project_gallery_6.png';
import useMediaQuery from '../MediaQuery';

const GalleryPhotos = () => {

    const isDesktop = useMediaQuery('(min-width: 850px)');

    const IMAGES =
        [{
            src: img1,
            thumbnail: img1,
            thumbnailWidth: 600,
            thumbnailHeight: 300,
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam aliquid ducimus placeat rem. Officia placeat unde, earum molestias obcaecati velit soluta accusamus quo nostrum, tempore neque eius culpa doloribus?"
        },
        {
            src:img2,
            thumbnail: img2,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam aliquid ducimus placeat rem. Officia placeat unde, earum molestias obcaecati velit soluta accusamus quo nostrum, tempore neque eius culpa doloribus?"
        },
        {
            src:img3,
            thumbnail: img3,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam aliquid ducimus placeat rem. Officia placeat unde, earum molestias obcaecati velit soluta accusamus quo nostrum, tempore neque eius culpa doloribus?"
        },
        {
            src:img4,
            thumbnail: img4,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam aliquid ducimus placeat rem. Officia placeat unde, earum molestias obcaecati velit soluta accusamus quo nostrum, tempore neque eius culpa doloribus?"
        },
        {
            src: img5,
            thumbnail: img5,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam aliquid ducimus placeat rem. Officia placeat unde, earum molestias obcaecati velit soluta accusamus quo nostrum, tempore neque eius culpa doloribus?"
        },
        {
            src:img6,
            thumbnail: img6,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam aliquid ducimus placeat rem. Officia placeat unde, earum molestias obcaecati velit soluta accusamus quo nostrum, tempore neque eius culpa doloribus?"
        }]

        const IMAGESRESPONSIVE =
        [{
            src: img1,
            thumbnail: img1,
            thumbnailWidth: 20,
            thumbnailHeight: 10,
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam aliquid ducimus placeat rem. Officia placeat unde, earum molestias obcaecati velit soluta accusamus quo nostrum, tempore neque eius culpa doloribus?"
        },
        {
            src:img2,
            thumbnail: img2,
            thumbnailWidth: 10,
            thumbnailHeight: 10,
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam aliquid ducimus placeat rem. Officia placeat unde, earum molestias obcaecati velit soluta accusamus quo nostrum, tempore neque eius culpa doloribus?"
        },
        {
            src:img3,
            thumbnail: img3,
            thumbnailWidth: 10,
            thumbnailHeight: 10,
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam aliquid ducimus placeat rem. Officia placeat unde, earum molestias obcaecati velit soluta accusamus quo nostrum, tempore neque eius culpa doloribus?"
        },
        {
            src:img4,
            thumbnail: img4,
            thumbnailWidth: 10,
            thumbnailHeight: 10,
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam aliquid ducimus placeat rem. Officia placeat unde, earum molestias obcaecati velit soluta accusamus quo nostrum, tempore neque eius culpa doloribus?"
        },
        {
            src: img5,
            thumbnail: img5,
            thumbnailWidth: 10,
            thumbnailHeight: 10,
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam aliquid ducimus placeat rem. Officia placeat unde, earum molestias obcaecati velit soluta accusamus quo nostrum, tempore neque eius culpa doloribus?"
        },
        {
            src:img6,
            thumbnail: img6,
            thumbnailWidth: 20,
            thumbnailHeight: 10,
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam aliquid ducimus placeat rem. Officia placeat unde, earum molestias obcaecati velit soluta accusamus quo nostrum, tempore neque eius culpa doloribus?"
        }]

    return ( 
    <>
        {
            isDesktop ? 
        ( 
        <div className="gallery">
            <h5>Galería de imágenes</h5>
            <Gallery 
            images={IMAGES}
            rowHeight={300}
            maxRows={2}
            margin={2.5}
            />
        </div>):(
        <div className="gallery">
            <h5>Galería de imágenes</h5>
            <Gallery 
            images={IMAGESRESPONSIVE}
            rowHeight={180}
            maxRows={4}
            />
        </div>
        )
        } 
    </>
    );
}

export default GalleryPhotos;

