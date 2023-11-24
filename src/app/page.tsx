
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import Image from 'next/image'
import aaa from "../../public/jpeg/V1.4_アクソメ.jpg"

export default function Home() {

  const imageListData = [
    // ＮＥＸＴＪＳの写真インポートはpublic配下から直接呼び出される
    {img:'/jpeg/V1.0_アクソメ.jpg',title:"v1001"},
    {img:"/jpeg/V1.4_アクソメ.jpg",title:"v1001"},
    {img:'/jpeg/V2.0_アクソメ.jpg',title:"v1001"},
    {img:'/jpeg/V3.0_アクソメ.jpg',title:"v1001"},
    {img:'/jpeg/v1.2_unit.jpg',title:"v1001"},
    // {img:'/jpeg/V1.0_アクソメ.jpg',title:"v1001"},
    // {img:'/jpeg/V1.0_アクソメ.jpg',title:"v1001"},
    // {img:'/jpeg/V1.0_アクソメ.jpg',title:"v1001"},
    // {img:'/jpeg/V1.0_アクソメ.jpg',title:"v1001"},
    // {img:'/jpeg/V1.0_アクソメ.jpg',title:"v1001"},
    // {img:'/jpeg/V1.0_アクソメ.jpg',title:"v1001"},
    // {img:'/jpeg/V1.0_アクソメ.jpg',title:"v1001"},
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <Box>
        <Typography>おいしいごはん</Typography>
        <ImageList variant="masonry" cols={3} gap={8}>
        {imageListData.map((item) => (
          <ImageListItem >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
   

        </ImageList>
      </Box>

 

    </main>
  )
}
