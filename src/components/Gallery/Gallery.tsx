import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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

export default function Gallery({
  images,
}: GalleryProps) {
  const theme = useTheme();
  const isXs = useMediaQuery(
    theme.breakpoints.up("xs")
  );
  const isSm = useMediaQuery(
    theme.breakpoints.up("sm")
  );
  const isMd = useMediaQuery(
    theme.breakpoints.up("md")
  );
  const isLg = useMediaQuery(
    theme.breakpoints.up("lg")
  );
  const isXl = useMediaQuery(
    theme.breakpoints.up("xl")
  );
  let height = 121;
  let columns = 1;
  if (isXl) {
    columns = 6;
    height = 120;
  } else if (isLg) {
    columns = 6;
    height = 150;
  } else if (isMd) {
    columns = 2;
    height = 180;
  } else if (isSm) {
    columns = 1;
  } else {
    height = 220;
    columns = 1; // For xs
  }

  console.log("Columns:", columns);
  return (
    <>
      {images && images.length > 0 ? (
        <ImageList
          variant="quilted"
          rowHeight={height}
          gap={16}
          cols={columns}
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          {images.map((item) => (
            <ImageListItem
              key={item.img}
              cols={
                Math.min(item.cols, columns) || 1
              }
              rows={item.rows || 1}
            >
              <img
                {...srcset(
                  item.img,
                  height,
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
