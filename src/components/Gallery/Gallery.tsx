import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

interface Image {
  img: string;
  title: string;
  rows: number;
  cols: number;
}

interface GalleryProps {
  images: Image[];
}

function srcset(
  image: string,
  size: number,
  rows = 1,
  cols = 1
) {
  return {
    src: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <>
      {images && images.length > 0 ? (
        <ImageList
          sx={{ width: "100%", height: "100%" }}
          variant="quilted"
          cols={6}
          rowHeight={121}
          gap={16}
          
        >
          {images.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(
                  item.img,
                  121,
                  item.rows,
                  item.cols
                )}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <div>לא נמצאו תמונות</div>
      )}
    </>
  );
}
