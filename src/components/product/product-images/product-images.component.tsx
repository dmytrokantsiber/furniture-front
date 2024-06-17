import { FC, memo, useCallback, useState, useRef } from "react";

import ImageViewer from "react-simple-image-viewer";
import { useDraggable } from "react-use-draggable-scroll";

import * as Styles from "./styles";

interface IProductImagesProps {
  images: string[];
}

const ProductImages: FC<IProductImagesProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <Styles.ProductImagesWrapper>
      <Styles.MainImage src={images[0]} onClick={() => openImageViewer(0)} />

      <Styles.ImagesContainer ref={ref} {...events}>
        {images.map((src, index) => {
          if (index > 0) {
            return (
              <Styles.SecondaryImage
                src={src}
                onClick={() => openImageViewer(index)}
                key={index}
                alt=""
              />
            );
          }
          return null;
        })}
      </Styles.ImagesContainer>

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll
          closeOnClickOutside
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        />
      )}
    </Styles.ProductImagesWrapper>
  );
};

export default memo(ProductImages);
